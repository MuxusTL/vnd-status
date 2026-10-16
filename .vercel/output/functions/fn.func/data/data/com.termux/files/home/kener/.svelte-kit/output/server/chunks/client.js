import { formatDuration, formatDistance, formatDistanceToNow } from "date-fns";
import { enUS, ru, hi, de, zhCN, vi, ja, nl, da, fr, ko, ptBR, tr, nb, pl, es, it, faIR } from "date-fns/locale";
import { formatInTimeZone } from "date-fns-tz";
const locales = {
  ru,
  en: enUS,
  hi,
  de,
  "zh-CN": zhCN,
  vi,
  ja,
  nl,
  dk: da,
  fr,
  ko,
  "pt-BR": ptBR,
  tr,
  "nb-NO": nb,
  pl,
  es,
  it,
  fa: faIR
};
const f = function(date, formatStr, locale, tz) {
  return formatInTimeZone(date, tz, formatStr, {
    locale: locales[locale] || enUS
  });
};
const fd = function(start, end, locale) {
  return formatDistance(start, end, { addSuffix: false, locale: locales[locale] });
};
const fdn = function(start, locale) {
  return formatDistanceToNow(start, { addSuffix: true, locale: locales[locale] });
};
const fdm = function(duration, locale) {
  return formatDuration(duration, {
    format: ["days", "hours", "minutes"],
    zero: false,
    delimiter: " ",
    locale: locales[locale]
  });
};
const l = function(sessionLangMap, key, args = {}) {
  try {
    let obj = sessionLangMap[key];
    if (obj && typeof obj === "string") {
      obj = obj.replace(/%\w+/g, (placeholder) => {
        const argKey = placeholder.slice(1);
        return args[argKey] !== void 0 ? args[argKey] : placeholder;
      });
    }
    return obj || key;
  } catch (e) {
    return key;
  }
};
const summaryTime = function(summaryStatus) {
  if (summaryStatus == "No Data") {
    return "No Data";
  }
  if (summaryStatus == "UP") {
    return "Status OK";
  }
  return "%status for %duration";
};
export {
  fdm as a,
  fd as b,
  fdn as c,
  f,
  l,
  summaryTime as s
};
