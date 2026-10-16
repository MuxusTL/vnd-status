import { i as init } from "../../../chunks/server.js";
import { r as redirect } from "../../../chunks/index.js";
import MobileDetect from "mobile-detect";
import { b as base } from "../../../chunks/paths.js";
import { an as IsSetupComplete, O as IsLoggedInSession, r as GetAllSiteData, ao as GetLocaleFromCookie, ab as GetSubscriptionTriggerByEmail, ap as IsEmailSetup } from "../../../chunks/controller.js";
async function load({ params, route, url, cookies, request }) {
  const userAgent = request.headers.get("user-agent");
  const md = new MobileDetect(userAgent);
  const isMobile = !!md.mobile();
  let isSetupComplete = await IsSetupComplete();
  if (!isSetupComplete) {
    throw redirect(302, base + "/manage/setup");
  }
  if (process.env.KENER_SECRET_KEY === void 0 || process.env.ORIGIN === void 0) {
    throw redirect(302, base + "/manage/setup");
  }
  let isLoggedIn = await IsLoggedInSession(cookies);
  let site = await GetAllSiteData();
  request.headers;
  let localTz = "UTC";
  const localTzCookie = cookies.get("localTz");
  if (!!localTzCookie) {
    localTz = localTzCookie;
  }
  let isBot = false;
  if (userAgent?.includes("Chrome-Lighthouse") || userAgent?.includes("bot")) {
    isBot = true;
  }
  let selectedLang = GetLocaleFromCookie(site, cookies);
  const query = url.searchParams;
  query.get("bgc") ? "#" + query.get("bgc") : "";
  const emailSubscriptionTrigger = await GetSubscriptionTriggerByEmail();
  return {
    site,
    localTz,
    isBot,
    lang: init(String(selectedLang)),
    selectedLang,
    isLoggedIn: !!isLoggedIn.user,
    canSendEmail: IsEmailSetup(),
    canUsersSubscribe: !!emailSubscriptionTrigger && emailSubscriptionTrigger.subscription_trigger_status == "ACTIVE",
    isMobile
  };
}
export {
  load
};
