import { l as locales$1 } from "./locales2.js";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const langMap = {};
const locales = JSON.parse(locales$1);
locales.forEach((locale) => {
  __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../locales/de.json": () => import("./de.js"), "../locales/dk.json": () => import("./dk.js"), "../locales/en.json": () => import("./en.js"), "../locales/es.json": () => import("./es.js"), "../locales/fa.json": () => import("./fa.js"), "../locales/fr.json": () => import("./fr.js"), "../locales/hi.json": () => import("./hi.js"), "../locales/it.json": () => import("./it.js"), "../locales/ja.json": () => import("./ja.js"), "../locales/ko.json": () => import("./ko.js"), "../locales/locales.json": () => import("./locales.js"), "../locales/nb-NO.json": () => import("./nb-NO.js"), "../locales/nl.json": () => import("./nl.js"), "../locales/pl.json": () => import("./pl.js"), "../locales/pt-BR.json": () => import("./pt-BR.js"), "../locales/ru.json": () => import("./ru.js"), "../locales/tr.json": () => import("./tr.js"), "../locales/vi.json": () => import("./vi.js"), "../locales/zh-CN.json": () => import("./zh-CN.js") }), `../locales/${locale.code}.json`).then((data) => {
    langMap[locale.code] = data.default;
  });
});
function mergeEnglish(language, english) {
  for (let key in english) {
    if (language[key] === void 0) {
      language[key] = english[key];
    }
    if (typeof language[key] === "object") {
      mergeEnglish(language[key], english[key]);
    }
  }
}
const defaultLang = "en";
const init = (lang) => {
  let english = langMap[defaultLang];
  let language = langMap[lang];
  if (language === void 0) {
    return english;
  }
  mergeEnglish(language, english);
  return language;
};
export {
  init as i
};
