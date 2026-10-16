import { au as GetIncidentsPaginated } from "../../../../../chunks/controller.js";
import { b as GetMinuteStartNowTimestampUTC } from "../../../../../chunks/db.js";
async function load({ parent, url, params, cookies }) {
  let page = url.searchParams.get("page") || 1;
  let limit = url.searchParams.get("limit") || 100;
  let direction = url.searchParams.get("direction") || "after";
  let filter = {
    start: url.searchParams.get("start") || GetMinuteStartNowTimestampUTC(),
    status: url.searchParams.get("status") || "OPEN"
  };
  if (!!url.searchParams.get("incident_type")) {
    filter.incident_type = url.searchParams.get("incident_type");
  }
  let incidents = await GetIncidentsPaginated(page, limit, filter, direction);
  return { incidents };
}
export {
  load
};
