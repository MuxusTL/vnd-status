import { c as create_ssr_component, a as subscribe, d as add_attribute, v as validate_component, b as each, e as escape } from "../../../../../chunks/ssr.js";
import { M as Monitor } from "../../../../../chunks/monitor.js";
import { C as Card } from "../../../../../chunks/card.js";
import { C as Card_content } from "../../../../../chunks/card-content.js";
import "clsx";
import "dequal";
import "../../../../../chunks/index3.js";
import "../../../../../chunks/index6.js";
import { p as page } from "../../../../../chunks/stores.js";
import { l } from "../../../../../chunks/client.js";
let embed = true;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let element;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${data.monitors.length > 0 ? `<section class="w-fit p-0.5"${add_attribute("this", element, 0)}>${validate_component(Card, "Card.Root").$$render($$result, { class: "w-[575px]      pt-0 shadow-none" }, {}, {
    default: () => {
      return `${validate_component(Card_content, "Card.Content").$$render($$result, { class: "monitors-card embed p-0 pt-0" }, {}, {
        default: () => {
          return `${each(data.monitors, (monitor) => {
            return `${validate_component(Monitor, "Monitor").$$render(
              $$result,
              {
                monitor,
                localTz: data.localTz,
                selectedLang: data.selectedLang,
                lang: data.lang,
                embed
              },
              {},
              {}
            )}`;
          })}`;
        }
      })}`;
    }
  })}</section>` : `<section class="mx-auto mb-4 flex w-full max-w-[655px] flex-1 flex-col items-start justify-center bg-transparent" id="">${validate_component(Card, "Card.Root").$$render($$result, { class: "mx-auto bg-transparent" }, {}, {
    default: () => {
      return `${validate_component(Card_content, "Card.Content").$$render($$result, { class: "bg-transparent pt-4" }, {}, {
        default: () => {
          return `<h1 class="scroll-m-20 text-center text-2xl font-extrabold tracking-tight lg:text-2xl">${escape(l(data.lang, "No Monitor Found"))}</h1>`;
        }
      })}`;
    }
  })}</section>`}`;
});
export {
  Page as default
};
