import { g as GetMonitors, ao as GetLocaleFromCookie, at as GetIncidentsPage } from "../../../../../chunks/controller.js";
import { B as BeginningOfDay } from "../../../../../chunks/db.js";
import { format, startOfMonth, parse, endOfMonth, addDays, subDays, getUnixTime } from "date-fns";
import { f } from "../../../../../chunks/client.js";
async function load({ parent, url, params, cookies }) {
  const parentData = await parent();
  const siteData = parentData.site;
  let monitors = await GetMonitors({ status: "ACTIVE" });
  url.searchParams;
  GetLocaleFromCookie(parentData.site, cookies);
  let month = params.month;
  if (!!!month) {
    month = format(/* @__PURE__ */ new Date(), "MMMM-yyyy");
  }
  let monthStart = startOfMonth(parse(month, "MMMM-yyyy", /* @__PURE__ */ new Date()));
  let monthEnd = endOfMonth(parse(month, "MMMM-yyyy", /* @__PURE__ */ new Date()));
  let nextMonth = addDays(monthEnd, 1);
  let prevMonth = subDays(monthStart, 1);
  let midnightMonthStartUTCTimestamp = getUnixTime(monthStart);
  let midnightMonthEndUTCTimestamp = getUnixTime(monthEnd);
  let midnightNextMonthUTCTimestamp = getUnixTime(nextMonth);
  let midnightPrevMonthUTCTimestamp = getUnixTime(prevMonth);
  let monthStartTs = BeginningOfDay({
    date: new Date(midnightMonthStartUTCTimestamp * 1e3),
    timeZone: parentData.localTz
  });
  let monthEndTs = BeginningOfDay({
    date: new Date(midnightMonthEndUTCTimestamp * 1e3),
    timeZone: parentData.localTz
  });
  let incidents = await GetIncidentsPage(monthStartTs, monthEndTs);
  incidents = incidents.map((incident) => {
    let incidentMonitors = incident.monitors;
    let monitorTags = incidentMonitors.map((monitor) => monitor.monitor_tag);
    let xm = monitors.filter((monitor) => monitorTags.includes(monitor.tag));
    incident.monitors = xm.map((monitor) => {
      return {
        tag: monitor.tag,
        name: monitor.name,
        description: monitor.description,
        image: monitor.image,
        impact_type: incidentMonitors.filter((m) => m.monitor_tag === monitor.tag)[0].monitor_impact
      };
    });
    return incident;
  });
  return {
    incidents,
    nextMonthName: f(new Date(midnightNextMonthUTCTimestamp * 1e3), "MMMM-yyyy", "en", parentData.localTz),
    prevMonthName: f(new Date(midnightPrevMonthUTCTimestamp * 1e3), "MMMM-yyyy", "en", parentData.localTz),
    thisMonthName: f(monthEnd, "MMMM-yyyy", "en", parentData.localTz),
    canonical: siteData.siteURL + "/incidents/" + month,
    midnightNextMonthUTCTimestamp,
    midnightPrevMonthUTCTimestamp,
    midnightMonthStartUTCTimestamp: midnightMonthStartUTCTimestamp + 86400
  };
}
export {
  load
};
