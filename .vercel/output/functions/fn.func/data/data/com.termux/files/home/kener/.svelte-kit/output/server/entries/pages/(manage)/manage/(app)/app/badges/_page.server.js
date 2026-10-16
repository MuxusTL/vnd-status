import { g as GetMonitors, B as GetSiteDataByKey } from "../../../../../../../chunks/controller.js";
import "../../../../../../../chunks/db.js";
async function load({ parent }) {
  let monitors = await GetMonitors({ status: "ACTIVE" });
  return {
    monitors,
    siteName: await GetSiteDataByKey("siteName"),
    siteURL: await GetSiteDataByKey("siteURL"),
    i18n: await GetSiteDataByKey("i18n")
  };
}
export {
  load
};
