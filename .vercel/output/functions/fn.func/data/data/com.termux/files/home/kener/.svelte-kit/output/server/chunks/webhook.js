import { G as GetNowTimestampUTC, a as GetMinuteStartTimestampUTC, b as GetMinuteStartNowTimestampUTC, i as instance, c as GetDayStartTimestampUTC, P as ParseUptime, W as WEBHOOK } from "./db.js";
import { V as VerifyAPIKey, I as InsertMonitoringData } from "./controller.js";
const auth = async function(request) {
  const authHeader = request.headers.get("authorization");
  const authToken = authHeader?.replace("Bearer ", "");
  if (await VerifyAPIKey(authToken) === false) {
    return new Error("invalid token");
  }
  return null;
};
const store = async function(data) {
  const tag = data.tag;
  const resp = {};
  if (data.status === void 0 || ["UP", "DOWN", "DEGRADED"].indexOf(data.status) === -1) {
    return { error: "status missing", status: 400 };
  }
  if (data.latency === void 0 || isNaN(data.latency)) {
    return { error: "latency missing or not a number", status: 400 };
  }
  if (data.timestampInSeconds !== void 0 && isNaN(data.timestampInSeconds)) {
    return { error: "timestampInSeconds not a number", status: 400 };
  }
  if (data.timestampInSeconds === void 0) {
    data.timestampInSeconds = GetNowTimestampUTC();
  }
  data.timestampInSeconds = GetMinuteStartTimestampUTC(data.timestampInSeconds);
  resp.status = data.status;
  resp.latency = data.latency;
  resp.type = WEBHOOK;
  let timestamp = GetMinuteStartNowTimestampUTC();
  try {
    if (data.timestampInSeconds > timestamp) {
      throw new Error("timestampInSeconds is in future");
    }
    if (timestamp - data.timestampInSeconds > 90 * 24 * 60 * 60) {
      throw new Error("timestampInSeconds is older than 90days");
    }
  } catch (err) {
    return { error: err.message, status: 400 };
  }
  let monitor = await instance.getMonitorByTag(tag);
  if (!!!monitor) {
    return { error: "no monitor with tag found", status: 400 };
  }
  if (monitor.status != "ACTIVE") {
    return { error: "monitor with the given tag is not active", status: 400 };
  }
  await InsertMonitoringData({
    monitor_tag: tag,
    timestamp: data.timestampInSeconds,
    status: resp.status,
    latency: resp.latency,
    type: "webhook"
  });
  return { status: 200, message: "success at " + data.timestampInSeconds };
};
const GetMonitorStatusByTag = async function(tag, timestamp) {
  let monitor = await instance.getMonitorByTag(tag);
  if (!!!monitor) {
    return { error: "no monitor with tag found", status: 400 };
  }
  if (monitor.status != "ACTIVE") {
    return { error: "monitor with the given tag is not active", status: 400 };
  }
  const resp = {
    status: null,
    uptime: null,
    last_updated_at: null
  };
  const { include_degraded_in_downtime } = monitor;
  let now = GetMinuteStartNowTimestampUTC();
  if (timestamp !== null && timestamp !== void 0) {
    now = timestamp;
  }
  let start = GetDayStartTimestampUTC(now);
  let dayDataNew = await instance.getMonitoringData(tag, start, now);
  let ups = 0;
  let downs = 0;
  let degradeds = 0;
  let lastData = dayDataNew[dayDataNew.length - 1];
  for (let i = 0; i < dayDataNew.length; i++) {
    let row = dayDataNew[i];
    if (row.status == "UP") {
      ups++;
    } else if (row.status == "DEGRADED") {
      degradeds++;
    } else if (row.status == "DOWN") {
      downs++;
    }
  }
  let numerator = ups + degradeds;
  if (include_degraded_in_downtime === "YES") {
    numerator = ups;
  }
  resp.uptime = ParseUptime(numerator, ups + degradeds + downs);
  resp.last_updated_at = Number(lastData.timestamp);
  resp.status = lastData.status;
  return { status: 200, ...resp };
};
export {
  GetMonitorStatusByTag as G,
  auth as a,
  store as s
};
