import { c as create_ssr_component, a as subscribe, e as escape, d as add_attribute, v as validate_component } from "../../../../../../chunks/ssr.js";
import { I as IncidentNew } from "../../../../../../chunks/IncidentNew.js";
import { l } from "../../../../../../chunks/client.js";
import { p as page } from "../../../../../../chunks/stores.js";
import "../../../../../../chunks/index3.js";
import { B as Button } from "../../../../../../chunks/button.js";
import { C as ChevronLeft } from "../../../../../../chunks/chevron-left.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let incident = data.incident;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-4kz6ef_START -->${$$result.title = `<title> ${escape(data.title)} </title>`, ""}<meta name="description"${add_attribute("content", data.title, 0)}><!-- HEAD_svelte-4kz6ef_END -->`, ""} <section class="section-view-event-id mx-auto mb-8 mt-20 flex max-w-[820px] flex-1 flex-col items-start justify-center">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "outline",
      class: "bounce-left mb-2  h-8 justify-start  pl-1.5"
    },
    {},
    {
      default: () => {
        return `${validate_component(ChevronLeft, "ChevronLeft").$$render($$result, { class: "arrow mr-1 h-5 w-5" }, {}, {})} ${escape(l(data.lang, "Back"))}`;
      }
    }
  )} ${!!incident ? `<div class="w-full rounded-md border bg-card">${validate_component(IncidentNew, "Incident").$$render(
    $$result,
    {
      incident,
      lang: $page.data.lang,
      index: `incident-0`,
      selectedLang: $page.data.selectedLang,
      allowCollapse: false
    },
    {},
    {}
  )}</div>` : ``} ${!!data.error ? `<div class="mt-20 w-full rounded-md border bg-background"><p class="py-3 text-center text-lg font-medium text-destructive">${escape(data.error)}</p></div>` : ``}</section>`;
});
export {
  Page as default
};
