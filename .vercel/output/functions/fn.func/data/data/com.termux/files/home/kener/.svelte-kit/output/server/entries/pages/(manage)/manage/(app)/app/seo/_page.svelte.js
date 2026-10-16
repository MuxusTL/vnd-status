import { c as create_ssr_component, v as validate_component, b as each, d as add_attribute, e as escape } from "../../../../../../../chunks/ssr.js";
import { C as Card } from "../../../../../../../chunks/card.js";
import { C as Card_content } from "../../../../../../../chunks/card-content.js";
import { C as Card_description } from "../../../../../../../chunks/card-description.js";
import "clsx";
import { C as Card_header, a as Card_title } from "../../../../../../../chunks/card-title.js";
import "../../../../../../../chunks/index3.js";
import { I as Input } from "../../../../../../../chunks/input.js";
import { L as Label } from "../../../../../../../chunks/label.js";
import "@formkit/auto-animate";
import { s as siteDataExtractFromDb } from "../../../../../../../chunks/clientTools.js";
import "dequal";
import { T as Tooltip, a as TooltipTrigger, b as TooltipContent } from "../../../../../../../chunks/TooltipTrigger.js";
import { b as base } from "../../../../../../../chunks/paths.js";
import { B as Button } from "../../../../../../../chunks/button.js";
import { I as Info } from "../../../../../../../chunks/info.js";
import { X } from "../../../../../../../chunks/x.js";
import { P as Plus } from "../../../../../../../chunks/plus.js";
import { E as ExternalLink } from "../../../../../../../chunks/external-link.js";
const SeoInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let metaTags = [];
  metaTags = siteDataExtractFromDb(data.siteData, { metaTags: JSON.stringify(metaTags) }).metaTags;
  let formState = "idle";
  let formStateAnalytics = "idle";
  let selectedAnalytics;
  let analyticsDropdownItems = [
    {
      label: "Google Analytics",
      logo: `/ga.png`,
      key: "analytics.googleTagManager",
      isEnabled: false,
      requirements: [
        {
          label: "Measurement ID",
          type: "text",
          placeholder: "G-S05E5E5E5E5",
          required: true,
          value: ""
        }
      ]
    },
    {
      label: "Plausible",
      logo: `/plausible.png`,
      key: "analytics.plausible",
      isEnabled: false,
      requirements: [
        {
          label: "Domain",
          type: "text",
          placeholder: "kener.ing",
          required: true,
          value: new URL(data.siteData.siteURL).hostname
        },
        {
          label: "API",
          type: "text",
          placeholder: "https://plausible.io/api/event",
          required: true,
          value: "https://plausible.io/api/event"
        },
        {
          label: "Script Source",
          type: "text",
          placeholder: "https://plausible.io/js/script.pageview-props.tagged-events.js",
          required: true,
          value: "https://plausible.io/js/script.pageview-props.tagged-events.js"
        }
      ]
    },
    {
      label: "MixPanel",
      logo: `/mixpanel.png`,
      key: "analytics.mixpanel",
      isEnabled: false,
      requirements: [
        {
          label: "Project Token",
          type: "text",
          placeholder: "YOUR_PROJECT_TOKEN",
          required: true,
          value: ""
        }
      ]
    },
    {
      label: "Amplitude",
      logo: `/amplitude.png`,
      key: "analytics.amplitude",
      isEnabled: false,
      requirements: [
        {
          label: "Amplitude API Key",
          type: "text",
          placeholder: "API key for your Amplitude project",
          required: true,
          value: ""
        }
      ]
    },
    {
      label: "Microsoft Clarity",
      logo: `/clarity.png`,
      key: "analytics.clarity",
      isEnabled: false,
      requirements: [
        {
          label: "Project ID",
          type: "text",
          placeholder: "Project ID for your Microsoft Clarity project",
          required: true,
          value: ""
        }
      ]
    },
    {
      label: "Umami",
      logo: `/umami.png`,
      key: "analytics.umami",
      isEnabled: false,
      requirements: [
        {
          label: "Website ID",
          type: "text",
          placeholder: "Website ID for your umami script and domain",
          required: true,
          value: ""
        }
      ]
    }
  ];
  analyticsDropdownItems = analyticsDropdownItems.map((item) => {
    let dbData = data.siteData[item.key];
    if (!!dbData) {
      item.isEnabled = dbData.isEnabled;
      item.requirements.forEach((req) => {
        req.value = dbData.requirements[req.label];
      });
      item.activeInSite = true;
    }
    return item;
  });
  selectedAnalytics = analyticsDropdownItems[0];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Card, "Card.Root").$$render($$result, { class: "mt-4" }, {}, {
      default: () => {
        return `${validate_component(Card_header, "Card.Header").$$render($$result, { class: "border-b" }, {}, {
          default: () => {
            return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
              default: () => {
                return `Analytics`;
              }
            })} ${validate_component(Card_description, "Card.Description").$$render($$result, {}, {}, {
              default: () => {
                return `Add your analytics ID/Key here. You can add multiple analytics providers.`;
              }
            })}`;
          }
        })} ${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="mt-4 grid grid-cols-4 overflow-hidden rounded-md border"><div class="col-span-1 flex flex-col border-r">${each(analyticsDropdownItems, (item) => {
              return `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  variant: !!selectedAnalytics && selectedAnalytics.label === item.label ? "primary" : "ghost",
                  class: "flex items-center justify-between gap-x-2 rounded-none border-b text-sm last:border-none"
                },
                {},
                {
                  default: () => {
                    return `<div class="flex flex-row gap-x-3"><img${add_attribute("src", base + item.logo, 0)} class="w-5"${add_attribute("alt", item.label, 0)}> <span>${escape(item.label)}</span></div> ${item.activeInSite && item.isEnabled ? `<div class="rounded-sm" data-svelte-h="svelte-15evrj7"><span class="relative flex size-2"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex size-2 rounded-full bg-green-500"></span></span> </div>` : ``} `;
                  }
                }
              )}`;
            })}</div> <form class="col-span-3 flex flex-col justify-between p-3 py-2">${!!selectedAnalytics ? `<div><div class="mb-2 text-sm font-medium text-muted-foreground">Add details for your ${escape(selectedAnalytics.label)} account</div></div> <div class="grid grid-cols-4 gap-4">${each(selectedAnalytics.requirements, (req) => {
              return `<div class="col-span-2 flex flex-col gap-y-2">${validate_component(Label, "Label").$$render($$result, { for: req.label }, {}, {
                default: () => {
                  return `${escape(req.label)}`;
                }
              })} ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  class: "",
                  type: req.type,
                  placeholder: req.placeholder,
                  value: req.value,
                  required: req.required
                },
                {
                  value: ($$value) => {
                    req.value = $$value;
                    $$settled = false;
                  },
                  required: ($$value) => {
                    req.required = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} </div>`;
            })}</div> <div class="mt-2 flex flex-row justify-between"><div class="flex flex-row gap-x-2"><label class="inline-flex cursor-pointer items-center"><input type="checkbox" class="peer sr-only" ${selectedAnalytics.isEnabled ? "checked" : ""}> <div class="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div></label> <div class="pt-2.5 text-sm font-medium text-muted-foreground">${escape(selectedAnalytics.label)} is
                <i class="underline">${escape(!selectedAnalytics.isEnabled ? "disabled" : "enabled")}</i> for your site</div></div> <div>${validate_component(Button, "Button").$$render(
              $$result,
              {
                type: "submit",
                disabled: formStateAnalytics === "loading"
              },
              {},
              {
                default: () => {
                  return `Save Changes for ${escape(selectedAnalytics.label)} ${``}`;
                }
              }
            )}</div></div> ${``}` : ``}</form></div>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card.Root").$$render($$result, { class: "mt-4" }, {}, {
      default: () => {
        return `${validate_component(Card_header, "Card.Header").$$render($$result, { class: "border-b" }, {}, {
          default: () => {
            return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
              default: () => {
                return `Search Engine Optimization`;
              }
            })} ${validate_component(Card_description, "Card.Description").$$render($$result, {}, {}, {
              default: () => {
                return `Add your meta tags here. You can add multiple meta tags.`;
              }
            })}`;
          }
        })} ${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
          default: () => {
            return `<form class="mx-auto mt-4 space-y-4">${each(metaTags, (metaTag, i) => {
              return `<div class="flex w-full flex-row justify-between gap-2"><div class="grid grid-cols-12 gap-x-2"><div class="col-span-4">${validate_component(Label, "Label").$$render($$result, { for: "key" }, {}, {
                default: () => {
                  return `Meta Name
                ${validate_component(Tooltip, "Tooltip.Root").$$render($$result, { openDelay: 100 }, {}, {
                    default: () => {
                      return `${validate_component(TooltipTrigger, "Tooltip.Trigger").$$render($$result, { class: "" }, {}, {
                        default: () => {
                          return `${validate_component(Info, "Info").$$render(
                            $$result,
                            {
                              class: "inline-block h-4 w-4 text-muted-foreground"
                            },
                            {},
                            {}
                          )} `;
                        }
                      })} ${validate_component(TooltipContent, "Tooltip.Content").$$render($$result, { class: "max-w-md" }, {}, {
                        default: () => {
                          return `<div class="flex items-center justify-center rounded border bg-gray-800 px-2 py-1.5 text-xs font-medium text-gray-300 shadow-popover outline-none">&lt;meta name=&quot;${escape(metaTag.key)}&quot; content=&quot;${escape(metaTag.value)}&quot;&gt;</div> `;
                        }
                      })} `;
                    }
                  })} `;
                }
              })} ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  class: "mt-2",
                  type: "text",
                  id: "key",
                  placeholder: "eg. kener",
                  value: metaTag.key
                },
                {
                  value: ($$value) => {
                    metaTag.key = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div> <div class="col-span-7">${validate_component(Label, "Label").$$render($$result, { for: "value" }, {}, {
                default: () => {
                  return `Content`;
                }
              })} ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  class: "mt-2",
                  type: "text",
                  id: "value",
                  placeholder: "eg. kener",
                  value: metaTag.value
                },
                {
                  value: ($$value) => {
                    metaTag.value = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div> <div class="col-span-1">${validate_component(Button, "Button").$$render($$result, { variant: "ghost", class: "mt-8" }, {}, {
                default: () => {
                  return `${validate_component(X, "X").$$render($$result, { class: "h-4 w-4" }, {}, {})} `;
                }
              })} </div></div> </div>`;
            })} <div class="relative"><hr class="border-1 border-border-input relative top-4 h-px border-dashed"> ${validate_component(Button, "Button").$$render(
              $$result,
              {
                variant: "secondary",
                class: "absolute left-1/2 h-8 w-8 -translate-x-1/2 p-0  "
              },
              {},
              {
                default: () => {
                  return `${validate_component(Plus, "Plus").$$render($$result, { class: "h-4 w-4 " }, {}, {})}`;
                }
              }
            )}</div> <div class="flex w-full justify-end gap-x-2" style="margin-top:32px">${``} ${validate_component(Button, "Button").$$render(
              $$result,
              {
                type: "submit",
                disabled: formState === "loading"
              },
              {},
              {
                default: () => {
                  return `Save Meta Tags
          ${``}`;
                }
              }
            )}</div></form>`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="min-h-[70vh]"><div class="flex justify-end">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "outline",
      href: "https://kener.ing/docs/seo",
      class: " text-sm"
    },
    {},
    {
      default: () => {
        return `Documentation ${validate_component(ExternalLink, "ExternalLink").$$render($$result, { size: "12", class: "ml-1" }, {}, {})}`;
      }
    }
  )}</div> ${validate_component(SeoInfo, "SeoInfo").$$render($$result, { data }, {}, {})}</div>`;
});
export {
  Page as default
};
