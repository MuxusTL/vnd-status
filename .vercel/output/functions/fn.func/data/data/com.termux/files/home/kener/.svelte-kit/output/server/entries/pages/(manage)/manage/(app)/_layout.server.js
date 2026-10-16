import { r as GetAllSiteData, O as IsLoggedInSession } from "../../../../../chunks/controller.js";
import { r as redirect } from "../../../../../chunks/index.js";
import { b as base } from "../../../../../chunks/paths.js";
import { l as MaskString } from "../../../../../chunks/db.js";
import { v as version } from "../../../../../chunks/version.js";
async function load({ params, route, url, cookies, request }) {
  let siteData = await GetAllSiteData();
  if (process.env.KENER_SECRET_KEY === void 0) {
    throw redirect(302, base + "/manage/setup");
  }
  let userDB = null;
  let isLoggedIn = await IsLoggedInSession(cookies);
  if (!!isLoggedIn.error) {
    throw redirect(302, base + isLoggedIn.location);
  }
  userDB = isLoggedIn.user;
  return {
    siteData,
    KENER_SECRET_KEY: !!process.env.KENER_SECRET_KEY ? MaskString(process.env.KENER_SECRET_KEY) : "",
    user: userDB,
    kenerVersion: version()
  };
}
export {
  load
};
