import { c as create_ssr_component, v as validate_component, g as getContext, l as compute_rest_props, a as subscribe, w as set_store_value, p as spread, t as escape_attribute_value, q as escape_object, d as add_attribute, u as createEventDispatcher, e as escape, b as each } from "./ssr.js";
import "dequal";
import "./index3.js";
import "clsx";
import "./index6.js";
import { R as Root, T as Trigger, D as Dropdown_menu_content, G as Group } from "./index5.js";
import { b as base } from "./paths.js";
import { G as Gmi } from "./gmi.js";
import { p as page } from "./stores.js";
import { f, l } from "./client.js";
import "./index4.js";
import "canvas-confetti";
import { define, NumberFlowLite, formatToData, renderInnerHTML } from "number-flow";
import { w as writable, r as readable, d as derived } from "./index2.js";
import "marked";
import { B as Button } from "./button.js";
import { S as Settings } from "./settings.js";
import { I as Icon } from "./Icon.js";
import { D as Dropdown_menu_item } from "./dropdown-menu-item.js";
import { A as ArrowRight } from "./arrow-right.js";
const Share_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "18", "cy": "5", "r": "3" }],
    ["circle", { "cx": "6", "cy": "12", "r": "3" }],
    ["circle", { "cx": "18", "cy": "19", "r": "3" }],
    [
      "line",
      {
        "x1": "8.59",
        "x2": "15.42",
        "y1": "13.51",
        "y2": "17.49"
      }
    ],
    [
      "line",
      {
        "x1": "15.41",
        "x2": "8.59",
        "y1": "6.51",
        "y2": "10.49"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "share-2" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Share2 = Share_2;
let groupKey = Symbol("group");
function getGroupContext() {
  return getContext(groupKey);
}
class NumberFlowElement extends NumberFlowLite {
  set __svelte_manual(manual) {
    this.manual = manual;
  }
  set data(data) {
    super.data = data;
  }
}
Object.keys(NumberFlowElement.defaultProps).forEach((key) => {
  Object.defineProperty(NumberFlowElement.prototype, `__svelte_${key}`, {
    set(value) {
      this[key] = value;
    },
    enumerable: true,
    configurable: true
  });
});
define("number-flow-svelte", NumberFlowElement);
const NumberFlow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formatter;
  let data;
  let $$restProps = compute_rest_props($$props, [
    "locales",
    "format",
    "value",
    "prefix",
    "suffix",
    "willChange",
    "transformTiming",
    "spinTiming",
    "opacityTiming",
    "animated",
    "respectMotionPreference",
    "trend",
    "continuous",
    "digits",
    "el"
  ]);
  let $elStore, $$unsubscribe_elStore;
  let { locales = void 0 } = $$props;
  let { format = void 0 } = $$props;
  let { value } = $$props;
  let { prefix = void 0 } = $$props;
  let { suffix = void 0 } = $$props;
  let { willChange = false } = $$props;
  let { transformTiming = NumberFlowElement.defaultProps.transformTiming } = $$props;
  let { spinTiming = NumberFlowElement.defaultProps.spinTiming } = $$props;
  let { opacityTiming = NumberFlowElement.defaultProps.opacityTiming } = $$props;
  let { animated = NumberFlowElement.defaultProps.animated } = $$props;
  let { respectMotionPreference = NumberFlowElement.defaultProps.respectMotionPreference } = $$props;
  let { trend = NumberFlowElement.defaultProps.trend } = $$props;
  let { continuous = NumberFlowElement.defaultProps.continuous } = $$props;
  let { digits = NumberFlowElement.defaultProps.digits } = $$props;
  let { el = void 0 } = $$props;
  const elStore = writable(el);
  $$unsubscribe_elStore = subscribe(elStore, (value2) => $elStore = value2);
  const group = getGroupContext();
  group?.register?.(elStore);
  if ($$props.locales === void 0 && $$bindings.locales && locales !== void 0)
    $$bindings.locales(locales);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0)
    $$bindings.format(format);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.willChange === void 0 && $$bindings.willChange && willChange !== void 0)
    $$bindings.willChange(willChange);
  if ($$props.transformTiming === void 0 && $$bindings.transformTiming && transformTiming !== void 0)
    $$bindings.transformTiming(transformTiming);
  if ($$props.spinTiming === void 0 && $$bindings.spinTiming && spinTiming !== void 0)
    $$bindings.spinTiming(spinTiming);
  if ($$props.opacityTiming === void 0 && $$bindings.opacityTiming && opacityTiming !== void 0)
    $$bindings.opacityTiming(opacityTiming);
  if ($$props.animated === void 0 && $$bindings.animated && animated !== void 0)
    $$bindings.animated(animated);
  if ($$props.respectMotionPreference === void 0 && $$bindings.respectMotionPreference && respectMotionPreference !== void 0)
    $$bindings.respectMotionPreference(respectMotionPreference);
  if ($$props.trend === void 0 && $$bindings.trend && trend !== void 0)
    $$bindings.trend(trend);
  if ($$props.continuous === void 0 && $$bindings.continuous && continuous !== void 0)
    $$bindings.continuous(continuous);
  if ($$props.digits === void 0 && $$bindings.digits && digits !== void 0)
    $$bindings.digits(digits);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  set_store_value(elStore, $elStore = el, $elStore);
  formatter = new Intl.NumberFormat(locales, format);
  data = formatToData(value, formatter, prefix, suffix);
  $$unsubscribe_elStore();
  return `<number-flow-svelte${spread(
    [
      {
        "aria-label": escape_attribute_value(data.valueAsString)
      },
      escape_object($$restProps),
      { role: "img" },
      {
        "data-will-change": escape_attribute_value(willChange ? "" : void 0)
      },
      {
        __svelte_manual: escape_attribute_value(Boolean(group))
      },
      {
        __svelte_transformtiming: escape_attribute_value(transformTiming)
      },
      {
        __svelte_spintiming: escape_attribute_value(spinTiming)
      },
      {
        __svelte_opacitytiming: escape_attribute_value(opacityTiming)
      },
      {
        __svelte_animated: escape_attribute_value(animated)
      },
      {
        __svelte_respectmotionpreference: escape_attribute_value(respectMotionPreference)
      },
      {
        __svelte_trend: escape_attribute_value(trend)
      },
      {
        __svelte_continuous: escape_attribute_value(continuous)
      },
      {
        __svelte_digits: escape_attribute_value(digits)
      },
      { data: escape_attribute_value(data) }
    ],
    {}
  )}${add_attribute("this", el, 0)}><!-- HTML_TAG_START -->${renderInnerHTML(data)}<!-- HTML_TAG_END --></number-flow-svelte>`;
});
const canAnimate = readable(false, (set) => {
});
const prefersReducedMotion = readable(false, (set) => {
});
derived([canAnimate, prefersReducedMotion], ([canAnimate2, prefersReducedMotion2]) => canAnimate2 && !prefersReducedMotion2);
const Monitor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  createEventDispatcher();
  let { monitor } = $$props;
  let { localTz } = $$props;
  let { lang } = $$props;
  let { embed = false } = $$props;
  let { selectedLang = "en" } = $$props;
  let _90Day = monitor.pageData._90Day;
  let uptime90Day = monitor.pageData.uptime90Day;
  let incidents = {};
  let homeDataMaxDays = monitor.pageData.homeDataMaxDays;
  ($page.data.isMobile ? 346 : 546) / homeDataMaxDays.maxDays;
  function returnUptimeRollers() {
    let rollers = homeDataMaxDays.selectableDays;
    rollers.sort((a, b) => b - a);
    let ret = [];
    for (let i = 0; i < rollers.length; i++) {
      let roller = rollers[i];
      if (roller == 1) {
        ret.push({
          text: `${l(lang, "Today")}`,
          startTs: monitor.pageData.startOfTheDay,
          endTs: monitor.pageData.maxDateTodayTimestamp
        });
      } else {
        ret.push({
          text: `${roller} ${l(lang, "Days")}`,
          startTs: monitor.pageData.startOfTheDay - 86400 * (roller - 1),
          endTs: monitor.pageData.maxDateTodayTimestamp
        });
      }
      if (i == 0) {
        ret[i].value = uptime90Day;
      }
    }
    return ret;
  }
  let uptimesRollers = returnUptimeRollers();
  let rolledAt = 0;
  let showDailyDataModal = false;
  let selectedTs = null;
  if ($$props.monitor === void 0 && $$bindings.monitor && monitor !== void 0)
    $$bindings.monitor(monitor);
  if ($$props.localTz === void 0 && $$bindings.localTz && localTz !== void 0)
    $$bindings.localTz(localTz);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  if ($$props.embed === void 0 && $$bindings.embed && embed !== void 0)
    $$bindings.embed(embed);
  if ($$props.selectedLang === void 0 && $$bindings.selectedLang && selectedLang !== void 0)
    $$bindings.selectedLang(selectedLang);
  $$unsubscribe_page();
  return `<div class="${"monitor relative " + escape("z-0", true) + " grid w-full max-w-[655px] grid-cols-12 gap-2 pb-2 pt-0"}">${!!!embed ? `<div class="col-span-12 w-full"><div class="pt-0"><div class="scroll-m-20 pr-16"><div class="flex items-center gap-2.5">${monitor.image ? `<div class="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-secondary/50 p-0.5 overflow-hidden border border-border/40">${validate_component(Gmi, "GMI").$$render(
    $$result,
    {
      src: monitor.image,
      classList: "h-full w-full object-contain",
      alt: monitor.name,
      srcset: ""
    },
    {},
    {}
  )}</div>` : ``} <p class="min-w-0 flex-1 truncate font-['Space_Grotesk'] text-base md:text-lg font-bold text-foreground">${escape(monitor.name)}</p></div> <p class="mt-1 text-xs font-medium text-muted-foreground">${!!monitor.description ? `<!-- HTML_TAG_START -->${monitor.description}<!-- HTML_TAG_END -->` : ``}</p> <div class="absolute right-4 top-4 flex gap-x-1.5 md:right-6">${$page.data.isLoggedIn ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: base + "/manage/app/monitors#" + monitor.tag,
      class: "h-7 w-7 rounded-full p-0 flex items-center justify-center border border-border/60 bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground transition-all",
      variant: "ghost",
      rel: "external"
    },
    {},
    {
      default: () => {
        return `${validate_component(Settings, "Settings").$$render($$result, { class: "h-3.5 w-3.5" }, {}, {})}`;
      }
    }
  )}` : ``} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "h-7 w-7 rounded-full p-0 flex items-center justify-center border border-border/60 bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground transition-all",
      variant: "ghost"
    },
    {},
    {
      default: () => {
        return `${validate_component(Share2, "Share2").$$render($$result, { class: "h-3.5 w-3.5" }, {}, {})}`;
      }
    }
  )}</div></div></div></div>` : ``} <div class="col-span-12 w-full min-h-[94px] pt-2"><div class="col-span-12"><div class="flex flex-wrap items-center justify-between gap-x-1 pb-1"><div>${validate_component(Root, "DropdownMenu.Root").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Trigger, "DropdownMenu.Trigger").$$render($$result, { class: "mr-2 flex" }, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "secondary",
              class: "h-6 rounded-md border border-border/60 bg-secondary/60 px-2.5 text-xs font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-all"
            },
            {},
            {
              default: () => {
                return `${escape(uptimesRollers[rolledAt].text)}`;
              }
            }
          )}`;
        }
      })} ${validate_component(Dropdown_menu_content, "DropdownMenu.Content").$$render(
        $$result,
        {
          class: (!!embed ? "h-[60px] overflow-y-auto" : "") + " rounded-xl border border-border bg-popover shadow-xl"
        },
        {},
        {
          default: () => {
            return `${each(uptimesRollers, (roller, i) => {
              return `${validate_component(Group, "DropdownMenu.Group").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Dropdown_menu_item, "DropdownMenu.Item").$$render(
                    $$result,
                    {
                      class: "text-xs " + (rolledAt == i ? "bg-secondary" : "") + " font-semibold"
                    },
                    {},
                    {
                      default: () => {
                        return `${escape(roller.text)} `;
                      }
                    }
                  )} `;
                }
              })}`;
            })}`;
          }
        }
      )}`;
    }
  })}</div> <div class="flex items-center gap-x-2 pt-1 text-right">${``} ${!isNaN(uptimesRollers[rolledAt].value) ? `${validate_component(NumberFlow, "NumberFlow").$$render(
    $$result,
    {
      class: "border-r border-border/60 pr-2 font-mono text-xs font-semibold",
      value: uptimesRollers[rolledAt].value,
      format: {
        notation: "standard",
        minimumFractionDigits: 4,
        maximumFractionDigits: 4
      },
      suffix: "%"
    },
    {},
    {}
  )}` : ``} <div class="${"inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-semibold text-" + escape(monitor.pageData.summaryColorClass, true) + " bg-secondary/60 border border-border/60"}"><span class="${"h-1.5 w-1.5 rounded-full bg-" + escape(monitor.pageData.summaryColorClass, true)}"></span> ${escape(monitor.pageData.summaryStatus)}</div></div></div> <div class="relative col-span-12 mt-0.5"><div class="daygrid90 flex w-full min-h-[46px] items-center justify-between gap-[1.5px] sm:gap-[2px] py-1.5 overflow-x-hidden">${each(Object.entries(_90Day), ([ts, bar]) => {
    return `<button${add_attribute("data-ts", ts, 0)} class="${"oneline h-[38px] flex-1 min-w-0 " + escape(bar.border ? "opacity-100" : "opacity-25", true) + " " + escape(selectedTs == ts ? "is-active" : "", true) + " p-0 flex items-center justify-center transition-all group"}"><div class="${"oneline-in h-[32px] sm:h-[34px] w-full bg-" + escape(bar.cssClass, true) + " mx-auto rounded-[3px] group-hover:scale-y-110 group-hover:brightness-110 transition-all " + escape(
      selectedTs == ts ? "scale-y-110 brightness-125 ring-2 ring-primary ring-offset-1 ring-offset-background" : "",
      true
    )}"></div>  ${!!incidents[ts] ? `<div class="${"bg-api-" + escape(incidents[ts].monitor_impact.toLowerCase(), true) + " comein absolute -bottom-[3px] left-1/2 -translate-x-1/2 h-[4px] w-[4px] rounded-full ring-1 ring-background"}"></div>` : ``}</button> ${bar.showDetails && !showDailyDataModal ? `<div class="show-hover absolute text-sm"><div class="${"text-" + escape(bar.textClass, true) + " text-xs font-semibold"}">${escape(f(new Date(bar.timestamp * 1e3), "EEEE, MMMM do, yyyy", selectedLang, $page.data.localTz))}
                  -
                  ${escape(bar.summaryStatus)}</div> </div>` : ``}`;
  })}</div>  <div class="flex items-center justify-between text-[11px] font-medium text-muted-foreground/75 px-0.5 pt-1 pb-0.5 select-none"><span>${escape(uptimesRollers[rolledAt]?.text.includes("Today") ? l(lang, "Today") : `${uptimesRollers[rolledAt]?.text || "90 Days"} ${l(lang, "ago")}`)}</span> <div class="h-px flex-1 mx-3 bg-border/40"></div> <span>${escape(l(lang, "Today"))}</span></div> ${monitor.monitor_type === "GROUP" && !!!embed ? `<div class="mt-2 flex justify-end">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "secondary",
      href: base + "?group=" + monitor.tag,
      rel: "external",
      class: "bounce-right h-8 text-xs"
    },
    {},
    {
      default: () => {
        return `${escape(l(lang, "View in detail"))} ${validate_component(ArrowRight, "ArrowRight").$$render($$result, { class: "arrow ml-1.5 h-4 w-4" }, {}, {})}`;
      }
    }
  )}</div>` : ``} ${``}</div></div></div></div>`;
});
export {
  Monitor as M
};
