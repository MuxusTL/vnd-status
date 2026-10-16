import { c as create_ssr_component, a as subscribe, e as escape, d as add_attribute, v as validate_component, b as each } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/index6.js";
import { I as IncidentNew } from "../../../../../chunks/IncidentNew.js";
import "../../../../../chunks/index3.js";
import { f, l } from "../../../../../chunks/client.js";
import { getUnixTime, startOfDay, addDays, subDays, parse } from "date-fns";
import { p as page } from "../../../../../chunks/stores.js";
import { B as Button } from "../../../../../chunks/button.js";
import { C as ChevronLeft } from "../../../../../chunks/chevron-left.js";
import { A as ArrowLeft } from "../../../../../chunks/arrow-left.js";
import { A as ArrowRight } from "../../../../../chunks/arrow-right.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let selectedLang = data.selectedLang;
  let incidents = data.incidents;
  let incidentSmartDates = {};
  incidents.forEach((incident) => {
    let startTime = incident.start_date_time;
    const today = getUnixTime(startOfDay(new Date(startTime * 1e3)));
    const tomorrow = getUnixTime(startOfDay(addDays(new Date(startTime * 1e3), 1)));
    const dayAfterTomorrow = getUnixTime(startOfDay(addDays(new Date(startTime * 1e3), 2)));
    const yesterday = getUnixTime(startOfDay(subDays(new Date(startTime * 1e3), 1)));
    const dayBeforeYesterday = getUnixTime(startOfDay(subDays(new Date(startTime * 1e3), 2)));
    if (!incidentSmartDates[today]) {
      incidentSmartDates[today] = [];
    }
    if (!incidentSmartDates[tomorrow]) {
      incidentSmartDates[tomorrow] = [];
    }
    if (!incidentSmartDates[dayAfterTomorrow]) {
      incidentSmartDates[dayAfterTomorrow] = [];
    }
    if (!incidentSmartDates[yesterday]) {
      incidentSmartDates[yesterday] = [];
    }
    if (!incidentSmartDates[dayBeforeYesterday]) {
      incidentSmartDates[dayBeforeYesterday] = [];
    }
    incidentSmartDates[today].push(incident);
  });
  let sortedIncidentSmartDates = Object.keys(incidentSmartDates).sort((a, b) => a - b);
  let canonical = data.canonical;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1kp5cev_START -->${$$result.title = `<title> ${escape(f(parse(data.thisMonthName, "MMMM-yyyy", /* @__PURE__ */ new Date()), "MMMM, yyyy", selectedLang, $page.data.localTz))} ${escape(l(data.lang, "Incident Updates"))} |
    ${escape(data.site.title)} </title>`, ""}<meta name="description" content="${escape(l(data.lang, "Incident Updates"), true) + " | " + escape(l(data.lang, "Recent Incidents"), true) + " | " + escape(l(data.lang, "Recent Maintenances"), true) + " " + escape(f(parse(data.thisMonthName, "MMMM-yyyy", /* @__PURE__ */ new Date()), "MMMM, yyyy", selectedLang, $page.data.localTz), true) + " |\n		" + escape(data.site.title, true)}"><link rel="canonical"${add_attribute("href", canonical, 0)}><!-- HEAD_svelte-1kp5cev_END -->`, ""} <div class="mt-12"></div> <section class="section-back mx-auto my-2 flex w-full max-w-[655px] flex-1 flex-col items-start justify-center">${validate_component(Button, "Button").$$render(
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
  )}</section> <section class="section-month-banner mx-auto mb-8 flex max-w-[655px] flex-1 flex-col items-start justify-center"><div class="mesh mx-auto min-w-full max-w-[655px] rounded-md px-4 py-12 lg:flex lg:items-center"><div class="blurry-bg mx-auto max-w-3xl text-center text-muted"><h1 class="text-5xl font-extrabold leading-tight">${escape(f(new Date(data.midnightMonthStartUTCTimestamp * 1e3), "MMMM, yyyy", selectedLang, $page.data.localTz))}</h1> <p class="mx-auto mt-4 max-w-xl font-medium sm:text-xl">${escape(l(data.lang, "Incident Updates"))}</p></div></div> <div class="section-month-events mx-auto mb-2 mt-4 flex w-full flex-1 flex-col items-start justify-center bg-transparent md:w-[655px]">${sortedIncidentSmartDates.length == 0 ? `<div class="mx-auto w-full rounded-md bg-clip-text p-12 text-center"><div class="mx-auto mb-4 h-[32px] w-[32px] text-primary" data-svelte-h="svelte-1ezpncr"><picture><source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.webp" type="image/webp"> <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.gif" alt="🎉" width="32" height="32"></picture></div> <h1 class="text-xl font-semibold leading-tight">${escape(l(data.lang, "No Incident in %date", {
    date: f(new Date(data.midnightMonthStartUTCTimestamp * 1e3), "MMMM, yyyy", selectedLang, $page.data.localTz)
  }))}</h1></div>` : ``} ${each(sortedIncidentSmartDates, (date) => {
    return `<div class="mb-4 grid w-full grid-cols-2 gap-x-4 rounded-md border bg-card"><div class="text-md col-span-2 border-b p-2 px-4 font-medium">${escape(f(new Date(date * 1e3), "EEEE, MMMM do", data.selectedLang, $page.data.localTz))}</div> ${incidentSmartDates[date].length === 0 ? `<div class="col-span-2 p-2 px-4 text-sm font-medium text-muted-foreground">${escape(l(data.lang, "No Incidents"))} </div>` : ``} ${each(incidentSmartDates[date], (incident, index) => {
      return `<div class="newincidents col-span-2">${validate_component(IncidentNew, "Incident").$$render(
        $$result,
        {
          incident,
          lang: data.lang,
          index: "incident-" + index,
          selectedLang
        },
        {},
        {}
      )} </div>`;
    })} </div>`;
  })}</div> <div class="mx-auto mb-2 mt-4 flex w-full flex-1 flex-col items-start justify-center bg-transparent md:w-[655px]"><div class="flex w-full justify-between">${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "submit",
      variant: "secondary",
      class: "bounce-left"
    },
    {},
    {
      default: () => {
        return `${validate_component(ArrowLeft, "ArrowLeft").$$render($$result, { class: "arrow mr-2 h-4 w-4" }, {}, {})} ${escape(f(new Date(data.midnightPrevMonthUTCTimestamp * 1e3), "MMMM, yyyy", selectedLang, $page.data.localTz))}`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "secondary",
      class: "bounce-right"
    },
    {},
    {
      default: () => {
        return `${escape(f(new Date(data.midnightNextMonthUTCTimestamp * 1e3), "MMMM, yyyy", selectedLang, $page.data.localTz))} ${validate_component(ArrowRight, "ArrowRight").$$render($$result, { class: "arrow ml-2 h-4 w-4" }, {}, {})}`;
      }
    }
  )}</div></div></section>`;
});
export {
  Page as default
};
