import { c as create_ssr_component, l as compute_rest_props, a as subscribe, p as spread, q as escape_object, v as validate_component, e as escape, b as each } from "./ssr.js";
import "dequal";
import { k as setCtx, l as getAttrs, m as setItem, n as getCtx, o as getTrigger, p as getContent } from "./index3.js";
import "clsx";
import { b as fd, c as fdn, l, f } from "./client.js";
import { b as base } from "./paths.js";
import { T as Tooltip, a as TooltipTrigger, b as TooltipContent } from "./TooltipTrigger.js";
import { G as Gmi } from "./gmi.js";
import { p as page } from "./stores.js";
import { marked } from "marked";
import { c as cn } from "./utils.js";
import { c as createDispatcher } from "./events.js";
import { s as slide, C as ChevronDown } from "./chevron-down.js";
import { B as Button } from "./button.js";
import { S as Settings } from "./settings.js";
import { A as ArrowRight } from "./arrow-right.js";
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["multiple", "value", "onValueChange", "disabled", "asChild"]);
  let $root, $$unsubscribe_root;
  let { multiple = false } = $$props;
  let { value = void 0 } = $$props;
  let { onValueChange = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { asChild = false } = $$props;
  const { elements: { root }, states: { value: localValue }, updateOption } = setCtx({
    multiple,
    disabled,
    defaultValue: value,
    onValueChange: ({ next }) => {
      if (value !== next) {
        onValueChange?.(next);
        value = next;
      }
      return next;
    }
  });
  $$unsubscribe_root = subscribe(root, (value2) => $root = value2);
  const attrs = getAttrs("root");
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.onValueChange === void 0 && $$bindings.onValueChange && onValueChange !== void 0)
    $$bindings.onValueChange(onValueChange);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  {
    localValue.set(value);
  }
  {
    updateOption("multiple", multiple);
  }
  {
    updateOption("disabled", disabled);
  }
  builder = $root;
  $$unsubscribe_root();
  return `${asChild ? `${slots.default ? slots.default({ builder, attrs }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps), escape_object(attrs)], {})}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>`}`;
});
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["value", "disabled", "asChild"]);
  let $item, $$unsubscribe_item;
  let { value } = $$props;
  let { disabled = void 0 } = $$props;
  let { asChild = false } = $$props;
  const { item, props } = setItem({ value, disabled });
  $$unsubscribe_item = subscribe(item, (value2) => $item = value2);
  const attrs = getAttrs("item");
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  builder = $item(props);
  $$unsubscribe_item();
  return `${asChild ? `${slots.default ? slots.default({ builder, attrs }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps), escape_object(attrs)], {})}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>`}`;
});
const AccordionHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["level", "asChild"]);
  let $header, $$unsubscribe_header;
  let { level = 3 } = $$props;
  let { asChild = false } = $$props;
  const { elements: { heading: header } } = getCtx();
  $$unsubscribe_header = subscribe(header, (value) => $header = value);
  const attrs = getAttrs("header");
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  builder = $header(level);
  $$unsubscribe_header();
  return `${asChild ? `${slots.default ? slots.default({ builder, attrs }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps), escape_object(attrs)], {})}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>`}`;
});
const AccordionTrigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild"]);
  let $trigger, $$unsubscribe_trigger;
  let { asChild = false } = $$props;
  const { trigger, props } = getTrigger();
  $$unsubscribe_trigger = subscribe(trigger, (value) => $trigger = value);
  createDispatcher();
  const attrs = getAttrs("trigger");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  builder = $trigger(props);
  $$unsubscribe_trigger();
  return `${asChild ? `${slots.default ? slots.default({ builder, attrs }) : ``}` : `<button${spread(
    [
      escape_object(builder),
      { type: "button" },
      escape_object($$restProps),
      escape_object(attrs)
    ],
    {}
  )}>${slots.default ? slots.default({ builder, attrs }) : ``}</button>`}`;
});
const AccordionContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild"
  ]);
  let $content, $$unsubscribe_content;
  let $isSelected, $$unsubscribe_isSelected;
  let { transition = void 0 } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { inTransition = void 0 } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = void 0 } = $$props;
  let { outTransitionConfig = void 0 } = $$props;
  let { asChild = false } = $$props;
  const { content, isSelected, props } = getContent();
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_isSelected = subscribe(isSelected, (value) => $isSelected = value);
  const attrs = getAttrs("content");
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0)
    $$bindings.inTransition(inTransition);
  if ($$props.inTransitionConfig === void 0 && $$bindings.inTransitionConfig && inTransitionConfig !== void 0)
    $$bindings.inTransitionConfig(inTransitionConfig);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0)
    $$bindings.outTransition(outTransition);
  if ($$props.outTransitionConfig === void 0 && $$bindings.outTransitionConfig && outTransitionConfig !== void 0)
    $$bindings.outTransitionConfig(outTransitionConfig);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  builder = $content(props);
  $$unsubscribe_content();
  $$unsubscribe_isSelected();
  return `${asChild && $isSelected(props) ? `${slots.default ? slots.default({ builder, attrs }) : ``}` : `${transition && $isSelected(props) ? `<div${spread([escape_object(builder), escape_object($$restProps), escape_object(attrs)], {})}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>` : `${inTransition && outTransition && $isSelected(props) ? `<div${spread([escape_object(builder), escape_object($$restProps), escape_object(attrs)], {})}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>` : `${inTransition && $isSelected(props) ? `<div${spread(
    [
      escape_object(builder),
      escape_object($$restProps),
      escape_object(attrs)
    ],
    {}
  )}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>` : `${outTransition && $isSelected(props) ? `<div${spread(
    [
      escape_object(builder),
      escape_object($$restProps),
      escape_object(attrs)
    ],
    {}
  )}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>` : `${$isSelected(props) ? `<div${spread(
    [
      escape_object(builder),
      escape_object($$restProps),
      escape_object(attrs)
    ],
    {}
  )}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>` : ``}`}`}`}`}`}`;
});
const Accordion_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "transition", "transitionConfig"]);
  let { class: className = void 0 } = $$props;
  let { transition = slide } = $$props;
  let { transitionConfig = { duration: 200 } } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  return `${validate_component(AccordionContent, "AccordionPrimitive.Content").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("overflow-hidden text-sm transition-all", className)
      },
      { transition },
      { transitionConfig },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `<div class="pb-4 pt-0">${slots.default ? slots.default({}) : ``}</div>`;
      }
    }
  )}`;
});
const Accordion_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "value"]);
  let { class: className = void 0 } = $$props;
  let { value } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `${validate_component(AccordionItem, "AccordionPrimitive.Item").$$render($$result, Object.assign({}, { value }, { class: cn("border-b", className) }, $$restProps), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Accordion_trigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "level"]);
  let { class: className = void 0 } = $$props;
  let { level = 3 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  return `${validate_component(AccordionHeader, "AccordionPrimitive.Header").$$render($$result, { level, class: "flex" }, {}, {
    default: () => {
      return `${validate_component(AccordionTrigger, "AccordionPrimitive.Trigger").$$render(
        $$result,
        Object.assign(
          {},
          {
            class: cn("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className)
          },
          $$restProps
        ),
        {},
        {
          default: () => {
            return `${slots.default ? slots.default({}) : ``} ${validate_component(ChevronDown, "ChevronDown").$$render(
              $$result,
              {
                class: "h-4 w-4 transition-transform duration-200"
              },
              {},
              {}
            )}`;
          }
        }
      )}`;
    }
  })}`;
});
const Root = Accordion;
const IncidentNew = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { incident } = $$props;
  let { index } = $$props;
  let { allowCollapse = true } = $$props;
  let startTime = new Date(incident.start_date_time * 1e3);
  let endTime = /* @__PURE__ */ new Date();
  let nowTime = /* @__PURE__ */ new Date();
  if (incident.end_date_time) {
    endTime = new Date(incident.end_date_time * 1e3);
  }
  let incidentType = incident.incident_type;
  const lastedFor = fd(startTime, endTime, $page.data.selectedLang);
  const remainingTime = fd(nowTime, endTime, $page.data.selectedLang);
  const startedAt = fdn(startTime, $page.data.selectedLang);
  let incidentTimeStatus = "";
  if (nowTime < startTime) {
    incidentTimeStatus = "YET_TO_START";
  } else if (nowTime >= startTime && nowTime <= endTime) {
    incidentTimeStatus = "ONGOING";
  } else if (nowTime > endTime) {
    incidentTimeStatus = "COMPLETED";
  }
  let accordionValue = "incident-0";
  if ($page.data.site.incidentGroupView == "COLLAPSED" && allowCollapse) {
    accordionValue = "incident-collapse";
  } else if ($page.data.site.incidentGroupView == "EXPANDED") {
    accordionValue = index;
  }
  let incidentDateSummary = "";
  let maintenanceBadge = "";
  let maintenanceBadgeColor = "";
  if (incidentTimeStatus == "YET_TO_START") {
    incidentDateSummary = l($page.data.lang, "Starts %startedAt", { startedAt });
    if (incidentType === "MAINTENANCE") {
      incidentDateSummary = l($page.data.lang, "Starts %startedAt, will last for %lastedFor", { startedAt, lastedFor });
      maintenanceBadge = "Upcoming Maintenance";
      maintenanceBadgeColor = "text-upcoming-maintenance";
    }
  } else if (incidentTimeStatus == "ONGOING") {
    incidentDateSummary = l($page.data.lang, "Started %startedAt, still ongoing", { startedAt });
    if (incidentType === "MAINTENANCE") {
      incidentDateSummary = l($page.data.lang, "Started %startedAt, will last for %lastedFor more", { startedAt, lastedFor: remainingTime });
      maintenanceBadge = "Maintenance in Progress";
      maintenanceBadgeColor = "text-maintenance-in-progress";
    }
  } else if (incidentTimeStatus == "COMPLETED") {
    incidentDateSummary = l($page.data.lang, "Started %startedAt, lasted for %lastedFor", { startedAt, lastedFor });
    maintenanceBadge = "Maintenance Completed";
    maintenanceBadgeColor = "text-maintenance-completed";
  }
  if ($$props.incident === void 0 && $$bindings.incident && incident !== void 0)
    $$bindings.incident(incident);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.allowCollapse === void 0 && $$bindings.allowCollapse && allowCollapse !== void 0)
    $$bindings.allowCollapse(allowCollapse);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="newincident relative grid w-full grid-cols-12 gap-2 px-0 py-0 last:border-b-0"><div class="col-span-12">${validate_component(Root, "Accordion.Root").$$render(
      $$result,
      {
        class: "accor " + (allowCollapse === false ? "hide-chevron" : ""),
        disabled: !allowCollapse,
        value: index
      },
      {
        value: ($$value) => {
          index = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Accordion_item, "Accordion.Item").$$render($$result, { value: accordionValue }, {}, {
            default: () => {
              return `${validate_component(Accordion_trigger, "Accordion.Trigger").$$render(
                $$result,
                {
                  class: "rounded-xl px-4 py-3 hover:bg-white/[0.04] hover:no-underline transition-colors"
                },
                {},
                {
                  default: () => {
                    return `<div class="w-full text-left hover:no-underline"><div class="flex justify-start gap-x-2"><p class="flex gap-x-2 text-xs font-semibold">${incidentType == "INCIDENT" ? `<span class="${"badge-" + escape(incident.state, true) + " inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider"}"><span class="h-1.5 w-1.5 rounded-full bg-current"></span> ${escape(l($page.data.lang, incident.state))}</span>` : `${incidentType == "MAINTENANCE" ? `<span class="${escape(maintenanceBadgeColor, true) + " inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider"}"><span class="h-1.5 w-1.5 rounded-full bg-current"></span> ${escape(l($page.data.lang, maintenanceBadge))}</span>` : ``}`}</p> <div class="flex justify-end gap-x-2">${$page.data.isLoggedIn ? `${validate_component(Button, "Button").$$render(
                      $$result,
                      {
                        href: base + "/manage/app/events#" + incident.id,
                        class: "rotate-once h-5 p-0 text-muted-foreground hover:text-primary",
                        variant: "link"
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(Settings, "Settings").$$render($$result, { class: "h-4 w-4 " }, {}, {})}`;
                        }
                      }
                    )}` : ``} ${``}</div></div> <p class="mt-0.5 text-sm font-semibold tracking-tight text-white">${escape(incident.title)}</p> ${!!incidentDateSummary ? `${validate_component(Tooltip, "Tooltip.Root").$$render(
                      $$result,
                      {
                        openDelay: 100,
                        side: "bottom",
                        align: "end"
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(TooltipTrigger, "Tooltip.Trigger").$$render(
                            $$result,
                            {
                              class: " text-ellipsis whitespace-nowrap text-xs font-medium tracking-normal    text-muted-foreground"
                            },
                            {},
                            {
                              default: () => {
                                return `${escape(incidentDateSummary)}`;
                              }
                            }
                          )} ${validate_component(TooltipContent, "Tooltip.Content").$$render(
                            $$result,
                            {
                              class: "z-20 mt-11",
                              side: "bottom",
                              align: "end"
                            },
                            {},
                            {
                              default: () => {
                                return `<div class="items-center justify-center rounded-lg border border-white/10 bg-card/95 px-2.5 py-1.5 font-mono text-xs font-medium text-slate-200 shadow-xl backdrop-blur-xl">${escape(f(new Date(incident.start_date_time * 1e3), "MMMM do yyyy, h:mm:ss a", $page.data.selectedLang, $page.data.localTz))} ${incident.end_date_time ? `${validate_component(ArrowRight, "ArrowRight").$$render($$result, { class: "mx-1 -mt-0.5 inline h-3 w-3" }, {}, {})} ${escape(f(new Date(incident.end_date_time * 1e3), "MMMM do yyyy, h:mm:ss a", $page.data.selectedLang, $page.data.localTz))}` : `${validate_component(ArrowRight, "ArrowRight").$$render($$result, { class: "mx-1 -mt-0.5 inline h-3 w-3" }, {}, {})} <span class="dots-animation inline-block w-6 text-left"></span>`}</div>`;
                              }
                            }
                          )}`;
                        }
                      }
                    )}` : ``}</div>`;
                  }
                }
              )} ${validate_component(Accordion_content, "Accordion.Content").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="px-4 pt-2">${incident.monitors.length > 0 ? `<div class="flex flex-wrap gap-2">${each(incident.monitors, (monitor) => {
                    return `<div class="tag-affected-text flex items-center gap-x-2 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium"><div class="${"bg-api-" + escape(monitor.impact_type.toLowerCase(), true) + " rounded-md px-2 py-0.5 text-[11px] font-bold text-white shadow-sm"}">${escape(monitor.impact_type)}</div> ${monitor.image ? `${validate_component(Gmi, "GMI").$$render($$result, { src: monitor.image, classList: "h-4 w-4" }, {}, {})}` : ``} <div class="font-medium text-slate-200">${escape(monitor.name)}</div> </div>`;
                  })}</div>` : ``} <p class="my-3 text-xs font-semibold uppercase text-muted-foreground">${escape(l($page.data.lang, "Updates"))}</p> ${incident.comments.length > 0 ? `${incidentType == "INCIDENT" ? `<ol class="relative mt-2 pl-14">${each(incident.comments, (comment) => {
                    return `<li class="relative border-l pb-4 pl-[4.5rem] last:border-0"><div class="absolute top-0 w-28 -translate-x-32 rounded border bg-secondary px-1.5 py-1 text-center text-xs font-semibold">${escape(l($page.data.lang, comment.state))}</div> <time class="mb-1 text-sm font-medium leading-none text-muted-foreground">${escape(f(new Date(comment.commented_at * 1e3), "MMMM do yyyy, h:mm:ss a", $page.data.selectedLang, $page.data.localTz))}</time> <div class="mb-4 text-sm font-normal"><div class="kener-md prose prose-stone max-w-none dark:prose-invert prose-code:rounded prose-code:py-[0.2rem] prose-code:font-mono prose-code:text-sm prose-code:font-normal prose-pre:bg-opacity-0 dark:prose-pre:bg-neutral-900"><!-- HTML_TAG_START -->${marked.parse(comment.comment)}<!-- HTML_TAG_END --> </div></div> </li>`;
                  })}</ol>` : `${incidentType == "MAINTENANCE" ? `<ol class="relative mt-2 pl-0">${each(incident.comments, (comment) => {
                    return `<li class="relative pb-2 last:border-0"><time class="mb-1 text-sm font-medium leading-none text-muted-foreground">${escape(f(new Date(comment.commented_at * 1e3), "MMMM do yyyy, h:mm:ss a", $page.data.selectedLang, $page.data.localTz))}</time> <div class="mb-2 text-sm font-normal"><div class="kener-md prose prose-stone max-w-none dark:prose-invert prose-code:rounded prose-code:py-[0.2rem] prose-code:font-mono prose-code:text-sm prose-code:font-normal prose-pre:bg-opacity-0 dark:prose-pre:bg-neutral-900"><!-- HTML_TAG_START -->${marked.parse(comment.comment)}<!-- HTML_TAG_END --> </div></div> </li>`;
                  })}</ol>` : ``}`}` : `<p class="text-sm font-medium">${escape(l($page.data.lang, "No Updates Yet"))}</p>`}</div>`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  IncidentNew as I
};
