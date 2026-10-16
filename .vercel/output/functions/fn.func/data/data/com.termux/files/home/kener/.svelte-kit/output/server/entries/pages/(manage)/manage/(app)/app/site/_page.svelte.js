import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../../../chunks/ssr.js";
import { C as Card } from "../../../../../../../chunks/card.js";
import { C as Card_content } from "../../../../../../../chunks/card-content.js";
import { C as Card_description } from "../../../../../../../chunks/card-description.js";
import "clsx";
import { C as Card_header, a as Card_title } from "../../../../../../../chunks/card-title.js";
import "../../../../../../../chunks/index3.js";
import { I as Input } from "../../../../../../../chunks/input.js";
import { L as Label } from "../../../../../../../chunks/label.js";
import { s as siteDataExtractFromDb } from "../../../../../../../chunks/clientTools.js";
import "../../../../../../../chunks/index4.js";
import "canvas-confetti";
import { b as base } from "../../../../../../../chunks/paths.js";
import "../../../../../../../chunks/index7.js";
import "dequal";
import { T as Tooltip, a as TooltipTrigger, b as TooltipContent } from "../../../../../../../chunks/TooltipTrigger.js";
import { S as Select, a as Select_trigger, V as Value, b as Select_content, G as Group, c as Select_label, d as Select_item } from "../../../../../../../chunks/index8.js";
import { G as Gmi } from "../../../../../../../chunks/gmi.js";
import { A as Alert, a as Alert_title, b as Alert_description } from "../../../../../../../chunks/alert-title.js";
import { I as Info } from "../../../../../../../chunks/info.js";
import { B as Button } from "../../../../../../../chunks/button.js";
import { X } from "../../../../../../../chunks/x.js";
import { E as ExternalLink } from "../../../../../../../chunks/external-link.js";
const SiteInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let siteInformation = {
    title: "",
    siteName: "",
    siteURL: "",
    home: "",
    logo: "",
    favicon: ""
  };
  let formErrorMessage = "";
  siteInformation = siteDataExtractFromDb(data.siteData, siteInformation);
  let formState = "idle";
  let uploadLogoStatus = "";
  let uploadingLogo = false;
  let uploadFaviconStatus = "";
  let uploadingFavicon = false;
  let typeOfLogoUpload = siteInformation.logo.startsWith("http") ? "URL" : "FILE";
  let typeOfFaviconUpload = siteInformation.favicon.startsWith("http") ? "URL" : "FILE";
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
                return `Site Configuration`;
              }
            })} ${validate_component(Card_description, "Card.Description").$$render($$result, {}, {}, {
              default: () => {
                return `Configure your site information here.`;
              }
            })}`;
          }
        })} ${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
          default: () => {
            return `${!!base ? `${validate_component(Alert, "Alert.Root").$$render($$result, { class: "my-2" }, {}, {
              default: () => {
                return `${validate_component(Alert_title, "Alert.Title").$$render($$result, {}, {}, {
                  default: () => {
                    return `Sub path`;
                  }
                })} ${validate_component(Alert_description, "Alert.Description").$$render($$result, {}, {}, {
                  default: () => {
                    return `Your site is running in a subpath <span class="">${escape(base)}</span>`;
                  }
                })}`;
              }
            })}` : ``} <form class="mx-auto mt-4 space-y-4"><div class="flex w-full flex-row justify-evenly gap-2"><div class="w-full">${validate_component(Label, "Label").$$render($$result, { for: "title", class: "" }, {}, {
              default: () => {
                return `Site Title
            <span class="text-red-500" data-svelte-h="svelte-1n3raya">*</span> ${validate_component(Tooltip, "Tooltip.Root").$$render($$result, { openDelay: 100 }, {}, {
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
                        )}`;
                      }
                    })} ${validate_component(TooltipContent, "Tooltip.Content").$$render($$result, {}, {}, {
                      default: () => {
                        return `<div class="flex items-center justify-center rounded border bg-input p-1.5 text-xs font-medium text-gray-300 shadow-popover outline-none" data-svelte-h="svelte-1svl67e">Site Title will be the page title of your site. &lt;title&gt;&lt;/title&gt;</div>`;
                      }
                    })}`;
                  }
                })}`;
              }
            })} ${validate_component(Input, "Input").$$render(
              $$result,
              {
                class: "mt-2",
                type: "text",
                id: "title",
                placeholder: "eg. kener",
                required: true,
                value: siteInformation.title
              },
              {
                value: ($$value) => {
                  siteInformation.title = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div> <div class="w-full">${validate_component(Label, "Label").$$render($$result, { for: "siteName" }, {}, {
              default: () => {
                return `Site Name
            <span class="text-red-500" data-svelte-h="svelte-1n3raya">*</span> ${validate_component(Tooltip, "Tooltip.Root").$$render($$result, { openDelay: 100 }, {}, {
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
                        )}`;
                      }
                    })} ${validate_component(TooltipContent, "Tooltip.Content").$$render($$result, {}, {}, {
                      default: () => {
                        return `<div class="flex items-center justify-center rounded border bg-input p-1.5 text-xs font-medium text-gray-300 shadow-popover outline-none" data-svelte-h="svelte-hd4gfj">This is the name of your site.<br> It will be shown in the nav bar as brand name.</div>`;
                      }
                    })}`;
                  }
                })}`;
              }
            })} ${validate_component(Input, "Input").$$render(
              $$result,
              {
                class: "mt-2",
                type: "text",
                id: "siteName",
                placeholder: "eg. Kener.ing",
                required: true,
                value: siteInformation.siteName
              },
              {
                value: ($$value) => {
                  siteInformation.siteName = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div></div> <div class="flex w-full flex-row justify-evenly gap-2"><div class="w-full">${validate_component(Label, "Label").$$render($$result, { for: "siteURL" }, {}, {
              default: () => {
                return `Site URL
            <span class="text-red-500" data-svelte-h="svelte-1n3raya">*</span> ${validate_component(Tooltip, "Tooltip.Root").$$render($$result, { openDelay: 100 }, {}, {
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
                        )}`;
                      }
                    })} ${validate_component(TooltipContent, "Tooltip.Content").$$render($$result, {}, {}, {
                      default: () => {
                        return `<div class="flex items-center justify-center rounded border bg-input p-1.5 text-xs font-medium text-gray-300 shadow-popover outline-none" data-svelte-h="svelte-j647dg">The URL your kener is hosted on.</div>`;
                      }
                    })}`;
                  }
                })}`;
              }
            })} ${validate_component(Input, "Input").$$render(
              $$result,
              {
                class: "mt-2",
                type: "text",
                id: "siteURL",
                placeholder: "eg. https://status.example.com",
                required: true,
                value: siteInformation.siteURL
              },
              {
                value: ($$value) => {
                  siteInformation.siteURL = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div></div> <div class="flex w-full flex-row justify-evenly gap-2"><div class="w-full">${validate_component(Label, "Label").$$render($$result, { for: "siteURL" }, {}, {
              default: () => {
                return `Home Location
            <span class="text-red-500" data-svelte-h="svelte-1n3raya">*</span> ${validate_component(Tooltip, "Tooltip.Root").$$render($$result, { openDelay: 100 }, {}, {
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
                        )}`;
                      }
                    })} ${validate_component(TooltipContent, "Tooltip.Content").$$render($$result, {}, {}, {
                      default: () => {
                        return `<div class="flex items-center justify-center rounded border bg-input p-1.5 text-xs font-medium text-gray-300 shadow-popover outline-none" data-svelte-h="svelte-1vgl0vn">Where to go when someone clicks on the brand logo in the navbar.</div>`;
                      }
                    })}`;
                  }
                })}`;
              }
            })} ${validate_component(Input, "Input").$$render(
              $$result,
              {
                class: "mt-2",
                type: "text",
                id: "home",
                placeholder: "/ or https://example.com",
                required: true,
                value: siteInformation.home
              },
              {
                value: ($$value) => {
                  siteInformation.home = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div></div> <div class="flex w-full flex-col justify-evenly gap-2"><div>${validate_component(Label, "Label").$$render($$result, { for: "logo" }, {}, {
              default: () => {
                return `Logo`;
              }
            })}</div> <div class="flex gap-x-4">${!!siteInformation.logo ? `<div class="relative mt-2.5">${validate_component(Label, "Label").$$render(
              $$result,
              {
                for: "logo",
                class: "inline-block h-[60px] w-[60px] cursor-pointer rounded-sm border p-1"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Gmi, "GMI").$$render(
                    $$result,
                    {
                      src: siteInformation.logo,
                      classList: "w-fit hover:scale-95",
                      alt: ""
                    },
                    {},
                    {}
                  )}`;
                }
              }
            )} <div class="absolute -right-2 -top-2">${validate_component(Button, "Button").$$render(
              $$result,
              {
                variant: "secondary",
                class: "h-5 w-5 rounded-full border p-1",
                size: "icon"
              },
              {},
              {
                default: () => {
                  return `${validate_component(X, "X").$$render($$result, { class: "h-4 w-4" }, {}, {})}`;
                }
              }
            )}</div> ${``}</div>` : ``} <div class="flex gap-x-2"><div>${validate_component(Label, "Label").$$render(
              $$result,
              {
                for: "typeOfLogoUpload",
                class: "text-sm font-medium"
              },
              {},
              {
                default: () => {
                  return `Method`;
                }
              }
            )} ${validate_component(Select, "Select.Root").$$render(
              $$result,
              {
                portal: null,
                onSelectedChange: (e) => {
                  typeOfLogoUpload = e.value;
                },
                selected: {
                  value: typeOfLogoUpload,
                  label: typeOfLogoUpload
                }
              },
              {},
              {
                default: () => {
                  return `${validate_component(Select_trigger, "Select.Trigger").$$render(
                    $$result,
                    {
                      class: "mt-2 w-[200px]",
                      id: "typeOfLogoUpload"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(Value, "Select.Value").$$render(
                          $$result,
                          {
                            placeholder: "Logo Type",
                            value: typeOfLogoUpload
                          },
                          {
                            value: ($$value) => {
                              typeOfLogoUpload = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )}`;
                      }
                    }
                  )} ${validate_component(Select_content, "Select.Content").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Group, "Select.Group").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Select_label, "Select.Label").$$render($$result, {}, {}, {
                            default: () => {
                              return `Logo Type`;
                            }
                          })} ${validate_component(Select_item, "Select.Item").$$render(
                            $$result,
                            {
                              value: "URL",
                              label: "URL",
                              class: "text-sm font-medium"
                            },
                            {},
                            {
                              default: () => {
                                return `URL`;
                              }
                            }
                          )} ${validate_component(Select_item, "Select.Item").$$render(
                            $$result,
                            {
                              value: "FILE",
                              label: "FILE",
                              class: "text-sm font-medium"
                            },
                            {},
                            {
                              default: () => {
                                return `FILE`;
                              }
                            }
                          )}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )}</div> ${typeOfLogoUpload === "URL" ? `<div>${validate_component(Label, "Label").$$render(
              $$result,
              {
                for: "logo",
                class: "text-sm font-medium"
              },
              {},
              {
                default: () => {
                  return `Please provide a URL of the image`;
                }
              }
            )} ${validate_component(Input, "Input").$$render(
              $$result,
              {
                class: "mt-2",
                type: "text",
                id: "logo",
                placeholder: "https://example.com/logo.png",
                value: siteInformation.logo
              },
              {
                value: ($$value) => {
                  siteInformation.logo = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div>` : `<div>${validate_component(Label, "Label").$$render(
              $$result,
              {
                for: "logo",
                class: "text-sm font-medium"
              },
              {},
              {
                default: () => {
                  return `Please upload a square image of max size 100KB`;
                }
              }
            )} ${validate_component(Input, "Input").$$render(
              $$result,
              {
                class: "mt-2",
                id: "logo",
                type: "file",
                accept: ".jpg, .jpeg, .png, .svg",
                disabled: uploadingLogo
              },
              {},
              {}
            )} <p class="mt-1 text-xs font-medium text-destructive">${escape(uploadLogoStatus)}</p></div>`}</div></div> <div>${validate_component(Label, "Label").$$render($$result, { for: "favicon" }, {}, {
              default: () => {
                return `Favicon`;
              }
            })}</div> <div class="flex gap-x-4">${!!siteInformation.favicon ? `<div class="relative mt-8">${validate_component(Label, "Label").$$render(
              $$result,
              {
                for: "favicon",
                class: "inline-block h-[40px] w-[40px] cursor-pointer rounded-sm border p-1"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Gmi, "GMI").$$render(
                    $$result,
                    {
                      src: siteInformation.favicon,
                      classList: "w-fit hover:scale-95",
                      alt: ""
                    },
                    {},
                    {}
                  )}`;
                }
              }
            )} <div class="absolute -right-2 -top-2">${validate_component(Button, "Button").$$render(
              $$result,
              {
                variant: "secondary",
                class: "h-5 w-5 rounded-full border p-1",
                size: "icon"
              },
              {},
              {
                default: () => {
                  return `${validate_component(X, "X").$$render($$result, { class: "h-4 w-4" }, {}, {})}`;
                }
              }
            )}</div> ${``}</div>` : ``} <div class="flex gap-x-2"><div>${validate_component(Label, "Label").$$render(
              $$result,
              {
                for: "typeOfFaviconUpload",
                class: "text-sm font-medium"
              },
              {},
              {
                default: () => {
                  return `Method`;
                }
              }
            )} ${validate_component(Select, "Select.Root").$$render(
              $$result,
              {
                portal: null,
                onSelectedChange: (e) => {
                  typeOfFaviconUpload = e.value;
                },
                selected: {
                  value: typeOfFaviconUpload,
                  label: typeOfFaviconUpload
                }
              },
              {},
              {
                default: () => {
                  return `${validate_component(Select_trigger, "Select.Trigger").$$render(
                    $$result,
                    {
                      class: "mt-2 w-[200px]",
                      id: "typeOfFaviconUpload"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(Value, "Select.Value").$$render(
                          $$result,
                          {
                            placeholder: "Favicon Type",
                            value: typeOfFaviconUpload
                          },
                          {
                            value: ($$value) => {
                              typeOfFaviconUpload = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )}`;
                      }
                    }
                  )} ${validate_component(Select_content, "Select.Content").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Group, "Select.Group").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Select_label, "Select.Label").$$render($$result, {}, {}, {
                            default: () => {
                              return `Favicon Type`;
                            }
                          })} ${validate_component(Select_item, "Select.Item").$$render(
                            $$result,
                            {
                              value: "URL",
                              label: "URL",
                              class: "text-sm font-medium"
                            },
                            {},
                            {
                              default: () => {
                                return `URL`;
                              }
                            }
                          )} ${validate_component(Select_item, "Select.Item").$$render(
                            $$result,
                            {
                              value: "FILE",
                              label: "FILE",
                              class: "text-sm font-medium"
                            },
                            {},
                            {
                              default: () => {
                                return `FILE`;
                              }
                            }
                          )}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )}</div> ${typeOfFaviconUpload === "URL" ? `<div>${validate_component(Label, "Label").$$render(
              $$result,
              {
                for: "favicon",
                class: "text-sm font-medium"
              },
              {},
              {
                default: () => {
                  return `Please provide a URL of the image`;
                }
              }
            )} ${validate_component(Input, "Input").$$render(
              $$result,
              {
                class: "mt-2",
                type: "text",
                id: "favicon",
                placeholder: "https://example.com/favicon.png",
                value: siteInformation.favicon
              },
              {
                value: ($$value) => {
                  siteInformation.favicon = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div>` : `<div>${validate_component(Label, "Label").$$render(
              $$result,
              {
                for: "favicon",
                class: "text-sm font-medium"
              },
              {},
              {
                default: () => {
                  return `Please upload a square image of max size 20KB`;
                }
              }
            )} ${validate_component(Input, "Input").$$render(
              $$result,
              {
                class: "mt-2",
                id: "favicon",
                type: "file",
                accept: ".jpg, .jpeg, .png, .svg",
                disabled: uploadingFavicon
              },
              {},
              {}
            )} <p class="mt-1 text-xs font-medium text-destructive">${escape(uploadFaviconStatus)}</p></div>`}</div></div> <div class="flex w-full justify-end gap-x-2"><p class="py-2 text-sm font-medium text-destructive">${escape(formErrorMessage)}</p> ${validate_component(Button, "Button").$$render(
              $$result,
              {
                type: "submit",
                disabled: formState === "loading"
              },
              {},
              {
                default: () => {
                  return `Save
            ${``}`;
                }
              }
            )}</div></div></form>`;
          }
        })}`;
      }
    })} `;
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
      href: "https://kener.ing/docs/site",
      class: " text-sm"
    },
    {},
    {
      default: () => {
        return `Documentation ${validate_component(ExternalLink, "ExternalLink").$$render($$result, { size: "12", class: "ml-1" }, {}, {})}`;
      }
    }
  )}</div> ${validate_component(SiteInfo, "SiteInfo").$$render($$result, { data }, {}, {})}</div>`;
});
export {
  Page as default
};
