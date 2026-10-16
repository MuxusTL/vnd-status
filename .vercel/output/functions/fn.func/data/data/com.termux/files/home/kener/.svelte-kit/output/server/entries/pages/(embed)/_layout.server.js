import { i as init } from "../../../chunks/server.js";
import { r as redirect } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import MobileDetect from "mobile-detect";
import { an as IsSetupComplete, O as IsLoggedInSession, r as GetAllSiteData } from "../../../chunks/controller.js";
async function load({ params, route, url, cookies, request }) {
  const userAgent = request.headers.get("user-agent");
  const md = new MobileDetect(userAgent);
  const isMobile = !!md.mobile();
  let isSetupComplete = await IsSetupComplete();
  if (!isSetupComplete) {
    throw redirect(302, base + "/manage/setup");
  }
  if (process.env.KENER_SECRET_KEY === void 0) {
    throw redirect(302, base + "/manage/setup");
  }
  const query = url.searchParams;
  let isLoggedIn = await IsLoggedInSession(cookies);
  let site = await GetAllSiteData();
  request.headers;
  let localTz = "UTC";
  const localTzQuery = query.get("tz");
  if (!!localTzQuery) {
    localTz = localTzQuery;
  }
  let showNav = true;
  if (url.pathname.startsWith("/embed")) {
    showNav = false;
  }
  let isBot = false;
  if (userAgent?.includes("Chrome-Lighthouse") || userAgent?.includes("bot")) {
    isBot = true;
  }
  let selectedLang = query.get("locale") ? query.get("locale") : "en";
  let embed = false;
  if (route.id.endsWith("monitor-[tag]")) {
    embed = true;
  }
  const bgc = query.get("bgc") ? "#" + query.get("bgc") : "";
  return {
    site,
    localTz,
    showNav,
    isBot,
    lang: init(String(selectedLang)),
    selectedLang,
    embed,
    bgc,
    isLoggedIn: !!isLoggedIn.user,
    isMobile
  };
}
export {
  load
};
