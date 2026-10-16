import { H as HashString, i as instance, a as GetMinuteStartTimestampUTC, V as ValidateEmail, b as GetMinuteStartNowTimestampUTC, G as GetNowTimestampUTC, U as UP, k as SIGNAL, N as NO_DATA, D as DOWN, f as DEGRADED, R as ReplaceAllOccurrences, j as REALTIME } from "./db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Resend } from "resend";
import Queue from "queue";
import crypto from "crypto";
import nodemailer from "nodemailer";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
function IsValidURL(url) {
  const regex = /^(https?:\/\/)?((localhost|[\da-z.-]+\.[a-z]{2,10})(:[0-9]{1,5})?)?(\/[\w .-]*)*\/?$/i;
  return regex.test(url);
}
function IsValidJSONString(data) {
  try {
    JSON.parse(data);
  } catch (error) {
    return false;
  }
  return true;
}
function IsValidJSONArray(data) {
  try {
    data = JSON.parse(data);
  } catch (error) {
    return false;
  }
  return Array.isArray(data);
}
function IsValidNav(nav) {
  try {
    nav = JSON.parse(nav);
  } catch (error) {
    return false;
  }
  if (!Array.isArray(nav))
    return false;
  if (nav.length === 0)
    return true;
  for (const item of nav) {
    if (!!!item.name || !!!item.url)
      return false;
  }
  return true;
}
function IsValidHero(hero) {
  try {
    hero = JSON.parse(hero);
  } catch (error) {
    return false;
  }
  if (typeof hero !== "object")
    return false;
  if (!!hero.title && typeof hero.title !== "string")
    return false;
  if (!!hero.title && typeof hero.subtitle !== "string")
    return false;
  return true;
}
function IsValidI18n(i18n) {
  try {
    i18n = JSON.parse(i18n);
  } catch (error) {
    return false;
  }
  return true;
}
function IsValidAnalytics(analytics) {
  try {
    analytics = JSON.parse(analytics);
  } catch (error) {
    return false;
  }
  if (!Array.isArray(analytics))
    return false;
  for (const item of analytics) {
    if (typeof item.id !== "string")
      return false;
    if (typeof item.type !== "string")
      return false;
  }
  return true;
}
function IsValidColors(colors) {
  try {
    colors = JSON.parse(colors);
  } catch (error) {
    return false;
  }
  if (typeof colors !== "object")
    return false;
  const validColorKeys = ["UP", "DOWN", "DEGRADED", "MAINTENANCE"];
  for (const key of validColorKeys) {
    if (typeof colors[key] !== "string" || !/^#[0-9A-Fa-f]{6}$/.test(colors[key]))
      return false;
  }
  return true;
}
const siteDataKeys = [
  {
    key: "title",
    isValid: (value) => typeof value === "string" && value.trim().length > 0,
    data_type: "string"
  },
  {
    key: "siteName",
    isValid: (value) => typeof value === "string" && value.trim().length > 0,
    data_type: "string"
  },
  {
    key: "siteURL",
    isValid: IsValidURL,
    data_type: "string"
  },
  {
    key: "homeDataMaxDays",
    isValid: IsValidJSONString,
    data_type: "object"
  },
  {
    key: "home",
    isValid: (value) => typeof value === "string" && value.trim().length > 0,
    data_type: "string"
  },
  {
    key: "favicon",
    isValid: (value) => typeof value === "string" && value.trim().length > 0,
    data_type: "string"
  },
  {
    key: "logo",
    isValid: (value) => typeof value === "string" && value.trim().length > 0,
    data_type: "string"
  },
  {
    key: "metaTags",
    isValid: IsValidJSONString,
    data_type: "object"
  },
  {
    key: "nav",
    isValid: IsValidNav,
    data_type: "object"
  },
  {
    key: "hero",
    isValid: IsValidHero,
    data_type: "object"
  },
  {
    key: "footerHTML",
    isValid: (value) => typeof value === "string",
    data_type: "string"
  },
  {
    key: "kenerTheme",
    isValid: (value) => typeof value === "string",
    data_type: "string"
  },
  {
    key: "customCSS",
    isValid: (value) => typeof value === "string",
    data_type: "string"
  },
  {
    key: "i18n",
    isValid: IsValidI18n,
    data_type: "object"
  },
  {
    key: "pattern",
    //string dots or squares or circle
    isValid: (value) => typeof value === "string" && [
      "dots",
      "squares",
      "tiles",
      "none",
      "radial-blue",
      "radial-mono",
      "radial-midnight",
      "circle-mono",
      "carbon-fibre",
      "texture-sky",
      "angular-mono",
      "angular-spring",
      "angular-bloom",
      "pets"
    ].includes(value),
    data_type: "string"
  },
  {
    key: "analytics",
    isValid: IsValidAnalytics,
    data_type: "object"
  },
  {
    key: "theme",
    //light dark system none
    isValid: (value) => typeof value === "string" && ["light", "dark", "system", "none"].includes(value),
    data_type: "string"
  },
  {
    key: "themeToggle",
    //boolean
    isValid: (value) => typeof value === "string",
    data_type: "string"
  },
  {
    key: "tzToggle",
    //boolean
    isValid: (value) => typeof value === "string",
    data_type: "string"
  },
  {
    key: "showSiteStatus",
    //boolean
    isValid: (value) => typeof value === "string",
    data_type: "string"
  },
  {
    key: "barStyle",
    //PARTIAL or FULL
    isValid: (value) => typeof value === "string" && ["PARTIAL", "FULL"].includes(value),
    data_type: "string"
  },
  {
    key: "barRoundness",
    //SHARP or ROUNDED
    isValid: (value) => typeof value === "string" && ["SHARP", "ROUNDED"].includes(value),
    data_type: "string"
  },
  {
    key: "summaryStyle",
    //CURRENT or DAY
    isValid: (value) => typeof value === "string" && ["CURRENT", "DAY"].includes(value),
    data_type: "string"
  },
  {
    key: "colors",
    isValid: IsValidColors,
    data_type: "object"
  },
  {
    key: "font",
    isValid: IsValidJSONString,
    data_type: "object"
  },
  {
    key: "monitorSort",
    isValid: IsValidJSONArray,
    data_type: "object"
  },
  {
    key: "categories",
    isValid: IsValidJSONString,
    data_type: "object"
  },
  {
    key: "homeIncidentCount",
    isValid: (value) => parseInt(value) >= 0,
    data_type: "string"
  },
  {
    key: "homeIncidentStartTimeWithin",
    isValid: (value) => parseInt(value) >= 1,
    data_type: "string"
  },
  {
    key: "incidentGroupView",
    isValid: (value) => typeof value === "string" && value.trim().length > 0,
    data_type: "string"
  },
  {
    key: "analytics.googleTagManager",
    isValid: IsValidJSONString,
    data_type: "object"
  },
  {
    key: "analytics.plausible",
    isValid: IsValidJSONString,
    data_type: "object"
  },
  {
    key: "analytics.mixpanel",
    isValid: IsValidJSONString,
    data_type: "object"
  },
  {
    key: "analytics.amplitude",
    isValid: IsValidJSONString,
    data_type: "object"
  },
  {
    key: "analytics.clarity",
    isValid: IsValidJSONString,
    data_type: "object"
  },
  {
    key: "analytics.umami",
    isValid: IsValidJSONString,
    data_type: "object"
  }
];
const transports = {};
function getSMTPTransport(meta) {
  let transportId = "smtp_" + HashString(JSON.stringify(meta));
  if (!!transports[transportId]) {
    return transports[transportId];
  }
  let options = {
    host: meta.smtp_host,
    port: Number(meta.smtp_port) || 587,
    secure: meta.smtp_secure,
    // true for 465, false for other ports
    auth: {
      user: meta.smtp_user,
      pass: meta.smtp_pass
    },
    tls: {
      rejectUnauthorized: !!meta.smtp_secure
      // false if smtp_secure is 0
    }
  };
  if (meta.smtp_user === "-" || meta.smtp_pass === "-") {
    delete options.auth;
  }
  const transporter = nodemailer.createTransport(options);
  transports[transportId] = transporter;
  return transporter;
}
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const saltRounds = 10;
const DUMMY_SECRET = "DUMMY_SECRET";
const eventQueue = new Queue({
  concurrency: 10,
  // Number of tasks that can run concurrently
  timeout: 1e4,
  // Timeout in ms after which a task will be considered as failed (optional)
  autostart: true
  // Automatically start the queue (optional)
});
const insertStatusQueue = new Queue({
  concurrency: 1,
  // Number of tasks that can run concurrently
  timeout: 1e4,
  // Timeout in ms after which a task will be considered as failed (optional)
  autostart: true
  // Automatically start the queue (optional)
});
const PushDataToQueue = async (eventID, eventName, eventData) => {
  let subscription = await instance.getSubscriptionTriggerByType("email");
  if (!subscription) {
    return;
  }
  let config;
  try {
    config = JSON.parse(subscription.config);
  } catch (e) {
    return;
  }
  if (!config[eventName]) {
    return;
  }
  let tags = ["_"];
  let monitors = await instance.getIncidentMonitorsByIncidentID(eventID);
  if (monitors) {
    for (let i = 0; i < monitors.length; i++) {
      const monitor = monitors[i];
      tags.push(monitor.monitor_tag);
    }
  }
  const emailTemplate = fs.readFileSync(path.join(__dirname, "../templates/event_update.html"), "utf8");
  let siteData = await GetAllSiteData();
  let base = !!process.env.KENER_BASE_PATH ? process.env.KENER_BASE_PATH : "";
  let emailData = {
    brand_name: siteData.siteName,
    logo_url: await GetSiteLogoURL(siteData.siteURL, siteData.logo, base),
    incident_url: await GetSiteLogoURL(
      siteData.siteURL,
      `/view/events/${eventData.incident_type.toLowerCase()}-${eventID}`,
      base
    ),
    update_message: eventData.message,
    title: `[${eventData.incident_type}] ` + eventData.title
  };
  let eligibleEmails = await instance.getSubscriberEmails(tags);
  if (eligibleEmails) {
    for (let i = 0; i < eligibleEmails.length; i++) {
      let email = eligibleEmails[i];
      eventQueue.push(async (cb) => {
        await SendEmailWithTemplate(
          emailTemplate,
          emailData,
          email.subscriber_send,
          `[${eventData.incident_type}] ${eventData.title}`,
          eventData.message
        );
        cb(eventData);
      });
    }
  }
};
function InsertKeyValue(key, value) {
  let f = siteDataKeys.find((k) => k.key === key);
  if (!f) {
    console.trace(`Invalid key: ${key}`);
    throw new Error(`Invalid key: ${key}`);
  }
  if (!f.isValid(value)) {
    console.trace(`Invalid value for key: ${key}`);
    throw new Error(`Invalid value for key: ${key}`);
  }
  let isValid = siteDataKeys.find((k) => k.key === key).isValid(value);
  if (!isValid) {
    console.trace(`Invalid value for key: ${key}`);
    throw new Error(`Invalid value for key: ${key}`);
  }
  return instance.insertOrUpdateSiteData(key, value, f.data_type);
}
async function GetAllSiteData() {
  let data = await instance.getAllSiteData();
  let transformedData = {};
  for (const d of data) {
    if (d.data_type === "object") {
      transformedData[d.key] = JSON.parse(d.value);
    } else {
      transformedData[d.key] = d.value;
    }
  }
  return transformedData;
}
async function GetAllAnalyticsData() {
  let data = await instance.getAllSiteDataAnalytics();
  let transformedData = [];
  for (const d of data) {
    transformedData.push({
      key: d.key,
      value: JSON.parse(d.value)
    });
  }
  return transformedData;
}
const CreateUpdateMonitor = async (monitor) => {
  let monitorData = { ...monitor };
  if (monitorData.id) {
    return await instance.updateMonitor(monitorData);
  } else {
    return await instance.insertMonitor(monitorData);
  }
};
const UpdateMonitoringData = async (data) => {
  let queryData = { ...data };
  return await instance.updateMonitoringData(
    queryData.monitor_tag,
    GetMinuteStartTimestampUTC(queryData.start),
    GetMinuteStartTimestampUTC(queryData.end),
    queryData.newStatus,
    queryData.type
  );
};
const CreateMonitor = async (monitor) => {
  let monitorData = { ...monitor };
  if (monitorData.id) {
    throw new Error("monitor id must be empty or 0");
  }
  return await instance.insertMonitor(monitorData);
};
const UpdateMonitor = async (monitor) => {
  let monitorData = { ...monitor };
  if (!!!monitorData.id || monitorData.id === 0) {
    throw new Error("monitor id cannot be empty or 0");
  }
  return await instance.updateMonitor(monitorData);
};
const GetMonitors = async (data) => {
  return await instance.getMonitors(data);
};
const SystemDataMessage = async () => {
  let monitors = await instance.getMonitors({ status: "ACTIVE" });
  monitors.map((monitor) => monitor.tag);
  let upsCount = 0;
  let degradedCount = 0;
  let downCount = 0;
  let maintenanceCount = 0;
  for (let i = 0; i < monitors.length; i++) {
    let status = await instance.getLatestMonitoringData(monitors[i].tag);
    if (status) {
      if (status.status === "UP") {
        upsCount++;
      } else if (status.status === "DEGRADED") {
        degradedCount++;
      } else if (status.status === "DOWN") {
        downCount++;
      } else if (status.status === "MAINTENANCE") {
        maintenanceCount++;
      }
    }
  }
  const total = upsCount + degradedCount + downCount + maintenanceCount;
  if (total === 0) {
    return {
      text: "No Systems",
      upsPercentage: 0,
      degradedPercentage: 0,
      downsPercentage: 0,
      maintenancePercentage: 0
    };
  }
  let upsPercentage = Math.round(upsCount / total * 100);
  let degradedPercentage = Math.round(degradedCount / total * 100);
  let downsPercentage = Math.round(downCount / total * 100);
  let maintenancePercentage = Math.round(maintenanceCount / total * 100);
  let message = "";
  if (upsCount > 0 && degradedCount === 0 && downCount === 0 && maintenanceCount == 0) {
    message = "All Systems are Operational";
  } else if (upsCount === 0 && degradedCount > 0 && downCount === 0 && maintenanceCount == 0) {
    message = "All Systems are Degraded";
  } else if (upsCount === 0 && degradedCount === 0 && downCount > 0 && maintenanceCount == 0) {
    message = "All Systems are Down";
  } else if (upsCount === 0 && degradedCount === 0 && downCount === 0 && maintenanceCount > 0) {
    message = "All Systems are in Maintenance";
  } else if (upsCount > 0 && degradedCount > 0 && downCount > 0 && maintenanceCount > 0 || upsCount === 0 && degradedCount > 0 && downCount > 0 && maintenanceCount > 0) {
    message = "Some Systems are not working as expected";
  } else if (upsCount > 0 && degradedCount === 0 && downCount > 0 && maintenanceCount == 0) {
    message = "Some Systems Down";
  } else if (upsCount > 0 && degradedCount > 0 && downCount === 0 && maintenanceCount == 0) {
    message = "Some Systems Degraded";
  } else if (upsCount > 0 && degradedCount === 0 && downCount === 0 && maintenanceCount > 0) {
    message = "Some Systems in Maintenance";
  }
  if (upsPercentage + degradedPercentage + downsPercentage + maintenancePercentage < 100) {
    upsPercentage = 100 - (degradedPercentage + downsPercentage + maintenancePercentage);
  }
  return {
    text: message,
    upsPercentage,
    degradedPercentage,
    downsPercentage,
    maintenancePercentage
  };
};
const GetMonitorsParsed = async (query) => {
  const rawMonitors = await instance.getMonitors(query);
  const parsedMonitors = rawMonitors.map((monitor) => {
    const monitorData = { ...monitor };
    if (monitorData.type_data) {
      try {
        monitorData.type_data = JSON.parse(monitorData.type_data);
      } catch (error) {
        monitorData.type_data = {};
      }
    } else {
      monitorData.type_data = {};
    }
    return monitorData;
  });
  return parsedMonitors;
};
const CreateUpdateTrigger = async (alert) => {
  let alertData = { ...alert };
  let alertMetaJSON = JSON.parse(alertData.trigger_meta);
  if (alertData.trigger_type === "email") {
    let emailsArray = alertMetaJSON.to.split(",").map((email) => email.trim());
    for (let i = 0; i < emailsArray.length; i++) {
      if (!ValidateEmail(emailsArray[i])) {
        throw new Error(`Invalid email: ${emailsArray[i]}`);
      }
    }
  }
  if (alertData.id) {
    return await instance.updateTrigger(alertData);
  } else {
    return await instance.createNewTrigger(alertData);
  }
};
const GetAllTriggers = async (data) => {
  return await instance.getTriggers(data);
};
const GetTriggerByID = async (id) => {
  return await instance.getTriggerByID(id);
};
const GetSiteDataByKey = async (key) => {
  let data = await instance.getSiteDataByKey(key);
  if (!data) {
    return null;
  }
  if (data.data_type == "object") {
    return JSON.parse(data.value);
  }
  return data.value;
};
const UpdateTriggerData = async (data) => {
  return await instance.updateMonitorTrigger(data);
};
const HashPassword = async (plainTextPassword) => {
  try {
    const hash = await bcrypt.hash(plainTextPassword, saltRounds);
    return hash;
  } catch (err) {
    console.error("Error hashing password:", err);
    throw err;
  }
};
const VerifyPassword = async (plainTextPassword, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(plainTextPassword, hashedPassword);
    return isMatch;
  } catch (err) {
    console.error("Error verifying password:", err);
    throw err;
  }
};
const GetLatestMonitoringData = async (monitor_tag) => {
  return await instance.getLatestMonitoringData(monitor_tag);
};
const GetLatestStatusActiveAll = async (monitor_tags) => {
  let latestData = await instance.getLatestMonitoringDataAllActive(monitor_tags);
  let status = "NO_DATA";
  for (let i = 0; i < latestData.length; i++) {
    if (latestData[i].status === "DOWN") {
      status = "DOWN";
    } else if (latestData[i].status === "DEGRADED" && status !== "DOWN") {
      status = "DEGRADED";
    } else if (latestData[i].status === "UP" && status !== "DOWN" && status !== "DEGRADED") {
      status = "UP";
    }
  }
  return {
    status
  };
};
const GetLastHeartbeat = async (monitor_tag) => {
  return await instance.getLastHeartbeat(monitor_tag);
};
const ProcessGroupUpdate = async (data) => {
  let groupActiveMonitors = await instance.getMonitors({ status: "ACTIVE", monitor_type: "GROUP" });
  let validMonitorTags = [];
  for (let i = 0; i < groupActiveMonitors.length; i++) {
    let groupActiveMonitor = groupActiveMonitors[i];
    let typeData = JSON.parse(groupActiveMonitor.type_data);
    let monitorsInGroup = typeData.monitors;
    let selectedMonitorTags = monitorsInGroup.filter((monitor) => {
      if (!!monitor.selected) {
        return monitor.tag;
      }
    }).map((monitor) => monitor.tag);
    validMonitorTags.push({
      groupTag: groupActiveMonitor.tag,
      selectedMonitorTags
    });
  }
  for (let i = 0; i < validMonitorTags.length; i++) {
    let groupActiveMonitor = validMonitorTags[i];
    if (groupActiveMonitor.selectedMonitorTags.indexOf(data.monitor_tag) !== -1) {
      let updateData = {};
      let lastStatus = await instance.getMonitoringDataAt(groupActiveMonitor.groupTag, data.timestamp);
      if (!!lastStatus) {
        let status = lastStatus.status;
        lastStatus.timestamp;
        let receivedStatus = data.status;
        let receivedTimestamp = data.timestamp;
        if (receivedStatus === DOWN) {
          updateData = {
            monitor_tag: groupActiveMonitor.groupTag,
            timestamp: receivedTimestamp,
            status: DOWN,
            type: REALTIME,
            latency: data.latency
          };
        } else if (receivedStatus === DEGRADED && status !== DOWN) {
          updateData = {
            monitor_tag: groupActiveMonitor.groupTag,
            timestamp: receivedTimestamp,
            status: DEGRADED,
            type: REALTIME,
            latency: data.latency
          };
        } else if (receivedStatus === UP && status !== DOWN && status !== DEGRADED) {
          updateData = {
            monitor_tag: groupActiveMonitor.groupTag,
            timestamp: receivedTimestamp,
            status: UP,
            type: REALTIME,
            latency: data.latency
          };
        }
      } else {
        updateData = {
          monitor_tag: groupActiveMonitor.groupTag,
          timestamp: data.timestamp,
          status: data.status,
          type: REALTIME,
          latency: data.latency
        };
      }
      if (!!updateData.status) {
        await instance.insertMonitoringData(updateData);
      }
    }
  }
};
const InsertMonitoringData = async (data) => {
  if (!data.monitor_tag || !data.timestamp || !data.status || !data.type) {
    throw new Error("Invalid data");
  }
  insertStatusQueue.push(async (cb) => {
    await ProcessGroupUpdate(data);
    cb();
  });
  return await instance.insertMonitoringData({
    monitor_tag: data.monitor_tag,
    timestamp: data.timestamp,
    status: data.status,
    latency: data.latency || 0,
    type: data.type
  });
};
const RegisterHeartbeat = async (tag, secret) => {
  let monitor = await instance.getMonitorByTag(tag);
  if (!monitor) {
    return null;
  }
  let typeData = monitor.type_data;
  if (!typeData) {
    return null;
  }
  try {
    let heartbeatConfig = JSON.parse(typeData);
    let heartbeatSecret = heartbeatConfig.secretString;
    if (heartbeatSecret === secret) {
      return InsertMonitoringData({
        monitor_tag: monitor.tag,
        timestamp: GetMinuteStartNowTimestampUTC(GetNowTimestampUTC()),
        status: UP,
        latency: 0,
        type: SIGNAL
      });
    }
  } catch (e) {
    console.error("Error registering heartbeat:", e);
  }
  return null;
};
const GenerateToken = async (data) => {
  try {
    const token = jwt.sign(data, process.env.KENER_SECRET_KEY || DUMMY_SECRET, {
      expiresIn: "1y"
    });
    return token;
  } catch (err) {
    console.error("Error generating token:", err);
    throw err;
  }
};
const GenerateTokenWithExpiry = async (data, expiry) => {
  try {
    const token = jwt.sign(data, process.env.KENER_SECRET_KEY || DUMMY_SECRET, {
      expiresIn: expiry
    });
    return token;
  } catch (err) {
    console.error("Error generating token with expiry:", err);
    throw err;
  }
};
const VerifyToken = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.KENER_SECRET_KEY || DUMMY_SECRET);
    return decoded;
  } catch (err) {
    return void 0;
  }
};
const GetAllAlertsPaginated = async (data) => {
  return {
    alerts: await instance.getMonitorAlertsPaginated(data.page, data.limit),
    total: await instance.getMonitorAlertsCount()
  };
};
function generateApiKey() {
  const prefix = "kener_";
  const randomKey = crypto.randomBytes(32).toString("hex");
  return prefix + randomKey;
}
function createHash(apiKey) {
  return crypto.createHmac("sha256", process.env.KENER_SECRET_KEY || DUMMY_SECRET).update(apiKey).digest("hex");
}
const MaskString = (str) => {
  const len = str.length;
  const mask = "*";
  const masked = mask.repeat(len - 4) + str.substring(len - 4);
  return masked;
};
const CreateNewAPIKey = async (data) => {
  const apiKey = generateApiKey();
  const hashed_key = await createHash(apiKey);
  if (!data.name) {
    throw new Error("Name is required");
  }
  await instance.createNewApiKey({
    name: data.name,
    hashed_key,
    masked_key: MaskString(apiKey)
  });
  return {
    apiKey,
    name: data.name
  };
};
const GetAllAPIKeys = async () => {
  return await instance.getAllApiKeys();
};
const UpdateApiKeyStatus = async (data) => {
  return await instance.updateApiKeyStatus(data);
};
const VerifyAPIKey = async (apiKey) => {
  const hashed_key = createHash(apiKey);
  const record = await instance.getApiKeyByHashedKey(hashed_key);
  if (!!record) {
    return record.status == "ACTIVE";
  }
  return false;
};
const IsSetupComplete = async () => {
  let data = await instance.getAllSiteData();
  if (!data) {
    return false;
  }
  return data.length > 0;
};
const InterpolateData = (rawData, startTimestamp, initialStatus, overrideEndTimestamp) => {
  const interpolatedData = [];
  let currentStatus = initialStatus || "UP";
  let endTimestamp = startTimestamp;
  if (rawData && rawData.length > 0) {
    endTimestamp = rawData[rawData.length - 1].timestamp;
  }
  if (overrideEndTimestamp) {
    endTimestamp = overrideEndTimestamp;
  }
  const dataByTimestamp = rawData.reduce((accumulator, entry) => {
    accumulator[entry.timestamp] = entry;
    return accumulator;
  }, {});
  for (let timestamp = startTimestamp; timestamp <= endTimestamp; timestamp += 60) {
    const currentEntry = dataByTimestamp[timestamp];
    if (currentEntry) {
      currentStatus = currentEntry.status;
    }
    interpolatedData.push({ timestamp, status: currentStatus });
  }
  return interpolatedData;
};
const GetLastStatusBefore = async (monitor_tag, timestamp) => {
  let data = await instance.getLastStatusBefore(monitor_tag, timestamp);
  if (data) {
    return data.status;
  }
  return NO_DATA;
};
const GetMonitoringData = async (tag, since, now) => {
  return await instance.getMonitoringData(tag, since, now);
};
const GetMonitoringDataAll = async (tags, since, now) => {
  return await instance.getMonitoringDataAll(tags, since, now);
};
const GetLastStatusBeforeAll = async (monitor_tags, timestamp) => {
  let data = await instance.getLastStatusBeforeAll(monitor_tags, timestamp);
  if (data) {
    return data.status;
  }
  return NO_DATA;
};
const AggregateData = (rawData) => {
  let rawDataWithStatus = rawData.filter((data) => data.status !== NO_DATA);
  const total = rawDataWithStatus.length;
  const UPs = rawDataWithStatus.filter((data) => data.status === UP).length;
  const DOWNs = rawDataWithStatus.filter((data) => data.status === DOWN).length;
  const DEGRADEDs = rawDataWithStatus.filter((data) => data.status === DEGRADED).length;
  const NO_DATAs = total - (UPs + DOWNs + DEGRADEDs);
  return { total, UPs, DOWNs, DEGRADEDs, NO_DATAs };
};
const GetDataGroupByDayAlternative = async (monitor_tag, start, end, timezoneOffsetMinutes = 0) => {
  const offsetMinutes = Number(timezoneOffsetMinutes);
  if (isNaN(offsetMinutes)) {
    throw new Error("Invalid timezone offset. Must be a number representing minutes from UTC.");
  }
  const offsetSeconds = offsetMinutes * 60;
  let rawData = await instance.getDataGroupByDayAlternative(monitor_tag, start, end);
  let anchorStatus = await GetLastStatusBefore(monitor_tag, start);
  rawData = InterpolateData(rawData, start, anchorStatus, end);
  const groupedData = rawData.reduce((acc, row) => {
    const dayGroup = Math.floor((row.timestamp + offsetSeconds) / 86400);
    if (!acc[dayGroup]) {
      acc[dayGroup] = {
        timestamp: dayGroup * 86400 - offsetSeconds,
        // start of day in UTC
        total: 0,
        UP: 0,
        DOWN: 0,
        DEGRADED: 0,
        MAINTENANCE: 0,
        NO_DATA: 0
      };
    }
    const group = acc[dayGroup];
    group.total++;
    group[row.status]++;
    return acc;
  }, {});
  return Object.values(groupedData).map((group) => ({
    timestamp: group.timestamp,
    total: group.total,
    UP: group.UP,
    DOWN: group.DOWN,
    DEGRADED: group.DEGRADED,
    MAINTENANCE: group.MAINTENANCE,
    NO_DATA: group.NO_DATA
  }));
};
const CreateIncident = async (data) => {
  if (!data.title || !data.start_date_time) {
    throw new Error("Title and startDateTime are required");
  }
  let incident = {
    title: data.title,
    start_date_time: data.start_date_time,
    status: !!data.status ? data.status : "OPEN",
    end_date_time: !!data.end_date_time ? data.end_date_time : null,
    state: !!data.state ? data.state : "INVESTIGATING",
    incident_type: !!data.incident_type ? data.incident_type : "INCIDENT",
    incident_source: !!data.incident_source ? data.incident_source : "DASHBOARD"
  };
  if (incident.incident_type === "INCIDENT") {
    incident.end_date_time = null;
  }
  if (!!incident.end_date_time && incident.end_date_time < incident.start_date_time) {
    throw new Error("End date time cannot be less than start date time");
  }
  let newIncident = await instance.createIncident(incident);
  PushDataToQueue(newIncident.id, "createIncident", {
    message: `${incident.incident_type} Created`,
    ...incident
  });
  return {
    incident_id: newIncident.id
  };
};
const UpdateIncident = async (incident_id, data) => {
  let incidentExists = await instance.getIncidentById(incident_id);
  if (!incidentExists) {
    throw new Error(`Incident with id ${incident_id} does not exist`);
  }
  let endDateTime = data.end_date_time;
  if (endDateTime && endDateTime < incidentExists.start_date_time) {
    throw new Error("End date time cannot be less than start date time");
  }
  let updateObject = {
    id: incident_id,
    title: data.title || incidentExists.title,
    start_date_time: data.start_date_time || incidentExists.start_date_time,
    status: data.status || incidentExists.status,
    state: data.state || incidentExists.state,
    end_date_time: data.end_date_time || incidentExists.end_date_time
  };
  if (JSON.stringify(updateObject) === JSON.stringify({
    id: incidentExists.id,
    title: incidentExists.title,
    start_date_time: incidentExists.start_date_time,
    status: incidentExists.status,
    state: incidentExists.state,
    end_date_time: incidentExists.end_date_time
  })) {
    PushDataToQueue(incident_id, "updateIncident", {
      message: `${incidentExists.incident_type} has been updated to ${updateObject.state}`,
      ...incidentExists,
      ...updateObject
    });
  }
  return await instance.updateIncident(updateObject);
};
const ParseIncidentToAPIResp = async (incident_id) => {
  let incident = await instance.getIncidentById(incident_id);
  if (!incident) {
    throw new Error(`Incident with id ${incident_id} not found`);
  }
  let resp = {
    id: incident.id,
    start_date_time: incident.start_date_time,
    end_date_time: incident.end_date_time,
    created_at: incident.created_at,
    updated_at: incident.updated_at,
    title: incident.title,
    status: incident.status,
    state: incident.state
  };
  return resp;
};
const GetIncidentMonitors = async (incident_id) => {
  let incidentExists = await instance.getIncidentById(incident_id);
  if (!incidentExists) {
    throw new Error(`Incident with id ${incident_id} does not exist`);
  }
  let incidentMonitors = await instance.getIncidentMonitorsByIncidentID(incident_id);
  return incidentMonitors.map((m) => ({
    monitor_tag: m.monitor_tag,
    monitor_impact: m.monitor_impact
  }));
};
const RemoveIncidentMonitor = async (incident_id, monitor_tag) => {
  let incidentExists = await instance.getIncidentById(incident_id);
  if (!incidentExists) {
    throw new Error(`Incident with id ${incident_id} does not exist`);
  }
  return await instance.removeIncidentMonitor(incident_id, monitor_tag);
};
const AddIncidentMonitor = async (incident_id, monitor_tag, monitor_impact) => {
  if (!["DOWN", "DEGRADED", "MAINTENANCE"].includes(monitor_impact)) {
    throw new Error("Monitor impact must be either DOWN, DEGRADED, MAINTENANCE");
  }
  let monitorExists = await instance.getMonitorByTag(monitor_tag);
  if (!monitorExists) {
    throw new Error(`Monitor with tag ${monitor_tag} does not exist`);
  }
  let incidentExists = await instance.getIncidentById(incident_id);
  if (!incidentExists) {
    throw new Error(`Incident with id ${incident_id} does not exist`);
  }
  PushDataToQueue(incident_id, "insertIncidentMonitor", {
    title: incidentExists.title,
    message: `Monitor ${monitor_tag} added to ${incidentExists.incident_type}. Impact is ${monitor_impact}`,
    ...incidentExists
  });
  return await instance.insertIncidentMonitor(incident_id, monitor_tag, monitor_impact);
};
const GetIncidentComments = async (incident_id) => {
  let incidentExists = await instance.getIncidentById(incident_id);
  if (!incidentExists) {
    throw new Error(`Incident with id ${incident_id} does not exist`);
  }
  return await instance.getIncidentComments(incident_id);
};
const GetIncidentActiveComments = async (incident_id) => {
  let incidentExists = await instance.getIncidentById(incident_id);
  if (!incidentExists) {
    throw new Error(`Incident with id ${incident_id} does not exist`);
  }
  return await instance.getActiveIncidentComments(incident_id);
};
const UpdateCommentByID = async (incident_id, comment_id, comment, state, commented_at) => {
  let incidentExists = await instance.getIncidentById(incident_id);
  if (!incidentExists) {
    throw new Error(`Incident with id ${incident_id} does not exist`);
  }
  let commentExists = await instance.getIncidentCommentByIDAndIncident(incident_id, comment_id);
  if (!commentExists) {
    throw new Error(`Comment with id ${comment_id} does not exist`);
  }
  PushDataToQueue(incident_id, "updateIncidentComment", {
    title: incidentExists.title,
    message: `${comment}`,
    ...incidentExists
  });
  let c = await instance.updateIncidentCommentByID(comment_id, comment, state, commented_at);
  if (c) {
    let incidentUpdate = {
      state
    };
    if (state === "RESOLVED") {
      incidentUpdate.end_date_time = commented_at;
    } else {
      if (incidentExists.state === "RESOLVED") {
        await instance.setIncidentEndTimeToNull(incident_id);
      }
    }
    await UpdateIncident(incident_id, incidentUpdate);
  }
  return c;
};
const AddIncidentComment = async (incident_id, comment, state, commented_at) => {
  let incidentExists = await instance.getIncidentById(incident_id);
  if (!incidentExists) {
    throw new Error(`Incident with id ${incident_id} does not exist`);
  }
  if (!!!state) {
    state = incidentExists.state;
  }
  PushDataToQueue(incident_id, "insertIncidentComment", {
    title: incidentExists.title,
    message: `${comment}`,
    ...incidentExists
  });
  let c = await instance.insertIncidentComment(incident_id, comment, state, commented_at);
  let incidentType = incidentExists.incident_type;
  if (c && incidentType === "INCIDENT") {
    let incidentUpdate = {
      state
    };
    if (state === "RESOLVED") {
      incidentUpdate.end_date_time = commented_at;
    } else {
      if (incidentExists.state === "RESOLVED") {
        await instance.setIncidentEndTimeToNull(incident_id);
      }
    }
    await UpdateIncident(incident_id, incidentUpdate);
  }
  return c;
};
const UpdateCommentStatusByID = async (incident_id, comment_id, status) => {
  let commentExists = await instance.getIncidentCommentByIDAndIncident(incident_id, comment_id);
  if (!commentExists) {
    throw new Error(`Comment with id ${comment_id} does not exist`);
  }
  return await instance.updateIncidentCommentStatusByID(comment_id, status);
};
const GetIncidentsDashboard = async (data) => {
  let filter = {};
  if (data.filter.status != "ALL") {
    filter = { status: data.filter.status };
  }
  let incidents = await instance.getIncidentsPaginatedDesc(data.page, data.limit, filter);
  let total = await instance.getIncidentsCount(filter);
  for (let i = 0; i < incidents.length; i++) {
    incidents[i].monitors = await GetIncidentMonitors(incidents[i].id);
    incidents[i].isAutoCreated = await instance.alertExistsIncident(incidents[i].id);
  }
  return {
    incidents,
    total
  };
};
const GetIncidentByIDDashboard = async (data) => {
  let incident = await instance.getIncidentById(data.incident_id);
  return incident;
};
const GetIncidentsPaginated = async (page, limit, filter, direction) => {
  let incidents = await instance.getIncidentsPaginated(page, limit, filter, direction);
  let allMonitors = {};
  for (let i = 0; i < incidents.length; i++) {
    let incidentMonitors = await GetIncidentMonitors(incidents[i].id);
    incidents[i].monitors = incidentMonitors;
  }
  for (let i = 0; i < incidents.length; i++) {
    for (let j = 0; j < incidents[i].monitors.length; j++) {
      let monitorTag = incidents[i].monitors[j].monitor_tag;
      let monitorImpact = incidents[i].monitors[j].monitor_impact;
      if (!allMonitors[monitorTag]) {
        let monitor = await instance.getMonitorByTag(monitorTag);
        if (monitor) {
          allMonitors[monitorTag] = {
            id: monitor.id,
            tag: monitor.tag,
            name: monitor.name,
            image: monitor.image,
            impact_type: monitorImpact
          };
        }
      }
      incidents[i].monitors[j] = allMonitors[monitorTag];
    }
  }
  for (let i = 0; i < incidents.length; i++) {
    incidents[i].comments = await GetIncidentActiveComments(incidents[i].id);
  }
  return incidents;
};
const GetIncidentsOpenHome = async (homeIncidentCount, start, end) => {
  homeIncidentCount = parseInt(homeIncidentCount);
  if (homeIncidentCount < 0) {
    homeIncidentCount = 0;
  }
  if (homeIncidentCount === 0) {
    return [];
  }
  let incidents = await instance.getRecentUpdatedIncidents(homeIncidentCount, start, end);
  for (let i = 0; i < incidents.length; i++) {
    incidents[i].monitors = await GetIncidentMonitors(incidents[i].id);
  }
  for (let i = 0; i < incidents.length; i++) {
    incidents[i].comments = await GetIncidentActiveComments(incidents[i].id);
  }
  return incidents;
};
const GetIncidentsPage = async (start, open) => {
  let incidents = await instance.getIncidentsBetween(start, open);
  for (let i = 0; i < incidents.length; i++) {
    incidents[i].monitors = await GetIncidentMonitors(incidents[i].id);
  }
  for (let i = 0; i < incidents.length; i++) {
    incidents[i].comments = await GetIncidentActiveComments(incidents[i].id);
  }
  return incidents;
};
const GetIncidentsByIDS = async (ids) => {
  if (ids.length == 0) {
    return [];
  }
  let incidents = await instance.getIncidentsByIds(ids);
  for (let i = 0; i < incidents.length; i++) {
    incidents[i].monitors = [];
  }
  for (let i = 0; i < incidents.length; i++) {
    incidents[i].comments = await GetIncidentActiveComments(incidents[i].id);
  }
  return incidents;
};
const InsertNewAlert = async (data) => {
  if (await instance.alertExists(data.monitor_tag, data.monitor_status, data.alert_status)) {
    return;
  }
  await instance.insertAlert(data);
  return await instance.getActiveAlert(data.monitor_tag, data.monitor_status, data.alert_status);
};
const CookieConfig = () => {
  let cookiePath = !!process.env.KENER_BASE_PATH ? process.env.KENER_BASE_PATH : "/";
  let isSecuredDomain = false;
  if (!!process.env.ORIGIN) {
    isSecuredDomain = process.env.ORIGIN.startsWith("https://");
  }
  return {
    name: "kener-user",
    secure: isSecuredDomain,
    maxAge: 365 * 24 * 60 * 60,
    // 1 year in seconds
    httpOnly: true,
    sameSite: "lax",
    path: cookiePath
  };
};
const GetLocaleFromCookie = (site, cookies) => {
  let selectedLang = site.i18n?.defaultLocale || "en";
  const localLangCookie = cookies.get("localLang");
  if (!!localLangCookie && site.i18n?.locales.find((l) => l.code === localLangCookie)) {
    selectedLang = localLangCookie;
  } else if (site.i18n?.defaultLocale && site.i18n?.locales[site.i18n.defaultLocale]) {
    selectedLang = site.i18n.defaultLocale;
  }
  return selectedLang;
};
const IsLoggedInSession = async (cookies) => {
  let tokenData = cookies.get("kener-user");
  if (!!!tokenData) {
    return {
      error: "User not authenticated",
      action: "redirect",
      location: "/manage/signin"
    };
  }
  let tokenUser = await VerifyToken(tokenData);
  if (!!!tokenUser) {
    return {
      error: "User not authenticated",
      action: "redirect",
      location: "/manage/signin/logout"
    };
  }
  let userDB = await instance.getUserByEmail(tokenUser.email);
  if (!!!userDB) {
    return {
      error: "User not authenticated",
      action: "redirect",
      location: "/manage/signin"
    };
  }
  return {
    user: userDB
  };
};
const GetSMTPFromENV = () => {
  if (!!!process.env.SMTP_HOST || !!!process.env.SMTP_PORT || !!!process.env.SMTP_USER || !!!process.env.SMTP_FROM_EMAIL || !!!process.env.SMTP_PASS) {
    return null;
  }
  return {
    smtp_host: process.env.SMTP_HOST,
    smtp_port: process.env.SMTP_PORT,
    smtp_user: process.env.SMTP_USER,
    smtp_from_email: process.env.SMTP_FROM_EMAIL,
    smtp_pass: process.env.SMTP_PASS,
    smtp_secure: !!Number(process.env.SMTP_SECURE)
  };
};
const IsResendSetup = () => {
  return !!process.env.RESEND_API_KEY && !!process.env.RESEND_SENDER_EMAIL;
};
const IsEmailSetup = () => {
  return !!GetSMTPFromENV || IsResendSetup();
};
const UpdateUserData = async (data) => {
  let userID = data.userID;
  let updateKey = data.updateKey;
  let updateValue = data.updateValue;
  if (updateKey === "password") {
    throw new Error("Password cannot be updated using this method");
  }
  if (!!!updateValue) {
    throw new Error("Update value cannot be empty");
  }
  switch (updateKey) {
    case "name":
      return await instance.updateUserName(userID, updateValue);
    case "role":
      return await instance.updateUserRole(userID, updateValue);
    case "is_verified":
      return await instance.updateIsVerified(userID, updateValue);
    default:
      throw new Error("Invalid update key");
  }
};
const CreateNewInvitation = async (data) => {
  let invite = {};
  let token = crypto.randomBytes(32).toString("hex");
  let hashedToken = createHash(token);
  let invitation_token = data.invitation_type.toLowerCase() + "_" + hashedToken;
  invite.invitation_token = invitation_token;
  invite.invitation_type = data.invitation_type;
  invite.invited_user_id = data.invited_user_id;
  invite.invited_by_user_id = data.invited_by_user_id;
  invite.invitation_meta = data.invitation_meta;
  invite.invitation_expiry = data.invitation_expiry;
  invite.invitation_status = "PENDING";
  await instance.updateInvitationStatusToVoid(invite.invited_user_id, invite.invitation_type);
  await instance.insertInvitation(invite);
  return {
    invitation_token
  };
};
const CheckInvitationExists = async (invited_user_id, invitation_type) => {
  let invitation = await instance.invitationExists(invited_user_id, invitation_type);
  return !!invitation;
};
const GetActiveInvitationByToken = async (invitation_token) => {
  let invitation = await instance.getActiveInvitationByToken(invitation_token);
  return invitation;
};
const UpdateInvitationStatusToAccepted = async (invitation_token) => {
  return await instance.updateInvitationStatusToAccepted(invitation_token);
};
const GetUserByID = async (userID) => {
  return await instance.getUserById(userID);
};
const GetUserByEmail = async (email) => {
  return await instance.getUserByEmail(email);
};
const SendEmailWithTemplate = async (template, data, email, subject, emailText) => {
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const value = data[key];
      template = ReplaceAllOccurrences(template, `{{${key}}}`, value);
    }
  }
  const senderEmail = process.env.RESEND_SENDER_EMAIL;
  const resendKey = process.env.RESEND_API_KEY;
  let mail = {
    from: senderEmail,
    to: [email],
    subject,
    text: emailText,
    html: template
  };
  let smtpData = GetSMTPFromENV();
  try {
    if (!!smtpData) {
      const transporter = getSMTPTransport(smtpData);
      const mailOptions = {
        from: smtpData.smtp_from_email,
        to: email,
        subject: mail.subject,
        html: mail.html,
        text: mail.text
      };
      return await transporter.sendMail(mailOptions);
    } else {
      const resend = new Resend(resendKey);
      return await resend.emails.send(mail);
    }
  } catch (error) {
    console.error("Error sending email via SMTP", error);
    throw new Error("Error sending email v");
  }
};
const GetSiteLogoURL = async (siteURL, logo, base) => {
  if (logo.startsWith("http")) {
    return logo;
  }
  return siteURL + base + logo;
};
const GetAllUsersPaginated = async (data) => {
  return await instance.getUsersPaginated(data.page, data.limit);
};
const GetTotalUserPages = async (limit) => {
  let totalUsers = await instance.getTotalUsers();
  let totalPages = Math.ceil(totalUsers.count / limit);
  return totalPages;
};
const ValidatePassword = (password) => {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
};
const UpdatePassword = async (data) => {
  let { userID, newPassword, newPlainPassword } = data;
  if (!ValidatePassword(newPassword)) {
    throw new Error(
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter and one number"
    );
  }
  if (newPassword !== newPlainPassword) {
    throw new Error("Passwords do not match");
  }
  let hashedPassword = await HashPassword(newPassword);
  return await instance.updateUserPassword({
    id: userID,
    password_hash: hashedPassword
  });
};
const ManualUpdateUserData = async (byUser, forUserId, data) => {
  let forUser = await instance.getUserById(forUserId);
  if (byUser.role !== "admin") {
    throw new Error("You do not have permission to update user");
  }
  if (data.updateType == "role") {
    return await instance.updateUserRole(forUser.id, data.role);
  } else if (data.updateType == "is_active") {
    return await instance.updateUserIsActive(forUser.id, data.is_active);
  } else if (data.updateType == "password") {
    return await UpdatePassword({
      userID: forUser.id,
      newPassword: data.password,
      newPlainPassword: data.passwordPlain
    });
  }
};
const CreateNewUser = async (currentUser, data) => {
  let acceptedRoles = ["member", "editor"];
  if (!acceptedRoles.includes(data.role)) {
    throw new Error("Invalid role");
  }
  if (currentUser.role === "member") {
    throw new Error("Only admins and editors can create new users");
  }
  if (!!!data.email) {
    throw new Error("Email cannot be empty");
  }
  if (!!!data.name) {
    throw new Error("Name cannot be empty");
  }
  if (!!!data.password) {
    throw new Error("Password cannot be empty");
  }
  if (!!!data.role) {
    throw new Error("Role cannot be empty");
  }
  if (data.password !== data.plainPassword) {
    throw new Error("Passwords do not match");
  }
  if (!ValidatePassword(data.password)) {
    throw new Error(
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter and one number"
    );
  }
  let user = {
    email: data.email,
    password_hash: await HashPassword(data.password),
    name: data.name,
    role: data.role
  };
  return await instance.insertUser(user);
};
const DeleteMonitorCompletelyUsingTag = async (tag) => {
  await instance.deleteMonitorDataByTag(tag);
  await instance.deleteIncidentMonitorsByTag(tag);
  await instance.deleteMonitorAlertsByTag(tag);
  return await instance.deleteMonitorsByTag(tag);
};
const CreateNewSubscriber = async (data) => {
  await instance.insertSubscriber(data);
  return await GetSubscriberByEmailAndType(data.subscriber_send, data.subscriber_type);
};
const GetSubscriberByEmailAndType = async (email, type) => {
  return await instance.getSubscriberByDetails(email, type);
};
const GetSubscriberByID = async (id) => {
  return await instance.getSubscriberById(id);
};
const RemoveAllSubscriptions = async (subscriber_id) => {
  return await instance.removeAllDataFromSubscriptions(subscriber_id);
};
const CreateNewSubscription = async (subscriber_id, monitors) => {
  if (!monitors || monitors.length === 0) {
    throw new Error("No monitors found");
  }
  await instance.removeAllDataFromSubscriptions(subscriber_id);
  for (let i = 0; i < monitors.length; i++) {
    let tag = monitors[i];
    let subscription = {
      subscriber_id,
      subscriptions_status: "ACTIVE",
      subscriptions_monitors: tag,
      subscriptions_meta: ""
    };
    await instance.insertSubscription(subscription);
  }
  return {
    message: "Subscriptions created successfully",
    count: monitors.length
  };
};
const UpdateSubscriberMeta = async (id, meta) => {
  return await instance.updateSubscriberMeta(id, meta);
};
const UpdateSubscriberStatus = async (id, status) => {
  return await instance.updateSubscriberStatus(id, status);
};
const GetSubscriptionsBySubscriberID = async (subscriber_id) => {
  return await instance.getSubscriptionsBySubscriberId(subscriber_id);
};
const GetMonitorsByTag = async (tag) => {
  return await instance.getMonitorsByTag(tag);
};
const GetSubscriptionTriggerByEmail = async () => {
  return await instance.getSubscriptionTriggerByType("email");
};
const CreateSubscriptionTrigger = async (data) => {
  if (data.subscription_trigger_type !== "email") {
    throw new Error("Only email trigger type is supported");
  }
  let subscriptionTrigger = await instance.getSubscriptionTriggerByType(data.subscription_trigger_type);
  if (!subscriptionTrigger) {
    await instance.insertSubscriptionTrigger({
      subscription_trigger_type: data.subscription_trigger_type,
      subscription_trigger_status: "ACTIVE",
      config: data.config
    });
  } else {
    await instance.updateSubscriptionTrigger({
      id: subscriptionTrigger.id,
      subscription_trigger_status: data.subscription_trigger_status || "ACTIVE",
      subscription_trigger_type: subscriptionTrigger.subscription_trigger_type,
      config: data.config
    });
  }
  return {
    subscription_trigger_type: data.subscription_trigger_type,
    subscription_trigger_status: data.subscription_trigger_status,
    config: data.config
  };
};
const UpdateSubscriptionTriggerStatus = async (id, status) => {
  return await instance.updateSubscriptionTriggerStatus(id, status);
};
const GetSubscribersPaginated = async (data) => {
  const page = parseInt(data.page) || 1;
  const limit = parseInt(data.limit) || 10;
  const subscriptions = await instance.getSubscriptionsPaginated(page, limit);
  const total = await instance.getTotalSubscriptionCount();
  let allTags = subscriptions.map((subscription) => subscription.subscriptions_monitors);
  let monitors = await instance.getMonitorsByTags(allTags);
  let tagMonitor = {};
  for (let i = 0; i < monitors.length; i++) {
    let m = monitors[i];
    tagMonitor[monitors[i].tag] = {
      name: m.name,
      tag: m.tag,
      image: m.image
    };
  }
  let subscriberIDObj = {};
  for (let i = 0; i < subscriptions.length; i++) {
    let subsID = subscriptions[i].subscriber_id;
    if (!subscriberIDObj[subsID]) {
      const subscriber = await instance.getSubscriberById(subscriptions[i].subscriber_id);
      subscriberIDObj[subsID] = {
        id: subscriber.id,
        email: subscriber.subscriber_send,
        status: subscriber.subscriber_status
      };
    }
    subscriptions[i].subscriber = subscriberIDObj[subsID];
    subscriptions[i].monitor = tagMonitor[subscriptions[i].subscriptions_monitors];
  }
  return {
    subscriptions,
    total
  };
};
const UpdateSubscriptionStatus = async (subscription_id, status) => {
  return await instance.updateSubscriptionStatus(subscription_id, status);
};
export {
  CreateUpdateMonitor as $,
  AddIncidentMonitor as A,
  GetSiteDataByKey as B,
  CreateIncident as C,
  DeleteMonitorCompletelyUsingTag as D,
  GetMonitoringDataAll as E,
  GetLastStatusBeforeAll as F,
  GetIncidentMonitors as G,
  GetMonitoringData as H,
  InsertMonitoringData as I,
  AggregateData as J,
  GetAllTriggers as K,
  InsertNewAlert as L,
  GetIncidentByIDDashboard as M,
  GetMonitorsParsed as N,
  IsLoggedInSession as O,
  ParseIncidentToAPIResp as P,
  UpdateUserData as Q,
  RegisterHeartbeat as R,
  SendEmailWithTemplate as S,
  ManualUpdateUserData as T,
  UpdateIncident as U,
  VerifyAPIKey as V,
  GetUserByID as W,
  UpdatePassword as X,
  CreateNewUser as Y,
  GetUserByEmail as Z,
  CreateNewInvitation as _,
  RemoveIncidentMonitor as a,
  UpdateMonitoringData as a0,
  CreateUpdateTrigger as a1,
  UpdateTriggerData as a2,
  GetAllAlertsPaginated as a3,
  GetAllAPIKeys as a4,
  CreateNewAPIKey as a5,
  UpdateApiKeyStatus as a6,
  GetIncidentsDashboard as a7,
  GetIncidentActiveComments as a8,
  GetTriggerByID as a9,
  GetAllUsersPaginated as aA,
  GetTotalUserPages as aB,
  CreateSubscriptionTrigger as aa,
  GetSubscriptionTriggerByEmail as ab,
  GetSubscribersPaginated as ac,
  UpdateSubscriptionStatus as ad,
  UpdateSubscriptionTriggerStatus as ae,
  InsertKeyValue as af,
  GetLastHeartbeat as ag,
  getSMTPTransport as ah,
  HashPassword as ai,
  GenerateToken as aj,
  ValidatePassword as ak,
  CookieConfig as al,
  VerifyPassword as am,
  IsSetupComplete as an,
  GetLocaleFromCookie as ao,
  IsEmailSetup as ap,
  GetDataGroupByDayAlternative as aq,
  GetIncidentsOpenHome as ar,
  SystemDataMessage as as,
  GetIncidentsPage as at,
  GetIncidentsPaginated as au,
  GetMonitorsByTag as av,
  GetSMTPFromENV as aw,
  GetActiveInvitationByToken as ax,
  UpdateInvitationStatusToAccepted as ay,
  CheckInvitationExists as az,
  GetIncidentComments as b,
  AddIncidentComment as c,
  UpdateCommentByID as d,
  UpdateCommentStatusByID as e,
  GetAllAnalyticsData as f,
  GetMonitors as g,
  CreateMonitor as h,
  UpdateMonitor as i,
  VerifyToken as j,
  GetSubscriberByID as k,
  RemoveAllSubscriptions as l,
  CreateNewSubscription as m,
  GetSubscriptionsBySubscriberID as n,
  GetSubscriberByEmailAndType as o,
  CreateNewSubscriber as p,
  UpdateSubscriberMeta as q,
  GetAllSiteData as r,
  GetSiteLogoURL as s,
  GenerateTokenWithExpiry as t,
  UpdateSubscriberStatus as u,
  GetLastStatusBefore as v,
  InterpolateData as w,
  GetIncidentsByIDS as x,
  GetLatestStatusActiveAll as y,
  GetLatestMonitoringData as z
};
