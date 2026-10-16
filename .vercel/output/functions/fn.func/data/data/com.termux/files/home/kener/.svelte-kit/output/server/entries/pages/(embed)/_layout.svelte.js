import { c as create_ssr_component, a as subscribe, e as escape, d as add_attribute, b as each, v as validate_component } from "../../../chunks/ssr.js";
/* empty css                     */import "../../../chunks/index3.js";
import "dequal";
import "clsx";
import { b as base } from "../../../chunks/paths.js";
import { d as derivedMode } from "../../../chunks/stores2.js";
import { M as Mode_watcher } from "../../../chunks/mode-watcher.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-1lxcrua{font-family:var(--font-family)}main.svelte-1lxcrua{background-color:var(--bg-custom)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_mode;
  $$unsubscribe_mode = subscribe(derivedMode, (value) => value);
  let { data } = $$props;
  let defaultLocaleKey = data.selectedLang;
  data.site.theme;
  const allLocales = data.site.i18n?.locales.filter((locale) => locale.selected === true);
  if (!allLocales)
    ;
  else {
    allLocales.find((locale) => locale.code === defaultLocaleKey).name;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_mode();
  return `${$$result.head += `<!-- HEAD_svelte-354lw2_START -->${$$result.title = `<title>${escape(data.site.title)}</title>`, ""}${data.site.favicon && data.site.favicon[0] == "/" ? `<link rel="icon" id="kener-app-favicon" href="${escape(base, true) + escape(data.site.favicon, true)}" class="svelte-1lxcrua">` : `${data.site.favicon ? `<link rel="icon" id="kener-app-favicon"${add_attribute("href", data.site.favicon, 0)} class="svelte-1lxcrua">` : ``}`}<link${add_attribute("href", data.site.font.cssSrc, 0)} rel="stylesheet" class="svelte-1lxcrua">${each(Object.entries(data.site.metaTags), ([key, value]) => {
    return `<meta${add_attribute("name", key, 0)}${add_attribute("content", value, 0)} class="svelte-1lxcrua">`;
  })}<!-- HEAD_svelte-354lw2_END -->`, ""} ${validate_component(Mode_watcher, "ModeWatcher").$$render($$result, {}, {}, {})} <main style="${"--font-family: " + escape(data.site.font.family, true) + "; --bg-custom: " + escape(data.bgc, true) + "; --up-color: " + escape(data.site.colors.UP, true) + "; --down-color: " + escape(data.site.colors.DOWN, true) + "; --degraded-color: " + escape(data.site.colors.DEGRADED, true)}" class="svelte-1lxcrua"><div class=" svelte-1lxcrua">${slots.default ? slots.default({}) : ``}</div> </main>`;
});
export {
  Layout as default
};
