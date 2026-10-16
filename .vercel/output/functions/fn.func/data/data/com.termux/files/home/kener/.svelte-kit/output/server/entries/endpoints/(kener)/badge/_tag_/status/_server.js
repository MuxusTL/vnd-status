import { B as GetSiteDataByKey, g as GetMonitors, y as GetLatestStatusActiveAll, z as GetLatestMonitoringData } from "../../../../../../chunks/controller.js";
import { S as StatusColor } from "../../../../../../chunks/color.js";
import { makeBadge } from "badge-maker";
import { E as ErrorSvg } from "../../../../../../chunks/anywhere.js";
async function GET({ params, setHeaders, url }) {
  let lastObj;
  let name;
  let tag;
  const siteName = await GetSiteDataByKey("siteName");
  let monitors = await GetMonitors({ status: "ACTIVE" });
  let activeTags = monitors.map((monitor) => monitor.tag);
  if (params.tag == "_") {
    lastObj = await GetLatestStatusActiveAll(activeTags);
    name = siteName;
    tag = "";
  } else {
    if (monitors.length === 0) {
      return new Response(ErrorSvg, {
        headers: {
          "Content-Type": "image/svg+xml"
        }
      });
    }
    let m = monitors.find((monitor) => monitor.tag === params.tag);
    tag = m.tag;
    name = m.name;
    lastObj = await GetLatestMonitoringData(tag);
  }
  let myColors = await StatusColor();
  const query = url.searchParams;
  const labelColor = query.get("labelColor") || "333";
  let label = query.get("label") || name;
  const color = query.get("color") || myColors[lastObj.status].substr(1);
  const style = query.get("style") || "flat";
  label = label.trim();
  const format = {
    label,
    message: lastObj.status,
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
