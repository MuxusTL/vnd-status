import { c as create_ssr_component, l as compute_rest_props, a as subscribe, p as spread, q as escape_object, v as validate_component } from "../../../../../../../chunks/ssr.js";
import { C as Card } from "../../../../../../../chunks/card.js";
import { C as Card_content } from "../../../../../../../chunks/card-content.js";
import { C as Card_description } from "../../../../../../../chunks/card-description.js";
import "clsx";
import { C as Card_header, a as Card_title } from "../../../../../../../chunks/card-title.js";
import { E as setCtx, F as getAttrs, G as setItemCtx, H as getRadioIndicator } from "../../../../../../../chunks/index3.js";
import { I as Input } from "../../../../../../../chunks/input.js";
import { L as Label } from "../../../../../../../chunks/label.js";
import "@formkit/auto-animate";
import { s as siteDataExtractFromDb } from "../../../../../../../chunks/clientTools.js";
import "dequal";
import { T as Tooltip, a as TooltipTrigger, b as TooltipContent } from "../../../../../../../chunks/TooltipTrigger.js";
import { c as cn } from "../../../../../../../chunks/utils.js";
import { c as createDispatcher } from "../../../../../../../chunks/events.js";
import { I as Icon } from "../../../../../../../chunks/Icon.js";
import { C as ColorPicker } from "../../../../../../../chunks/A11ySingleNotice.svelte_svelte_type_style_lang.js";
import { C as CodeMirror } from "../../../../../../../chunks/CodeMirror.js";
import { css } from "@codemirror/lang-css";
import { githubDark, githubLight } from "@uiw/codemirror-theme-github";
import { d as derivedMode } from "../../../../../../../chunks/stores2.js";
import { I as Info } from "../../../../../../../chunks/info.js";
import { B as Button } from "../../../../../../../chunks/button.js";
import { E as ExternalLink } from "../../../../../../../chunks/external-link.js";
const RadioGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["required", "disabled", "value", "onValueChange", "loop", "orientation", "asChild"]);
  let $root, $$unsubscribe_root;
  let { required = void 0 } = $$props;
  let { disabled = void 0 } = $$props;
  let { value = void 0 } = $$props;
  let { onValueChange = void 0 } = $$props;
  let { loop = void 0 } = $$props;
  let { orientation = void 0 } = $$props;
  let { asChild = false } = $$props;
  const { elements: { root }, states: { value: localValue }, updateOption } = setCtx({
    required,
    disabled,
    defaultValue: value,
    loop,
    orientation,
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
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.onValueChange === void 0 && $$bindings.onValueChange && onValueChange !== void 0)
    $$bindings.onValueChange(onValueChange);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  value !== void 0 && localValue.set(value);
  {
    updateOption("required", required);
  }
  {
    updateOption("disabled", disabled);
  }
  {
    updateOption("loop", loop);
  }
  {
    updateOption("orientation", orientation);
  }
  builder = $root;
  $$unsubscribe_root();
  return `${asChild ? `${slots.default ? slots.default({ builder, attrs }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps), escape_object(attrs)], {})}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>`}`;
});
const RadioGroupItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["value", "disabled", "asChild"]);
  let $item, $$unsubscribe_item;
  let { value } = $$props;
  let { disabled = false } = $$props;
  let { asChild = false } = $$props;
  const { elements: { item } } = setItemCtx(value);
  $$unsubscribe_item = subscribe(item, (value2) => $item = value2);
  createDispatcher();
  const attrs = getAttrs("item");
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  builder = $item({ value, disabled });
  $$unsubscribe_item();
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
const RadioGroupItemIndicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isChecked, $$unsubscribe_isChecked;
  const { isChecked, value } = getRadioIndicator();
  $$unsubscribe_isChecked = subscribe(isChecked, (value2) => $isChecked = value2);
  $$unsubscribe_isChecked();
  return `${$isChecked(value) ? `${slots.default ? slots.default({}) : ``}` : ``}`;
});
const Circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["circle", { "cx": "12", "cy": "12", "r": "10" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "circle" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Circle$1 = Circle;
const Radio_group = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "value"]);
  let { class: className = void 0 } = $$props;
  let { value = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(RadioGroup, "RadioGroupPrimitive.Root").$$render(
      $$result,
      Object.assign({}, { class: cn("grid gap-2", className) }, $$restProps, { value }),
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Radio_group_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "value"]);
  let { class: className = void 0 } = $$props;
  let { value } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `${validate_component(RadioGroupItem, "RadioGroupPrimitive.Item").$$render(
    $$result,
    Object.assign(
      {},
      { value },
      {
        class: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)
      },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `<div class="flex items-center justify-center">${validate_component(RadioGroupItemIndicator, "RadioGroupPrimitive.ItemIndicator").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Circle$1, "Circle").$$render(
              $$result,
              {
                class: "h-2.5 w-2.5 fill-current text-current"
              },
              {},
              {}
            )}`;
          }
        })}</div>`;
      }
    }
  )}`;
});
const ThemeInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $mode, $$unsubscribe_mode;
  $$unsubscribe_mode = subscribe(derivedMode, (value) => $mode = value);
  let { data } = $$props;
  let formState = "idle";
  let themeData = {
    pattern: "none",
    theme: "light",
    themeToggle: "YES",
    barStyle: "PARTIAL",
    barRoundness: "ROUNDED",
    summaryStyle: "CURRENT",
    kenerTheme: "default",
    colorsJ: {
      UP: "#4ead94",
      DOWN: "#ca3038",
      DEGRADED: "#e6ca61",
      MAINTENANCE: "#6679cc"
    },
    fontJ: {
      cssSrc: "https://fonts.bunny.net/css?family=albert-sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap",
      family: "Albert Sans"
    },
    colors: "",
    font: "",
    customCSS: ""
  };
  themeData = siteDataExtractFromDb(data.siteData, themeData);
  if (data.siteData.colors) {
    if (data.siteData.colors.MAINTENANCE === void 0) {
      data.siteData.colors.MAINTENANCE = "#6679cc";
    }
    themeData.colorsJ = JSON.parse(JSON.stringify(data.siteData.colors));
  }
  if (data.siteData.font) {
    themeData.fontJ = data.siteData.font;
  }
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
                return `Theme Customization`;
              }
            })} ${validate_component(Card_description, "Card.Description").$$render($$result, {}, {}, {
              default: () => {
                return `You can customize the theme of your site here. You can change the pattern, theme, colors, font, and monitor style.`;
              }
            })}`;
          }
        })} ${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
          default: () => {
            return `<form class="mx-auto mt-4 space-y-4"><p class="font-medium">Home Page Pattern
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
                    )}`;
                  }
                })} ${validate_component(TooltipContent, "Tooltip.Content").$$render($$result, { class: "max-w-md" }, {}, {
                  default: () => {
                    return `<div class="flex items-center justify-center rounded border bg-gray-800 px-2 py-1.5 text-xs font-medium text-gray-300 shadow-popover outline-none" data-svelte-h="svelte-zckq85">Choose the pattern for the home page. You can choose between squares, dots, or none.</div>`;
                  }
                })}`;
              }
            })}</p> <div class="flex">${validate_component(Radio_group, "RadioGroup.Root").$$render(
              $$result,
              {
                class: "flex flex-1 flex-wrap justify-start gap-4",
                onValueChange: (e) => themeData.pattern = e,
                value: themeData.pattern
              },
              {
                value: ($$value) => {
                  themeData.pattern = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `<div class="flex w-1/6 items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render($$result, { value: "squares", id: "rsq" }, {}, {})} ${validate_component(Label, "Label").$$render($$result, { for: "rsq" }, {}, {
                    default: () => {
                      return `Squares`;
                    }
                  })}</div> <div class="flex w-1/6 items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render($$result, { value: "dots", id: "rdot" }, {}, {})} ${validate_component(Label, "Label").$$render($$result, { for: "rdot" }, {}, {
                    default: () => {
                      return `Dots`;
                    }
                  })}</div> <div class="flex w-1/6 items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render($$result, { value: "tiles", id: "tiles" }, {}, {})} ${validate_component(Label, "Label").$$render($$result, { for: "tiles" }, {}, {
                    default: () => {
                      return `Tiles`;
                    }
                  })}</div> <div class="flex w-1/6 items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render($$result, { value: "radial-blue", id: "radial-blue" }, {}, {})} ${validate_component(Label, "Label").$$render($$result, { for: "radial-blue" }, {}, {
                    default: () => {
                      return `Radial Blue`;
                    }
                  })}</div> <div class="flex w-1/6 items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render($$result, { value: "radial-mono", id: "radial-mono" }, {}, {})} ${validate_component(Label, "Label").$$render($$result, { for: "radial-mono" }, {}, {
                    default: () => {
                      return `Radial Mono`;
                    }
                  })}</div> <div class="flex w-1/6 items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render(
                    $$result,
                    {
                      value: "radial-midnight",
                      id: "radial-midnight"
                    },
                    {},
                    {}
                  )} ${validate_component(Label, "Label").$$render($$result, { for: "radial-midnight" }, {}, {
                    default: () => {
                      return `Radial Midnight`;
                    }
                  })}</div> <div class="flex w-1/6 items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render($$result, { value: "circle-mono", id: "circle-mono" }, {}, {})} ${validate_component(Label, "Label").$$render($$result, { for: "circle-mono" }, {}, {
                    default: () => {
                      return `Circle Mono`;
                    }
                  })}</div> <div class="flex w-1/6 items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render(
                    $$result,
                    {
                      value: "carbon-fibre",
                      id: "carbon-fibre"
                    },
                    {},
                    {}
                  )} ${validate_component(Label, "Label").$$render($$result, { for: "carbon-fibre" }, {}, {
                    default: () => {
                      return `Carbon Fibre`;
                    }
                  })}</div> <div class="flex w-1/6 items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render($$result, { value: "texture-sky", id: "texture-sky" }, {}, {})} ${validate_component(Label, "Label").$$render($$result, { for: "texture-sky" }, {}, {
                    default: () => {
                      return `Texture Sky`;
                    }
                  })}</div> <div class="flex w-1/6 items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render(
                    $$result,
                    {
                      value: "angular-mono",
                      id: "angular-mono"
                    },
                    {},
                    {}
                  )} ${validate_component(Label, "Label").$$render($$result, { for: "angular-mono" }, {}, {
                    default: () => {
                      return `Angular Mono`;
                    }
                  })}</div> <div class="flex w-1/6 items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render(
                    $$result,
                    {
                      value: "angular-spring",
                      id: "angular-spring"
                    },
                    {},
                    {}
                  )} ${validate_component(Label, "Label").$$render($$result, { for: "angular-spring" }, {}, {
                    default: () => {
                      return `Angular Spring`;
                    }
                  })}</div> <div class="flex w-1/6 items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render(
                    $$result,
                    {
                      value: "angular-bloom",
                      id: "angular-bloom"
                    },
                    {},
                    {}
                  )} ${validate_component(Label, "Label").$$render($$result, { for: "angular-bloom" }, {}, {
                    default: () => {
                      return `Angular Bloom`;
                    }
                  })}</div> <div class="flex w-1/6 items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render($$result, { value: "pets", id: "pets" }, {}, {})} ${validate_component(Label, "Label").$$render($$result, { for: "pets" }, {}, {
                    default: () => {
                      return `Pets`;
                    }
                  })}</div> <div class="flex w-1/6 items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render($$result, { value: "none", id: "rnone" }, {}, {})} ${validate_component(Label, "Label").$$render($$result, { for: "rnone" }, {}, {
                    default: () => {
                      return `None`;
                    }
                  })}</div>`;
                }
              }
            )}</div> <hr> <p class="font-medium">Default Theme
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
                    )}`;
                  }
                })} ${validate_component(TooltipContent, "Tooltip.Content").$$render($$result, { class: "max-w-md" }, {}, {
                  default: () => {
                    return `<div class="flex items-center justify-center rounded border bg-gray-800 px-2 py-1.5 text-xs font-medium text-gray-300 shadow-popover outline-none" data-svelte-h="svelte-1pcgsab">Choose the default theme for the site. You can choose between light, dark, or system.</div>`;
                  }
                })}`;
              }
            })}</p> <div class="flex">${validate_component(Radio_group, "RadioGroup.Root").$$render(
              $$result,
              {
                onValueChange: (e) => themeData.theme = e,
                value: themeData.theme
              },
              {
                value: ($$value) => {
                  themeData.theme = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `<div class="flex items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render($$result, { value: "none", id: "none_theme" }, {}, {})} ${validate_component(Label, "Label").$$render($$result, { for: "none_theme" }, {}, {
                    default: () => {
                      return `None`;
                    }
                  })}</div> <div class="flex items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render($$result, { value: "light", id: "light_theme" }, {}, {})} ${validate_component(Label, "Label").$$render($$result, { for: "light_theme" }, {}, {
                    default: () => {
                      return `Light`;
                    }
                  })}</div> <div class="flex items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render($$result, { value: "dark", id: "dark_theme" }, {}, {})} ${validate_component(Label, "Label").$$render($$result, { for: "dark_theme" }, {}, {
                    default: () => {
                      return `Dark`;
                    }
                  })}</div> <div class="flex items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render($$result, { value: "system", id: "system_theme" }, {}, {})} ${validate_component(Label, "Label").$$render($$result, { for: "system_theme" }, {}, {
                    default: () => {
                      return `System`;
                    }
                  })}</div>`;
                }
              }
            )}</div> <p class="font-medium"><label><input type="checkbox" ${themeData.themeToggle === "YES" ? "checked" : ""}>
          Let Users toggle theme between light and dark</label></p> <hr> <p class="font-medium" data-svelte-h="svelte-1y0m13">Monitor Style</p> <div class="flex gap-x-24">${validate_component(Radio_group, "RadioGroup.Root").$$render(
              $$result,
              {
                onValueChange: (e) => themeData.barStyle = e,
                value: themeData.barStyle
              },
              {
                value: ($$value) => {
                  themeData.barStyle = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `<p class="text-sm font-medium text-muted-foreground">Status bar
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
                          )}`;
                        }
                      })} ${validate_component(TooltipContent, "Tooltip.Content").$$render($$result, { class: "max-w-md" }, {}, {
                        default: () => {
                          return `<div class="flex items-center justify-center rounded border bg-gray-800 px-2 py-1.5 text-xs font-medium text-gray-300 shadow-popover outline-none" data-svelte-h="svelte-14rq7gg">Choose the style for the monitor. You can choose between partial or full.</div>`;
                        }
                      })}`;
                    }
                  })}</p> <div class="flex items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render($$result, { value: "PARTIAL", id: "barStylePARTIAL" }, {}, {})} ${validate_component(Label, "Label").$$render($$result, { for: "barStylePARTIAL" }, {}, {
                    default: () => {
                      return `PARTIAL`;
                    }
                  })}</div> <div class="flex items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render($$result, { value: "FULL", id: "barStyleFULL" }, {}, {})} ${validate_component(Label, "Label").$$render($$result, { for: "barStyleFULL" }, {}, {
                    default: () => {
                      return `FULL`;
                    }
                  })}</div>`;
                }
              }
            )} ${validate_component(Radio_group, "RadioGroup.Root").$$render(
              $$result,
              {
                onValueChange: (e) => themeData.barRoundness = e,
                value: themeData.barRoundness
              },
              {
                value: ($$value) => {
                  themeData.barRoundness = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `<p class="text-sm font-medium text-muted-foreground">Roundness
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
                          )}`;
                        }
                      })} ${validate_component(TooltipContent, "Tooltip.Content").$$render($$result, { class: "max-w-md" }, {}, {
                        default: () => {
                          return `<div class="flex items-center justify-center rounded border bg-gray-800 px-2 py-1.5 text-xs font-medium text-gray-300 shadow-popover outline-none" data-svelte-h="svelte-1q71cn9">Choose the roundness for the monitor. You can choose between rounded or sharp.</div>`;
                        }
                      })}`;
                    }
                  })}</p> <div class="flex items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render($$result, { value: "SHARP", id: "barRoundnessSHARP" }, {}, {})} ${validate_component(Label, "Label").$$render($$result, { for: "barRoundnessSHARP" }, {}, {
                    default: () => {
                      return `SHARP`;
                    }
                  })}</div> <div class="flex items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render(
                    $$result,
                    {
                      value: "ROUNDED",
                      id: "barRoundnessRound"
                    },
                    {},
                    {}
                  )} ${validate_component(Label, "Label").$$render($$result, { for: "barRoundnessRound" }, {}, {
                    default: () => {
                      return `ROUNDED`;
                    }
                  })}</div>`;
                }
              }
            )} ${validate_component(Radio_group, "RadioGroup.Root").$$render(
              $$result,
              {
                onValueChange: (e) => themeData.summaryStyle = e,
                value: themeData.summaryStyle
              },
              {
                value: ($$value) => {
                  themeData.summaryStyle = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `<p class="text-sm font-medium text-muted-foreground">Summary Type
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
                          )}`;
                        }
                      })} ${validate_component(TooltipContent, "Tooltip.Content").$$render($$result, { class: "max-w-md" }, {}, {
                        default: () => {
                          return `<div class="flex items-center justify-center rounded border bg-gray-800 px-2 py-1.5 text-xs font-medium text-gray-300 shadow-popover outline-none" data-svelte-h="svelte-11mwlu2">Choose the summary type for the monitor. You can choose between current or day.</div>`;
                        }
                      })}`;
                    }
                  })}</p> <div class="flex items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render($$result, { value: "CURRENT", id: "summaryStyle1" }, {}, {})} ${validate_component(Label, "Label").$$render($$result, { for: "summaryStyle1" }, {}, {
                    default: () => {
                      return `CURRENT`;
                    }
                  })}</div> <div class="flex items-center space-x-2">${validate_component(Radio_group_item, "RadioGroup.Item").$$render($$result, { value: "DAY", id: "summaryStyle2" }, {}, {})} ${validate_component(Label, "Label").$$render($$result, { for: "summaryStyle2" }, {}, {
                    default: () => {
                      return `DAY`;
                    }
                  })}</div>`;
                }
              }
            )}</div> <hr> <div data-svelte-h="svelte-1cce5hx"><p class="font-medium">Status Colors</p> <p class="text-xs font-semibold text-muted-foreground">Choose the colors for the monitor. You can choose between UP, DEGRADED, DOWN and MAINTENANCE.</p></div> <div class="flex w-full flex-row justify-start gap-x-8"><div class="relative"><div style="display: contents; --input-size:16px;">${validate_component(ColorPicker, "ColorPicker").$$render(
              $$result,
              {
                position: "responsive",
                isAlpha: false,
                isDark: $mode == "dark",
                isTextInput: true,
                label: "UP",
                hex: themeData.colorsJ.UP
              },
              {
                hex: ($$value) => {
                  themeData.colorsJ.UP = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div></div> <div class="relative"><div style="display: contents; --input-size:16px;">${validate_component(ColorPicker, "ColorPicker").$$render(
              $$result,
              {
                position: "responsive",
                isAlpha: false,
                isDark: $mode == "dark",
                isTextInput: true,
                label: "DEGRADED",
                hex: themeData.colorsJ.DEGRADED
              },
              {
                hex: ($$value) => {
                  themeData.colorsJ.DEGRADED = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div></div> <div class="relative"><div style="display: contents; --input-size:16px;">${validate_component(ColorPicker, "ColorPicker").$$render(
              $$result,
              {
                position: "responsive",
                isAlpha: false,
                isDark: $mode == "dark",
                isTextInput: true,
                label: "DOWN",
                hex: themeData.colorsJ.DOWN
              },
              {
                hex: ($$value) => {
                  themeData.colorsJ.DOWN = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div></div> <div class="relative"><div style="display: contents; --input-size:16px;">${validate_component(ColorPicker, "ColorPicker").$$render(
              $$result,
              {
                position: "responsive",
                isAlpha: false,
                isDark: $mode == "dark",
                isTextInput: true,
                label: "MAINTENANCE",
                hex: themeData.colorsJ.MAINTENANCE
              },
              {
                hex: ($$value) => {
                  themeData.colorsJ.MAINTENANCE = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div></div></div> <hr> <p class="font-medium">Font
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
                    )}`;
                  }
                })} ${validate_component(TooltipContent, "Tooltip.Content").$$render($$result, { class: "max-w-md" }, {}, {
                  default: () => {
                    return `<div class="flex items-center justify-center rounded border bg-gray-800 px-2 py-1.5 text-xs font-medium text-gray-300 shadow-popover outline-none" data-svelte-h="svelte-11l0qa5">Choose the font for the monitor. You can choose the font URL and font family name.</div>`;
                  }
                })}`;
              }
            })}</p> <div class="flex w-full flex-row justify-evenly gap-2"><div class="w-full">${validate_component(Label, "Label").$$render(
              $$result,
              {
                for: "cssSrc",
                class: "text-sm text-muted-foreground"
              },
              {},
              {
                default: () => {
                  return `Font URL`;
                }
              }
            )} ${validate_component(Input, "Input").$$render(
              $$result,
              {
                class: "mt-2",
                type: "text",
                id: "cssSrc",
                placeholder: "https://fonts.bunny.net/css?family=lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap",
                value: themeData.fontJ.cssSrc
              },
              {
                value: ($$value) => {
                  themeData.fontJ.cssSrc = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div></div> <div class="flex w-full flex-row justify-start gap-2"><div class="w-48">${validate_component(Label, "Label").$$render(
              $$result,
              {
                for: "fontName",
                class: "text-sm text-muted-foreground"
              },
              {},
              {
                default: () => {
                  return `Font Family Name`;
                }
              }
            )} ${validate_component(Input, "Input").$$render(
              $$result,
              {
                class: "mt-2",
                type: "text",
                id: "fontName",
                placeholder: "Lato",
                value: themeData.fontJ.family
              },
              {
                value: ($$value) => {
                  themeData.fontJ.family = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div></div> <p class="text-xs text-muted-foreground" data-svelte-h="svelte-1ojz8yy">Want to upload and use custom font? Read more about it <a href="https://kener.ing/docs/custom-fonts/" class="text-card-foreground" target="_blank">here</a>.</p> <hr> <p class="font-medium" data-svelte-h="svelte-1kqi1rc">Custom CSS</p> <div class="flex w-full flex-row justify-start gap-2"><div class="w-full">${validate_component(Label, "Label").$$render(
              $$result,
              {
                for: "customCSS",
                class: "text-sm text-muted-foreground"
              },
              {},
              {
                default: () => {
                  return `You can add custom CSS to style your site. Do not include style tags. Go to <a href="https://kener.ing/docs/custom-js-css-guide#grid-layout" class="text-card-foreground" target="_blank" data-svelte-h="svelte-fvdm0l">this link</a> to learn more about it.`;
                }
              }
            )} <div class="overflow-hidden rounded-md">${validate_component(CodeMirror, "CodeMirror").$$render(
              $$result,
              {
                lang: css(),
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
                value: themeData.customCSS
              },
              {
                value: ($$value) => {
                  themeData.customCSS = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div></div></div> <hr> <div class="flex w-full justify-end gap-x-2">${``} ${validate_component(Button, "Button").$$render(
              $$result,
              {
                type: "submit",
                disabled: formState === "loading"
              },
              {},
              {
                default: () => {
                  return `Save Theme Settings
          ${``}`;
                }
              }
            )}</div></form>`;
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
      href: "https://kener.ing/docs/theme",
      class: " text-sm"
    },
    {},
    {
      default: () => {
        return `Documentation ${validate_component(ExternalLink, "ExternalLink").$$render($$result, { size: "12", class: "ml-1" }, {}, {})}`;
      }
    }
  )}</div> ${validate_component(ThemeInfo, "ThemeInfo").$$render($$result, { data }, {}, {})}</div>`;
});
export {
  Page as default
};
