import { c as create_ssr_component, a as subscribe, l as compute_rest_props, p as spread, q as escape_object, v as validate_component, e as escape, d as add_attribute, b as each } from "../../../chunks/ssr.js";
/* empty css                     */import { s as setCtx, g as getCtx, a as getAttrs } from "../../../chunks/index3.js";
import { R as Root$1, T as Trigger$1, D as Dropdown_menu_content, G as Group } from "../../../chunks/index5.js";
import { b as base } from "../../../chunks/paths.js";
import { G as Gmi } from "../../../chunks/gmi.js";
import { B as Button } from "../../../chunks/button.js";
import { M as Menu } from "../../../chunks/menu.js";
import { D as Dropdown_menu_item } from "../../../chunks/dropdown-menu-item.js";
import { I as Input } from "../../../chunks/input.js";
import "dequal";
import { d as derived } from "../../../chunks/index2.js";
import { c as createDispatcher } from "../../../chunks/events.js";
import "clsx";
import { d as derivedMode } from "../../../chunks/stores2.js";
import { M as Mode_watcher } from "../../../chunks/mode-watcher.js";
import { l } from "../../../chunks/client.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { c as cn, f as flyAndScale } from "../../../chunks/utils.js";
import { S as Sun, M as Moon } from "../../../chunks/moon.js";
const Popover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $idValues, $$unsubscribe_idValues;
  let { positioning = void 0 } = $$props;
  let { arrowSize = void 0 } = $$props;
  let { disableFocusTrap = void 0 } = $$props;
  let { closeOnEscape = void 0 } = $$props;
  let { closeOnOutsideClick = void 0 } = $$props;
  let { preventScroll = void 0 } = $$props;
  let { portal = void 0 } = $$props;
  let { open = void 0 } = $$props;
  let { onOpenChange = void 0 } = $$props;
  let { openFocus = void 0 } = $$props;
  let { closeFocus = void 0 } = $$props;
  const { updateOption, states: { open: localOpen }, ids } = setCtx({
    positioning,
    arrowSize,
    disableFocusTrap,
    closeOnEscape,
    closeOnOutsideClick,
    preventScroll,
    portal,
    defaultOpen: open,
    openFocus,
    closeFocus,
    onOpenChange: ({ next }) => {
      if (open !== next) {
        onOpenChange?.(next);
        open = next;
      }
      return next;
    }
  });
  const idValues = derived([ids.content, ids.trigger], ([$contentId, $triggerId]) => ({ content: $contentId, trigger: $triggerId }));
  $$unsubscribe_idValues = subscribe(idValues, (value) => $idValues = value);
  if ($$props.positioning === void 0 && $$bindings.positioning && positioning !== void 0)
    $$bindings.positioning(positioning);
  if ($$props.arrowSize === void 0 && $$bindings.arrowSize && arrowSize !== void 0)
    $$bindings.arrowSize(arrowSize);
  if ($$props.disableFocusTrap === void 0 && $$bindings.disableFocusTrap && disableFocusTrap !== void 0)
    $$bindings.disableFocusTrap(disableFocusTrap);
  if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0)
    $$bindings.closeOnEscape(closeOnEscape);
  if ($$props.closeOnOutsideClick === void 0 && $$bindings.closeOnOutsideClick && closeOnOutsideClick !== void 0)
    $$bindings.closeOnOutsideClick(closeOnOutsideClick);
  if ($$props.preventScroll === void 0 && $$bindings.preventScroll && preventScroll !== void 0)
    $$bindings.preventScroll(preventScroll);
  if ($$props.portal === void 0 && $$bindings.portal && portal !== void 0)
    $$bindings.portal(portal);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.onOpenChange === void 0 && $$bindings.onOpenChange && onOpenChange !== void 0)
    $$bindings.onOpenChange(onOpenChange);
  if ($$props.openFocus === void 0 && $$bindings.openFocus && openFocus !== void 0)
    $$bindings.openFocus(openFocus);
  if ($$props.closeFocus === void 0 && $$bindings.closeFocus && closeFocus !== void 0)
    $$bindings.closeFocus(closeFocus);
  open !== void 0 && localOpen.set(open);
  {
    updateOption("positioning", positioning);
  }
  {
    updateOption("arrowSize", arrowSize);
  }
  {
    updateOption("disableFocusTrap", disableFocusTrap);
  }
  {
    updateOption("closeOnEscape", closeOnEscape);
  }
  {
    updateOption("closeOnOutsideClick", closeOnOutsideClick);
  }
  {
    updateOption("preventScroll", preventScroll);
  }
  {
    updateOption("portal", portal);
  }
  {
    updateOption("openFocus", openFocus);
  }
  {
    updateOption("closeFocus", closeFocus);
  }
  $$unsubscribe_idValues();
  return `${slots.default ? slots.default({ ids: $idValues }) : ``}`;
});
const PopoverContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "id"
  ]);
  let $content, $$unsubscribe_content;
  let $open, $$unsubscribe_open;
  let { transition = void 0 } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { inTransition = void 0 } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = void 0 } = $$props;
  let { outTransitionConfig = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  const { elements: { content }, states: { open }, ids } = getCtx();
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
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
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  {
    if (id) {
      ids.content.set(id);
    }
  }
  builder = $content;
  $$unsubscribe_content();
  $$unsubscribe_open();
  return `${asChild && $open ? `${slots.default ? slots.default({ builder, attrs }) : ``}` : `${transition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps), escape_object(attrs)], {})}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>` : `${inTransition && outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps), escape_object(attrs)], {})}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>` : `${inTransition && $open ? `<div${spread(
    [
      escape_object(builder),
      escape_object($$restProps),
      escape_object(attrs)
    ],
    {}
  )}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>` : `${outTransition && $open ? `<div${spread(
    [
      escape_object(builder),
      escape_object($$restProps),
      escape_object(attrs)
    ],
    {}
  )}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>` : `${$open ? `<div${spread(
    [
      escape_object(builder),
      escape_object($$restProps),
      escape_object(attrs)
    ],
    {}
  )}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>` : ``}`}`}`}`}`}`;
});
const PopoverTrigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "id"]);
  let $trigger, $$unsubscribe_trigger;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  const { elements: { trigger }, ids } = getCtx();
  $$unsubscribe_trigger = subscribe(trigger, (value) => $trigger = value);
  createDispatcher();
  const attrs = getAttrs("trigger");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  {
    if (id) {
      ids.trigger.set(id);
    }
  }
  builder = $trigger;
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
const Languages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "m5 8 6 6" }],
    ["path", { "d": "m4 14 6-6 2-3" }],
    ["path", { "d": "M2 5h12" }],
    ["path", { "d": "M7 2h1" }],
    ["path", { "d": "m22 22-5-10-5 10" }],
    ["path", { "d": "M14 18h6" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "languages" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Languages$1 = Languages;
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let defaultPattern = data.site?.pattern || "squares";
  let allPets = [
    { url: base + "/chicken.gif", bottom: "-5" },
    { url: base + "/dog.gif", bottom: "-17" },
    {
      url: base + "/cockatiel.gif",
      bottom: "-10"
    },
    { url: base + "/crab.gif", bottom: "-20" },
    { url: base + "/fox.gif", bottom: "-9" },
    { url: base + "/horse.gif", bottom: "-11" },
    { url: base + "/panda.gif", bottom: "0" },
    { url: base + "/totoro.gif", bottom: "-27" },
    { url: base + "/rabbit.gif", bottom: "0" },
    { url: base + "/duck.gif", bottom: "-5" },
    { url: base + "/snake.gif", bottom: "0" }
  ];
  let randomPet = allPets[Math.floor(Math.random() * allPets.length)];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${defaultPattern == "pets" && !!randomPet ? `<div class="pets-pattern" style="${"background-image: url(" + escape(randomPet.url, true) + ");bottom: " + escape(randomPet.bottom, true) + "px"}"></div>` : `<div class="${escape(defaultPattern, true) + "-pattern"}"></div>`} <header class="sticky top-0 z-50 mx-auto px-3 md:mt-3"><div class="container flex h-14 max-w-[820px] items-center justify-between border border-border/70 bg-card/80 px-4 backdrop-blur-xl shadow-md rounded-2xl transition-all"><a rel="external"${add_attribute("href", data.site.home ? data.site.home : base, 0)} class="mr-3 sm:mr-6 flex min-w-0 shrink-0 items-center space-x-2.5 whitespace-nowrap">${data.site.logo ? `<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-secondary/50 p-1 shadow-sm">${validate_component(Gmi, "GMI").$$render(
    $$result,
    {
      src: data.site.logo,
      classList: "h-6 w-6 object-contain",
      alt: data.site.title,
      srcset: ""
    },
    {},
    {}
  )}</div>` : ``} ${data.site.siteName ? `<span class="inline-block whitespace-nowrap text-[15px] font-bold tracking-tight text-foreground lg:text-base font-['Space_Grotesk']">${escape(data.site.siteName)}</span>` : ``}</a> <div class="flex items-center justify-end ml-auto shrink-0">${data.site.nav ? `<nav class="hidden flex-nowrap items-center gap-1 text-sm font-medium md:flex">${each(data.site.nav, (navItem) => {
    return `<a rel="external"${add_attribute("href", navItem.url, 0)} class="flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold text-muted-foreground transition-all ease-linear hover:bg-secondary hover:text-foreground">${navItem.iconURL ? `${validate_component(Gmi, "GMI").$$render(
      $$result,
      {
        src: navItem.iconURL,
        classList: "mr-1.5 inline h-3.5 w-3.5",
        alt: navItem.name
      },
      {},
      {}
    )}` : ``} <span>${escape(navItem.name)}</span> </a>`;
  })}</nav> <div class="flex md:hidden">${validate_component(Root$1, "DropdownMenu.Root").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Trigger$1, "DropdownMenu.Trigger").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "outline",
              size: "sm",
              class: "h-8 w-8 rounded-full border-border/60 bg-secondary/50 p-0 text-muted-foreground hover:bg-secondary hover:text-foreground"
            },
            {},
            {
              default: () => {
                return `${validate_component(Menu, "Menu").$$render($$result, { size: 14 }, {}, {})}`;
              }
            }
          )}`;
        }
      })} ${validate_component(Dropdown_menu_content, "DropdownMenu.Content").$$render(
        $$result,
        {
          class: "rounded-xl border border-border bg-popover shadow-xl"
        },
        {},
        {
          default: () => {
            return `${each(data.site.nav, (navItem) => {
              return `${validate_component(Group, "DropdownMenu.Group").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Dropdown_menu_item, "DropdownMenu.Item").$$render($$result, { class: "text-xs font-medium" }, {}, {
                    default: () => {
                      return `<a rel="external"${add_attribute("href", navItem.url, 0)} class="w-full">${escape(navItem.name)}</a> `;
                    }
                  })} `;
                }
              })}`;
            })}`;
          }
        }
      )}`;
    }
  })}</div>` : ``}</div></div></header>`;
});
const theme = "";
const vnd = "";
const Globe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    [
      "path",
      {
        "d": "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
      }
    ],
    ["path", { "d": "M2 12h20" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "globe" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Globe$1 = Globe;
const Popover_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "transition", "transitionConfig"]);
  let { class: className = void 0 } = $$props;
  let { transition = flyAndScale } = $$props;
  let { transitionConfig = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  return `${validate_component(PopoverContent, "PopoverPrimitive.Content").$$render(
    $$result,
    Object.assign(
      {},
      { transition },
      { transitionConfig },
      {
        class: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none", className)
      },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const Root = Popover;
const Trigger = PopoverTrigger;
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-181tmcj{font-family:var(--font-family)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_mode;
  $$unsubscribe_mode = subscribe(derivedMode, (value) => value);
  let { data } = $$props;
  let defaultLocaleKey = data.selectedLang;
  let allTimezones = Intl.supportedValuesOf("timeZone");
  let searchTzValue = "";
  data.site.theme;
  const allLocales = data.site.i18n?.locales.filter((locale) => locale.selected === true);
  if (!allLocales)
    ;
  else {
    let lclFi = allLocales.find((locale) => locale.code === defaultLocaleKey);
    if (lclFi) {
      lclFi.name;
    }
  }
  let myTimezone = data.localTz;
  let customCSS = `<style>${data.site.customCSS}</style>`;
  if (!!data.site.favicon && !data.site.favicon.startsWith("http"))
    data.site.favicon = `${base}${data.site.favicon}`;
  let kenerTheme = data.site.kenerTheme || "default";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_mode();
  return `${$$result.head += `<!-- HEAD_svelte-1twej3j_START --><script src="${escape(base, true) + "/api/js/capture.js"}" class="svelte-181tmcj" data-svelte-h="svelte-13r5nqb"><\/script>${data.site.favicon ? `<link rel="icon" id="kener-app-favicon"${add_attribute("href", data.site.favicon, 0)} class="svelte-181tmcj">` : ``}${!!data.site.font.cssSrc ? `<link${add_attribute("href", data.site.font.cssSrc, 0)} rel="stylesheet" class="svelte-181tmcj">` : ``}${!!data.site.customCSS ? `<!-- HTML_TAG_START -->${customCSS}<!-- HTML_TAG_END -->` : ``}<!-- HEAD_svelte-1twej3j_END -->`, ""} ${validate_component(Mode_watcher, "ModeWatcher").$$render($$result, {}, {}, {})} <main style="${"--font-family: " + escape(data.site.font.family, true) + "; --bg-custom: " + escape(data.bgc, true) + "; --up-color: " + escape(data.site.colors.UP, true) + "; --down-color: " + escape(data.site.colors.DOWN, true) + "; --degraded-color: " + escape(data.site.colors.DEGRADED, true) + "; --maintenance-color: " + escape(data.site.colors.MAINTENANCE, true) + ";"}" class="${"kener-theme-" + escape(kenerTheme, true) + " svelte-181tmcj"}">${validate_component(Nav, "Nav").$$render($$result, { data }, {}, {})} <div class="main-content min-h-[70vh] px-3.5 sm:px-6 svelte-181tmcj">${slots.default ? slots.default({}) : ``}</div> ${!!data.site.footerHTML ? `<footer class="kener-footer z-10 py-6 md:px-8 md:py-0 svelte-181tmcj"><!-- HTML_TAG_START -->${data.site.footerHTML}<!-- HTML_TAG_END --></footer>` : ``} <div class="fixed bottom-4 right-4 z-30 floating-dock flex flex-row items-center gap-1 rounded-full border border-border/80 bg-card/85 p-1 backdrop-blur-xl shadow-lg svelte-181tmcj">${!!data.site.tzToggle && data.site.tzToggle === "YES" ? `${validate_component(Root, "Popover.Root").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Trigger, "Popover.Trigger").$$render($$result, { asChild: true }, {}, {
        default: ({ builder }) => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              builders: [builder],
              variant: "ghost",
              size: "icon",
              class: "flex h-8 w-8 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            },
            {},
            {
              default: () => {
                return `${validate_component(Globe$1, "Globe").$$render($$result, { class: "h-4 w-4" }, {}, {})}`;
              }
            }
          )}`;
        }
      })} ${validate_component(Popover_content, "Popover.Content").$$render(
        $$result,
        {
          class: "px-0 py-2 rounded-xl border border-border bg-popover shadow-xl"
        },
        {},
        {
          default: () => {
            return `<div class="flex flex-col gap-2 svelte-181tmcj"><div class="flex px-2 pb-1 text-xs font-semibold svelte-181tmcj"><span class="flex-1 svelte-181tmcj"><!-- HTML_TAG_START -->${l(data.lang, "Timezone set to %tz", { tz: "<i>" + data.localTz + "</i>" })}<!-- HTML_TAG_END --></span></div> <div class="flex flex-col gap-2 svelte-181tmcj"><div class="border-b px-2 pb-2 svelte-181tmcj">${validate_component(Input, "Input").$$render(
              $$result,
              {
                placeholder: "Search for a timezone",
                class: "h-8 px-2 py-1 text-xs",
                value: searchTzValue
              },
              {},
              {}
            )}</div> <div class="flex h-[200px] flex-col overflow-y-auto svelte-181tmcj">${each(allTimezones, (tz) => {
              return `${tz.toLowerCase().includes(searchTzValue.toLowerCase()) ? `<div class="text-xs font-semibold svelte-181tmcj">${validate_component(Button, "Button").$$render(
                $$result,
                {
                  variant: tz === data.localTz ? "primary" : "ghost",
                  class: "h-8 w-full justify-start rounded-none text-xs " + (tz === data.localTz ? "text-background" : "text-muted-foreground")
                },
                {},
                {
                  default: () => {
                    return `${escape(tz)} `;
                  }
                }
              )} </div>` : ``}`;
            })}</div> ${myTimezone !== data.localTz ? `<div class="px-2 svelte-181tmcj">${validate_component(Button, "Button").$$render(
              $$result,
              {
                variant: "outline",
                class: "h-6 w-full bg-transparent px-2 text-xs"
              },
              {},
              {
                default: () => {
                  return `${escape(l(data.lang, "Switch to your timezone"))}`;
                }
              }
            )}</div>` : ``}</div></div>`;
          }
        }
      )}`;
    }
  })}` : ``} ${data.site.i18n && data.site.i18n.locales && allLocales.length > 1 ? `${validate_component(Root$1, "DropdownMenu.Root").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Trigger$1, "DropdownMenu.Trigger").$$render($$result, { asChild: true }, {}, {
        default: ({ builder }) => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              builders: [builder],
              variant: "ghost",
              size: "icon",
              class: "flex h-8 w-8 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            },
            {},
            {
              default: () => {
                return `${validate_component(Languages$1, "Languages").$$render($$result, { class: "h-4 w-4" }, {}, {})}`;
              }
            }
          )}`;
        }
      })} ${validate_component(Dropdown_menu_content, "DropdownMenu.Content").$$render(
        $$result,
        {
          class: "max-h-[250px] overflow-y-auto rounded-xl border border-border bg-popover shadow-xl"
        },
        {},
        {
          default: () => {
            return `${validate_component(Group, "DropdownMenu.Group").$$render($$result, {}, {}, {
              default: () => {
                return `${each(allLocales, (locale) => {
                  return `${validate_component(Dropdown_menu_item, "DropdownMenu.Item").$$render(
                    $$result,
                    {
                      class: defaultLocaleKey == locale.code ? "bg-input" : ""
                    },
                    {},
                    {
                      default: () => {
                        return `${escape(locale.name)}`;
                      }
                    }
                  )}`;
                })}`;
              }
            })}`;
          }
        }
      )}`;
    }
  })}` : ``} ${!!data.site.themeToggle && data.site.themeToggle === "YES" ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "ghost",
      size: "icon",
      class: "flex h-8 w-8 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
    },
    {},
    {
      default: () => {
        return `${validate_component(Sun, "Sun").$$render(
          $$result,
          {
            class: "h-4 w-4 rotate-0 scale-100 transition-transform duration-200 dark:-rotate-90 dark:scale-0"
          },
          {},
          {}
        )} ${validate_component(Moon, "Moon").$$render(
          $$result,
          {
            class: "absolute h-4 w-4 rotate-90 scale-0 transition-transform duration-200 dark:rotate-0 dark:scale-100"
          },
          {},
          {}
        )} <span class="sr-only svelte-181tmcj" data-svelte-h="svelte-ntgole">Toggle theme</span>`;
      }
    }
  )}` : ``}</div> ${data.isLoggedIn ? `<div class="fixed bottom-4 left-4 z-30 svelte-181tmcj" data-svelte-h="svelte-7xn6uy"><a href="${escape(base, true) + "/manage/app/site"}" rel="external" class="flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs font-semibold text-indigo-600 dark:text-indigo-300 backdrop-blur-xl shadow-lg transition-all hover:bg-indigo-500/20 hover:text-indigo-900 dark:hover:text-white hover:border-indigo-500/50 svelte-181tmcj" role="button"><span class="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400 svelte-181tmcj"></span>
        Manage</a></div>` : ``} </main>`;
});
export {
  Layout as default
};
