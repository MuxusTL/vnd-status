import { c as create_ssr_component, l as compute_rest_props, p as spread, t as escape_attribute_value, q as escape_object, a as subscribe, e as escape, d as add_attribute, b as each, v as validate_component } from "../../../chunks/ssr.js";
import { M as Monitor } from "../../../chunks/monitor.js";
import { C as Card } from "../../../chunks/card.js";
import { C as Card_content } from "../../../chunks/card-content.js";
import { C as Card_description } from "../../../chunks/card-description.js";
import "clsx";
import { C as Card_header, a as Card_title } from "../../../chunks/card-title.js";
import "../../../chunks/index3.js";
import { I as IncidentNew } from "../../../chunks/IncidentNew.js";
import { b as badgeVariants } from "../../../chunks/index6.js";
import { l } from "../../../chunks/client.js";
import { b as base } from "../../../chunks/paths.js";
import "../../../chunks/index4.js";
import "canvas-confetti";
import "dequal";
import { G as Gmi } from "../../../chunks/gmi.js";
import { p as page } from "../../../chunks/stores.js";
import "@formkit/auto-animate";
import { format } from "date-fns";
import { B as Button } from "../../../chunks/button.js";
import { C as ChevronLeft } from "../../../chunks/chevron-left.js";
import { i as is_void } from "../../../chunks/names.js";
import { c as cn } from "../../../chunks/utils.js";
import { A as ArrowRight } from "../../../chunks/arrow-right.js";
const analyticsEvent = (event, data) => {
  if (typeof document !== "undefined") {
    event = "kener_" + event;
    document.dispatchEvent(
      new CustomEvent("analyticsEvent", {
        bubbles: true,
        detail: {
          event,
          data
        }
      })
    );
  }
};
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "href", "variant"]);
  let { class: className = void 0 } = $$props;
  let { href = void 0 } = $$props;
  let { variant = "default" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  return `${((tag) => {
    return tag ? `<${href ? "a" : "span"}${spread(
      [
        { href: escape_attribute_value(href) },
        {
          class: escape_attribute_value(cn(badgeVariants({ variant, className })))
        },
        escape_object($$restProps)
      ],
      {}
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "span")}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let kindFilter = "INCIDENT";
  function kindOfIncidents(kind) {
    analyticsEvent("monitor_incident_kind_filter", { kind });
    kindFilter = kind;
  }
  if (data.allRecentIncidents.length == 0) {
    kindOfIncidents("MAINTENANCE");
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1scu33y_START -->${$$result.title = `<title>${escape(data.pageTitle)}</title>`, ""}${!!data.pageDescription ? `<meta name="description"${add_attribute("content", data.pageDescription, 0)}>` : ``}${!!data.canonical ? `<link rel="canonical"${add_attribute("href", data.canonical, 0)}>` : ``}${data.site.metaTags ? `${each(data.site.metaTags, (metaTag) => {
    return `${metaTag.key != "description" ? `<meta${add_attribute("name", metaTag.key, 0)}${add_attribute("content", metaTag.value, 0)}>` : ``}`;
  })}` : ``}<!-- HEAD_svelte-1scu33y_END -->`, ""} <div class="mt-12"></div> ${data.hero ? `<section class="section-hero mx-auto mb-8 flex w-full max-w-[655px] flex-1 flex-col items-start justify-center"><div class="mx-auto max-w-3xl text-center">${data.hero.image ? `${validate_component(Gmi, "GMI").$$render(
    $$result,
    {
      src: data.hero.image,
      classList: "m-auto mb-2 h-14 w-14",
      alt: "",
      srcset: ""
    },
    {},
    {}
  )}` : ``} ${data.hero.title ? `<h1 class="h1 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"><!-- HTML_TAG_START -->${data.hero.title}<!-- HTML_TAG_END --></h1>` : ``} ${data.hero.subtitle ? `<h2 class="mx-auto mt-4 max-w-xl sm:text-xl"><!-- HTML_TAG_START -->${data.hero.subtitle}<!-- HTML_TAG_END --></h2>` : ``}</div></section>` : ``} ${!!data.systemDataMessage ? (() => {
    let isDown = data.systemDataMessage.downsPercentage > 0, isDegraded = !isDown && data.systemDataMessage.degradedPercentage > 0, isMaint = !isDown && !isDegraded && data.systemDataMessage.maintenancePercentage > 0, statusType = isDown ? "down" : isDegraded ? "degraded" : isMaint ? "maintenance" : "up";
    return `    <div class="${"section-actions status-color-banner status-banner-" + escape(statusType, true) + " relative mx-auto mb-10 flex w-full max-w-[655px] flex-col items-center justify-center"}"><div class="z-20 w-full overflow-hidden rounded-2xl border bg-card shadow-md transition-all"><div class="flex items-center justify-between gap-x-2 px-4 py-3.5"><div class="flex items-center gap-3"><span class="relative flex h-3 w-3"><span class="${"absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 " + escape(
      isDown ? "bg-rose-400" : isDegraded ? "bg-amber-400" : isMaint ? "bg-indigo-400" : "bg-emerald-400",
      true
    )}"></span> <span class="${"relative inline-flex h-3 w-3 rounded-full " + escape(
      isDown ? "bg-rose-500" : isDegraded ? "bg-amber-500" : isMaint ? "bg-indigo-500" : "bg-emerald-500",
      true
    )}"></span></span> <span class="text-[15px] font-semibold tracking-tight text-foreground">${escape(l(data.lang, data.systemDataMessage.text))}</span></div> ${!isDown && !isDegraded && !isMaint ? `<span class="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full" data-svelte-h="svelte-1djjqqx">100% UP</span>` : ``}</div> <div class="status-color-bar flex h-1.5 w-full overflow-hidden bg-secondary/50"><div class="bg-api-up h-full transition-all" style="${"width: " + escape(data.systemDataMessage.upsPercentage, true) + "%;"}"></div> <div class="bg-api-degraded h-full transition-all" style="${"width: " + escape(data.systemDataMessage.degradedPercentage, true) + "%;"}"></div> <div class="bg-api-down h-full transition-all" style="${"width: " + escape(data.systemDataMessage.downsPercentage, true) + "%;"}"></div> <div class="bg-api-maintenance h-full transition-all" style="${"width: " + escape(data.systemDataMessage.maintenancePercentage, true) + "%;"}"></div></div></div></div>`;
  })() : ``} <div class="section-actions relative mx-auto mb-8 flex w-full max-w-[655px] flex-1 flex-col items-center justify-center"><div class="flex w-full flex-wrap items-center justify-center gap-2 rounded-xl border border-border/70 bg-card/60 p-1.5 shadow-sm backdrop-blur-md">${data.canSendEmail && data.canUsersSubscribe ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "ghost",
      class: "h-9 rounded-lg px-4 text-xs font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground transition-all"
    },
    {},
    {
      default: () => {
        return `<span class="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400"></span> ${escape(l(data.lang, "Subscribe to Updates"))}`;
      }
    }
  )}` : ``} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      rel: "external",
      href: base + "/view/events?incident_type=MAINTENANCE",
      variant: "ghost",
      class: "h-9 rounded-lg px-4 text-xs font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground transition-all"
    },
    {},
    {
      default: () => {
        return `<span class="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-indigo-400"></span> ${escape(l(data.lang, "Upcoming Maintenances"))}`;
      }
    }
  )}</div></div> ${data.pageType != "home" ? `<section class="section-back mx-auto my-2 flex w-full max-w-[655px] flex-1 flex-col items-start justify-center">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "outline",
      class: "bounce-left h-8 rounded-lg border border-border/70 bg-card/70 px-3 text-xs font-medium text-muted-foreground hover:bg-secondary hover:text-foreground justify-start backdrop-blur-md"
    },
    {},
    {
      default: () => {
        return `${validate_component(ChevronLeft, "ChevronLeft").$$render($$result, { class: "arrow mr-1 h-4 w-4" }, {}, {})} ${escape(l(data.lang, "Back"))}`;
      }
    }
  )}</section>` : ``} ${data.allRecentIncidents.length + data.allRecentMaintenances.length > 0 ? `<section class="section-events mx-auto mb-8 flex w-full max-w-[655px] flex-1 flex-col items-start justify-center" id=""><div class="mb-2 grid w-full grid-cols-2 gap-4"><div class="col-span-2 flex gap-x-2 text-center md:text-left">${kindFilter == "INCIDENT" ? `${data.allRecentIncidents.length > 0 ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "h-8 rounded-lg px-3.5 text-xs font-semibold bg-primary text-primary-foreground shadow-sm"
    },
    {},
    {
      default: () => {
        return `${escape(l(data.lang, "Recent Incidents"))}`;
      }
    }
  )}` : ``} ${data.allRecentMaintenances.length > 0 ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "secondary",
      class: "h-8 rounded-lg px-3.5 text-xs font-semibold border border-border/70 bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-foreground"
    },
    {},
    {
      default: () => {
        return `${escape(l(data.lang, "Recent Maintenances"))}`;
      }
    }
  )}` : ``}` : `${data.allRecentIncidents.length > 0 ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "secondary",
      class: "h-8 rounded-lg px-3.5 text-xs font-semibold border border-border/70 bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-foreground"
    },
    {},
    {
      default: () => {
        return `${escape(l(data.lang, "Recent Incidents"))}`;
      }
    }
  )}` : ``} ${data.allRecentMaintenances.length > 0 ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "h-8 rounded-lg px-3.5 text-xs font-semibold bg-primary text-primary-foreground shadow-sm"
    },
    {},
    {
      default: () => {
        return `${escape(l(data.lang, "Recent Maintenances"))}`;
      }
    }
  )}` : ``}`}</div></div> ${validate_component(Card, "Card.Root").$$render($$result, { class: "w-full" }, {}, {
    default: () => {
      return `${kindFilter == "INCIDENT" ? `${validate_component(Card_content, "Card.Content").$$render(
        $$result,
        {
          class: " newincidents w-full overflow-hidden p-0"
        },
        {},
        {
          default: () => {
            return `${each(data.allRecentIncidents, (incident, index) => {
              return `${validate_component(IncidentNew, "Incident").$$render(
                $$result,
                {
                  incident,
                  lang: data.lang,
                  index: "incident-" + index,
                  selectedLang: data.selectedLang
                },
                {},
                {}
              )}`;
            })}`;
          }
        }
      )}` : `${kindFilter == "MAINTENANCE" ? `${each(data.allRecentMaintenances, (incident, index) => {
        return `${validate_component(IncidentNew, "Incident").$$render(
          $$result,
          {
            incident,
            lang: data.lang,
            index: "incident-" + index,
            selectedLang: data.selectedLang
          },
          {},
          {}
        )}`;
      })}` : ``}`}`;
    }
  })}</section>` : ``} ${data.monitors.length > 0 ? `<section class="section-legend mx-auto mb-2 flex w-full flex-1 flex-col items-start justify-center bg-transparent md:w-[655px]" id=""><div class="flex w-full flex-col justify-between gap-4 md:flex-row"><div class="md:content-left flex justify-center">${validate_component(Badge, "Badge").$$render(
    $$result,
    {
      class: "border-0 md:pl-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
      variant: "outline"
    },
    {},
    {
      default: () => {
        return `${escape(l(data.lang, "Availability per Component"))}`;
      }
    }
  )}</div> <div class="flex justify-center md:justify-end">${validate_component(Badge, "Badge").$$render(
    $$result,
    {
      variant: "outline",
      class: "border-0 md:pr-0 text-xs font-medium"
    },
    {},
    {
      default: () => {
        return `<span class="bg-api-up mr-1.5 inline-flex h-2 w-2 rounded-full shadow-[0_0_8px_var(--up-color)]"></span> <span class="mr-3 font-semibold text-foreground">${escape(l(data.lang, "UP"))}</span> <span class="bg-api-degraded mr-1.5 inline-flex h-2 w-2 rounded-full shadow-[0_0_8px_var(--degraded-color)]"></span> <span class="mr-3 font-semibold text-foreground">${escape(l(data.lang, "DEGRADED"))}</span> <span class="bg-api-down mr-1.5 inline-flex h-2 w-2 rounded-full shadow-[0_0_8px_var(--down-color)]"></span> <span class="mr-3 font-semibold text-foreground">${escape(l(data.lang, "DOWN"))}</span> <span class="bg-api-maintenance mr-1.5 inline-flex h-2 w-2 rounded-full shadow-[0_0_8px_var(--maintenance-color)]"></span> <span class="font-semibold text-foreground">${escape(l(data.lang, "MAINTENANCE"))}</span>`;
      }
    }
  )}</div></div></section> <section class="section-monitors z-20 mx-auto mb-8 flex w-full max-w-[655px] flex-1 flex-col items-center justify-center">${validate_component(Card, "Card.Root").$$render($$result, { class: "monitor-root w-full" }, {}, {
    default: () => {
      return `${validate_component(Card_content, "Card.Content").$$render($$result, { class: "monitors-card  p-0 " }, {}, {
        default: () => {
          return `${each(data.monitors, (monitor) => {
            return `${validate_component(Monitor, "Monitor").$$render(
              $$result,
              {
                monitor,
                localTz: data.localTz,
                lang: data.lang,
                selectedLang: data.selectedLang
              },
              {},
              {}
            )}`;
          })}`;
        }
      })}`;
    }
  })}</section>` : ``} ${data.site.categories && data.pageType == "home" ? `<section class="section-categories relative z-10 mx-auto mb-8 w-full max-w-[655px] flex-1 flex-col items-start backdrop-blur-[2px] md:w-[655px]">${each(data.site.categories.filter((category) => category.name != "Home" && (!!!category.isHidden || $page.data.isLoggedIn)), (category) => {
    return `<a${add_attribute("href", `?category=${category.name}`, 0)} rel="external">${validate_component(Card, "Card.Root").$$render($$result, { class: "mb-4 hover:bg-secondary" }, {}, {
      default: () => {
        return `${validate_component(Card_header, "Card.Header").$$render(
          $$result,
          {
            class: "bounce-right relative w-full cursor-pointer px-4  "
          },
          {},
          {
            default: () => {
              return `${validate_component(Card_title, "Card.Title").$$render($$result, { class: "w-full " }, {}, {
                default: () => {
                  return `${escape(category.name)} ${validate_component(Button, "Button").$$render(
                    $$result,
                    {
                      variant: "ghost",
                      class: "arrow absolute right-4 top-9 h-5 w-5 p-0 text-muted-foreground",
                      size: "icon"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(ArrowRight, "ArrowRight").$$render($$result, { class: "h-4 w-4" }, {}, {})} `;
                      }
                    }
                  )} `;
                }
              })} ${validate_component(Card_description, "Card.Description").$$render($$result, {}, {}, {
                default: () => {
                  return `${category.description ? `<!-- HTML_TAG_START -->${category.description}<!-- HTML_TAG_END -->` : ``} `;
                }
              })} `;
            }
          }
        )} `;
      }
    })} </a>`;
  })}</section>` : ``} <section class="section-browser-events mx-auto mb-2 flex w-full max-w-[655px] flex-1 flex-col items-start justify-center bg-transparent" id=""><a href="${escape(base, true) + "/incidents/" + escape(format(/* @__PURE__ */ new Date(), "MMMM-yyyy"), true)}" rel="external" class="bounce-right grid w-full cursor-pointer grid-cols-2 justify-between gap-4 rounded-xl border border-border/70 bg-card/60 px-4 py-3 text-sm font-semibold hover:border-indigo-500/30 hover:bg-card/90 transition-all backdrop-blur-md shadow-sm"><div class="col-span-1 flex items-center gap-2 text-left text-foreground"><span class="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400"></span> ${escape(l(data.lang, "Browse Events"))}</div> <div class="text-right"><span class="arrow float-right mt-0.5">${validate_component(ArrowRight, "ArrowRight").$$render(
    $$result,
    {
      class: "h-4 w-4 text-muted-foreground transition-transform"
    },
    {},
    {}
  )}</span></div></a></section> ${``} ${``}`;
});
export {
  Page as default
};
