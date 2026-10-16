import { c as create_ssr_component, v as validate_component, a as subscribe, b as each, e as escape } from "../../../../../../../chunks/ssr.js";
import { b as base } from "../../../../../../../chunks/paths.js";
import "clsx";
import "dequal";
import "../../../../../../../chunks/index3.js";
import { T as Tooltip, a as TooltipTrigger, b as TooltipContent } from "../../../../../../../chunks/TooltipTrigger.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import "../../../../../../../chunks/index7.js";
import moment from "moment";
/* empty css                                                                   */import "../../../../../../../chunks/index4.js";
import "canvas-confetti";
/* empty css                                                                    */import "marked";
import "@uiw/codemirror-theme-github";
import { d as derivedMode } from "../../../../../../../chunks/stores2.js";
import { S as Select, a as Select_trigger, V as Value, b as Select_content, G as Group, c as Select_label, d as Select_item } from "../../../../../../../chunks/index8.js";
import { B as Button } from "../../../../../../../chunks/button.js";
import { E as ExternalLink } from "../../../../../../../chunks/external-link.js";
import { L as Loader } from "../../../../../../../chunks/loader.js";
import { P as Plus } from "../../../../../../../chunks/plus.js";
import { C as ChevronLeft } from "../../../../../../../chunks/chevron-left.js";
import { I as Icon } from "../../../../../../../chunks/Icon.js";
const Chevron_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "chevron-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ChevronRight = Chevron_right;
const Pen_line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M12 20h9" }],
    [
      "path",
      {
        "d": "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "pen-line" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const PenLine = Pen_line;
const Message_square_plus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      }
    ],
    ["path", { "d": "M12 7v6" }],
    ["path", { "d": "M9 10h6" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "message-square-plus" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const MessageSquarePlus = Message_square_plus;
let limit = 10;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $$unsubscribe_mode;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_mode = subscribe(derivedMode, (value) => value);
  let { data } = $$props;
  let status = "OPEN";
  let loadingData = false;
  let pageNo = 1;
  let incidents = [];
  let totalPages = 0;
  data.monitors;
  async function fetchData() {
    loadingData = true;
    try {
      let apiResp = await fetch(base + "/manage/app/api/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "getIncidents",
          data: { page: pageNo, limit, filter: { status } }
        })
      });
      let resp = await apiResp.json();
      incidents = resp.incidents.map((incident) => {
        let i = { ...incident };
        if (!!!i.end_date_time) {
          i.duration = moment.duration(parseInt((/* @__PURE__ */ new Date()).getTime() / 1e3) - parseInt(i.start_date_time), "seconds").humanize();
        } else {
          i.duration = moment.duration(parseInt(i.end_date_time) - parseInt(i.start_date_time), "seconds").humanize();
        }
        return i;
      });
      totalPages = Math.ceil(resp.total.count / limit);
    } catch (error) {
      alert("Error: " + error);
    } finally {
      loadingData = false;
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="min-h-[70vh]"><div class="flex justify-end">${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "outline",
        href: "https://kener.ing/docs/incident-management",
        class: " text-sm"
      },
      {},
      {
        default: () => {
          return `Documentation ${validate_component(ExternalLink, "ExternalLink").$$render($$result, { size: "12", class: "ml-1" }, {}, {})}`;
        }
      }
    )}</div> <div class="mt-4 flex justify-end"><div class="flex w-40">${validate_component(Select, "Select.Root").$$render(
      $$result,
      {
        portal: null,
        onSelectedChange: (e) => {
          status = e.value;
          fetchData();
        }
      },
      {},
      {
        default: () => {
          return `${validate_component(Select_trigger, "Select.Trigger").$$render($$result, { class: "hidden", id: "statusmonitor" }, {}, {
            default: () => {
              return `${validate_component(Value, "Select.Value").$$render(
                $$result,
                { placeholder: status, value: status },
                {
                  value: ($$value) => {
                    status = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Select_content, "Select.Content").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Group, "Select.Group").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Select_label, "Select.Label").$$render($$result, {}, {}, {
                    default: () => {
                      return `Status`;
                    }
                  })} ${validate_component(Select_item, "Select.Item").$$render(
                    $$result,
                    {
                      value: "ALL",
                      label: "ALL",
                      class: "text-sm font-medium"
                    },
                    {},
                    {
                      default: () => {
                        return `ALL`;
                      }
                    }
                  )} ${validate_component(Select_item, "Select.Item").$$render(
                    $$result,
                    {
                      value: "OPEN",
                      label: "OPEN",
                      class: "text-sm font-medium"
                    },
                    {},
                    {
                      default: () => {
                        return `ACTIVE`;
                      }
                    }
                  )} ${validate_component(Select_item, "Select.Item").$$render(
                    $$result,
                    {
                      value: "CLOSED",
                      label: "CLOSED",
                      class: "text-sm font-medium"
                    },
                    {},
                    {
                      default: () => {
                        return `DELETED`;
                      }
                    }
                  )}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}</div> <div class="mx-2">${loadingData ? `${validate_component(Loader, "Loader").$$render(
      $$result,
      {
        class: "float-right ml-2 mt-2 inline h-6 w-6 animate-spin"
      },
      {},
      {}
    )}` : ``}</div> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Plus, "Plus").$$render($$result, { class: "mr-2 inline h-6 w-6" }, {}, {})}
      New Event`;
      }
    })}</div>  ${totalPages > 1 ? `<div class="mt-4 flex justify-end"><nav class="flex max-w-2xl items-center gap-x-1" aria-label="Pagination"><button ${"disabled"} type="button" class="inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-2 rounded-lg border border-transparent px-2.5 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" aria-label="Previous">${validate_component(ChevronLeft, "ChevronLeft").$$render($$result, { class: "size-3.5 shrink-0" }, {}, {})} <span class="sr-only" data-svelte-h="svelte-z31jm6">Previous</span></button> <div class="flex max-w-[380px] items-center gap-x-1 overflow-x-auto">${each(Array.from({ length: totalPages }, (_, i) => i + 1), (page2) => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: page2 == pageNo ? "secondary" : "ghost"
        },
        {},
        {
          default: () => {
            return `${escape(page2)} `;
          }
        }
      )}`;
    })}</div> <button type="button" ${pageNo === totalPages ? "disabled" : ""} class="inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-2 rounded-lg border border-transparent px-2.5 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" aria-label="Next"><span class="sr-only" data-svelte-h="svelte-xiiv6y">Next</span> ${validate_component(ChevronRight, "ChevronRight").$$render($$result, { class: "size-3.5 shrink-0" }, {}, {})}</button></nav></div>` : ``}  <div class="mt-4 flex flex-col"><div class="-m-1.5 overflow-x-auto"><div class="inline-block min-w-full p-1.5 align-middle"><div class="overflow-hidden rounded-lg border dark:border-neutral-700"><table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700"><thead data-svelte-h="svelte-rp9ltd"><tr><th scope="col" class="px-6 py-3 text-start text-xs font-semibold uppercase text-gray-500 dark:text-neutral-500">ID</th> <th scope="col" class="px-6 py-3 text-start text-xs font-semibold uppercase text-gray-500 dark:text-neutral-500">Title</th> <th scope="col" class="px-6 py-3 text-start text-xs font-semibold uppercase text-gray-500 dark:text-neutral-500">Duration</th> <th scope="col" class="px-6 py-3 text-start text-xs font-semibold uppercase text-gray-500 dark:text-neutral-500">State</th> <th scope="col" class="px-6 py-3 text-start text-xs font-semibold uppercase text-gray-500 dark:text-neutral-500">Affects</th> <th scope="col" class="px-6 py-3 text-start text-xs font-semibold uppercase text-gray-500 dark:text-neutral-500"></th></tr></thead> <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">${each(incidents, (incident) => {
      return `<tr><td class="whitespace-nowrap px-6 py-4 text-sm font-medium">${escape(incident.id)}</td> <td class="px-6 py-4 text-xs font-semibold">${validate_component(Tooltip, "Tooltip.Root").$$render($$result, { openDelay: 100 }, {}, {
        default: () => {
          return `${validate_component(TooltipTrigger, "Tooltip.Trigger").$$render(
            $$result,
            {
              class: "max-w-[12rem] overflow-hidden text-ellipsis whitespace-nowrap"
            },
            {},
            {
              default: () => {
                return `${escape(incident.title)} `;
              }
            }
          )} ${validate_component(TooltipContent, "Tooltip.Content").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="max-w-[24rem] items-center justify-center rounded border bg-card p-1.5 text-sm font-medium shadow-popover outline-none">${escape(incident.title)}</div> `;
            }
          })} `;
        }
      })}</td> <td class="whitespace-nowrap px-6 py-4 text-xs font-semibold leading-5">${validate_component(Tooltip, "Tooltip.Root").$$render($$result, { openDelay: 100 }, {}, {
        default: () => {
          return `${validate_component(TooltipTrigger, "Tooltip.Trigger").$$render($$result, { class: "" }, {}, {
            default: () => {
              return `${escape(incident.duration)} `;
            }
          })} ${validate_component(TooltipContent, "Tooltip.Content").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="flex items-center justify-center rounded border bg-card p-1.5 text-xs font-medium shadow-popover outline-none"><span class="mr-1 inline-block text-muted-foreground" data-svelte-h="svelte-1okezbu">From</span> ${escape(moment(Number(incident.start_date_time) * 1e3).format("YYYY-MM-DD HH:mm:ss"))} <span class="mx-1 inline-block text-muted-foreground" data-svelte-h="svelte-2k3xdh">To</span> ${incident.end_date_time ? `${escape(moment(Number(incident.end_date_time) * 1e3).format("YYYY-MM-DD HH:mm:ss"))}` : `Now`}</div> `;
            }
          })} `;
        }
      })}</td> <td class="whitespace-nowrap px-6 py-4 text-xs font-semibold">${incident.incident_type == "MAINTENANCE" ? `<span class="badge-MAINTENANCE rounded px-1.5 py-1" data-svelte-h="svelte-1rq8xlm">MAINTENANCE </span>` : `<span class="${"badge-" + escape(incident.state, true) + " rounded px-1.5 py-1"}">${escape(incident.state)} </span>`}</td> <td class="whitespace-nowrap px-6 py-4 text-xs font-semibold"><div class="flex gap-x-1.5">${incident.monitors.length > 0 ? `${validate_component(Tooltip, "Tooltip.Root").$$render($$result, { openDelay: 100 }, {}, {
        default: () => {
          return `${validate_component(TooltipTrigger, "Tooltip.Trigger").$$render($$result, { class: "" }, {}, {
            default: () => {
              return `${escape(incident.monitors.length)} Monitors
                          `;
            }
          })} ${validate_component(TooltipContent, "Tooltip.Content").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="flex items-center justify-center rounded border bg-card p-1.5 text-xs font-medium shadow-popover outline-none">${each(incident.monitors, (monitor) => {
                return `<span class="${"text-api-" + escape(monitor.monitor_impact.toLowerCase(), true) + " mr-1"}">[${escape(monitor.monitor_tag)}]
                                </span>`;
              })}</div> `;
            }
          })} `;
        }
      })}` : ``} ${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "ghost",
          class: "h-5 w-5 p-1",
          size: "icon"
        },
        {},
        {
          default: () => {
            return `${validate_component(PenLine, "PenLine").$$render($$result, { class: "inline h-4 w-4" }, {}, {})} `;
          }
        }
      )} </div></td> <td class="whitespace-nowrap px-6 py-4 text-xs font-semibold"><div class="flex gap-x-1.5">${$page.data.user.role != "member" ? `${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "secondary",
          class: "h-8 text-xs",
          href: `#${incident.id}`
        },
        {},
        {
          default: () => {
            return `Update ${validate_component(MessageSquarePlus, "MessageSquarePlus").$$render($$result, { class: "ml-2 inline h-4 w-4" }, {}, {})} `;
          }
        }
      )}` : ``} </div></td> </tr>`;
    })}</tbody></table></div></div></div></div></div> ${``} ${``}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_mode();
  return $$rendered;
});
export {
  Page as default
};
