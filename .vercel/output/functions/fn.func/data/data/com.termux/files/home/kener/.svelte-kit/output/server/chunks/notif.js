import axios from "axios";
import { h as GetRequiredSecrets, R as ReplaceAllOccurrences, D as DOWN, E as ERROR, U as UP, f as DEGRADED, j as REALTIME, T as TIMEOUT, A as AllRecordTypes, b as GetMinuteStartNowTimestampUTC, i as instance } from "./db.js";
import * as cheerio from "cheerio";
import { D as DefaultAPIEval, a as DefaultPingEval, b as DefaultTCPEval, G as GAMEDIG_TIMEOUT, c as DefaultGamedigEval, d as GAMEDIG_SOCKET_TIMEOUT, W as WebhookJSONTemplate, e as DiscordJSONTemplate, S as SlackJSONTemplate } from "./anywhere.js";
import { v as version } from "./version.js";
import https from "https";
import net from "net";
import ping from "ping";
import dns2 from "dns2";
import dgram from "dgram";
import tls from "tls";
import Knex from "knex";
import { ag as GetLastHeartbeat, ah as getSMTPTransport } from "./controller.js";
import { Cron } from "croner";
import { GameDig } from "gamedig";
import Mustache from "mustache";
import { Resend } from "resend";
import "nodemailer";
const TCP = function(type, host, port, timeout) {
  timeout = Number(timeout);
  port = parseInt(port, 10);
  return new Promise((resolve) => {
    const socket = new net.Socket();
    const start = process.hrtime.bigint();
    let resolved = false;
    const onFinish = (status) => {
      if (!resolved) {
        resolved = true;
        const end = process.hrtime.bigint();
        const latency = Number(end - start) / 1e6;
        socket.destroy();
        resolve({ status, latency, host, port, type });
      }
    };
    socket.setTimeout(timeout);
    socket.once("connect", () => onFinish("open"));
    socket.once("timeout", () => onFinish("timeout"));
    socket.once("error", () => onFinish("error"));
    const options = {
      host,
      port,
      family: type === "IP6" ? 6 : 4
    };
    socket.connect(options);
  });
};
const Ping = async function(type, host, timeout, count) {
  let output = {
    alive: false,
    min: null,
    max: null,
    avg: null,
    latencies: [],
    latency: null,
    host,
    type
  };
  try {
    let res = await ping.promise.probe(host, {
      v6: type === "IP6",
      timeout: type === "IP6" ? false : Math.floor(timeout / 1e3),
      min_reply: count
    });
    output.alive = res.alive;
    output.min = res.min;
    output.max = res.max;
    output.avg = res.avg;
    output.latencies = res.times;
    output.latency = res.time;
  } catch (error) {
    console.log(`Error in pingCall IP4 for ${host}`, error);
  }
  return output;
};
class ApiCall {
  monitor;
  envSecrets;
  constructor(monitor) {
    this.monitor = monitor;
    this.envSecrets = GetRequiredSecrets(
      `${monitor.type_data.url} ${monitor.type_data.body} ${JSON.stringify(monitor.type_data.headers)}`
    );
  }
  async execute() {
    let axiosHeaders = {};
    axiosHeaders["User-Agent"] = `Kener/${version()}`;
    axiosHeaders["Accept"] = "*/*";
    let body = this.monitor.type_data.body;
    let url = this.monitor.type_data.url;
    let headers = "";
    if (!!this.monitor.type_data.headers) {
      headers = JSON.stringify(this.monitor.type_data.headers);
    }
    let method = this.monitor.type_data.method;
    let timeout = this.monitor.type_data.timeout || 1e4;
    let tag = this.monitor.tag;
    let monitorEval = !!this.monitor.type_data.eval ? this.monitor.type_data.eval : DefaultAPIEval;
    for (let i = 0; i < this.envSecrets.length; i++) {
      const secret = this.envSecrets[i];
      if (!!body) {
        body = ReplaceAllOccurrences(body, secret.find, secret.replace);
      }
      if (!!url) {
        url = ReplaceAllOccurrences(url, secret.find, secret.replace);
      }
      if (!!headers) {
        headers = ReplaceAllOccurrences(headers, secret.find, secret.replace);
      }
    }
    if (!!headers) {
      try {
        headers = JSON.parse(headers);
        headers = headers.reduce((acc, header) => {
          acc[header.key] = header.value;
          return acc;
        }, {});
        axiosHeaders = { ...axiosHeaders, ...headers };
      } catch (e) {
        console.log(e);
      }
    }
    const options = {
      method,
      headers: axiosHeaders,
      timeout,
      transformResponse: (r) => r,
      validateStatus: () => true
    };
    if (!!this.monitor.type_data.allowSelfSignedCert) {
      options.httpsAgent = new https.Agent({ rejectUnauthorized: false });
    }
    if (!!body) {
      options.data = body;
    }
    let statusCode = 500;
    let latency = 0;
    let resp = "";
    let timeoutError = false;
    const start = Date.now();
    try {
      let data = await axios(url, options);
      statusCode = data.status;
      resp = data.data;
    } catch (err) {
      if (!err.response) {
        console.log(`Error in apiCall ${tag}`, err.message);
      }
      if (err.message.startsWith("timeout of") && err.message.endsWith("exceeded")) {
        timeoutError = true;
      }
      if (err.response !== void 0 && err.response.status !== void 0) {
        statusCode = err.response.status;
      }
      if (err.response !== void 0 && err.response.data !== void 0) {
        resp = err.response.data;
      } else {
        resp = JSON.stringify(resp);
      }
    } finally {
      const end = Date.now();
      latency = end - start;
      if (resp === void 0 || resp === null) {
        resp = "";
      }
    }
    let evalResp = void 0;
    let modules = { cheerio };
    try {
      const evalFunction = new Function(
        "statusCode",
        "responseTime",
        "responseRaw",
        "modules",
        `return (${monitorEval})(statusCode, responseTime, responseRaw, modules);`
      );
      evalResp = await evalFunction(statusCode, latency, resp, modules);
    } catch (error) {
      console.log(`Error in monitorEval for ${tag}`, error.message);
    }
    if (evalResp === void 0 || evalResp === null) {
      evalResp = {
        status: DOWN,
        latency,
        type: ERROR
      };
    } else if (evalResp.status === void 0 || evalResp.status === null || [UP, DOWN, DEGRADED].indexOf(evalResp.status) === -1) {
      evalResp = {
        status: DOWN,
        latency,
        type: ERROR
      };
    } else {
      evalResp.type = REALTIME;
    }
    let toWrite = {
      status: DOWN,
      latency,
      type: ERROR
    };
    if (evalResp.status !== void 0 && evalResp.status !== null) {
      toWrite.status = evalResp.status;
    }
    if (evalResp.latency !== void 0 && evalResp.latency !== null) {
      toWrite.latency = evalResp.latency;
    }
    if (evalResp.type !== void 0 && evalResp.type !== null) {
      toWrite.type = evalResp.type;
    }
    if (timeoutError) {
      toWrite.type = TIMEOUT;
    }
    return toWrite;
  }
}
class PingCall {
  monitor;
  constructor(monitor) {
    this.monitor = monitor;
  }
  async execute() {
    let hosts = this.monitor.type_data.hosts;
    let pingEval = !!this.monitor.type_data.pingEval ? this.monitor.type_data.pingEval : DefaultPingEval;
    let tag = this.monitor.tag;
    if (hosts === void 0) {
      console.log(
        "Hosts is undefined. The ping monitor has changed in version 3.0.10. Please update your monitor with tag",
        tag
      );
      return {
        status: DOWN,
        latency: 0,
        type: ERROR
      };
    }
    let arrayOfPings = [];
    for (let i = 0; i < hosts.length; i++) {
      const host = hosts[i];
      arrayOfPings.push(await Ping(host.type, host.host, host.timeout, host.count));
    }
    let evalResp = void 0;
    try {
      const evalFunction = new Function("arrayOfPings", `return (${pingEval})(arrayOfPings);`);
      evalResp = await evalFunction(arrayOfPings);
    } catch (error) {
      console.log(`Error in pingEval for ${tag}`, error.message);
      return {
        status: DOWN,
        latency: 0,
        type: ERROR
      };
    }
    return {
      status: evalResp.status,
      latency: evalResp.latency,
      type: REALTIME
    };
  }
}
class TcpCall {
  monitor;
  constructor(monitor) {
    this.monitor = monitor;
  }
  async execute() {
    let hosts = this.monitor.type_data.hosts;
    let tcpEval = !!this.monitor.type_data.tcpEval ? this.monitor.type_data.tcpEval : DefaultTCPEval;
    let tag = this.monitor.tag;
    if (hosts === void 0) {
      console.log(
        "Hosts is undefined. The ping monitor has changed in version 3.0.10. Please update your monitor with tag",
        tag
      );
      return {
        status: DOWN,
        latency: 0,
        type: ERROR
      };
    }
    let arrayOfPings = [];
    for (let i = 0; i < hosts.length; i++) {
      const host = hosts[i];
      arrayOfPings.push(await TCP(host.type, host.host, host.port, host.timeout));
    }
    let evalResp = void 0;
    try {
      const evalFunction = new Function("arrayOfPings", `return (${tcpEval})(arrayOfPings);`);
      evalResp = await evalFunction(arrayOfPings);
    } catch (error) {
      console.log(`Error in tcpEval for ${tag}`, error.message);
      return {
        status: DOWN,
        latency: 0,
        type: ERROR
      };
    }
    return {
      status: evalResp.status,
      latency: evalResp.latency,
      type: REALTIME
    };
  }
}
class DNSResolver {
  constructor(nameserver = "8.8.8.8") {
    this.nameserver = nameserver;
    this.socket = dgram.createSocket("udp4");
  }
  createQuery(domain, type) {
    const packet = new dns2.Packet();
    packet.header.id = 1;
    packet.header.rd = 1;
    packet.questions.push({
      name: domain,
      type: AllRecordTypes[type],
      class: 1
    });
    return packet;
  }
  async query(domain, recordType) {
    return new Promise((resolve, reject) => {
      const query = this.createQuery(domain, recordType);
      const buffer = query.toBuffer();
      this.socket.on("message", (message) => {
        const response = dns2.Packet.parse(message);
        resolve(response);
      });
      this.socket.send(buffer, 0, buffer.length, 53, this.nameserver, (err) => {
        if (err)
          reject(err);
      });
    });
  }
  extractData(answer, recordType) {
    switch (recordType) {
      case "A":
      case "AAAA":
        return answer.address;
      case "NS":
        return answer.ns;
      case "CNAME":
        return answer.domain;
      case "MX":
        return {
          exchange: answer.exchange,
          priority: answer.priority
        };
      default:
        return answer.data;
    }
  }
  async getRecord(domain, recordType) {
    const results = {};
    try {
      const response = await this.query(domain, recordType);
      results[recordType] = response.answers.map((answer) => ({
        name: answer.name,
        type: recordType,
        ttl: answer.ttl,
        data: this.extractData(answer, recordType)
      }));
      return results;
    } catch (error) {
      console.error("Error querying DNS records:", error);
      throw error;
    } finally {
      this.socket.close();
    }
  }
}
class DnsCall {
  monitor;
  constructor(monitor) {
    this.monitor = monitor;
  }
  async execute() {
    const dnsResolver = new DNSResolver(this.monitor.type_data.nameServer);
    let host = this.monitor.type_data.host;
    let recordType = this.monitor.type_data.lookupRecord;
    let matchType = this.monitor.type_data.matchType;
    let values = this.monitor.type_data.values;
    try {
      let queryStartTime = Date.now();
      let dnsRes = await dnsResolver.getRecord(host, recordType);
      let latency = Date.now() - queryStartTime;
      if (dnsRes[recordType] === void 0) {
        return {
          status: DOWN,
          latency,
          type: REALTIME
        };
      }
      let data = dnsRes[recordType];
      let dnsData = data.map((d) => d.data);
      if (matchType === "ALL") {
        for (let i = 0; i < values.length; i++) {
          if (dnsData.indexOf(values[i].trim()) === -1) {
            return {
              status: DOWN,
              latency,
              type: REALTIME
            };
          }
        }
        return {
          status: UP,
          latency,
          type: REALTIME
        };
      } else if (matchType === "ANY") {
        for (let i = 0; i < values.length; i++) {
          if (dnsData.indexOf(values[i].trim()) !== -1) {
            return {
              status: UP,
              latency,
              type: REALTIME
            };
          }
        }
        return {
          status: DOWN,
          latency,
          type: REALTIME
        };
      }
    } catch (error) {
      console.log("Error in dnsChecker", error);
      return {
        status: DOWN,
        latency: 0,
        type: REALTIME
      };
    }
  }
}
async function waitForDataAndReturn(tag) {
  let res = await instance.getLatestMonitoringData(tag);
  if (!!res) {
    return {
      status: res.status,
      latency: res.latency,
      type: REALTIME
    };
  }
  return null;
}
class GroupCall {
  monitor;
  constructor(monitor, timestamp) {
    this.monitor = monitor;
  }
  async execute(startOfMinute) {
    if (!!!startOfMinute) {
      startOfMinute = GetMinuteStartNowTimestampUTC();
    }
    this.monitor.type_data.monitors.map((m) => m.tag);
    return await waitForDataAndReturn(this.monitor.tag);
  }
}
const getSSLExpiry = (domain, port = 443) => {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const socket = tls.connect(port, domain, { servername: domain }, () => {
      const { valid_to } = socket.getPeerCertificate();
      if (!valid_to) {
        reject(new Error("No certificate found."));
        return;
      }
      const latency = Date.now() - startTime;
      const timeTillExpiryMs = new Date(valid_to) - /* @__PURE__ */ new Date();
      resolve({
        domain,
        expiryDate: new Date(valid_to),
        timeTillExpiryMs,
        latency
      });
      socket.end();
    });
    socket.on("error", (err) => reject(err));
  });
};
class SSLCall {
  monitor;
  constructor(monitor) {
    this.monitor = monitor;
  }
  async execute() {
    let domain = this.monitor.type_data.host;
    let port = parseInt(this.monitor.type_data.port || "443");
    let degradedRemainingHours = Number(this.monitor.type_data.degradedRemainingHours);
    let downRemainingHours = Number(this.monitor.type_data.downRemainingHours);
    try {
      const { timeTillExpiryMs, latency } = await getSSLExpiry(domain, port);
      const timeTillExpiryHours = timeTillExpiryMs / 1e3 / 60 / 60;
      if (timeTillExpiryHours > degradedRemainingHours) {
        return {
          status: UP,
          latency,
          type: REALTIME
        };
      } else if (timeTillExpiryHours > downRemainingHours) {
        return {
          status: DEGRADED,
          latency,
          type: REALTIME
        };
      } else {
        return {
          status: DOWN,
          latency,
          type: REALTIME
        };
      }
    } catch (error) {
      console.log(`Error checking SSL for ${domain}:`, error.message);
      return {
        status: DOWN,
        latency: 0,
        type: ERROR
      };
    }
  }
}
class SqlCall {
  monitor;
  envSecrets;
  constructor(monitor) {
    this.monitor = monitor;
    this.envSecrets = GetRequiredSecrets(`${monitor.type_data.connectionString}`);
  }
  async execute() {
    let client = this.monitor.type_data.dbType;
    let connection = this.monitor.type_data.connectionString;
    for (let i = 0; i < this.envSecrets.length; i++) {
      const secret = this.envSecrets[i];
      connection = ReplaceAllOccurrences(connection, secret.find, secret.replace);
    }
    let query = this.monitor.type_data.query;
    let timeout = this.monitor.type_data.timeout || 5e3;
    const startTime = Date.now();
    let knexInstance = null;
    try {
      const config = {
        client,
        connection,
        pool: { min: 0, max: 1 },
        acquireConnectionTimeout: timeout
      };
      knexInstance = Knex(config);
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Query timeout")), timeout);
      });
      const queryPromise = knexInstance.raw(query);
      await Promise.race([queryPromise, timeoutPromise]);
      const latency = Date.now() - startTime;
      return {
        status: UP,
        latency,
        type: REALTIME
      };
    } catch (error) {
      const latency = Date.now() - startTime;
      if (error.message === "Query timeout") {
        return {
          status: DOWN,
          latency,
          type: TIMEOUT
        };
      }
      return {
        status: DOWN,
        latency,
        type: ERROR
      };
    } finally {
      if (knexInstance) {
        try {
          await knexInstance.destroy();
        } catch (destroyError) {
          console.error("Error closing database connection:", destroyError);
        }
      }
    }
  }
}
class HeartbeatCall {
  monitor;
  constructor(monitor) {
    this.monitor = monitor;
  }
  async execute() {
    let nowMinute = GetMinuteStartNowTimestampUTC();
    let latestData = await GetLastHeartbeat(this.monitor.tag);
    if (!latestData) {
      return {};
    }
    let expectedTime;
    try {
      const cronJob = Cron(this.monitor.cron);
      const prevDate = cronJob.previousRun();
      expectedTime = Math.floor(prevDate.getTime() / 1e3);
    } catch (err) {
      return {
        status: DOWN,
        latency: 0,
        type: ERROR
      };
    }
    if (latestData.timestamp >= expectedTime) {
      return {
        status: UP,
        latency: nowMinute - latestData.timestamp,
        type: REALTIME
      };
    }
    let latency = nowMinute - expectedTime;
    let downRemainingMinutes = Number(this.monitor.type_data.downRemainingMinutes);
    if (latency > downRemainingMinutes * 60) {
      return {
        status: DOWN,
        latency,
        type: REALTIME
      };
    }
    let degradedRemainingMinutes = Number(this.monitor.type_data.degradedRemainingMinutes);
    if (latency > degradedRemainingMinutes * 60) {
      return {
        status: DEGRADED,
        latency,
        type: REALTIME
      };
    }
    return {
      status: UP,
      latency,
      type: REALTIME
    };
  }
}
class GamedigCall {
  monitor;
  constructor(monitor) {
    this.monitor = monitor;
  }
  async execute() {
    const tag = this.monitor.tag;
    const host = this.monitor.type_data.host;
    const port = this.monitor.type_data.port;
    const timeout = !!this.monitor.type_data.timeout ? this.monitor.type_data.timeout : GAMEDIG_TIMEOUT;
    const gamedigEval = !!this.monitor.type_data.eval ? this.monitor.type_data.eval : DefaultGamedigEval;
    let responseTime, responseRaw;
    try {
      const response = await GameDig.query({
        type: this.monitor.type_data.gameId,
        host,
        port,
        socketTimeout: GAMEDIG_SOCKET_TIMEOUT,
        attemptTimeout: timeout,
        givenPortOnly: !this.monitor.type_data.guessPort,
        requestRules: this.monitor.type_data.requestRules
      });
      responseTime = response.ping;
      responseRaw = response.raw;
    } catch (error) {
      console.log(`Error while requesting game's information for ${tag}: `, error.message);
      return {
        status: DOWN,
        latency: 0,
        type: ERROR
      };
    }
    let evalResp = void 0;
    const evalFunction = new Function("responseTime", "responseRaw", `return (${gamedigEval})(responseTime, responseRaw);`);
    try {
      evalResp = await evalFunction(responseTime, responseRaw);
    } catch (error) {
      console.log(`Error in gamedigEval for ${tag}: `, error.message);
      return {
        status: DOWN,
        latency: 0,
        type: ERROR
      };
    }
    return {
      status: evalResp.status,
      latency: evalResp.latency,
      type: REALTIME
    };
  }
}
class Service {
  service;
  constructor(monitor) {
    if (monitor.monitor_type === "API") {
      this.service = new ApiCall(monitor);
    } else if (monitor.monitor_type === "PING") {
      this.service = new PingCall(monitor);
    } else if (monitor.monitor_type === "TCP") {
      this.service = new TcpCall(monitor);
    } else if (monitor.monitor_type === "DNS") {
      this.service = new DnsCall(monitor);
    } else if (monitor.monitor_type === "NONE") {
      this.service = null;
    } else if (monitor.monitor_type === "GROUP") {
      this.service = new GroupCall(monitor);
    } else if (monitor.monitor_type === "SSL") {
      this.service = new SSLCall(monitor);
    } else if (monitor.monitor_type === "SQL") {
      this.service = new SqlCall(monitor);
    } else if (monitor.monitor_type === "HEARTBEAT") {
      this.service = new HeartbeatCall(monitor);
    } else if (monitor.monitor_type === "GAMEDIG") {
      this.service = new GamedigCall(monitor);
    } else {
      console.log("Invalid monitor.monitor_type ", monitor.monitor_type);
      process.exit(1);
    }
  }
  async execute(...p) {
    return await this.service.execute(...p);
  }
}
function variables(siteData, data) {
  let siteURL = siteData.siteURL;
  let siteName = siteData.siteName;
  if (siteURL.endsWith("/")) {
    siteURL = siteURL.slice(0, -1);
  }
  if (!siteData.logo.startsWith("http")) {
    siteData.logo = `${siteURL}${!!process.env.KENER_BASE_PATH ? process.env.KENER_BASE_PATH : ""}${siteData.logo}`;
  }
  let view = {
    site_name: siteName,
    logo_url: siteData.logo,
    site_url: siteURL,
    alert_name: data.alert_name,
    status: data.status,
    is_resolved: data.status === "RESOLVED",
    is_triggered: data.status === "TRIGGERED",
    description: data.description,
    action_text: data.actions[0].text,
    action_url: data.actions[0].url,
    metric: data.details.metric,
    severity: data.severity,
    id: data.id,
    current_value: data.details.current_value,
    threshold: data.details.threshold,
    source: data.source,
    timestamp: data.timestamp
  };
  return view;
}
class Webhook {
  url;
  headers;
  method;
  siteData;
  monitorData;
  trigger_meta;
  constructor(trigger_meta, method, siteData, monitorData) {
    const kenerHeader = {
      "Content-Type": "application/json",
      "User-Agent": `Kener/${version()}`
    };
    let headers = trigger_meta.headers;
    this.trigger_meta = trigger_meta;
    this.url = trigger_meta.url;
    this.headers = kenerHeader;
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i];
      this.headers[header.key] = header.value;
    }
    this.method = "POST";
    this.siteData = siteData;
    this.monitorData = monitorData;
    let envSecrets = GetRequiredSecrets(
      `${this.url} ${JSON.stringify(this.headers)} ${JSON.stringify(this.trigger_meta.webhook_body)}`
    );
    for (let i = 0; i < envSecrets.length; i++) {
      const secret = envSecrets[i];
      this.url = ReplaceAllOccurrences(this.url, secret.find, secret.replace);
      this.headers = JSON.parse(ReplaceAllOccurrences(JSON.stringify(this.headers), secret.find, secret.replace));
    }
    if (!!this.trigger_meta.has_webhook_body && !!this.trigger_meta.webhook_body) {
      envSecrets = GetRequiredSecrets(this.trigger_meta.webhook_body);
      for (let i = 0; i < envSecrets.length; i++) {
        const secret = envSecrets[i];
        this.trigger_meta.webhook_body = ReplaceAllOccurrences(
          this.trigger_meta.webhook_body,
          secret.find,
          secret.replace
        );
      }
    }
  }
  transformData(data) {
    let view = variables(this.siteData, data);
    if (!!!this.trigger_meta.has_webhook_body || !!!this.trigger_meta.webhook_body) {
      return Mustache.render(WebhookJSONTemplate, view);
    }
    let body = this.trigger_meta.webhook_body;
    body = ReplaceAllOccurrences(body, "${id}", data.id);
    body = ReplaceAllOccurrences(body, "${alert_name}", data.alert_name);
    body = ReplaceAllOccurrences(body, "${severity}", data.severity);
    body = ReplaceAllOccurrences(body, "${status}", data.status);
    body = ReplaceAllOccurrences(body, "${source}", data.source);
    body = ReplaceAllOccurrences(body, "${timestamp}", data.timestamp);
    body = ReplaceAllOccurrences(body, "${description}", data.description);
    body = ReplaceAllOccurrences(body, "${metric}", data.details.metric);
    body = ReplaceAllOccurrences(body, "${current_value}", data.details.current_value);
    body = ReplaceAllOccurrences(body, "${threshold}", data.details.threshold);
    body = ReplaceAllOccurrences(body, "${action_text}", data.actions[0].text);
    body = ReplaceAllOccurrences(body, "${action_url}", data.actions[0].url);
    return Mustache.render(body, view);
  }
  type() {
    return "webhook";
  }
  async send(data) {
    try {
      const response = await fetch(this.url, {
        method: this.method,
        headers: this.headers,
        body: this.transformData(data)
      });
      if (!response.ok) {
        throw new Error(`Error from webhook: ${response.status} ${response.statusText}`);
      }
      return response;
    } catch (error) {
      console.error("Error sending webhook", error);
      return { error: error.message };
    }
  }
}
class Discord {
  url;
  headers;
  method;
  siteData;
  monitorData;
  trigger_meta;
  constructor(url, siteData, monitorData, trigger_meta) {
    const kenerHeader = {
      "Content-Type": "application/json",
      "User-Agent": `Kener/${version()}`
    };
    this.url = url;
    this.headers = Object.assign(kenerHeader, {});
    this.method = "POST";
    this.siteData = siteData;
    this.monitorData = monitorData;
    this.trigger_meta = trigger_meta;
    if (!!this.trigger_meta.has_discord_body && !!this.trigger_meta.discord_body) {
      let envSecrets = GetRequiredSecrets(this.trigger_meta.discord_body);
      for (let i = 0; i < envSecrets.length; i++) {
        const secret = envSecrets[i];
        this.trigger_meta.discord_body = ReplaceAllOccurrences(
          this.trigger_meta.discord_body,
          secret.find,
          secret.replace
        );
      }
    }
  }
  transformData(data) {
    let view = variables(this.siteData, data);
    let discordTemplate = DiscordJSONTemplate;
    if (!!this.trigger_meta.has_discord_body && !!this.trigger_meta.discord_body) {
      discordTemplate = this.trigger_meta.discord_body;
    }
    return Mustache.render(discordTemplate, view);
  }
  async send(data) {
    try {
      const toSend = this.transformData(data);
      const response = await fetch(this.url, {
        method: this.method,
        headers: this.headers,
        body: toSend
      });
      if (!response.ok) {
        throw new Error(`Error from discord`);
      }
      return response;
    } catch (error) {
      console.error("Error sending webhook", error);
      return { error: error.message };
    }
  }
}
class Slack {
  url;
  headers;
  method;
  siteData;
  monitorData;
  trigger_meta;
  constructor(url, siteData, monitorData, trigger_meta) {
    const kenerHeader = {
      "Content-Type": "application/json",
      "User-Agent": `Kener/${version()}`
    };
    this.url = url;
    this.headers = Object.assign(kenerHeader, {});
    this.method = "POST";
    this.siteData = siteData;
    this.monitorData = monitorData;
    this.trigger_meta = trigger_meta;
    if (!!this.trigger_meta.has_slack_body && !!this.trigger_meta.slack_body) {
      let envSecrets = GetRequiredSecrets(this.trigger_meta.slack_body);
      for (let i = 0; i < envSecrets.length; i++) {
        const secret = envSecrets[i];
        this.trigger_meta.slack_body = ReplaceAllOccurrences(this.trigger_meta.slack_body, secret.find, secret.replace);
      }
    }
  }
  transformData(alert) {
    let view = variables(this.siteData, alert);
    let slackTemplate = SlackJSONTemplate;
    if (!!this.trigger_meta.has_slack_body && !!this.trigger_meta.slack_body) {
      slackTemplate = this.trigger_meta.slack_body;
    }
    return Mustache.render(slackTemplate, view);
  }
  async send(data) {
    try {
      const response = await fetch(this.url, {
        method: this.method,
        headers: this.headers,
        body: this.transformData(data)
      });
      if (!response.ok) {
        throw new Error(`Error from slack`);
      }
      return response;
    } catch (error) {
      console.error("Error sending webhook", error);
      return { error: error.message };
    }
  }
}
class Email {
  to;
  from;
  method;
  siteData;
  monitorData;
  meta;
  constructor(meta, siteData, monitorData) {
    this.to = meta.to;
    this.from = meta.from;
    this.siteData = siteData;
    this.monitorData = monitorData;
    let metaString = JSON.stringify(meta);
    let envSecrets = GetRequiredSecrets(`${JSON.stringify(meta)}`);
    for (let i = 0; i < envSecrets.length; i++) {
      const secret = envSecrets[i];
      metaString = ReplaceAllOccurrences(metaString, secret.find, secret.replace);
    }
    this.meta = JSON.parse(metaString);
  }
  transformData(data) {
    let ctaLink = data.actions[0].url;
    let ctaText = data.actions[0].text;
    let emailApiRequest = {
      from: this.from,
      to: this.to.split(",").map((email) => email.trim()),
      subject: `[${data.status}] ${data.alert_name}  at ${data.timestamp}`,
      text: `Alert ${data.alert_name} has been ${data.status} at ${data.timestamp}. Click here to view the alert: ${ctaLink}`,
      html: ""
    };
    let bgColor = "#f4f4f4";
    if (data.severity == "critical") {
      bgColor = this.siteData.colors.DOWN;
    } else if (data.severity == "warning") {
      bgColor = this.siteData.colors.DEGRADED;
    }
    if (data.status === "RESOLVED") {
      bgColor = this.siteData.colors.UP;
    }
    let html = `
		<!DOCTYPE html>
		<html>
		<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Alert Notification</title>
			<style>
				body {
					font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
					line-height: 1.6;
					margin: 0;
					padding: 0;
					background-color: #f4f4f4;
					color: #333;
				}
				.container {
					max-width: 600px;
					margin: 20px auto;
					padding: 20px;
					background: #ffffff;
					border-radius: 8px;
					box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
				}
				.header {
					text-align: center;
					padding-bottom: 20px;
					border-bottom: 1px solid #eee;
				}
				.alert-badge {
					display: inline-block;
					padding: 6px 12px;
					border-radius: 16px;
					background-color: ${bgColor};
					color: white;
					font-weight: 500;
					font-size: 14px;
					margin-bottom: 16px;
				}
				.alert-title {
					font-size: 24px;
					font-weight: 600;
					margin: 0;
					color: #2c3e50;
				}
				.metric-box {
					background: #f8f9fa;
					border-radius: 6px;
					padding: 16px;
					margin: 16px 0;
				}
				.button {
					display: inline-block;
					padding: 12px 24px;
					background-color: #007bff;
					color: white;
					text-decoration: none;
					border-radius: 6px;
					font-weight: 500;
					margin-top: 20px;
				}
				.footer {
					text-align: center;
					padding-top: 20px;
					color: #666;
					font-size: 14px;
				}
			</style>
		</head>
		<body>
			<div class="container">
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td>
							<a href="${this.siteData.siteURL}" style="text-decoration: none;">
								<span style="font-size: 24px; font-weight: 600; color: #2c3e50;">${this.siteData.siteName}</span>
							</a>
						</td>
					</tr>
				</table>

				<div class="header">
					<div class="alert-badge">${data.status}</div>
					<h1 class="alert-title">${data.alert_name}</h1>
				</div>
				
				<table width="100%" border="0" cellspacing="0" cellpadding="8">
					<tr style="border-bottom: 1px solid #eee;">
						<td width="40%" style="color: #666; font-weight: 500;">Alert ID</td>
						<td width="60%" style="text-align: right;">${data.id}</td>
					</tr>
					<tr style="border-bottom: 1px solid #eee;">
						<td width="40%" style="color: #666; font-weight: 500;">Status</td>
						<td width="60%" style="text-align: right;">${data.status}</td>
					</tr>
					<tr style="border-bottom: 1px solid #eee;">
						<td width="40%" style="color: #666; font-weight: 500;">Time</td>
						<td width="60%" style="text-align: right;">${data.timestamp}</td>
					</tr>
				</table>
				
				<div class="metric-box">
					<table width="100%" border="0" cellspacing="0" cellpadding="8">
						<tr>
							<td width="40%" style="color: #666; font-weight: 500;">Current Value</td>
							<td width="60%" style="text-align: right;">${data.details.current_value}</td>
						</tr>
						<tr>
							<td width="40%" style="color: #666; font-weight: 500;">Threshold Set</td>
							<td width="60%" style="text-align: right;">${data.details.threshold}</td>
						</tr>
					</table>
				</div>
				
				<p style="margin: 20px 0;">${data.description}</p>
				
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td align="center">
							<a href="${ctaLink}" class="button">${ctaText}</a>
						</td>
					</tr>
				</table>
				
				<div class="footer">
					This is an automated alert notification from ${this.siteData.siteName} monitoring system. It is being powered by <a href='https://kener.ing'>Kener</a> v${version()}.
				</div>
			</div>
		</body>
		</html>
		`;
    emailApiRequest.html = html;
    return emailApiRequest;
  }
  type() {
    return "email";
  }
  async send(data) {
    let emailBody = this.transformData(data);
    if (!this.meta.email_type || this.meta.email_type === "resend") {
      const resend = new Resend(process.env.RESEND_API_KEY);
      try {
        return await resend.emails.send(emailBody);
      } catch (error) {
        console.error("Error sending webhook", error);
        return error;
      }
    }
    if (this.meta.email_type === "smtp") {
      const transporter = getSMTPTransport(this.meta);
      const mailOptions = {
        from: emailBody.from,
        // sender address
        to: Array.isArray(emailBody.to) ? emailBody.to.join(",") : emailBody.to,
        // recipient address(es)
        subject: emailBody.subject,
        // email subject
        text: emailBody.text,
        // plain text body
        html: emailBody.html
        // HTML body (if any)
      };
      try {
        return await transporter.sendMail(mailOptions);
      } catch (error) {
        console.error("Error sending email via SMTP", error);
        return { error: error.message };
      }
    }
  }
}
class Notification {
  client;
  constructor(trigger, siteData, monitorData) {
    let trigger_meta = JSON.parse(trigger.trigger_meta);
    if (trigger.trigger_type === "webhook") {
      this.client = new Webhook(trigger_meta, "POST", siteData, monitorData);
    } else if (trigger.trigger_type === "discord") {
      this.client = new Discord(trigger_meta.url, siteData, monitorData, trigger_meta);
    } else if (trigger.trigger_type === "slack") {
      this.client = new Slack(trigger_meta.url, siteData, monitorData, trigger_meta);
    } else if (trigger.trigger_type === "email") {
      this.client = new Email(trigger_meta, siteData, monitorData);
    } else {
      console.log("Invalid Notification");
      process.exit(1);
    }
  }
  async send(data) {
    return await this.client.send(data);
  }
}
export {
  Notification as N,
  Service as S
};
