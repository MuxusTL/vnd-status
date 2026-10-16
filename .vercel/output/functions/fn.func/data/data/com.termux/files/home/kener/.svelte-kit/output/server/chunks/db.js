import dotenv from "dotenv";
import crypto from "crypto";
import Knex from "knex";
dotenv.config();
process.env.NODE_ENV;
const UP = "UP";
const DOWN = "DOWN";
const DEGRADED = "DEGRADED";
const NO_DATA = "NO_DATA";
const AllRecordTypes = {
  A: 1,
  NS: 2,
  MD: 3,
  MF: 4,
  CNAME: 5,
  SOA: 6,
  MB: 7,
  MG: 8,
  MR: 9,
  NULL: 10,
  WKS: 11,
  PTR: 12,
  HINFO: 13,
  MINFO: 14,
  MX: 15,
  TXT: 16,
  RP: 17,
  AFSDB: 18,
  X25: 19,
  ISDN: 20,
  RT: 21,
  NSAP: 22,
  NSAP_PTR: 23,
  SIG: 24,
  KEY: 25,
  PX: 26,
  GPOS: 27,
  AAAA: 28,
  LOC: 29,
  NXT: 30,
  EID: 31,
  NIMLOC: 32,
  SRV: 33,
  ATMA: 34,
  NAPTR: 35,
  KX: 36,
  CERT: 37,
  A6: 38,
  DNAME: 39,
  SINK: 40,
  OPT: 41,
  APL: 42,
  DS: 43,
  SSHFP: 44,
  IPSECKEY: 45,
  RRSIG: 46,
  NSEC: 47,
  DNSKEY: 48,
  DHCID: 49,
  NSEC3: 50,
  NSEC3PARAM: 51,
  TLSA: 52,
  SMIMEA: 53,
  HIP: 55,
  NINFO: 56,
  RKEY: 57,
  TALINK: 58,
  CDS: 59,
  CDNSKEY: 60,
  OPENPGPKEY: 61,
  CSYNC: 62,
  SPF: 99,
  UINFO: 100,
  UID: 101,
  GID: 102,
  UNSPEC: 103,
  NID: 104,
  L32: 105,
  L64: 106,
  LP: 107,
  EUI48: 108,
  EUI64: 109,
  TKEY: 249,
  TSIG: 250,
  IXFR: 251,
  AXFR: 252,
  MAILB: 253,
  MAILA: 254,
  ANY: 255
};
const REALTIME = "realtime";
const TIMEOUT = "timeout";
const ERROR = "error";
const MANUAL = "manual";
const WEBHOOK = "webhook";
const DEFAULT_STATUS = "default_status";
const SIGNAL = "signal";
const INVITE_VERIFY_EMAIL = "invite_verify_email";
dotenv.config();
const databaseURL = process.env.DATABASE_URL || "sqlite://./database/kener.sqlite.db";
const databaseURLParts = databaseURL.split("://");
const databaseType = databaseURLParts[0];
const databasePath = databaseURLParts[1];
const knexOb = {
  migrations: {
    directory: "./migrations"
  },
  seeds: {
    directory: "./seeds"
  },
  databaseType
};
if (databaseType === "sqlite") {
  knexOb.client = "better-sqlite3";
  knexOb.connection = {
    filename: databasePath
  };
  knexOb.useNullAsDefault = true;
} else if (databaseType === "postgresql") {
  knexOb.client = "pg";
  knexOb.connection = databaseURL;
} else if (databaseType === "mysql") {
  knexOb.client = "mysql2";
  knexOb.connection = databaseURL;
} else {
  console.error("Invalid database type");
  process.exit(1);
}
dotenv.config();
const GetNowTimestampUTC = function() {
  const now = /* @__PURE__ */ new Date();
  const timestamp = now.getTime();
  return Math.floor(timestamp / 1e3);
};
const GetMinuteStartTimestampUTC = function(timestamp) {
  const now = new Date(timestamp * 1e3);
  const minuteStart = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    now.getMinutes(),
    0,
    0
  );
  const minuteStartTimestamp = minuteStart.getTime();
  return Math.floor(minuteStartTimestamp / 1e3);
};
const GetMinuteStartNowTimestampUTC = function() {
  const now = /* @__PURE__ */ new Date();
  const minuteStart = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    now.getMinutes(),
    0,
    0
  );
  const minuteStartTimestamp = minuteStart.getTime();
  return Math.floor(minuteStartTimestamp / 1e3);
};
const GetDayStartTimestampUTC = function(timestamp) {
  const now = new Date(timestamp * 1e3);
  const dayStart = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0));
  const dayStartTimestamp = dayStart.getTime();
  return Math.floor(dayStartTimestamp / 1e3);
};
const BeginningOfDay = (options = {}) => {
  const { date = /* @__PURE__ */ new Date(), timeZone } = options;
  const parts = Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }).formatToParts(date);
  const hour = parseInt(parts.find((i) => i.type === "hour").value);
  const minute = parseInt(parts.find((i) => i.type === "minute").value);
  const second = parseInt(parts.find((i) => i.type === "second").value);
  const dt = new Date(1e3 * Math.floor((date - hour * 36e5 - minute * 6e4 - second * 1e3) / 1e3));
  return dt.getTime() / 1e3;
};
const BeginningOfMinute = (options = {}) => {
  const { date = /* @__PURE__ */ new Date(), timeZone } = options;
  const parts = Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    second: "numeric"
  }).formatToParts(date);
  const second = parseInt(parts.find((i) => i.type === "second").value);
  const dt = new Date(1e3 * Math.floor((date - second * 1e3) / 1e3));
  return dt.getTime() / 1e3;
};
function GetWordsStartingWithDollar(text) {
  const regex = /\$\w+/g;
  const wordsArray = text.match(regex);
  return wordsArray || [];
}
const StatusObj = {
  UP: "api-up",
  DEGRADED: "api-degraded",
  DOWN: "api-down",
  MAINTENANCE: "api-maintenance",
  NO_DATA: "api-nodata"
};
const ParseUptime = function(up, all) {
  if (all === 0)
    return String("-");
  if (up == 0)
    return String("0");
  if (up == all) {
    return String((up / all * parseFloat(100)).toFixed(0));
  }
  if (up / all * 100 % 10 == 0) {
    return String((up / all * parseFloat(100)).toFixed(0));
  }
  return String((up / all * parseFloat(100)).toFixed(4));
};
function ReplaceAllOccurrences(originalString, searchString, replacement) {
  const regex = new RegExp(`\\${searchString}`, "g");
  const replacedString = originalString.replace(regex, replacement);
  return replacedString;
}
function GetRequiredSecrets(str) {
  let envSecrets = [];
  const requiredSecrets = GetWordsStartingWithDollar(str).map((x) => x.substr(1));
  for (const [key, value] of Object.entries(process.env)) {
    if (requiredSecrets.indexOf(key) !== -1) {
      envSecrets.push({
        find: `$${key}`,
        replace: value
      });
    }
  }
  return envSecrets;
}
function Wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function MaskString(str) {
  if (str.length <= 4) {
    return "*".repeat(str.length);
  }
  return "*".repeat(str.length - 4) + str.slice(-4);
}
function GetDbType() {
  return knexOb.databaseType;
}
function HashString(str) {
  const hash = crypto.createHash("sha256");
  hash.update(str);
  return hash.digest("hex");
}
function ValidateEmail(email) {
  const regex = /^(?:(?:[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+\.)*[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+)@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}|(?:\[(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)(?:\.(?!$)|$)){4}\]))$/;
  return regex.test(email);
}
function GenerateRandomNumber(digits) {
  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
class DbImpl {
  knex;
  constructor(opts) {
    this.knex = Knex(opts);
    this.init();
  }
  async init() {
  }
  async insertMonitoringData(data) {
    const { monitor_tag, timestamp, status, latency, type } = data;
    return await this.knex("monitoring_data").insert({ monitor_tag, timestamp, status, latency, type }).onConflict(["monitor_tag", "timestamp"]).merge({ status, latency, type });
  }
  //given monitor_tag, start and end timestamp in utc seconds return data
  async getMonitoringData(monitor_tag, start, end) {
    return await this.knex("monitoring_data").where("monitor_tag", monitor_tag).where("timestamp", ">=", start).where("timestamp", "<=", end).orderBy("timestamp", "asc");
  }
  //given monitor_tags array of string, start and end timestamp in utc seconds return data
  async getMonitoringDataAll(monitor_tags, start, end) {
    return await this.knex("monitoring_data").whereIn("monitor_tag", monitor_tags).where("timestamp", ">=", start).where("timestamp", "<=", end).orderBy("timestamp", "asc");
  }
  //get latest data for a monitor_tag
  async getLatestMonitoringData(monitor_tag) {
    return await this.knex("monitoring_data").where("monitor_tag", monitor_tag).orderBy("timestamp", "desc").limit(1).first();
  }
  //get data at time stamp
  async getMonitoringDataAt(monitor_tag, timestamp) {
    return await this.knex("monitoring_data").where("monitor_tag", monitor_tag).where("timestamp", timestamp).orderBy("timestamp", "desc").limit(1).first();
  }
  //get latest data for all active monitors
  async getLatestMonitoringDataAllActive(monitor_tags) {
    const latestTimestamps = await this.knex("monitoring_data").select("monitor_tag").select(this.knex.raw("MAX(timestamp) as max_timestamp")).whereIn("monitor_tag", monitor_tags).groupBy("monitor_tag");
    if (!latestTimestamps || latestTimestamps.length === 0) {
      return [];
    }
    const conditions = latestTimestamps.map((item) => {
      return function() {
        this.where(function() {
          this.where("monitor_tag", item.monitor_tag).andWhere("timestamp", item.max_timestamp);
        });
      };
    });
    let query = this.knex("monitoring_data").where(conditions[0]);
    for (let i = 1; i < conditions.length; i++) {
      query = query.orWhere(conditions[i]);
    }
    return await query;
  }
  async getLastHeartbeat(monitor_tag) {
    return await this.knex("monitoring_data").where("monitor_tag", monitor_tag).where("type", SIGNAL).orderBy("timestamp", "desc").limit(1).first();
  }
  //given monitor_tag, start and end timestamp in utc seconds return total degraded, up, down, avg(latency), max(latency), min(latency)
  async getAggregatedMonitoringData(monitor_tag, start, end) {
    return await this.knex("monitoring_data").select(
      this.knex.raw("COUNT(CASE WHEN status = 'DEGRADED' THEN 1 END) as DEGRADED"),
      this.knex.raw("COUNT(CASE WHEN status = 'UP' THEN 1 END) as UP"),
      this.knex.raw("COUNT(CASE WHEN status = 'DOWN' THEN 1 END) as DOWN"),
      this.knex.raw("AVG(latency) as avg_latency"),
      this.knex.raw("MAX(latency) as max_latency"),
      this.knex.raw("MIN(latency) as min_latency")
    ).where("monitor_tag", monitor_tag).where("timestamp", ">=", start).where("timestamp", "<=", end).first();
  }
  //get the last status before the timestamp given monitor_tag and start timestamp
  async getLastStatusBefore(monitor_tag, timestamp) {
    return await this.knex("monitoring_data").where("monitor_tag", monitor_tag).where("timestamp", "<", timestamp).orderBy("timestamp", "desc").limit(1).first();
  }
  //get the last status before the timestamp given monitor_tag and start timestamp
  async getLastStatusBeforeAll(monitor_tags, timestamp) {
    return await this.knex("monitoring_data").whereIn("monitor_tag", monitor_tags).where("timestamp", "<", timestamp).orderBy("timestamp", "desc").limit(1).first();
  }
  async getDataGroupByDayAlternative(monitor_tag, start, end) {
    const data = await this.knex("monitoring_data").select("timestamp", "status", "latency").where("monitor_tag", monitor_tag).andWhere("timestamp", ">=", start).andWhere("timestamp", "<=", end).orderBy("timestamp", "asc");
    return data;
  }
  async getLastStatusBeforeCombined(monitor_tags_arr, timestamp, minTimestamp) {
    let query = this.knex("monitoring_data").select(
      "timestamp",
      this.knex.raw("COUNT(*) as total_entries"),
      this.knex.raw("AVG(latency) as latency"),
      this.knex.raw(`
				CASE 
				WHEN SUM(CASE WHEN status = 'DOWN' THEN 1 ELSE 0 END) > 0 THEN 'DOWN'
				WHEN SUM(CASE WHEN status = 'DEGRADED' THEN 1 ELSE 0 END) > 0 THEN 'DEGRADED'
				ELSE 'UP'
				END as status
			`)
    ).whereIn("monitor_tag", monitor_tags_arr);
    if (!!minTimestamp) {
      query = query.whereBetween("timestamp", [minTimestamp, timestamp]);
    } else {
      query = query.where("timestamp", "=", timestamp);
    }
    return await query.groupBy("timestamp").havingRaw("COUNT(*) = ?", [monitor_tags_arr.length]).orderBy("timestamp", "desc").limit(1).first();
  }
  async background() {
    let ninetyDaysAgo = GetMinuteStartNowTimestampUTC() - 86400 * 100;
    return await this.knex("monitoring_data").where("timestamp", "<", ninetyDaysAgo).del();
  }
  async consecutivelyStatusFor(monitor_tag, status, lastX) {
    const result = await this.knex.with("last_records", (qb) => {
      qb.select("*").from("monitoring_data").where("monitor_tag", monitor_tag).andWhere("type", "!=", MANUAL).orderBy("timestamp", "desc").limit(lastX);
    }).select(
      this.knex.raw(
        "CASE WHEN COUNT(*) <= SUM(CASE WHEN status = ? THEN 1 ELSE 0 END) THEN 1 ELSE 0 END as is_affected",
        [status]
      )
    ).from("last_records").first();
    return result.is_affected === 1;
  }
  //insert alert
  async insertAlert(data) {
    return await this.knex("monitor_alerts").insert({
      monitor_tag: data.monitor_tag,
      monitor_status: data.monitor_status,
      alert_status: data.alert_status,
      health_checks: data.health_checks
    });
  }
  //given incident_number check if there is an alert
  async alertExistsIncident(incident_number) {
    const result = await this.knex("monitor_alerts").count("* as count").where({
      incident_number
    }).first();
    return result.count > 0;
  }
  //check if alert exists given monitor_tag, monitor_status, trigger_status
  async alertExists(monitor_tag, monitor_status, alert_status) {
    const result = await this.knex("monitor_alerts").count("* as count").where({
      monitor_tag,
      monitor_status,
      alert_status
    }).first();
    return result.count > 0;
  }
  //get active alert given incident id, monitor tag, monitor status
  async getActiveAlertIncident(monitor_tag, monitor_status, incident_number) {
    return await this.knex("monitor_alerts").where({
      monitor_tag,
      monitor_status,
      incident_number
    }).first();
  }
  //get active alert given incident id, monitor tag, monitor status
  async getAllActiveAlertIncidents(monitor_tag) {
    return await this.knex("monitor_alerts").where({
      monitor_tag,
      alert_status: "TRIGGERED"
    }).andWhere("incident_number", ">", 0).orderBy("id", "desc");
  }
  //return active alert for a monitor_tag, monitor_status, trigger_status = ACTIVE
  async getActiveAlert(monitor_tag, monitor_status, alert_status) {
    return await this.knex("monitor_alerts").where({
      monitor_tag,
      monitor_status,
      alert_status
    }).first();
  }
  //get all monitor_alerts paginated descending order
  async getMonitorAlertsPaginated(page, limit) {
    return await this.knex("monitor_alerts").orderBy("id", "desc").limit(limit).offset((page - 1) * limit);
  }
  //get total count of monitor_alerts
  async getMonitorAlertsCount() {
    return await this.knex("monitor_alerts").count("* as count").first();
  }
  //getMonitorsByTags array of string
  async getMonitorsByTags(tags) {
    return await this.knex("monitors").whereIn("tag", tags);
  }
  async getMonitorsByTag(tag) {
    return await this.knex("monitors").where("tag", tag).first();
  }
  //get incidents paginated and direction, given a start timestamp, also might have filter on incident_type, incident_source
  async getIncidentsPaginated(page, limit, filter, direction = "after") {
    let query = this.knex("incidents").select("*").whereRaw("1=1");
    if (filter && filter.status) {
      query = query.andWhere("status", filter.status);
    }
    if (filter && filter.start && direction === "after") {
      query = query.andWhere("start_date_time", ">=", filter.start);
    }
    if (filter && filter.start && direction === "before") {
      query = query.andWhere("start_date_time", "<=", filter.start);
    }
    if (filter && filter.end && direction === "after") {
      query = query.andWhere("start_date_time", ">=", filter.end);
    }
    if (filter && filter.end && direction === "before") {
      query = query.andWhere("start_date_time", "<=", filter.end);
    }
    if (filter && filter.state) {
      query = query.andWhere("state", filter.state);
    }
    if (filter && filter.id) {
      query = query.andWhere("id", filter.id);
    }
    if (filter && filter.incident_type) {
      query = query.andWhere("incident_type", filter.incident_type);
    }
    if (filter && filter.incident_source) {
      query = query.andWhere("incident_source", filter.incident_source);
    }
    if (direction === "after") {
      query = query.orderBy("start_date_time", "asc").limit(limit).offset((page - 1) * limit);
    } else {
      query = query.orderBy("start_date_time", "desc").limit(limit).offset((page - 1) * limit);
    }
    return await query;
  }
  //update alert to inactive given monitor_tag, monitor_status, given id
  async updateAlertStatus(id, alert_status) {
    return await this.knex("monitor_alerts").where({ id }).update({
      alert_status,
      updated_at: this.knex.fn.now()
    });
  }
  //increment health_checks for an alert given id
  async incrementAlertHealthChecks(id) {
    return await this.knex("monitor_alerts").where({ id }).increment("health_checks", 1).update({ updated_at: this.knex.fn.now() });
  }
  //add incident_number to an alert given id
  async addIncidentNumberToAlert(id, incident_number) {
    return await this.knex("monitor_alerts").where({ id }).update({
      incident_number,
      updated_at: this.knex.fn.now()
    });
  }
  //insert or update site data
  async insertOrUpdateSiteData(key, value, data_type) {
    return await this.knex("site_data").insert({ key, value, data_type }).onConflict("key").merge({ value, updated_at: this.knex.fn.now() });
  }
  //get all site data
  async getAllSiteData() {
    return await this.knex("site_data");
  }
  //given key get data
  async getSiteData(key) {
    return await this.knex("site_data").select("value").where("key", key).first();
  }
  async getSiteDataByKey(key) {
    return await this.knex("site_data").where("key", key).first();
  }
  //get site data that starts with analytics.
  async getAllSiteDataAnalytics() {
    return await this.knex("site_data").where("key", "like", "analytics.%");
  }
  //insert into monitors
  async insertMonitor(data) {
    return await this.knex("monitors").insert({
      tag: data.tag,
      name: data.name,
      description: data.description,
      image: data.image,
      cron: data.cron,
      default_status: data.default_status,
      status: data.status,
      category_name: data.category_name,
      monitor_type: data.monitor_type,
      type_data: data.type_data,
      day_degraded_minimum_count: data.day_degraded_minimum_count,
      day_down_minimum_count: data.day_down_minimum_count,
      include_degraded_in_downtime: data.include_degraded_in_downtime,
      created_at: this.knex.fn.now(),
      updated_at: this.knex.fn.now()
    });
  }
  //update monitor by id
  async updateMonitor(data) {
    return await this.knex("monitors").where({ id: data.id }).update({
      tag: data.tag,
      name: data.name,
      description: data.description,
      image: data.image,
      cron: data.cron,
      default_status: data.default_status,
      status: data.status,
      category_name: data.category_name,
      monitor_type: data.monitor_type,
      type_data: data.type_data,
      day_degraded_minimum_count: data.day_degraded_minimum_count,
      day_down_minimum_count: data.day_down_minimum_count,
      include_degraded_in_downtime: data.include_degraded_in_downtime,
      updated_at: this.knex.fn.now()
    });
  }
  //given monitor_tag, start and end timestamp and a status, update all monitoring data with this status
  async updateMonitoringData(monitor_tag, start, end, newStatus, type) {
    const count = Math.floor((end - start) / 60) + 1;
    const timestamps = Array.from({ length: count }, (_, i) => start + i * 60);
    const records = timestamps.map((ts) => ({
      monitor_tag,
      timestamp: ts,
      status: newStatus,
      type,
      latency: 0
    }));
    const batchSize = 500;
    return await this.knex.transaction(async (trx) => {
      const results = [];
      for (let i = 0; i < records.length; i += batchSize) {
        const batch = records.slice(i, i + batchSize);
        const result = await trx("monitoring_data").insert(batch).onConflict(["monitor_tag", "timestamp"]).merge({ status: newStatus });
        results.push(result);
      }
      return results;
    });
  }
  async updateMonitorTrigger(data) {
    return await this.knex("monitors").where({ id: data.id }).update({
      down_trigger: data.down_trigger,
      degraded_trigger: data.degraded_trigger,
      updated_at: this.knex.fn.now()
    });
  }
  //get monitors given status
  async getMonitors(data) {
    let query = this.knex("monitors").whereRaw("1=1");
    if (!!data.status) {
      query = query.andWhere("status", data.status);
    }
    if (data.category_name && data.category_name !== "All Categories") {
      query = query.andWhere("category_name", data.category_name);
    }
    if (!!data.id) {
      query = query.andWhere("id", data.id);
    }
    if (!!data.monitor_type) {
      query = query.andWhere("monitor_type", data.monitor_type);
    }
    if (!!data.tag) {
      query = query.andWhere("tag", data.tag);
    }
    if (!!data.tags) {
      query = query.andWhere((builder) => {
        builder.whereIn("tag", data.tags);
      });
    }
    return await query.orderBy("id", "desc");
  }
  //get monitor by tag
  async getMonitorByTag(tag) {
    return await this.knex("monitors").where("tag", tag).first();
  }
  //insert alert
  async createNewTrigger(data) {
    return await this.knex("triggers").insert({
      name: data.name,
      trigger_type: data.trigger_type,
      trigger_status: data.trigger_status,
      trigger_meta: data.trigger_meta,
      trigger_desc: data.trigger_desc,
      created_at: this.knex.fn.now(),
      updated_at: this.knex.fn.now()
    });
  }
  //update alert
  async updateTrigger(data) {
    return await this.knex("triggers").where({ id: data.id }).update({
      name: data.name,
      trigger_type: data.trigger_type,
      trigger_status: data.trigger_status,
      trigger_desc: data.trigger_desc,
      trigger_meta: data.trigger_meta,
      updated_at: this.knex.fn.now()
    });
  }
  //get all alerts with given status
  async getTriggers(data) {
    let query = this.knex("triggers").whereRaw("1=1");
    if (!!data.status) {
      query = query.andWhere("trigger_status", data.status);
    }
    if (!!data.id) {
      query = query.andWhere("id", data.id);
    }
    return await query.orderBy("id", "desc");
  }
  //get trigger by id
  async getTriggerByID(id) {
    return await this.knex("triggers").where("id", id).first();
  }
  //get count of users
  async getUsersCount() {
    return await this.knex("users").count("* as count").first();
  }
  // get user by email, do not return password_hash
  async getUserByEmail(email) {
    return await this.knex("users").select("id", "email", "name", "is_active", "is_verified", "role", "created_at", "updated_at").where("email", email).first();
  }
  async getUserPasswordHashById(id) {
    return await this.knex("users").select("password_hash").where("id", id).first();
  }
  //get user name, email from users given id
  async getUserById(id) {
    return await this.knex("users").select("id", "email", "name", "is_active", "is_verified", "role", "created_at", "updated_at").where("id", id).first();
  }
  //insert user
  async insertUser(data) {
    return await this.knex("users").insert({
      email: data.email,
      name: data.name,
      password_hash: data.password_hash,
      role: data.role,
      created_at: this.knex.fn.now(),
      updated_at: this.knex.fn.now()
    });
  }
  //update password
  async updateUserPassword(data) {
    return await this.knex("users").where({ id: data.id }).update({
      password_hash: data.password_hash,
      updated_at: this.knex.fn.now()
    });
  }
  //get all columns of users except password_hash order by create at
  async getAllUsers() {
    return await this.knex("users").select("id", "email", "name", "role", "is_active", "is_verified", "created_at", "updated_at").orderBy("created_at", "desc");
  }
  //get all users paginated
  async getUsersPaginated(page, limit) {
    return await this.knex("users").select("id", "email", "name", "role", "is_active", "is_verified", "created_at", "updated_at").orderBy("created_at", "desc").limit(limit).offset((page - 1) * limit);
  }
  //getTotalUsers
  async getTotalUsers() {
    return await this.knex("users").count("* as count").first();
  }
  //new api key
  async createNewApiKey(data) {
    return await this.knex("api_keys").insert({
      name: data.name,
      hashed_key: data.hashed_key,
      masked_key: data.masked_key,
      created_at: this.knex.fn.now(),
      updated_at: this.knex.fn.now()
    });
  }
  //update status of api key
  async updateApiKeyStatus(data) {
    return await this.knex("api_keys").where({ id: data.id }).update({
      status: data.status,
      updated_at: this.knex.fn.now()
    });
  }
  //get key by hashed_key
  async getApiKeyByHashedKey(hashed_key) {
    return await this.knex("api_keys").where("hashed_key", hashed_key).first();
  }
  //get all api keys
  async getAllApiKeys() {
    return await this.knex("api_keys").orderBy("id", "desc");
  }
  //close
  async close() {
    return await this.knex.destroy();
  }
  async createIncident(data) {
    const dbType = GetDbType();
    const insertData = {
      title: data.title,
      start_date_time: data.start_date_time,
      end_date_time: data.end_date_time,
      status: data.status,
      state: data.state,
      created_at: this.knex.fn.now(),
      updated_at: this.knex.fn.now(),
      incident_type: data.incident_type,
      incident_source: data.incident_source
    };
    if (dbType === "postgresql") {
      const [incident] = await this.knex("incidents").insert(insertData).returning("*");
      return incident;
    } else {
      const result = await this.knex("incidents").insert(insertData);
      let id = result[0];
      const incident = await this.knex("incidents").where("id", id).first();
      return incident;
    }
  }
  //get incidents paginated
  async getIncidentsPaginatedDesc(page, limit, filter) {
    let query = this.knex("incidents").select("*").whereRaw("1=1");
    if (filter && filter.status) {
      query = query.andWhere("status", filter.status);
    }
    if (filter && filter.start) {
      query = query.andWhere("start_date_time", ">=", filter.start);
    }
    if (filter && filter.end) {
      query = query.andWhere("start_date_time", "<=", filter.end);
    }
    if (filter && filter.state) {
      query = query.andWhere("state", filter.state);
    }
    if (filter && filter.id) {
      query = query.andWhere("id", filter.id);
    }
    query = query.orderBy("id", "desc").limit(limit).offset((page - 1) * limit);
    return await query;
  }
  //get last 10 recent updated incidents
  async getRecentUpdatedIncidents(limit, start, end) {
    return await this.knex("incidents").where("status", "OPEN").andWhere("start_date_time", ">=", start).andWhere("start_date_time", "<=", end).orderBy("updated_at", "desc").limit(limit);
  }
  //get id of first incident less than given start_date_time
  async getPreviousIncidentId(start_date_time) {
    return await this.knex("incidents").select("id").where("start_date_time", "<", start_date_time).orderBy("start_date_time", "desc").first();
  }
  //get incidents where ts between start and end
  async getIncidentsBetween(start, end) {
    return await this.knex("incidents").where("status", "OPEN").andWhere("start_date_time", ">=", start).andWhere("start_date_time", "<=", end).orderBy("start_date_time", "asc");
  }
  //get total incident count
  async getIncidentsCount(filter) {
    let query = this.knex("incidents").count("* as count");
    if (filter && filter.status) {
      query = query.where("status", filter.status);
    }
    return await query.first();
  }
  //update incident given id
  async updateIncident(data) {
    return await this.knex("incidents").where({ id: data.id }).update({
      title: data.title,
      start_date_time: data.start_date_time,
      end_date_time: data.end_date_time,
      status: data.status,
      state: data.state,
      updated_at: this.knex.fn.now()
    });
  }
  //set incident end time to null
  async setIncidentEndTimeToNull(id) {
    return await this.knex("incidents").where({ id }).update({
      end_date_time: null,
      updated_at: this.knex.fn.now()
    });
  }
  async insertIncidentMonitor(data) {
    return await this.knex("incident_monitors").insert({
      monitor_tag: data.monitor_tag,
      monitor_impact: data.monitor_impact,
      incident_id: data.incident_id
    });
  }
  //get incident by id
  async getIncidentById(id) {
    return await this.knex("incidents").select(
      "id",
      "title",
      "start_date_time",
      "end_date_time",
      "created_at",
      "updated_at",
      "status",
      "state",
      "incident_type"
    ).where("id", id).first();
  }
  //get incident_monitors by incident_id
  async getIncidentMonitorsByIncidentID(incident_id) {
    return await this.knex("incident_monitors").select("monitor_tag", "monitor_impact").where("incident_id", incident_id);
  }
  //given a monitor tag get incidents last 90 days status = OPEN
  async getIncidentsByMonitorTag(monitor_tag, start, end) {
    return await this.knex("incidents as i").select(
      "i.id as id",
      "i.title as title",
      "i.start_date_time as start_date_time",
      "i.end_date_time as end_date_time",
      "i.created_at as created_at",
      "i.updated_at as updated_at",
      "i.status as status",
      "i.state as state",
      "i.incident_type as incident_type",
      "im.monitor_impact"
    ).innerJoin("incident_monitors as im", "i.id", "im.incident_id").where("im.monitor_tag", monitor_tag).andWhere("i.start_date_time", ">=", start).andWhere("i.start_date_time", "<=", end).andWhere("i.status", "OPEN");
  }
  //given a timestamp get incidents that are open and start time is less than given timestamp
  async getIncidentsByMonitorTagRealtime(monitor_tag, timestamp) {
    return await this.knex("incidents as i").select(
      "i.id as id",
      "i.start_date_time as start_date_time",
      "i.end_date_time as end_date_time",
      "im.monitor_impact"
    ).innerJoin("incident_monitors as im", "i.id", "im.incident_id").where("im.monitor_tag", monitor_tag).andWhere("i.start_date_time", "<=", timestamp).andWhere("i.status", "OPEN").andWhere("i.incident_type", "INCIDENT").andWhere("i.state", "!=", "RESOLVED").andWhere("i.incident_source", "!=", "ALERT");
  }
  //get maintenance incidents by monitor tag
  async getMaintenanceByMonitorTagRealtime(monitor_tag, timestamp) {
    return await this.knex("incidents as i").select(
      "i.id as id",
      "i.start_date_time as start_date_time",
      "i.end_date_time as end_date_time",
      "im.monitor_impact"
    ).innerJoin("incident_monitors as im", "i.id", "im.incident_id").where("im.monitor_tag", monitor_tag).andWhere("i.start_date_time", "<=", timestamp).andWhere("i.end_date_time", ">=", timestamp).andWhere("i.status", "OPEN").andWhere("i.incident_type", "MAINTENANCE").andWhere("i.state", "=", "RESOLVED").andWhere("i.incident_source", "!=", "ALERT");
  }
  //given array of ids get incidents
  async getIncidentsByIds(ids) {
    return await this.knex("incidents").whereIn("id", ids).andWhere("status", "OPEN");
  }
  //remove monitor tag from incident given incident_id and monitor_tag
  async removeIncidentMonitor(incident_id, monitor_tag) {
    return await this.knex("incident_monitors").where({ incident_id, monitor_tag }).del();
  }
  //add monitor tag to incident given incident_id and monitor_tag along with monitor_impact
  async insertIncidentMonitor(incident_id, monitor_tag, monitor_impact) {
    return await this.knex("incident_monitors").insert({ monitor_tag, monitor_impact, incident_id }).onConflict(["monitor_tag", "incident_id"]).merge({ monitor_impact, updated_at: this.knex.fn.now() });
  }
  //insert incident_comment
  async insertIncidentComment(incident_id, comment, state, commented_at) {
    return await this.knex("incident_comments").insert({
      comment,
      incident_id,
      state,
      commented_at,
      created_at: this.knex.fn.now(),
      updated_at: this.knex.fn.now()
    });
  }
  //get comments for an incident
  async getIncidentComments(incident_id) {
    return await this.knex("incident_comments").where("incident_id", incident_id).orderBy("commented_at", "desc");
  }
  //get active comments
  async getActiveIncidentComments(incident_id) {
    return await this.knex("incident_comments").where("incident_id", incident_id).andWhere("status", "ACTIVE").orderBy("commented_at", "desc");
  }
  //get comment by id and incident_id
  async getIncidentCommentByIDAndIncident(incident_id, id) {
    return await this.knex("incident_comments").where({ incident_id, id }).first();
  }
  //update incident comment
  async updateIncidentCommentByID(id, comment, state, commented_at) {
    return await this.knex("incident_comments").where({ id }).update({
      comment,
      state,
      commented_at,
      updated_at: this.knex.fn.now()
    });
  }
  //update status of incident comment
  async updateIncidentCommentStatusByID(id, status) {
    return await this.knex("incident_comments").where({ id }).update({
      status,
      updated_at: this.knex.fn.now()
    });
  }
  //getIncidentCommentByID
  async getIncidentCommentByID(id) {
    return await this.knex("incident_comments").where({ id }).first();
  }
  //update users.name by id
  async updateUserName(id, name) {
    return await this.knex("users").where({ id }).update({
      name,
      updated_at: this.knex.fn.now()
    });
  }
  //updateUserRole
  async updateUserRole(id, role) {
    return await this.knex("users").where({ id }).update({
      role,
      updated_at: this.knex.fn.now()
    });
  }
  //update is_active
  async updateUserIsActive(id, is_active) {
    return await this.knex("users").where({ id }).update({
      is_active,
      updated_at: this.knex.fn.now()
    });
  }
  //update password
  async updateUserPassword(data) {
    return await this.knex("users").where({ id: data.id }).update({
      password_hash: data.password_hash,
      updated_at: this.knex.fn.now()
    });
  }
  async updateIsVerified(id, is_verified) {
    return await this.knex("users").where({ id }).update({
      is_verified,
      updated_at: this.knex.fn.now()
    });
  }
  //insert into invitations
  async insertInvitation(data) {
    return await this.knex("invitations").insert({
      invitation_token: data.invitation_token,
      invitation_type: data.invitation_type,
      invited_user_id: data.invited_user_id,
      invited_by_user_id: data.invited_by_user_id,
      invitation_meta: data.invitation_meta,
      invitation_expiry: data.invitation_expiry,
      invitation_status: data.invitation_status,
      created_at: this.knex.fn.now(),
      updated_at: this.knex.fn.now()
    });
  }
  //update invitation_status of all invitations for invited_user_id, given invitation_type to VOID
  async updateInvitationStatusToVoid(invited_user_id, invitation_type) {
    return await this.knex("invitations").where({ invited_user_id, invitation_type }).update({
      invitation_status: "VOID",
      updated_at: this.knex.fn.now()
    });
  }
  //check if there is a row for given invited_user_id,invitation_type and invitation_status = PENDING
  async invitationExists(invited_user_id, invitation_type) {
    const result = await this.knex("invitations").count("* as count").where({
      invited_user_id,
      invitation_type,
      invitation_status: "PENDING"
    }).first();
    return result.count > 0;
  }
  //update invitation_status of invitation given invitation_token to ACCEPTED
  async updateInvitationStatusToAccepted(invitation_token) {
    return await this.knex("invitations").where({ invitation_token }).update({
      invitation_status: "ACCEPTED",
      updated_at: this.knex.fn.now()
    });
  }
  //get invitations by token, the invitation should be PENDING, and it should not be expired
  async getActiveInvitationByToken(invitation_token) {
    return await this.knex("invitations").where("invitation_token", invitation_token).andWhere("invitation_status", "PENDING").andWhere("invitation_expiry", ">", this.knex.fn.now()).first();
  }
  //delete from monitor_data using tag
  async deleteMonitorDataByTag(tag) {
    return await this.knex("monitoring_data").where("monitor_tag", tag).del();
  }
  //delete from incident monitors using tag
  async deleteIncidentMonitorsByTag(tag) {
    return await this.knex("incident_monitors").where("monitor_tag", tag).del();
  }
  //delete from monitor alerts using tag
  async deleteMonitorAlertsByTag(tag) {
    return await this.knex("monitor_alerts").where("monitor_tag", tag).del();
  }
  //delete from monitors using tag
  async deleteMonitorsByTag(tag) {
    return await this.knex("monitors").where("tag", tag).del();
  }
  //insert into subscribers
  async insertSubscriber(data) {
    return await this.knex("subscribers").insert({
      subscriber_send: data.subscriber_send,
      subscriber_meta: data.subscriber_meta,
      subscriber_type: data.subscriber_type,
      subscriber_status: data.subscriber_status,
      created_at: this.knex.fn.now(),
      updated_at: this.knex.fn.now()
    });
  }
  //update subscriber_meta given id
  async updateSubscriberMeta(id, subscriber_meta) {
    return await this.knex("subscribers").where({ id }).update({
      subscriber_meta,
      updated_at: this.knex.fn.now()
    });
  }
  //update subscriber_status given id
  async updateSubscriberStatus(id, subscriber_status) {
    return await this.knex("subscribers").where({ id }).update({
      subscriber_status,
      updated_at: this.knex.fn.now()
    });
  }
  //delete subscriber by id
  async deleteSubscriberById(id) {
    return await this.knex("subscribers").where({ id }).del();
  }
  //insert into subscriptions table
  async insertSubscription(data) {
    return await this.knex("subscriptions").insert({
      subscriber_id: data.subscriber_id,
      subscriptions_status: data.subscriptions_status,
      subscriptions_monitors: data.subscriptions_monitors,
      subscriptions_meta: data.subscriptions_meta,
      created_at: this.knex.fn.now(),
      updated_at: this.knex.fn.now()
    });
  }
  //given subscriber_id remove all data from subscriptions
  async removeAllDataFromSubscriptions(subscriber_id) {
    return await this.knex("subscriptions").where({ subscriber_id }).del();
  }
  //get subscriptions by subscriber_id
  async getSubscriptionsBySubscriberId(subscriber_id) {
    return await this.knex("subscriptions").where("subscriber_id", subscriber_id).orderBy("id", "desc");
  }
  //update subscription status
  async updateSubscriptionStatus(id, subscriptions_status) {
    return await this.knex("subscriptions").where({ id }).update({
      subscriptions_status,
      updated_at: this.knex.fn.now()
    });
  }
  //get all subscribers with active status
  async getAllActiveSubscribers() {
    return await this.knex("subscribers").where("subscriber_status", "ACTIVE");
  }
  //get subscriptions for a monitor tag
  async getSubscriptionsForMonitor(monitor_tag) {
    return await this.knex("subscriptions as s").join("subscribers as sub", "s.subscriber_id", "sub.id").where("s.subscriptions_status", "ACTIVE").where("sub.subscriber_status", "ACTIVE").whereRaw("s.subscriptions_monitors = ? OR s.subscriptions_monitors = 'ALL'", [monitor_tag]).select("sub.subscriber_send", "sub.subscriber_type", "sub.subscriber_meta", "s.subscriptions_meta");
  }
  //get subscriber by subscriber_send and subscriber_type
  async getSubscriberByDetails(subscriber_send, subscriber_type) {
    return await this.knex("subscribers").where({
      subscriber_send,
      subscriber_type
    }).first();
  }
  //get all subscribers by type
  async getSubscribersByType(subscriber_type) {
    return await this.knex("subscribers").where("subscriber_type", subscriber_type).orderBy("id", "desc");
  }
  //get subscriptions paginated
  async getSubscriptionsPaginated(page, limit) {
    return await this.knex("subscriptions").select(
      "id",
      "subscriber_id",
      "subscriptions_status",
      "subscriptions_monitors",
      "subscriptions_meta",
      "created_at"
    ).orderBy("id", "desc").limit(limit).offset((page - 1) * limit);
  }
  //get total subscription count
  async getTotalSubscriptionCount() {
    const result = await this.knex("subscriptions").count("* as count").first();
    return result.count || 0;
  }
  //get all subscriber emails from subscriptions table that are of given tag or = _
  async getSubscriberEmails(monitor_tags) {
    return await this.knex("subscriptions").join("subscribers", "subscribers.id", "subscriptions.subscriber_id").distinct("subscribers.subscriber_send as subscriber_send").where("subscriptions.subscriptions_status", "ACTIVE").whereIn("subscriptions.subscriptions_monitors", monitor_tags).orderBy("subscriber_send");
  }
  //getSubscriberById
  async getSubscriberById(id) {
    return await this.knex("subscribers").select("id", "subscriber_send", "subscriber_meta", "subscriber_type", "subscriber_status", "created_at").where("id", id).first();
  }
  // Get subscribers paginated
  async getSubscribersPaginated(page, limit) {
    const subquery = this.knex("subscribers").select("id").orderBy("created_at", "desc").limit(limit).offset((page - 1) * limit).as("paginated_subscribers");
    const dbType = GetDbType();
    const aggregationFunction = dbType === "postgresql" ? "STRING_AGG" : "GROUP_CONCAT";
    const results = await this.knex("subscribers as s").select(
      "s.id",
      "s.subscriber_send",
      "s.subscriber_status",
      "s.created_at",
      // Aggregate monitor tags based on DB type
      this.knex.raw(`${aggregationFunction}(sub.subscriptions_monitors, ',') as monitors_agg`)
    ).innerJoin(subquery, "s.id", "paginated_subscribers.id").leftJoin("subscriptions as sub", "s.id", "sub.subscriber_id").groupBy("s.id", "s.subscriber_send", "s.subscriber_status", "s.created_at").orderBy("s.created_at", "desc");
    return results.map((row) => ({
      ...row,
      subscriptions_monitors: row.monitors_agg ? row.monitors_agg.split(",") : [],
      // Split string into array, handle null
      monitors_agg: void 0
      // Remove the temporary aggregation field
    }));
  }
  // Get total count of subscribers
  async getSubscribersCount() {
    const result = await this.knex("subscribers").count("* as count").first();
    return result.count || 0;
  }
  // CRUD operations for subscription_triggers
  async insertSubscriptionTrigger(data) {
    return await this.knex("subscription_triggers").insert({
      subscription_trigger_type: data.subscription_trigger_type,
      subscription_trigger_status: data.subscription_trigger_status,
      config: data.config,
      created_at: this.knex.fn.now(),
      updated_at: this.knex.fn.now()
    });
  }
  async getSubscriptionTriggerById(id) {
    return await this.knex("subscription_triggers").where({ id }).first();
  }
  async getAllSubscriptionTriggers() {
    return await this.knex("subscription_triggers").orderBy("id", "desc");
  }
  // get a single subscription_trigger by type
  async getSubscriptionTriggerByType(subscription_trigger_type) {
    return await this.knex("subscription_triggers").where("subscription_trigger_type", subscription_trigger_type).first();
  }
  async updateSubscriptionTrigger(data) {
    return await this.knex("subscription_triggers").where({ id: data.id }).update({
      subscription_trigger_type: data.subscription_trigger_type,
      subscription_trigger_status: data.subscription_trigger_status,
      config: data.config,
      updated_at: this.knex.fn.now()
    });
  }
  async updateSubscriptionTriggerStatus(id, subscription_trigger_status) {
    return await this.knex("subscription_triggers").where({ id }).update({
      subscription_trigger_status,
      updated_at: this.knex.fn.now()
    });
  }
  //deleteSubscriptionTriggerByType
  async deleteSubscriptionTriggerByType(subscription_trigger_type) {
    return await this.knex("subscription_triggers").where({ subscription_trigger_type }).del();
  }
  async deleteSubscriptionTriggerById(id) {
    return await this.knex("subscription_triggers").where({ id }).del();
  }
}
let instance = new DbImpl(knexOb);
export {
  AllRecordTypes as A,
  BeginningOfDay as B,
  DOWN as D,
  ERROR as E,
  GetNowTimestampUTC as G,
  HashString as H,
  INVITE_VERIFY_EMAIL as I,
  MANUAL as M,
  NO_DATA as N,
  ParseUptime as P,
  ReplaceAllOccurrences as R,
  StatusObj as S,
  TIMEOUT as T,
  UP as U,
  ValidateEmail as V,
  WEBHOOK as W,
  GetMinuteStartTimestampUTC as a,
  GetMinuteStartNowTimestampUTC as b,
  GetDayStartTimestampUTC as c,
  GenerateRandomNumber as d,
  Wait as e,
  DEGRADED as f,
  DEFAULT_STATUS as g,
  GetRequiredSecrets as h,
  instance as i,
  REALTIME as j,
  SIGNAL as k,
  MaskString as l,
  BeginningOfMinute as m
};
