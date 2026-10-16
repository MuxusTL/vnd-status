import { c as create_ssr_component, b as each, e as escape, v as validate_component } from "../../../../../../../chunks/ssr.js";
import { b as base } from "../../../../../../../chunks/paths.js";
import moment from "moment";
import "../../../../../../../chunks/index3.js";
import { B as Button } from "../../../../../../../chunks/button.js";
import { E as ExternalLink } from "../../../../../../../chunks/external-link.js";
const AlertsInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let alerts = [];
  if (data.siteData.github && data.siteData.github.owner && data.siteData.github.repo) {
    `https://github.com/${data.siteData.github.owner}/${data.siteData.github.repo}/issues`;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="mt-4"><div class="mb-4 flex justify-between"><div>${``}</div>  ${``} </div> <div class="flex flex-col"><div class="-m-1.5 overflow-x-auto"><div class="inline-block min-w-full p-1.5 align-middle"><div class="overflow-hidden rounded-lg border dark:border-neutral-700"><table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700"><thead data-svelte-h="svelte-1aua9gt"><tr><th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">ID</th> <th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">Type</th> <th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">Monitor</th> <th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">Status</th> <th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">Checks</th> <th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">Incident</th> <th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">Created At</th></tr></thead> <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">${each(alerts, (alert) => {
    return `<tr><td class="whitespace-nowrap px-6 py-4 text-sm font-medium">${escape(alert.id)}</td> <td class="whitespace-nowrap px-6 py-4 text-xs font-semibold">${alert.monitor_status === "DOWN" ? `<span class="text-red-500">${escape(alert.monitor_status)} </span>` : `<span class="text-yellow-500">${escape(alert.monitor_status)} </span>`}</td> <td class="whitespace-nowrap px-6 py-4 text-sm">${escape(alert.monitor_tag)}</td> <td class="whitespace-nowrap px-6 py-4 text-xs font-semibold">${alert.alert_status === "RESOLVED" ? `<span class="text-blue-500">${escape(alert.alert_status)} </span>` : `<span class="text-fuchsia-500">${escape(alert.alert_status)} </span>`}</td> <td class="whitespace-nowrap px-6 py-4 text-sm">${escape(alert.health_checks)}</td> <td class="whitespace-nowrap px-6 py-4 text-xs font-semibold">${!!alert.incident_number ? `<a rel="external" href="${escape(base, true) + "/manage/app/events#" + escape(alert.incident_number, true)}" class="text-cyan-500 hover:underline focus:outline-none">${escape(alert.incident_number)} </a>` : `-`}</td> <td class="whitespace-nowrap px-6 py-4 text-sm">${escape(moment.utc(alert.created_at, "YYYY-MM-DD HH:mm:ss").local().format("YYYY-MM-DD HH:mm:ss"))}</td> </tr>`;
  })}</tbody></table></div></div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="min-h-[70vh]"><div class="flex justify-end">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "outline",
      href: "https://kener.ing/docs/alerts",
      class: " text-sm"
    },
    {},
    {
      default: () => {
        return `Documentation ${validate_component(ExternalLink, "ExternalLink").$$render($$result, { size: "12", class: "ml-1" }, {}, {})}`;
      }
    }
  )}</div> ${validate_component(AlertsInfo, "AlertsInfo").$$render($$result, { data }, {}, {})}</div>`;
});
export {
  Page as default
};
