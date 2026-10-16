import { b as GetMinuteStartNowTimestampUTC, P as ParseUptime } from "../../../../../../chunks/db.js";
import { makeBadge } from "badge-maker";
import moment from "moment";
import { g as GetMonitors, B as GetSiteDataByKey, E as GetMonitoringDataAll, F as GetLastStatusBeforeAll, H as GetMonitoringData, v as GetLastStatusBefore, w as InterpolateData, J as AggregateData } from "../../../../../../chunks/controller.js";
import { E as ErrorSvg } from "../../../../../../chunks/anywhere.js";
async function GET({ params, url }) {
  let monitors = await GetMonitors({ status: "ACTIVE" });
  if (monitors.length === 0) {
    return new Response(ErrorSvg, {
      headers: {
        "Content-Type": "image/svg+xml"
      }
    });
  }
  let name, tag, include_degraded_in_downtime;
  const siteName = await GetSiteDataByKey("siteName");
  const query = url.searchParams;
  let sinceLast = query.get("sinceLast");
  if (sinceLast == void 0 || isNaN(sinceLast) || sinceLast < 60) {
    sinceLast = 90 * 24 * 60 * 60;
  }
  const rangeInSeconds = sinceLast;
  const now = Math.floor(Date.now() / 1e3);
  const since = GetMinuteStartNowTimestampUTC() - rangeInSeconds;
  const hideDuration = query.get("hideDuration") === "true";
  const duration = moment.duration(rangeInSeconds, "seconds");
  let formatted = "";
  if (duration.days() > 0 || duration.minutes() < 1) {
    formatted = `${Math.floor(rangeInSeconds / 86400)}d`;
  } else if (duration.hours() > 0) {
    formatted = `${duration.hours()}h`;
  } else if (duration.minutes() > 0) {
    formatted = `${duration.minutes()}m`;
  }
  let todayDataDb, anchorStatus;
  if (params.tag == "_") {
    name = siteName;
    let activeTags = monitors.map((monitor) => monitor.tag);
    let hasIncludeDowntime = monitors.find((monitor) => monitor.include_degraded_in_downtime === "YES");
    include_degraded_in_downtime = hasIncludeDowntime ? "YES" : "NO";
    todayDataDb = await GetMonitoringDataAll(activeTags, since, now);
    anchorStatus = await GetLastStatusBeforeAll(activeTags, since);
  } else {
    const m = monitors.find((monitor) => monitor.tag === params.tag);
    if (!!!m) {
      return new Response(ErrorSvg, {
        headers: {
          "Content-Type": "image/svg+xml"
        }
      });
    }
    tag = m.tag;
    name = m.name;
    include_degraded_in_downtime = m.include_degraded_in_downtime;
    todayDataDb = await GetMonitoringData(tag, since, now);
    anchorStatus = await GetLastStatusBefore(tag, since);
  }
  todayDataDb = InterpolateData(todayDataDb, since, anchorStatus, now);
  let calculatedData = AggregateData(todayDataDb);
  let numerator = calculatedData.UPs + calculatedData.DEGRADEDs;
  let denominator = calculatedData.total;
  if (include_degraded_in_downtime === "YES") {
    numerator = calculatedData.UPs;
  }
  let uptime = ParseUptime(numerator, denominator) + "%";
  let label = query.get("label") || name;
  const labelColor = query.get("labelColor") || "#333";
  const color = query.get("color") || "#0079FF";
  const style = query.get("style") || "flat";
  label = label + (hideDuration ? "" : ` ${formatted}`);
  label = label.trim();
  const format = {
    label,
    message: uptime,
    color,
    labelColor,
    style
  };
  const svg = makeBadge(format);
  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml"
    }
  });
}
export {
  GET
};
