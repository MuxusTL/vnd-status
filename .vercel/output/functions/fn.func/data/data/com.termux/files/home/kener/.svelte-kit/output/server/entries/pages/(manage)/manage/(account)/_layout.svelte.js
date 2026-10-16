import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
/* empty css                           *//* empty css                            */import { b as base } from "../../../../../chunks/paths.js";
import { s as setMode, M as Mode_watcher } from "../../../../../chunks/mode-watcher.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  setMode("dark");
  return `${validate_component(Mode_watcher, "ModeWatcher").$$render($$result, {}, {}, {})} ${$$result.head += `<!-- HEAD_svelte-1jvygzj_START --><meta name="description" content="Set up Kener"><meta name="robots" content="noindex"><link rel="icon" href="${escape(base, true) + "/logo96.png"}"><!-- HEAD_svelte-1jvygzj_END -->`, ""} <main class="setup">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
