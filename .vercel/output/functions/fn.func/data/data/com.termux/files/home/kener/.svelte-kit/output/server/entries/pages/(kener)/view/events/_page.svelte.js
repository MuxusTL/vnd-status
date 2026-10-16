import { c as create_ssr_component, a as subscribe, e as escape, d as add_attribute, v as validate_component, b as each } from "../../../../../chunks/ssr.js";
import { l, f } from "../../../../../chunks/client.js";
import { getUnixTime, startOfDay } from "date-fns";
import { p as page } from "../../../../../chunks/stores.js";
import "../../../../../chunks/index3.js";
import { I as IncidentNew } from "../../../../../chunks/IncidentNew.js";
import { b as base } from "../../../../../chunks/paths.js";
import { B as Button } from "../../../../../chunks/button.js";
import { C as ChevronLeft } from "../../../../../chunks/chevron-left.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let incidents = data.incidents;
  let incidentSmartDates = {};
  incidents.forEach((incident) => {
    let startTime = incident.start_date_time;
    const today = getUnixTime(startOfDay(new Date(startTime * 1e3)));
    if (!incidentSmartDates[today]) {
      incidentSmartDates[today] = [];
    }
    incidentSmartDates[today].push(incident);
  });
  let sortedIncidentSmartDates = Object.keys(incidentSmartDates).sort((a, b) => a - b);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1cnels5_START -->${$$result.title = `<title>${escape(l(data.lang, "Upcoming Maintenances"))}</title>`, ""}<meta name="description"${add_attribute("content", l(data.lang, "Upcoming Maintenances"), 0)}><link rel="canonical"${add_attribute("href", `${base}/view/events`, 0)}><!-- HEAD_svelte-1cnels5_END -->`, ""} <div class="mt-10"></div> <section class="section-back mx-auto flex w-full max-w-[655px] flex-1 flex-col items-start justify-center"><div class="mx-auto min-w-full max-w-[655px] rounded-md px-4 py-12 lg:flex lg:items-center"><div class="mx-auto text-center"><h1 class="text-3xl font-extrabold leading-tight">${escape(l(data.lang, "Upcoming Maintenances"))}</h1></div></div> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "outline",
      class: "bounce-left h-8   justify-start  pl-1.5"
    },
    {},
    {
      default: () => {
        return `${validate_component(ChevronLeft, "ChevronLeft").$$render($$result, { class: "arrow mr-1 h-5 w-5" }, {}, {})} ${escape(l(data.lang, "Back"))}`;
      }
    }
  )}</section> <section class="section-view-event mx-auto mb-8 flex max-w-[820px] flex-1 flex-col items-start justify-center"><div class="section-month-events mx-auto mb-2 mt-4 flex w-full flex-1 flex-col items-start justify-center bg-transparent md:w-[655px]">${sortedIncidentSmartDates.length == 0 ? `<div class="mx-auto w-full rounded-md bg-clip-text p-12 text-center"><div class="mx-auto mb-4 h-[32px] w-[32px] text-primary" data-svelte-h="svelte-1ezpncr"><picture><source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.webp" type="image/webp"> <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.gif" alt="🎉" width="32" height="32"></picture></div> <h1 class="text-xl font-semibold leading-tight">${escape(l(data.lang, "There are no upcoming maintenances"))}</h1></div>` : ``} ${each(sortedIncidentSmartDates, (date) => {
    return `<div class="mb-4 grid w-full grid-cols-2 gap-x-4 rounded-md border bg-card"><div class="text-md col-span-2 border-b p-2 px-4 font-medium">${escape(f(new Date(date * 1e3), "EEEE, MMMM do", data.selectedLang, $page.data.localTz))}</div> ${incidentSmartDates[date].length === 0 ? `<div class="col-span-2 p-2 px-4 text-sm font-medium text-muted-foreground">${escape(l(data.lang, "No Incidents"))} </div>` : ``} ${each(incidentSmartDates[date], (incident, index) => {
      return `<div class="newincidents col-span-2">${validate_component(IncidentNew, "Incident").$$render(
        $$result,
        {
          incident,
          lang: data.lang,
          index: "incident-" + index,
          selectedLang: $page.data.selectedLang
        },
        {},
        {}
      )} </div>`;
    })} </div>`;
  })}</div></section>`;
});
export {
  Page as default
};
