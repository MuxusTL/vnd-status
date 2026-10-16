import { g as GetMonitors, y as GetLatestStatusActiveAll, z as GetLatestMonitoringData } from "../../../../../../chunks/controller.js";
import { S as StatusColor } from "../../../../../../chunks/color.js";
import "badge-maker";
import { E as ErrorSvg } from "../../../../../../chunks/anywhere.js";
async function GET({ params, setHeaders, url }) {
  let monitors = await GetMonitors({ status: "ACTIVE" });
  let lastObj;
  let activeTags = monitors.map((monitor) => monitor.tag);
  if (params.tag == "_") {
    lastObj = await GetLatestStatusActiveAll(activeTags);
  } else {
    if (monitors.length === 0) {
      return new Response(ErrorSvg, {
        headers: {
          "Content-Type": "image/svg+xml"
        }
      });
    }
    let m = monitors.find((monitor) => monitor.tag === params.tag);
    if (!m) {
      return new Response(ErrorSvg, {
        headers: {
          "Content-Type": "image/svg+xml"
        }
      });
    }
    lastObj = await GetLatestMonitoringData(params.tag);
  }
  const query = url.searchParams;
  const animate = query.get("animate") || "";
  let myColors = await StatusColor();
  let svg = `
	<svg width="32" height="32"  xmlns="http://www.w3.org/2000/svg">
		<circle cx="16" cy="16" r="8" fill="${myColors[lastObj.status]}" />
	</svg>
	`;
  if (animate == "ping") {
    svg = `
	<svg width="32" height="32"  xmlns="http://www.w3.org/2000/svg">
		<circle cx="16" cy="16" r="8" fill="${myColors[lastObj.status]}" opacity="0.5">
			<animate 
				attributeName="r" 
				from="8" 
				to="16" 
				dur="1s" 
				repeatCount="indefinite" />
			<animate 
				attributeName="opacity" 
				from="0.5" 
				to="0" 
				dur="1s" 
				repeatCount="indefinite" />
		</circle>
		<circle cx="16" cy="16" r="8" fill="${myColors[lastObj.status]}" />
</svg>
	`;
  }
  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml"
    }
  });
}
export {
  GET
};
