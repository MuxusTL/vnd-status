import { c as create_ssr_component, v as validate_component, a as subscribe, e as escape, b as each } from "../../../../../chunks/ssr.js";
/* empty css                           *//* empty css                            */import { b as base } from "../../../../../chunks/paths.js";
import { R as Root, T as Trigger, D as Dropdown_menu_content, G as Group } from "../../../../../chunks/index5.js";
import "../../../../../chunks/index3.js";
import { a as afterNavigate } from "../../../../../chunks/navigation.js";
import { p as page } from "../../../../../chunks/stores.js";
import { d as derivedMode } from "../../../../../chunks/stores2.js";
import { M as Mode_watcher } from "../../../../../chunks/mode-watcher.js";
import { B as Button } from "../../../../../chunks/button.js";
import { S as Sun, M as Moon } from "../../../../../chunks/moon.js";
import { I as Icon } from "../../../../../chunks/Icon.js";
import { D as Dropdown_menu_label, a as Dropdown_menu_separator } from "../../../../../chunks/dropdown-menu-separator.js";
import { D as Dropdown_menu_item } from "../../../../../chunks/dropdown-menu-item.js";
const Play = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["polygon", { "points": "6 3 20 12 6 21 6 3" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "play" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Play$1 = Play;
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
      }
    ],
    ["circle", { "cx": "12", "cy": "7", "r": "4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "user" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const User$1 = User;
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_mode;
  let $page, $$unsubscribe_page;
  $$unsubscribe_mode = subscribe(derivedMode, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  (/* @__PURE__ */ new Date()).getFullYear();
  let nav = [
    {
      name: "Site",
      url: `${base}/manage/app/site`,
      id: "/(manage)/manage/(app)/app/site"
    },
    {
      name: "SEO",
      url: `${base}/manage/app/seo`,
      id: "/(manage)/manage/(app)/app/seo"
    },
    {
      name: "Home",
      url: `${base}/manage/app/home`,
      id: "/(manage)/manage/(app)/app/home"
    },
    {
      name: "Theme",
      url: `${base}/manage/app/theme`,
      id: "/(manage)/manage/(app)/app/theme"
    },
    {
      name: "Monitors",
      url: `${base}/manage/app/monitors`,
      id: "/(manage)/manage/(app)/app/monitors"
    },
    {
      name: "Triggers",
      url: `${base}/manage/app/triggers`,
      id: "/(manage)/manage/(app)/app/triggers"
    },
    {
      name: "Alerts",
      url: `${base}/manage/app/alerts`,
      id: "/(manage)/manage/(app)/app/alerts"
    },
    {
      name: "Events",
      url: `${base}/manage/app/events`,
      id: "/(manage)/manage/(app)/app/events"
    },
    {
      name: "Badges",
      url: `${base}/manage/app/badges`,
      id: "/(manage)/manage/(app)/app/badges"
    },
    {
      name: "API Keys",
      url: `${base}/manage/app/api-keys`,
      id: "/(manage)/manage/(app)/app/api-keys"
    },
    {
      name: "Users",
      url: `${base}/manage/app/users`,
      id: "/(manage)/manage/(app)/app/users"
    },
    {
      name: "Subscription",
      url: `${base}/manage/app/subscriptions`,
      id: "/(manage)/manage/(app)/app/subscriptions"
    },
    {
      name: "Profile",
      url: `${base}/manage/app/profile`,
      id: "/(manage)/manage/(app)/app/profile"
    }
  ];
  let activeTab = "";
  afterNavigate((e) => {
    activeTab = e.to.route.id;
  });
  $$unsubscribe_mode();
  $$unsubscribe_page();
  return ` ${validate_component(Mode_watcher, "ModeWatcher").$$render($$result, {}, {}, {})} ${$$result.head += `<!-- HEAD_svelte-i0ajso_START -->${$$result.title = `<title>Manage Kener</title>`, ""}<meta name="description" content="Manage your Kener project"><meta name="robots" content="noindex"><link rel="icon" href="${escape(base, true) + "/logo96.png"}"><!-- HEAD_svelte-i0ajso_END -->`, ""} <header class="fixed inset-x-0 top-0 z-50 mx-auto mt-2 flex px-2"><div class="flex w-full justify-between rounded-lg border bg-card px-5 py-4"><div class="mt-2 flex gap-x-1.5" data-svelte-h="svelte-1edzddk"><img src="${escape(base, true) + "/logo.png"}" alt="Kener" class="inline h-6 w-6"> <h1 class="font-semibold">Manage Kener</h1></div> <div class="flex">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "ghost",
      size: "icon",
      class: "flex"
    },
    {},
    {
      default: () => {
        return `${validate_component(Sun, "Sun").$$render(
          $$result,
          {
            class: "h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          },
          {},
          {}
        )} ${validate_component(Moon, "Moon").$$render(
          $$result,
          {
            class: "absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          },
          {},
          {}
        )} <span class="sr-only" data-svelte-h="svelte-ntgole">Toggle theme</span>`;
      }
    }
  )} ${validate_component(Root, "DropdownMenu.Root").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Trigger, "DropdownMenu.Trigger").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Button, "Button").$$render($$result, { size: "icon", variant: "ghost" }, {}, {
            default: () => {
              return `${validate_component(User$1, "User").$$render($$result, { class: "h-4 w-4" }, {}, {})}`;
            }
          })}`;
        }
      })} ${validate_component(Dropdown_menu_content, "DropdownMenu.Content").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Group, "DropdownMenu.Group").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Dropdown_menu_label, "DropdownMenu.Label").$$render($$result, { class: "text-xs" }, {}, {
                default: () => {
                  return `My Account`;
                }
              })} ${validate_component(Dropdown_menu_separator, "DropdownMenu.Separator").$$render($$result, {}, {}, {})} ${validate_component(Dropdown_menu_item, "DropdownMenu.Item").$$render($$result, { class: "text-xs font-semibold" }, {}, {
                default: () => {
                  return `<a href="${escape(base, true) + "/manage/app/profile"}" data-svelte-h="svelte-fmso4y">Profile</a>`;
                }
              })} ${validate_component(Dropdown_menu_item, "DropdownMenu.Item").$$render($$result, { class: "text-xs font-semibold" }, {}, {
                default: () => {
                  return `<a href="${escape(base, true) + "/manage/signin/logout"}" data-svelte-h="svelte-rt42oh">Logout</a>`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })} <div class="ml-3"><a type="button" href="${escape(base, true) + "/"}" rel="external" class="flex gap-x-1 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-3.5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">${validate_component(Play$1, "Play").$$render(
    $$result,
    {
      class: "mr-1 mt-0.5 inline-block h-4 w-4"
    },
    {},
    {}
  )} <span data-svelte-h="svelte-ij6p56">Preview</span></a></div></div></div></header> <main class="manage"><div class="fixed left-2 top-[5.2rem] my-2 h-[calc(100vh-6.5rem)] w-56 rounded-lg border bg-card px-2 py-2 shadow-md"><nav class="flex flex-col justify-start gap-x-2 overflow-x-auto">${each(nav, (item) => {
    return `${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: item.id.includes(activeTab) ? "secondary" : "ghost",
        href: item.url,
        class: "justify-start "
      },
      {},
      {
        default: () => {
          return `${escape(item.name)}`;
        }
      }
    )}`;
  })}</nav></div> <div class="mx-auto my-2 w-full max-w-7xl pl-60 pr-2 pt-24">${slots.default ? slots.default({}) : ``}</div></main>  <footer class="mx-auto mt-8 w-full max-w-3xl px-4 sm:px-6 lg:px-8"><div class="border-t py-6 dark:border-neutral-700"><div class="flex flex-wrap items-center justify-between gap-2"><div><p class="text-xs text-muted-foreground">Kener.ing
          <a target="_blank" class="text-xs font-semibold text-muted-foreground hover:underline" href="${"https://kener.ing/docs/changelogs#v" + escape($page.data.kenerVersion.replaceAll(".", "-"), true)}">v${escape($page.data.kenerVersion)}</a>
          by
          <a target="_blank" class="text-xs font-semibold text-muted-foreground hover:underline" href="https://www.rajnandan.com" data-svelte-h="svelte-136n442">Raj Nandan Sharma</a></p></div>   <ul class="flex flex-wrap items-center" data-svelte-h="svelte-lj1vq7"><li class="relative inline-block pe-4 text-xs before:absolute before:end-1.5 before:top-1/2 before:size-[3px] before:-translate-y-1/2 before:rounded-full before:bg-gray-400 last:pe-0 last-of-type:before:hidden dark:text-neutral-500 dark:before:bg-neutral-600"><a target="_blank" class="text-xs font-medium text-muted-foreground hover:underline hover:decoration-1 focus:decoration-1 focus:outline-none" href="https://buymeacoffee.com/rajnandan1">Donate</a></li> <li class="relative inline-block pe-4 text-xs before:absolute before:end-1.5 before:top-1/2 before:size-[3px] before:-translate-y-1/2 before:rounded-full before:bg-gray-400 last:pe-0 last-of-type:before:hidden dark:text-neutral-500 dark:before:bg-neutral-600"><a target="_blank" class="text-xs font-medium text-muted-foreground hover:underline hover:decoration-1 focus:decoration-1 focus:outline-none" href="https://twitter.com/_rajnandan_">Contact</a></li> <li class="relative inline-block pe-4 text-xs before:absolute before:end-1.5 before:top-1/2 before:size-[3px] before:-translate-y-1/2 before:rounded-full before:bg-gray-400 last:pe-0 last-of-type:before:hidden dark:text-neutral-500 dark:before:bg-neutral-600"><a target="_blank" class="text-xs font-medium text-muted-foreground hover:underline hover:decoration-1 focus:decoration-1 focus:outline-none" href="https://discord.gg/uSTpnuK9XR">Discord</a></li> <li class="relative inline-block pe-4 text-xs before:absolute before:end-1.5 before:top-1/2 before:size-[3px] before:-translate-y-1/2 before:rounded-full before:bg-gray-400 last:pe-0 last-of-type:before:hidden dark:text-neutral-500 dark:before:bg-neutral-600"><a target="_blank" class="text-xs font-medium text-muted-foreground hover:underline hover:decoration-1 focus:decoration-1 focus:outline-none" href="https://github.com/rajnandan1/kener">Github</a></li> <li class="relative inline-block pe-4 text-xs before:absolute before:end-1.5 before:top-1/2 before:size-[3px] before:-translate-y-1/2 before:rounded-full before:bg-gray-400 last:pe-0 last-of-type:before:hidden dark:text-neutral-500 dark:before:bg-neutral-600"><a target="_blank" class="text-xs font-medium text-muted-foreground hover:underline hover:decoration-1 focus:decoration-1 focus:outline-none" href="https://kener.ing/docs/home">Documentation</a></li></ul> </div></div></footer> `;
});
export {
  Layout as default
};
