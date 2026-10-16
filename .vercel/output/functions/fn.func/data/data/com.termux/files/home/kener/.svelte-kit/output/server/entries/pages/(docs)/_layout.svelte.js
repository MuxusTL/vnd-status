import { c as create_ssr_component, v as validate_component, a as subscribe, e as escape, b as each } from "../../../chunks/ssr.js";
/* empty css                     */import "../../../chunks/index3.js";
import "../../../chunks/index4.js";
import "canvas-confetti";
import { b as base } from "../../../chunks/paths.js";
import { p as page } from "../../../chunks/stores.js";
import { M as Menu } from "../../../chunks/menu.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { X } from "../../../chunks/x.js";
const docs = "";
const Heart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "heart" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Heart$1 = Heart;
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let siteStructure = data.siteStructure;
  siteStructure.sidebar;
  data.docFilePath;
  let tableOfContents = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return ` ${$$result.head += `<!-- HEAD_svelte-11wrsdk_START --><link rel="icon" id="kener-app-favicon" href="${escape(base, true) + "/logo96.png"}"><script async src="https://www.googletagmanager.com/gtag/js?id=G-Q3MLRXCBFT" data-svelte-h="svelte-1t2vvnr"><\/script><script data-svelte-h="svelte-1noyhyp">window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-Q3MLRXCBFT");
  <\/script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css"><script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js" data-svelte-h="svelte-gsmz5d"><\/script><!-- HEAD_svelte-11wrsdk_END -->`, ""} <div class="dark"><nav class="fixed left-0 right-0 top-0 z-40 h-16 bg-card"><div class="mx-auto h-full border-b bg-card px-4 sm:px-6 lg:px-8"><div class="flex h-full items-center justify-between"> <div class="flex items-center space-x-3"><a href="/" class="flex items-center space-x-3"> <img src="https://kener.ing/logo.png" class="h-8 w-8" alt=""> <span class="text-xl font-medium" data-svelte-h="svelte-1gyyd25">Kener Documentation</span> <span class="me-2 rounded border px-2.5 py-0.5 text-xs font-medium">${escape($page.data.kenerVersion)}</span></a></div>  <div class="hidden md:block" data-svelte-h="svelte-1emcs51"><div class="flex items-center space-x-8"><a href="https://github.com/rajnandan1/kener" class="text-sm font-medium"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/rajnandan1/kener?label=Star%20Repo&amp;style=social"></a> <a href="/api-reference" class="text-sm font-medium">API Reference</a> <a href="https://github.com/rajnandan1/kener/issues" class="text-sm font-medium">Report Issue</a></div></div>  <div class="md:hidden"><button type="button" class="mt-2 hover:text-muted-foreground">${`${validate_component(Menu, "Menu").$$render($$result, { class: "h-6 w-6" }, {}, {})}`}</button></div></div></div></nav>  ${``}  <main class="dark relative z-10 min-h-screen pt-16 md:ml-72"><div class="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:px-8 md:pr-64"> <div id="donation-banner" style="display: none;" class="mb-8 rounded-lg bg-gradient-to-r from-blue-900 to-indigo-900 p-4 shadow-lg"><div class="flex items-center justify-between"><div class="flex items-center space-x-4"><div class="rounded-full bg-amber-500 p-2">${validate_component(Heart$1, "Heart").$$render($$result, { class: "h-5 w-5 text-white" }, {}, {})}</div> <div data-svelte-h="svelte-b91w99"><h3 class="text-base font-medium text-white">Support Kener Development</h3> <p class="text-sm text-blue-200">Help us keep this project running and improve it further</p></div></div> <div class="flex items-center space-x-3"><a href="https://buymeacoffee.com/rajnandan1" class="rounded-md bg-amber-500 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-amber-600" data-svelte-h="svelte-1moodo3">Sponsor</a> <button id="close-donation" class="rounded p-1 text-blue-300 hover:bg-blue-800 hover:text-white">${validate_component(X, "X").$$render($$result, { class: "h-5 w-5" }, {}, {})}</button></div></div></div> <div class="kener-md prose prose-stone max-w-none dark:prose-invert prose-code:rounded prose-code:py-[0.2rem] prose-code:font-mono prose-code:text-sm prose-code:font-normal prose-pre:bg-opacity-0 dark:prose-pre:bg-neutral-900">${slots.default ? slots.default({}) : ``}</div></div></main> ${tableOfContents.length > 0 ? `<div class="blurry-bg fixed bottom-0 right-0 top-16 z-50 hidden w-64 overflow-y-auto px-6 py-10 lg:block"><h4 class="mb-3 text-sm font-semibold uppercase tracking-wider" data-svelte-h="svelte-14tet1s">On this page</h4> <nav class="space-y-2">${each(tableOfContents, (item) => {
    return `<a href="${"#" + escape(item.id, true)}" class="${"rlink block overflow-hidden text-ellipsis whitespace-nowrap text-xs text-muted-foreground hover:underline " + escape(item.level == 3 ? "ml-4" : "", true)}">${escape(item.text)} </a>`;
  })}</nav></div>` : ``}</div>`;
});
export {
  Layout as default
};
