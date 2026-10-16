import { c as create_ssr_component, v as validate_component, a as subscribe, e as escape, b as each } from "../../../../../../../chunks/ssr.js";
import { C as Card } from "../../../../../../../chunks/card.js";
import { C as Card_content } from "../../../../../../../chunks/card-content.js";
import { C as Card_description } from "../../../../../../../chunks/card-description.js";
import "clsx";
import { C as Card_header, a as Card_title } from "../../../../../../../chunks/card-title.js";
import "../../../../../../../chunks/index3.js";
import { I as Input } from "../../../../../../../chunks/input.js";
import { L as Label } from "../../../../../../../chunks/label.js";
import { S as Select, a as Select_trigger, V as Value, b as Select_content, G as Group$1, c as Select_label, d as Select_item } from "../../../../../../../chunks/index8.js";
import { l as locales } from "../../../../../../../chunks/locales2.js";
import { G as Gmi } from "../../../../../../../chunks/gmi.js";
import { R as Root, T as Trigger, D as Dropdown_menu_content, G as Group } from "../../../../../../../chunks/index5.js";
import "dequal";
import { C as CodeMirror } from "../../../../../../../chunks/CodeMirror.js";
import { html } from "@codemirror/lang-html";
import { githubDark, githubLight } from "@uiw/codemirror-theme-github";
import { d as derivedMode } from "../../../../../../../chunks/stores2.js";
import { B as Button } from "../../../../../../../chunks/button.js";
import { D as Dropdown_menu_item } from "../../../../../../../chunks/dropdown-menu-item.js";
import { I as Icon } from "../../../../../../../chunks/Icon.js";
import { X } from "../../../../../../../chunks/x.js";
import { P as Plus } from "../../../../../../../chunks/plus.js";
import { E as ExternalLink } from "../../../../../../../chunks/external-link.js";
const Laptop_minimal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "12",
        "x": "3",
        "y": "4",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "line",
      {
        "x1": "2",
        "x2": "22",
        "y1": "20",
        "y2": "20"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "laptop-minimal" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const LaptopMinimal = Laptop_minimal;
const Smartphone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "14",
        "height": "20",
        "x": "5",
        "y": "2",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["path", { "d": "M12 18h.01" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "smartphone" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const SmartPhone = Smartphone;
const HomePage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $mode, $$unsubscribe_mode;
  $$unsubscribe_mode = subscribe(derivedMode, (value) => $mode = value);
  let { data } = $$props;
  let formStateHero = "idle";
  let formStateFooter = "idle";
  let formStateIncident = "idle";
  let formStatei18n = "idle";
  let formStateCategories = "idle";
  let hero = { title: "", subtitle: "" };
  let footerHTML = "";
  let tzToggle = "NO";
  let showSiteStatus = "NO";
  let homeIncidentCount = 10;
  let homeIncidentStartTimeWithin = 30;
  let incidentGroupView = "EXPAND_FIRST";
  let kenerTheme = "default";
  let homeDataMaxDays = {
    desktop: {
      maxDays: 90,
      selectableDays: [1, 7, 14, 30, 60, 90]
    },
    mobile: {
      maxDays: 90,
      selectableDays: [1, 7, 14, 30, 60, 90]
    }
  };
  let selectableDaysList = [1, 7, 14, 30, 60, 90, 120, 150, 180];
  let availableThemes = [
    { name: "Default", value: "default" },
    { name: "Mono", value: "mono" },
    { name: "Sunset", value: "sunset" },
    { name: "Forest", value: "forest" },
    { name: "Ocean", value: "ocean" }
  ];
  let nav = [];
  let categories = [];
  let i18n = {
    defaultLocale: "en",
    locales: JSON.parse(locales).map((el) => {
      return {
        code: el.code,
        name: el.name,
        selected: true,
        disabled: false
      };
    })
  };
  if (data.siteData?.nav) {
    nav = data.siteData.nav.map((el) => {
      el.typeOfUpload = el.iconURL.startsWith("http") ? "URL" : "FILE";
      return el;
    });
  }
  if (data.siteData?.categories) {
    categories = data.siteData.categories;
  }
  if (data.siteData?.hero) {
    hero = data.siteData.hero;
  }
  if (data.siteData.homeIncidentCount) {
    homeIncidentCount = data.siteData.homeIncidentCount;
  }
  if (data.siteData.homeIncidentStartTimeWithin) {
    homeIncidentStartTimeWithin = data.siteData.homeIncidentStartTimeWithin;
  }
  if (data.siteData.incidentGroupView) {
    incidentGroupView = data.siteData.incidentGroupView;
  }
  if (data.siteData.footerHTML) {
    footerHTML = data.siteData.footerHTML;
  }
  if (data.siteData.kenerTheme) {
    kenerTheme = data.siteData.kenerTheme;
  }
  if (data.siteData.homeDataMaxDays) {
    homeDataMaxDays = data.siteData.homeDataMaxDays;
  }
  if (data.siteData.tzToggle) {
    tzToggle = data.siteData.tzToggle;
  }
  if (data.siteData.showSiteStatus) {
    showSiteStatus = data.siteData.showSiteStatus;
  }
  if (data.siteData.i18n) {
    i18n = data.siteData.i18n;
    JSON.parse(locales).forEach((el) => {
      if (!i18n.locales.find((locale) => locale.code === el.code)) {
        i18n.locales.push({
          code: el.code,
          name: el.name,
          selected: false,
          disabled: false
        });
      }
    });
  }
  let navErrorMessage = "";
  function i18nChange(e) {
    i18n.defaultLocale = e.value;
  }
  let formStateData = "idle";
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
                return `Hero Section`;
              }
            })} ${validate_component(Card_description, "Card.Description").$$render($$result, {}, {}, {
              default: () => {
                return `Configure the hero section of your site.`;
              }
            })}`;
          }
        })} ${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
          default: () => {
            return `<form class="mx-auto mt-4 flex flex-col gap-y-4"><div class="flex w-full flex-row justify-evenly gap-2"><div class="w-full">${validate_component(Label, "Label").$$render($$result, { for: "hero_title" }, {}, {
              default: () => {
                return `Title`;
              }
            })} ${validate_component(Input, "Input").$$render(
              $$result,
              {
                class: "mt-2",
                type: "text",
                id: "hero_title",
                placeholder: "Status Page for Kener",
                value: hero.title
              },
              {
                value: ($$value) => {
                  hero.title = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div></div> <div class="flex w-full flex-row justify-evenly gap-2"><div class="w-full">${validate_component(Label, "Label").$$render($$result, { for: "hero_subtitle" }, {}, {
              default: () => {
                return `Subtitle`;
              }
            })} ${validate_component(Input, "Input").$$render(
              $$result,
              {
                class: "mt-2",
                type: "text",
                id: "hero_subtitle",
                placeholder: "Welcome to our status page",
                value: hero.subtitle
              },
              {
                value: ($$value) => {
                  hero.subtitle = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div></div> <div class="flex flex-col gap-y-2"><div>${validate_component(Label, "Label").$$render($$result, {}, {}, {
              default: () => {
                return `Color`;
              }
            })}</div> <div class="flex flex-row gap-x-2 rounded-md border p-2"><div class="w-3/4 pt-2"><span class="${"kener-theme-" + escape(kenerTheme, true) + "-hero-h1 font-medium"}">${escape(hero.title)}</span></div> <div class="flex w-1/4 justify-end">${validate_component(Root, "DropdownMenu.Root").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Trigger, "DropdownMenu.Trigger").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Button, "Button").$$render($$result, { variant: "outline" }, {}, {
                      default: () => {
                        return `${escape(availableThemes.find((el) => el.value === kenerTheme)?.name || "Mono")}`;
                      }
                    })}`;
                  }
                })} ${validate_component(Dropdown_menu_content, "DropdownMenu.Content").$$render($$result, {}, {}, {
                  default: () => {
                    return `${each(availableThemes, (theme) => {
                      return `${validate_component(Group, "DropdownMenu.Group").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Dropdown_menu_item, "DropdownMenu.Item").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(Button, "Button").$$render(
                                $$result,
                                {
                                  variant: "ghost",
                                  class: "h-6 w-full justify-start text-xs"
                                },
                                {},
                                {
                                  default: () => {
                                    return `${escape(theme.name)} `;
                                  }
                                }
                              )} `;
                            }
                          })} `;
                        }
                      })}`;
                    })}`;
                  }
                })}`;
              }
            })}</div></div></div> <div><p class="font-medium"><label><input type="checkbox" ${showSiteStatus === "YES" ? "checked" : ""}>
            Show Site Status Banner</label></p></div> <div class="flex w-full justify-end gap-x-2">${``} ${validate_component(Button, "Button").$$render(
              $$result,
              {
                type: "submit",
                disabled: formStateHero === "loading"
              },
              {},
              {
                default: () => {
                  return `Save Hero Section
          ${``}`;
                }
              }
            )}</div></form>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card.Root").$$render($$result, { class: "mt-4" }, {}, {
      default: () => {
        return `${validate_component(Card_header, "Card.Header").$$render($$result, { class: "border-b" }, {}, {
          default: () => {
            return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
              default: () => {
                return `Data`;
              }
            })} ${validate_component(Card_description, "Card.Description").$$render($$result, {}, {}, {
              default: () => {
                return `Configure the data shown on the homepage. This includes the time range for incidents.`;
              }
            })}`;
          }
        })} ${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
          default: () => {
            return `<form class="mx-auto mt-4 flex flex-col space-y-4"><div class="grid grid-cols-2 gap-4"><div class="flex flex-col gap-y-2">${validate_component(Label, "Label").$$render($$result, { class: "text-lg" }, {}, {
              default: () => {
                return `${validate_component(LaptopMinimal, "LaptopMinimal").$$render($$result, { class: "mr-2 inline h-4 w-4" }, {}, {})}
            Desktop`;
              }
            })} <div class="border-b pb-4">${validate_component(Label, "Label").$$render(
              $$result,
              {
                for: "desktopmaxdata",
                class: "text-sm font-medium"
              },
              {},
              {
                default: () => {
                  return `Select Data Range`;
                }
              }
            )} ${validate_component(Select, "Select.Root").$$render(
              $$result,
              {
                portal: null,
                onSelectedChange: (e) => {
                  homeDataMaxDays.desktop.maxDays = e.value;
                  homeDataMaxDays.desktop.selectableDays = homeDataMaxDays.desktop.selectableDays.filter((day) => day <= e.value);
                  selectableDaysList.forEach((day) => {
                    if (day <= e.value && !homeDataMaxDays.desktop.selectableDays.includes(day)) {
                      homeDataMaxDays.desktop.selectableDays.push(day);
                    }
                  });
                },
                selected: {
                  value: homeDataMaxDays.desktop.maxDays,
                  label: homeDataMaxDays.desktop.maxDays + " Days"
                }
              },
              {},
              {
                default: () => {
                  return `${validate_component(Select_trigger, "Select.Trigger").$$render(
                    $$result,
                    {
                      class: "	mt-2 w-[200px]",
                      id: "desktopmaxdata"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(Value, "Select.Value").$$render(
                          $$result,
                          {
                            placeholder: "Select Range",
                            value: homeDataMaxDays.desktop.maxDays
                          },
                          {
                            value: ($$value) => {
                              homeDataMaxDays.desktop.maxDays = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )}`;
                      }
                    }
                  )} ${validate_component(Select_content, "Select.Content").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Group$1, "Select.Group").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Select_label, "Select.Label").$$render($$result, {}, {}, {
                            default: () => {
                              return `Max Days`;
                            }
                          })} ${each(selectableDaysList, (day) => {
                            return `${validate_component(Select_item, "Select.Item").$$render(
                              $$result,
                              {
                                value: day,
                                label: day + " Days",
                                class: "text-sm font-medium"
                              },
                              {},
                              {
                                default: () => {
                                  return `${escape(day)} Days
                    `;
                                }
                              }
                            )}`;
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )}</div> <div class="border-b pb-4">${validate_component(Label, "Label").$$render(
              $$result,
              {
                for: "desktopdropdown",
                class: "text-sm font-medium"
              },
              {},
              {
                default: () => {
                  return `Select Dropdown Range`;
                }
              }
            )} <div class="mt-2 flex flex-row flex-wrap gap-x-2">${each(selectableDaysList, (day) => {
              return `<label><input type="checkbox" ${day >= homeDataMaxDays.desktop.maxDays ? "disabled" : ""} ${homeDataMaxDays.desktop.selectableDays.includes(day) ? "checked" : ""}> ${escape(day)} Days
                </label>`;
            })}</div></div></div> <div class="flex flex-col gap-y-2">${validate_component(Label, "Label").$$render($$result, { class: "text-lg" }, {}, {
              default: () => {
                return `${validate_component(SmartPhone, "SmartPhone").$$render($$result, { class: "mr-2 inline h-4 w-4" }, {}, {})}
            Mobile`;
              }
            })} <div class="border-b pb-4">${validate_component(Label, "Label").$$render(
              $$result,
              {
                for: "mobilemaxdata",
                class: "text-sm font-medium"
              },
              {},
              {
                default: () => {
                  return `Select Data Range`;
                }
              }
            )} ${validate_component(Select, "Select.Root").$$render(
              $$result,
              {
                portal: null,
                onSelectedChange: (e) => {
                  homeDataMaxDays.mobile.maxDays = e.value;
                  homeDataMaxDays.mobile.selectableDays = homeDataMaxDays.mobile.selectableDays.filter((day) => day <= e.value);
                  selectableDaysList.forEach((day) => {
                    if (day <= e.value && !homeDataMaxDays.mobile.selectableDays.includes(day)) {
                      homeDataMaxDays.mobile.selectableDays.push(day);
                    }
                  });
                },
                selected: {
                  value: homeDataMaxDays.mobile.maxDays,
                  label: homeDataMaxDays.mobile.maxDays + " Days"
                }
              },
              {},
              {
                default: () => {
                  return `${validate_component(Select_trigger, "Select.Trigger").$$render(
                    $$result,
                    {
                      class: "	mt-2 w-[200px]",
                      id: "mobilemaxdata"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(Value, "Select.Value").$$render(
                          $$result,
                          {
                            placeholder: "Select Range",
                            value: homeDataMaxDays.mobile.maxDays
                          },
                          {
                            value: ($$value) => {
                              homeDataMaxDays.mobile.maxDays = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )}`;
                      }
                    }
                  )} ${validate_component(Select_content, "Select.Content").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Group$1, "Select.Group").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Select_label, "Select.Label").$$render($$result, {}, {}, {
                            default: () => {
                              return `Max Days`;
                            }
                          })} ${each(selectableDaysList, (day) => {
                            return `${validate_component(Select_item, "Select.Item").$$render(
                              $$result,
                              {
                                value: day,
                                label: day + " Days",
                                class: "text-sm font-medium"
                              },
                              {},
                              {
                                default: () => {
                                  return `${escape(day)} Days
                    `;
                                }
                              }
                            )}`;
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )}</div> <div class="border-b pb-4">${validate_component(Label, "Label").$$render(
              $$result,
              {
                for: "mobiledropdown",
                class: "text-sm font-medium"
              },
              {},
              {
                default: () => {
                  return `Select Dropdown Range`;
                }
              }
            )} <div class="mt-2 flex flex-row flex-wrap gap-x-2">${each(selectableDaysList, (day) => {
              return `<label><input type="checkbox" ${day >= homeDataMaxDays.mobile.maxDays ? "disabled" : ""} ${homeDataMaxDays.mobile.selectableDays.includes(day) ? "checked" : ""}> ${escape(day)} Days
                </label>`;
            })}</div></div></div></div> <p data-svelte-h="svelte-1yeapvv"><span class="text-xs font-medium text-muted-foreground">Select the maximum number of days to show data for. This will be used to filter the data shown on the
          homepage. The dropdown will show all the days that are less than or equal to the selected max days. The max
          value in the dropdown will be the entire value of data range it cannot be changed</span></p> ${``} <div class="flex w-full justify-end gap-x-2">${validate_component(Button, "Button").$$render(
              $$result,
              {
                type: "submit",
                disabled: formStateData === "loading"
              },
              {},
              {
                default: () => {
                  return `Save Data Settings
          ${``}`;
                }
              }
            )}</div></form>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card.Root").$$render($$result, { class: "mt-4" }, {}, {
      default: () => {
        return `${validate_component(Card_header, "Card.Header").$$render($$result, { class: "border-b" }, {}, {
          default: () => {
            return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
              default: () => {
                return `Incidents`;
              }
            })} ${validate_component(Card_description, "Card.Description").$$render($$result, {}, {}, {
              default: () => {
                return `Control how many recent updated incidents you want to show on the homepage.`;
              }
            })}`;
          }
        })} ${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
          default: () => {
            return `<form class="mx-auto mt-4 space-y-4"><div class="flex flex-row justify-start gap-2"><div class="">${validate_component(Label, "Label").$$render($$result, { for: "hero_title" }, {}, {
              default: () => {
                return `Maximum Number to Show`;
              }
            })} ${validate_component(Input, "Input").$$render(
              $$result,
              {
                class: "mt-2",
                type: "text",
                id: "homeIncidentCount",
                placeholder: "10",
                value: homeIncidentCount
              },
              {
                value: ($$value) => {
                  homeIncidentCount = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div> <div class="">${validate_component(Label, "Label").$$render($$result, { for: "hero_title" }, {}, {
              default: () => {
                return `Start time within x days`;
              }
            })} ${validate_component(Input, "Input").$$render(
              $$result,
              {
                class: "mt-2",
                type: "text",
                id: "homeIncidentStartTimeWithin",
                placeholder: "2 days",
                value: homeIncidentStartTimeWithin
              },
              {
                value: ($$value) => {
                  homeIncidentStartTimeWithin = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div> <div>${validate_component(Label, "Label").$$render(
              $$result,
              {
                for: "incidentGroupView",
                class: "text-sm font-medium"
              },
              {},
              {
                default: () => {
                  return `Incident Group View`;
                }
              }
            )} ${validate_component(Select, "Select.Root").$$render(
              $$result,
              {
                portal: null,
                onSelectedChange: (e) => {
                  incidentGroupView = e.value;
                },
                selected: {
                  value: incidentGroupView,
                  label: incidentGroupView.replace("_", " ")
                }
              },
              {},
              {
                default: () => {
                  return `${validate_component(Select_trigger, "Select.Trigger").$$render(
                    $$result,
                    {
                      class: "	mt-2 w-[200px]",
                      id: "incidentGroupView"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(Value, "Select.Value").$$render(
                          $$result,
                          {
                            placeholder: "Favicon Type",
                            value: incidentGroupView
                          },
                          {
                            value: ($$value) => {
                              incidentGroupView = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )}`;
                      }
                    }
                  )} ${validate_component(Select_content, "Select.Content").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Group$1, "Select.Group").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Select_label, "Select.Label").$$render($$result, {}, {}, {
                            default: () => {
                              return `Favicon Type`;
                            }
                          })} ${validate_component(Select_item, "Select.Item").$$render(
                            $$result,
                            {
                              value: "EXPAND_FIRST",
                              label: "EXPAND FIRST",
                              class: "text-sm font-medium"
                            },
                            {},
                            {
                              default: () => {
                                return `EXPAND FIRST`;
                              }
                            }
                          )} ${validate_component(Select_item, "Select.Item").$$render(
                            $$result,
                            {
                              value: "COLLAPSED",
                              label: "COLLAPSED",
                              class: "text-sm font-medium"
                            },
                            {},
                            {
                              default: () => {
                                return `COLLAPSED`;
                              }
                            }
                          )} ${validate_component(Select_item, "Select.Item").$$render(
                            $$result,
                            {
                              value: "EXPANDED",
                              label: "EXPANDED",
                              class: "text-sm font-medium"
                            },
                            {},
                            {
                              default: () => {
                                return `EXPANDED`;
                              }
                            }
                          )}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )}</div> <div class="pt-8">${validate_component(Button, "Button").$$render(
              $$result,
              {
                type: "submit",
                disabled: formStateIncident === "loading"
              },
              {},
              {
                default: () => {
                  return `Save Incidents Settings
            ${``}`;
                }
              }
            )}</div></div> <p class="text-sm text-muted-foreground">Translates to &quot;Show ${escape(homeIncidentCount)} incidents that have started in the last ${escape(homeIncidentStartTimeWithin)}
        days in the past or going to start in ${escape(homeIncidentStartTimeWithin)} days in the future&quot;</p> ${``}</form>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card.Root").$$render($$result, { class: "mt-4" }, {}, {
      default: () => {
        return `${validate_component(Card_header, "Card.Header").$$render($$result, { class: "border-b" }, {}, {
          default: () => {
            return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
              default: () => {
                return `Navigation`;
              }
            })} ${validate_component(Card_description, "Card.Description").$$render($$result, {}, {}, {
              default: () => {
                return `Configure the navigation of your site.`;
              }
            })}`;
          }
        })} ${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
          default: () => {
            return `<form class="mx-auto mt-4 space-y-4">${each(nav, (navItem, i) => {
              return `<div class="mb-8 flex w-full flex-row justify-start gap-2"><div class="grid grid-cols-12 gap-x-2"><div class="col-span-3">${validate_component(Label, "Label").$$render($$result, { for: "key" }, {}, {
                default: () => {
                  return `Title`;
                }
              })} ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  id: "key",
                  placeholder: "Documentation",
                  value: navItem.name
                },
                {
                  value: ($$value) => {
                    navItem.name = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div> <div class="col-span-5">${validate_component(Label, "Label").$$render($$result, { for: "value" }, {}, {
                default: () => {
                  return `URL`;
                }
              })} ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  id: "value",
                  placeholder: "/docs",
                  value: navItem.url
                },
                {
                  value: ($$value) => {
                    navItem.url = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div> <div class="col-span-1">${validate_component(Button, "Button").$$render($$result, { variant: "ghost", class: "mt-6" }, {}, {
                default: () => {
                  return `${validate_component(X, "X").$$render($$result, { class: "h-4 w-4" }, {}, {})} `;
                }
              })}</div> <div class="relative col-span-12 mt-2" data-svelte-h="svelte-1ktrftq"><p class="mt-2 text-sm font-medium text-muted-foreground">Add an optional nav icon</p></div> <div class="${"relative col-span-12 mt-1 " + escape(!!navItem.iconURL ? "pl-12" : "", true)}">${!!navItem.iconURL ? `<div class="absolute left-0 top-5 mt-2 h-[30px] w-[30px] rounded-sm border p-1">${validate_component(Gmi, "GMI").$$render($$result, { src: navItem.iconURL, alt: "" }, {}, {})} ${validate_component(Button, "Button").$$render(
                $$result,
                {
                  variant: "secondary",
                  class: "absolute -right-2.5 -top-1.5 h-4 w-4 rounded-full p-0"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(X, "X").$$render($$result, { class: "h-3 w-3" }, {}, {})} `;
                  }
                }
              )} </div>` : ``} <div class="flex gap-x-2"><div>${validate_component(Label, "Label").$$render(
                $$result,
                {
                  for: "typeOfUpload" + i,
                  class: "text-sm font-medium"
                },
                {},
                {
                  default: () => {
                    return `Nav Icon Type`;
                  }
                }
              )} ${validate_component(Select, "Select.Root").$$render(
                $$result,
                {
                  portal: null,
                  onSelectedChange: (e) => {
                    navItem.typeOfUpload = e.value;
                  },
                  selected: {
                    value: navItem.typeOfUpload,
                    label: navItem.typeOfUpload
                  }
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Select_trigger, "Select.Trigger").$$render(
                      $$result,
                      {
                        class: "	 w-[200px]",
                        id: "typeOfUpload" + i
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(Value, "Select.Value").$$render(
                            $$result,
                            {
                              placeholder: "Favicon Type",
                              value: navItem.typeOfUpload
                            },
                            {
                              value: ($$value) => {
                                navItem.typeOfUpload = $$value;
                                $$settled = false;
                              }
                            },
                            {}
                          )} `;
                        }
                      }
                    )} ${validate_component(Select_content, "Select.Content").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Group$1, "Select.Group").$$render($$result, {}, {}, {
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
                            )} `;
                          }
                        })} `;
                      }
                    })} `;
                  }
                }
              )}</div> ${navItem.typeOfUpload === "URL" ? `<div>${validate_component(Label, "Label").$$render($$result, { for: "iconURL" + i }, {}, {
                default: () => {
                  return `Icon URL`;
                }
              })} ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  id: "iconURL" + i,
                  placeholder: "https://example.com/favicon.ico",
                  value: navItem.iconURL
                },
                {
                  value: ($$value) => {
                    navItem.iconURL = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} </div>` : `<div>${validate_component(Label, "Label").$$render($$result, { for: "logo" + i }, {}, {
                default: () => {
                  return `Icon (&lt; 100 KB)`;
                }
              })} ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  class: "",
                  id: "logo" + i,
                  disabled: !!navItem.uploading,
                  type: "file",
                  accept: ".jpg, .jpeg, .png, .svg"
                },
                {},
                {}
              )} </div>`} </div></div> </div></div> <hr>`;
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
            )}</div> <div class="flex w-full justify-end" style="margin-top:32px"><p class="px-4 pt-1"><span class="text-sm font-medium text-destructive">${escape(navErrorMessage)}</span></p> ${validate_component(Button, "Button").$$render(
              $$result,
              {
                type: "submit",
                disabled: formStateHero === "loading"
              },
              {},
              {
                default: () => {
                  return `Save Navigation
          ${``}`;
                }
              }
            )}</div></form>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card.Root").$$render($$result, { class: "mt-4" }, {}, {
      default: () => {
        return `${validate_component(Card_header, "Card.Header").$$render($$result, { class: "border-b" }, {}, {
          default: () => {
            return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
              default: () => {
                return `Internationalization`;
              }
            })} ${validate_component(Card_description, "Card.Description").$$render($$result, {}, {}, {
              default: () => {
                return `Configure the languages of your site.`;
              }
            })}`;
          }
        })} ${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
          default: () => {
            return `<form class="mx-auto mt-4 space-y-4"><p class="text-sm font-medium" data-svelte-h="svelte-hqv1el">All available languages</p> <div class="mb-8 flex w-full flex-row flex-wrap gap-x-4">${each(i18n.locales, (locale) => {
              return `<div><label><input type="checkbox" ${locale.selected ? "checked" : ""} ${i18n.defaultLocale === locale.code ? "disabled" : ""}> ${escape(locale.name)}</label> </div>`;
            })}</div> <p class="text-sm font-medium" data-svelte-h="svelte-1czyx4v">Select Default Language</p> ${validate_component(Select, "Select.Root").$$render(
              $$result,
              {
                portal: null,
                onSelectedChange: i18nChange
              },
              {},
              {
                default: () => {
                  return `${validate_component(Select_trigger, "Select.Trigger").$$render($$result, { class: "w-[180px]" }, {}, {
                    default: () => {
                      return `${validate_component(Value, "Select.Value").$$render(
                        $$result,
                        {
                          placeholder: i18n.locales.find((el) => el.code == i18n.defaultLocale).name
                        },
                        {},
                        {}
                      )}`;
                    }
                  })} ${validate_component(Select_content, "Select.Content").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Group$1, "Select.Group").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Select_label, "Select.Label").$$render($$result, {}, {}, {
                            default: () => {
                              return `Languages`;
                            }
                          })} ${each(i18n.locales, (locale) => {
                            return `${validate_component(Select_item, "Select.Item").$$render(
                              $$result,
                              {
                                value: locale.code,
                                label: locale.name,
                                disabled: !locale.selected,
                                class: "text-sm font-medium"
                              },
                              {},
                              {
                                default: () => {
                                  return `${escape(locale.name)} `;
                                }
                              }
                            )}`;
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )} <p class="pt-4 text-lg font-medium" data-svelte-h="svelte-871paj">Timezone Switching</p> <p class="text-sm font-medium text-muted-foreground" data-svelte-h="svelte-10g1ni8">Kener will automatically detect the user&#39;s timezone and show the status page in their timezone. You can let
        users switch between different timezones if you want.</p> <p class="text-sm font-medium"><label><input type="checkbox" ${tzToggle === "YES" ? "checked" : ""}>
          Allow users to switch timezones</label></p> <div class="flex w-full justify-end gap-x-2">${``} ${validate_component(Button, "Button").$$render(
              $$result,
              {
                type: "submit",
                disabled: formStatei18n === "loading"
              },
              {},
              {
                default: () => {
                  return `Save Languages
          ${``}`;
                }
              }
            )}</div></form>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card.Root").$$render($$result, { class: "mt-4" }, {}, {
      default: () => {
        return `${validate_component(Card_header, "Card.Header").$$render($$result, { class: "border-b" }, {}, {
          default: () => {
            return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
              default: () => {
                return `Site Categories`;
              }
            })} ${validate_component(Card_description, "Card.Description").$$render($$result, {}, {}, {
              default: () => {
                return `Configure the categories of your site.`;
              }
            })}`;
          }
        })} ${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
          default: () => {
            return `<form class="mx-auto mt-4 space-y-4">${each(categories, (cat, i) => {
              return `<div class="flex items-center gap-4"><div class="flex-1">${validate_component(Label, "Label").$$render($$result, { for: i + "catkey", class: "block w-full" }, {}, {
                default: () => {
                  return `Name`;
                }
              })} ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  class: "mt-2",
                  type: "text",
                  id: i + "catkey",
                  placeholder: "Category Name",
                  disabled: i === 0,
                  value: cat.name
                },
                {
                  value: ($$value) => {
                    cat.name = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div> <div class="flex-1">${validate_component(Label, "Label").$$render($$result, { for: i + "catdsc", class: "block w-full" }, {}, {
                default: () => {
                  return `Description`;
                }
              })} ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  class: "mt-2",
                  type: "text",
                  id: i + "catdsc",
                  placeholder: "Category Description",
                  disabled: i === 0,
                  value: cat.description
                },
                {
                  value: ($$value) => {
                    cat.description = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div> <div class="relative flex flex-col items-center gap-y-2">${validate_component(Label, "Label").$$render($$result, { for: i + "vis", class: "block w-full" }, {}, {
                default: () => {
                  return `Visibility`;
                }
              })} ${validate_component(Root, "DropdownMenu.Root").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Trigger, "DropdownMenu.Trigger").$$render($$result, { disabled: i === 0, id: i + "vis" }, {}, {
                    default: () => {
                      return `${validate_component(Button, "Button").$$render(
                        $$result,
                        {
                          variant: "outline",
                          class: "mr-2",
                          disabled: cat.name === "Home"
                        },
                        {},
                        {
                          default: () => {
                            return `${escape(cat.isHidden ? "Private" : "Public")} `;
                          }
                        }
                      )} `;
                    }
                  })} ${validate_component(Dropdown_menu_content, "DropdownMenu.Content").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Group, "DropdownMenu.Group").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Dropdown_menu_item, "DropdownMenu.Item").$$render($$result, {}, {}, {
                            default: () => {
                              return `Private`;
                            }
                          })} ${validate_component(Dropdown_menu_item, "DropdownMenu.Item").$$render($$result, {}, {}, {
                            default: () => {
                              return `Public`;
                            }
                          })} `;
                        }
                      })} `;
                    }
                  })} `;
                }
              })}</div> <div class="flex items-center">${validate_component(Button, "Button").$$render(
                $$result,
                {
                  variant: "ghost",
                  class: "mt-4 h-6 w-6 p-1",
                  disabled: i === 0
                },
                {},
                {
                  default: () => {
                    return `${validate_component(X, "X").$$render($$result, { class: "h-5 w-5" }, {}, {})} `;
                  }
                }
              )}</div> </div>`;
            })} <div class="relative pb-8"><hr class="border-1 border-border-input relative top-4 h-px border-dashed"> ${validate_component(Button, "Button").$$render(
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
            )}</div> <div class="flex w-full justify-end gap-x-2">${``} ${validate_component(Button, "Button").$$render(
              $$result,
              {
                type: "submit",
                disabled: formStateCategories === "loading"
              },
              {},
              {
                default: () => {
                  return `Save Categories
          ${``}`;
                }
              }
            )}</div></form>`;
          }
        })}`;
      }
    })} ${validate_component(Card, "Card.Root").$$render($$result, { class: "mt-4" }, {}, {
      default: () => {
        return `${validate_component(Card_header, "Card.Header").$$render($$result, { class: "border-b" }, {}, {
          default: () => {
            return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
              default: () => {
                return `Site Footer`;
              }
            })} ${validate_component(Card_description, "Card.Description").$$render($$result, {}, {}, {
              default: () => {
                return `Configure the footer of your site.`;
              }
            })}`;
          }
        })} ${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
          default: () => {
            return `<form class="mx-auto mt-4 space-y-4"><div class="flex w-full flex-row justify-evenly gap-2"><div class="w-full"><div class="overflow-hidden rounded-md">${validate_component(CodeMirror, "CodeMirror").$$render(
              $$result,
              {
                lang: html(),
                theme: $mode == "dark" ? githubDark : githubLight,
                styles: {
                  "&": {
                    width: "100%",
                    maxWidth: "100%",
                    height: "320px",
                    border: "1px solid hsl(var(--border) / var(--tw-border-opacity))",
                    borderRadius: "0.375rem"
                  }
                },
                value: footerHTML
              },
              {
                value: ($$value) => {
                  footerHTML = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div></div></div> <div class="flex w-full justify-between gap-x-2"><div>${validate_component(Button, "Button").$$render($$result, { variant: "outline", class: "mt-2" }, {}, {
              default: () => {
                return `<span class="ml-2" data-svelte-h="svelte-5i1xbs">Reset to default</span>`;
              }
            })}</div> <div class="flex flex-row justify-end gap-x-2">${``} ${validate_component(Button, "Button").$$render(
              $$result,
              {
                type: "submit",
                disabled: formStateFooter === "loading"
              },
              {},
              {
                default: () => {
                  return `Save Custom Footer
            ${``}`;
                }
              }
            )}</div></div></form>`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_mode();
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
      href: "https://kener.ing/docs/home-page",
      class: " text-sm"
    },
    {},
    {
      default: () => {
        return `Documentation ${validate_component(ExternalLink, "ExternalLink").$$render($$result, { size: "12", class: "ml-1" }, {}, {})}`;
      }
    }
  )}</div> ${validate_component(HomePage, "HomePage").$$render($$result, { data }, {}, {})}</div>`;
});
export {
  Page as default
};
