import { j as json } from "../../../chunks/index.js";
import "net";
import "ping";
import { i as instance, b as GetMinuteStartNowTimestampUTC, T as TIMEOUT, e as Wait, U as UP, D as DOWN, f as DEGRADED, g as DEFAULT_STATUS, M as MANUAL } from "../../../chunks/db.js";
import { N as Notification, S as Service } from "../../../chunks/notif.js";
import moment from "moment";
import { r as GetAllSiteData, K as GetAllTriggers, L as InsertNewAlert, C as CreateIncident, c as AddIncidentComment, A as AddIncidentMonitor, M as GetIncidentByIDDashboard, I as InsertMonitoringData, N as GetMonitorsParsed } from "../../../chunks/controller.js";
import Queue from "queue";
import dotenv from "dotenv";
import "path";
import "mustache";
import "../../../chunks/anywhere.js";
import "url";
import "fs";
import "resend";
import "nodemailer";
import "dns2";
import "dgram";
const TRIGGERED = "TRIGGERED";
const RESOLVED = "RESOLVED";
const CLOSED = "CLOSED";
async function createJSONCommonAlert(monitor, config, alert, severity) {
  let siteData = await GetAllSiteData();
  let siteURL = siteData.siteURL;
  let id = monitor.tag + "-" + alert.id;
  let alert_name = monitor.name + " " + alert.monitor_status;
  let source = "Kener";
  let timestamp = (/* @__PURE__ */ new Date()).toISOString();
  let description = config.description || "Monitor has failed";
  let status = alert.alert_status;
  let details = {
    metric: monitor.name,
    current_value: alert.health_checks,
    threshold: config.failureThreshold
  };
  let actions = [
    {
      text: "View Monitor",
      url: siteURL + "?monitor=" + monitor.tag
    }
  ];
  return {
    id,
    alert_name,
    severity,
    status,
    source,
    timestamp,
    description,
    details,
    actions
  };
}
async function createNewIncident(monitor, alert, commonData) {
  let startDateTime = moment(alert.created_at).unix();
  let payload = {
    start_date_time: startDateTime,
    title: commonData.alert_name,
    incident_source: "ALERT"
  };
  let update = commonData.description;
  update = `#### ${update}
---
**Monitor Name:** ${monitor.name}

**Incident Status:** ${commonData.status}

**Severity:** ${commonData.severity}

**Monitor Status:** ${alert.monitor_status}

**Monitor Health Checks:** ${alert.health_checks}

**Monitor Failure Threshold:** ${commonData.details.threshold}

**Visit:** [${commonData.actions[0].url}](${commonData.actions[0].url})
`;
  let newIncident = await CreateIncident(payload);
  await AddIncidentComment(newIncident.incident_id, update, "INVESTIGATING", startDateTime);
  await AddIncidentMonitor(newIncident.incident_id, monitor.tag, alert.monitor_status);
  return newIncident;
}
async function closeIncident(alert, comment) {
  let incident = await GetIncidentByIDDashboard({
    incident_id: alert.incident_number
  });
  if (incident.status === CLOSED || incident.state === RESOLVED) {
    console.log("Incident is already resolved");
    return;
  }
  let incident_id = alert.incident_number;
  return await AddIncidentComment(incident_id, comment, RESOLVED, moment(alert.updated_at).unix());
}
function createClosureComment(alert, commonJSON) {
  let comment = "The incident has been auto resolved";
  let downtimeDuration = Math.round(moment(alert.updated_at).diff(moment(alert.created_at), "seconds") / 60);
  comment = comment + `, Total downtime: ` + downtimeDuration + ` minutes`;
  return comment;
}
async function alerting(m) {
  if (!m || !m.tag) {
    return;
  }
  let monitor = await instance.getMonitorByTag(m.tag);
  if (!monitor) {
    return;
  }
  let siteData = await GetAllSiteData();
  const triggers = await GetAllTriggers({
    status: "ACTIVE"
  });
  const triggerObj = {};
  if (!!monitor.down_trigger) {
    try {
      triggerObj.down_trigger = typeof monitor.down_trigger === "string" ? JSON.parse(monitor.down_trigger) : monitor.down_trigger;
    } catch (e) {
      console.error(`Invalid JSON in down_trigger for monitor ${monitor.tag}:`, e);
    }
  }
  if (!!monitor.degraded_trigger) {
    try {
      triggerObj.degraded_trigger = typeof monitor.degraded_trigger === "string" ? JSON.parse(monitor.degraded_trigger) : monitor.degraded_trigger;
    } catch (e) {
      console.error(`Invalid JSON in degraded_trigger for monitor ${monitor.tag}:`, e);
    }
  }
  for (const key in triggerObj) {
    if (Object.prototype.hasOwnProperty.call(triggerObj, key)) {
      const alertConfig = triggerObj[key];
      const monitor_status = alertConfig.trigger_type;
      const failureThreshold = alertConfig.failureThreshold;
      const successThreshold = alertConfig.successThreshold;
      const monitor_tag = monitor.tag;
      const alertingChannels = alertConfig.triggers;
      const createIncident = alertConfig.createIncident === "YES";
      const allMonitorClients = [];
      const sendTrigger = alertConfig.active;
      const severity = alertConfig.severity;
      if (!sendTrigger) {
        continue;
      }
      if (alertingChannels.length > 0) {
        for (let i = 0; i < alertingChannels.length; i++) {
          const triggerID = alertingChannels[i];
          const trigger = triggers.find((c) => c.id === triggerID);
          if (!trigger) {
            console.error(`Triggers ${triggerID} not found in server triggers for monitor ${monitor_tag}`);
            continue;
          }
          if (trigger.trigger_status !== "ACTIVE") {
            console.error(`Triggers ${triggerID} is not active`);
            continue;
          }
          const notificationClient = new Notification(trigger, siteData, monitor);
          allMonitorClients.push(notificationClient);
        }
      }
      let isAffected = await instance.consecutivelyStatusFor(monitor_tag, monitor_status, failureThreshold);
      let alertExists = await instance.alertExists(monitor_tag, monitor_status, TRIGGERED);
      let activeAlert = null;
      if (alertExists) {
        activeAlert = await instance.getActiveAlert(monitor_tag, monitor_status, TRIGGERED);
      }
      if (isAffected && !alertExists) {
        activeAlert = await InsertNewAlert({
          monitor_tag,
          monitor_status,
          alert_status: TRIGGERED,
          health_checks: failureThreshold
        });
        let commonJSON = await createJSONCommonAlert(monitor, alertConfig, activeAlert, severity);
        if (allMonitorClients.length > 0) {
          for (let i = 0; i < allMonitorClients.length; i++) {
            const client = allMonitorClients[i];
            client.send(commonJSON);
          }
        }
        if (createIncident) {
          let incident = await createNewIncident(monitor, activeAlert, commonJSON);
          if (!!incident) {
            await instance.addIncidentNumberToAlert(activeAlert.id, incident.incident_id);
          }
        }
      } else if (isAffected && alertExists) {
        await instance.incrementAlertHealthChecks(activeAlert.id);
      } else if (!isAffected && alertExists) {
        let isUp = await instance.consecutivelyStatusFor(monitor_tag, "UP", successThreshold);
        if (isUp) {
          await instance.updateAlertStatus(activeAlert.id, RESOLVED);
          activeAlert.alert_status = RESOLVED;
          let commonJSON = await createJSONCommonAlert(monitor, alertConfig, activeAlert, severity);
          if (allMonitorClients.length > 0) {
            for (let i = 0; i < allMonitorClients.length; i++) {
              const client = allMonitorClients[i];
              client.send(commonJSON);
            }
          }
          if (!!activeAlert.incident_number) {
            let comment = createClosureComment(activeAlert);
            try {
              await closeIncident(activeAlert, comment);
            } catch (error) {
              console.log(error);
            }
          }
        }
      }
    }
  }
}
dotenv.config();
const alertingQueue = new Queue({
  concurrency: 10,
  // Number of tasks that can run concurrently
  timeout: 1e4,
  // Timeout in ms after which a task will be considered as failed (optional)
  autostart: true
  // Automatically start the queue (optional)
});
const apiQueue = new Queue({
  concurrency: 10,
  // Number of tasks that can run concurrently
  timeout: 2 * 60 * 1e3,
  // Timeout in ms after which a task will be considered as failed (optional)
  autostart: true
  // Automatically start the queue (optional)
});
async function manualIncident(monitor) {
  let startTs = GetMinuteStartNowTimestampUTC();
  let incidentArr = await instance.getIncidentsByMonitorTagRealtime(monitor.tag, startTs);
  let maintenanceArr = await instance.getMaintenanceByMonitorTagRealtime(monitor.tag, startTs);
  let impactArr = incidentArr.concat(maintenanceArr);
  let impact = "";
  if (impactArr.length == 0) {
    return {};
  }
  for (let i = 0; i < impactArr.length; i++) {
    const element = impactArr[i];
    if (element.monitor_impact === "MAINTENANCE") {
      impact = "MAINTENANCE";
      break;
    }
    if (element.monitor_impact === "DOWN") {
      impact = "DOWN";
      break;
    }
    if (element.monitor_impact === "DEGRADED") {
      impact = "DEGRADED";
    }
  }
  if (impact === "") {
    return {};
  }
  let manualData = {
    [startTs]: {
      status: impact,
      latency: 0,
      type: MANUAL
    }
  };
  return manualData;
}
const Minuter = async (monitor) => {
  try {
    let realTimeData = {};
    let manualData = {};
    const startOfMinute = GetMinuteStartNowTimestampUTC();
    const serviceClient = new Service(monitor);
    if (monitor.monitor_type === "API") {
      let apiResponse = await serviceClient.execute();
      realTimeData[startOfMinute] = apiResponse;
      if (apiResponse.type === TIMEOUT) {
        apiQueue.push(async (cb) => {
          await Wait(500);
          console.log("Retrying api call for " + monitor.name + " at " + startOfMinute + " due to timeout");
          serviceClient.execute().then(async (data) => {
            await InsertMonitoringData({
              monitor_tag: monitor.tag,
              timestamp: startOfMinute,
              status: data.status,
              latency: data.latency,
              type: data.type
            });
            cb();
          });
        });
      }
    } else if (monitor.monitor_type === "PING") {
      realTimeData[startOfMinute] = await serviceClient.execute();
    } else if (monitor.monitor_type === "TCP") {
      realTimeData[startOfMinute] = await serviceClient.execute();
    } else if (monitor.monitor_type === "DNS") {
      realTimeData[startOfMinute] = await serviceClient.execute();
    } else if (monitor.monitor_type === "GROUP") {
      realTimeData[startOfMinute] = null;
    } else if (monitor.monitor_type === "SSL") {
      realTimeData[startOfMinute] = await serviceClient.execute();
    } else if (monitor.monitor_type === "SQL") {
      realTimeData[startOfMinute] = await serviceClient.execute();
    } else if (monitor.monitor_type === "HEARTBEAT") {
      realTimeData[startOfMinute] = await serviceClient.execute();
    } else if (monitor.monitor_type === "GAMEDIG") {
      realTimeData[startOfMinute] = await serviceClient.execute();
    }
    manualData = await manualIncident(monitor);
    let mergedData = {};
    if (monitor.default_status !== void 0 && monitor.default_status !== null) {
      if ([UP, DOWN, DEGRADED].indexOf(monitor.default_status) !== -1) {
        mergedData[startOfMinute] = {
          status: monitor.default_status,
          latency: 0,
          type: DEFAULT_STATUS
        };
      }
    }
    for (const timestamp in realTimeData) {
      if (!!realTimeData[timestamp] && !!realTimeData[timestamp].status) {
        mergedData[timestamp] = realTimeData[timestamp];
      }
    }
    for (const timestamp in manualData) {
      if (!!manualData[timestamp] && !!manualData[timestamp].status) {
        mergedData[timestamp] = manualData[timestamp];
      }
    }
    for (const timestamp in mergedData) {
      const element = mergedData[timestamp];
      await InsertMonitoringData({
        monitor_tag: monitor.tag,
        timestamp: parseInt(timestamp),
        status: element.status,
        latency: element.latency,
        type: element.type
      });
    }
  } catch (e) {
    console.log(`[Error] in Running Monitor name: ${monitor.name}, tag: ${monitor.tag} error:`, e);
  }
  alertingQueue.push(async (cb) => {
    setTimeout(async () => {
      try {
        await alerting(monitor);
        cb();
      } catch (e) {
        console.log(`[Error] in Running Alerting name: ${monitor.name}, tag: ${monitor.tag} error:`, e);
        cb();
      }
    }, 1042);
  });
};
alertingQueue.start((err) => {
  if (err) {
    console.error("Error occurred:", err);
    process.exit(1);
  }
});
apiQueue.start((err) => {
  if (err) {
    console.error("Error occurred:", err);
    process.exit(1);
  }
});
async function GET({ url }) {
  if (url.searchParams.get("key") !== process.env.KENER_CRON_KEY) {
    return json({ error: "unauthorized" }, { status: 401 });
  }
  const monitors = await GetMonitorsParsed({ status: "ACTIVE" });
  const results = await Promise.allSettled(monitors.map((m) => Minuter(m)));
  const failed = results.filter((r) => r.status === "rejected").length;
  return json({ total: monitors.length, failed });
}
export {
  GET
};
