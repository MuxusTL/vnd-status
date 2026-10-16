import { b as GetMinuteStartNowTimestampUTC, B as BeginningOfDay, c as GetDayStartTimestampUTC, m as BeginningOfMinute, S as StatusObj, P as ParseUptime, i as instance, U as UP } from "./db.js";
import { intervalToDuration } from "date-fns";
import { l, s as summaryTime, a as fdm } from "./client.js";
import { aq as GetDataGroupByDayAlternative, v as GetLastStatusBefore, w as InterpolateData } from "./controller.js";
function getSummaryDuration(numOfMinute, selectedLang) {
  const duration = intervalToDuration({
    start: /* @__PURE__ */ new Date(0),
    end: new Date(numOfMinute * 60 * 1e3)
  });
  return fdm(duration, selectedLang);
}
function returnStatusClass(val, total, c, barStyle) {
  if (barStyle === void 0 || barStyle == "FULL") {
    return c;
  } else if (barStyle == "PARTIAL") {
    let totalHeight = total;
    let cl = `api-up`;
    if (val > 0 && val <= 0.1 * totalHeight) {
      cl = c + "-10";
    } else if (val > 0.1 * totalHeight && val <= 0.2 * totalHeight) {
      cl = c + "-20";
    } else if (val > 0.2 * totalHeight && val <= 0.4 * totalHeight) {
      cl = c + "-40";
    } else if (val > 0.4 * totalHeight && val <= 0.6 * totalHeight) {
      cl = c + "-60";
    } else if (val > 0.6 * totalHeight && val <= 0.8 * totalHeight) {
      cl = c + "-80";
    } else if (val > 0.8 * totalHeight && val < totalHeight) {
      cl = c + "-90";
    } else if (val == totalHeight) {
      cl = c;
    }
    return cl;
  }
  return c;
}
function getCountOfSimilarStatuesEnd(arr, statusType) {
  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].status === statusType) {
      count++;
    } else {
      break;
    }
  }
  return count;
}
const FetchData = async function(site, monitor, localTz, selectedLang, lang, isMobile) {
  const nowUTC = GetMinuteStartNowTimestampUTC();
  let deviceType = isMobile ? "mobile" : "desktop";
  let homeDataMaxDays = site.homeDataMaxDays[deviceType];
  const midnightTz = BeginningOfDay({ timeZone: localTz });
  const midnight90DaysAgoTz = midnightTz - (homeDataMaxDays.maxDays - 1) * 24 * 60 * 60;
  const NO_DATA = "No Data";
  let offsetInMinutes = parseInt((GetDayStartTimestampUTC(nowUTC) - midnightTz) / 60);
  const maxDateTodayTimestampTz = BeginningOfMinute({ timeZone: localTz });
  const _90Day = {};
  let latestTimestamp = 0;
  let dbData = await GetDataGroupByDayAlternative(
    monitor.tag,
    midnight90DaysAgoTz,
    maxDateTodayTimestampTz,
    offsetInMinutes
  );
  let totalDegradedCount = 0;
  let totalDownCount = 0;
  let totalUpCount = 0;
  for (let i = 0; i < dbData.length; i++) {
    let dayData = dbData[i];
    let ts = dayData.timestamp;
    let cssClass = StatusObj.UP;
    let summaryDuration2 = 0;
    let summaryStatus2 = UP;
    latestTimestamp = ts;
    totalDegradedCount += dayData.DEGRADED;
    totalDownCount += dayData.DOWN;
    totalUpCount += dayData.UP;
    if (dayData.DEGRADED >= monitor.day_degraded_minimum_count) {
      cssClass = returnStatusClass(dayData.DEGRADED, dayData.total, StatusObj.DEGRADED, site.barStyle);
      summaryDuration2 = getSummaryDuration(dayData.DEGRADED, selectedLang);
      summaryStatus2 = "DEGRADED";
    }
    if (dayData.DOWN >= monitor.day_down_minimum_count) {
      cssClass = returnStatusClass(dayData.DOWN, dayData.total, StatusObj.DOWN, site.barStyle);
      summaryDuration2 = getSummaryDuration(dayData.DOWN, selectedLang);
      summaryStatus2 = "DOWN";
    }
    if (dayData.MAINTENANCE > 0) {
      cssClass = returnStatusClass(dayData.MAINTENANCE, dayData.total, StatusObj.MAINTENANCE, site.barStyle);
      summaryDuration2 = getSummaryDuration(dayData.MAINTENANCE, selectedLang);
      summaryStatus2 = "MAINTENANCE";
    }
    if (dayData.NO_DATA === dayData.total) {
      cssClass = StatusObj.NO_DATA;
      summaryStatus2 = NO_DATA;
    }
    _90Day[ts] = {
      border: true
    };
    _90Day[ts].timestamp = ts;
    _90Day[ts].cssClass = cssClass;
    _90Day[ts].summaryStatus = l(lang, summaryTime(summaryStatus2), {
      status: l(lang, summaryStatus2),
      duration: summaryDuration2
    });
    _90Day[ts].textClass = cssClass.replace(/-\d+$/, "");
  }
  let uptime90DayNumerator = totalUpCount + totalDegradedCount;
  let uptime90DayDenominator = totalUpCount + totalDownCount + totalDegradedCount;
  if (monitor.include_degraded_in_downtime === "YES") {
    uptime90DayNumerator = totalUpCount;
  }
  let uptime90Day = ParseUptime(uptime90DayNumerator, uptime90DayDenominator);
  let summaryDuration = 0;
  let summaryStatus = "UP";
  let summaryColorClass = "api-nodata";
  let todayDataDb = await instance.getMonitoringData(monitor.tag, midnightTz, maxDateTodayTimestampTz);
  let anchorStatus = await GetLastStatusBefore(monitor.tag, midnightTz);
  todayDataDb = InterpolateData(todayDataDb, midnightTz, anchorStatus, maxDateTodayTimestampTz);
  if (site.summaryStyle === "CURRENT") {
    summaryColorClass = "api-up";
    let lastRow = todayDataDb[todayDataDb.length - 1];
    if (!!lastRow && lastRow.status == "DEGRADED") {
      summaryDuration = getSummaryDuration(getCountOfSimilarStatuesEnd(todayDataDb, "DEGRADED"), selectedLang);
      summaryStatus = "DEGRADED";
      summaryColorClass = "api-degraded";
    }
    if (!!lastRow && lastRow.status == "DOWN") {
      summaryDuration = getSummaryDuration(getCountOfSimilarStatuesEnd(todayDataDb, "DOWN"), selectedLang);
      summaryStatus = "DOWN";
      summaryColorClass = "api-down";
    }
    if (!!lastRow && lastRow.status == "MAINTENANCE") {
      summaryDuration = getSummaryDuration(getCountOfSimilarStatuesEnd(todayDataDb, "MAINTENANCE"), selectedLang);
      summaryStatus = "MAINTENANCE";
      summaryColorClass = "api-maintenance";
    }
    if (lastRow.status === "NO_DATA") {
      summaryStatus = NO_DATA;
      summaryColorClass = "api-nodata";
    }
    summaryStatus = l(lang, summaryTime(summaryStatus), {
      status: l(lang, summaryStatus),
      duration: summaryDuration
    });
  } else {
    let lastData = _90Day[latestTimestamp];
    summaryColorClass = lastData.cssClass.replace(/-\d+$/, "");
    summaryDuration = lastData.summaryDuration;
    summaryStatus = lastData.summaryStatus;
  }
  return {
    _90Day,
    uptime90Day,
    summaryStatus,
    summaryColorClass,
    barRoundness: site.barRoundness,
    midnight90DaysAgo: midnight90DaysAgoTz,
    maxDateTodayTimestamp: maxDateTodayTimestampTz,
    startOfTheDay: midnightTz,
    homeDataMaxDays
  };
};
export {
  FetchData as F
};
