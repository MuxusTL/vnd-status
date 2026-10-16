import { c as create_ssr_component, a as subscribe, d as add_attribute } from "./ssr.js";
import { u as userPrefersMode, t as themeStorageKey, m as modeStorageKey, a as disableTransitions, b as themeColors, c as darkClassNames, l as lightClassNames } from "./stores2.js";
function setMode(mode) {
  userPrefersMode.set(mode);
}
function defineConfig(config) {
  return config;
}
function setInitialMode({ defaultMode, themeColors: themeColors2, darkClassNames: darkClassNames2 = ["dark"], lightClassNames: lightClassNames2 = [], defaultTheme = "" }) {
  const rootEl = document.documentElement;
  const mode = localStorage.getItem("mode-watcher-mode") || defaultMode;
  const theme = localStorage.getItem("mode-watcher-theme") || defaultTheme;
  const light = mode === "light" || mode === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (light) {
    if (darkClassNames2.length)
      rootEl.classList.remove(...darkClassNames2);
    if (lightClassNames2.length)
      rootEl.classList.add(...lightClassNames2);
  } else {
    if (lightClassNames2.length)
      rootEl.classList.remove(...lightClassNames2);
    if (darkClassNames2.length)
      rootEl.classList.add(...darkClassNames2);
  }
  rootEl.style.colorScheme = light ? "light" : "dark";
  if (themeColors2) {
    const themeMetaEl = document.querySelector('meta[name="theme-color"]');
    if (themeMetaEl) {
      themeMetaEl.setAttribute("content", mode === "light" ? themeColors2.light : themeColors2.dark);
    }
  }
  if (theme) {
    rootEl.setAttribute("data-theme", theme);
    localStorage.setItem("mode-watcher-theme", theme);
  }
  localStorage.setItem("mode-watcher-mode", mode);
}
const Mode_watcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let trueNonce;
  let $$unsubscribe_themeStorageKeyStore;
  let $$unsubscribe_modeStorageKeyStore;
  $$unsubscribe_themeStorageKeyStore = subscribe(themeStorageKey, (value) => value);
  $$unsubscribe_modeStorageKeyStore = subscribe(modeStorageKey, (value) => value);
  let { track = true } = $$props;
  let { defaultMode = "system" } = $$props;
  let { themeColors: themeColors$1 = void 0 } = $$props;
  let { disableTransitions: disableTransitions$1 = true } = $$props;
  let { darkClassNames: darkClassNames$1 = ["dark"] } = $$props;
  let { lightClassNames: lightClassNames$1 = [] } = $$props;
  let { defaultTheme = "" } = $$props;
  let { nonce = "" } = $$props;
  let { themeStorageKey: themeStorageKey$1 = "mode-watcher-theme" } = $$props;
  let { modeStorageKey: modeStorageKey$1 = "mode-watcher-mode" } = $$props;
  const initConfig = defineConfig({
    defaultMode,
    themeColors: themeColors$1,
    darkClassNames: darkClassNames$1,
    lightClassNames: lightClassNames$1,
    defaultTheme,
    modeStorageKey: modeStorageKey$1,
    themeStorageKey: themeStorageKey$1
  });
  if ($$props.track === void 0 && $$bindings.track && track !== void 0)
    $$bindings.track(track);
  if ($$props.defaultMode === void 0 && $$bindings.defaultMode && defaultMode !== void 0)
    $$bindings.defaultMode(defaultMode);
  if ($$props.themeColors === void 0 && $$bindings.themeColors && themeColors$1 !== void 0)
    $$bindings.themeColors(themeColors$1);
  if ($$props.disableTransitions === void 0 && $$bindings.disableTransitions && disableTransitions$1 !== void 0)
    $$bindings.disableTransitions(disableTransitions$1);
  if ($$props.darkClassNames === void 0 && $$bindings.darkClassNames && darkClassNames$1 !== void 0)
    $$bindings.darkClassNames(darkClassNames$1);
  if ($$props.lightClassNames === void 0 && $$bindings.lightClassNames && lightClassNames$1 !== void 0)
    $$bindings.lightClassNames(lightClassNames$1);
  if ($$props.defaultTheme === void 0 && $$bindings.defaultTheme && defaultTheme !== void 0)
    $$bindings.defaultTheme(defaultTheme);
  if ($$props.nonce === void 0 && $$bindings.nonce && nonce !== void 0)
    $$bindings.nonce(nonce);
  if ($$props.themeStorageKey === void 0 && $$bindings.themeStorageKey && themeStorageKey$1 !== void 0)
    $$bindings.themeStorageKey(themeStorageKey$1);
  if ($$props.modeStorageKey === void 0 && $$bindings.modeStorageKey && modeStorageKey$1 !== void 0)
    $$bindings.modeStorageKey(modeStorageKey$1);
  {
    disableTransitions.set(disableTransitions$1);
  }
  {
    themeColors.set(themeColors$1);
  }
  {
    darkClassNames.set(darkClassNames$1);
  }
  {
    lightClassNames.set(lightClassNames$1);
  }
  {
    modeStorageKey.set(modeStorageKey$1);
  }
  {
    themeStorageKey.set(themeStorageKey$1);
  }
  trueNonce = typeof window === "undefined" ? nonce : "";
  $$unsubscribe_themeStorageKeyStore();
  $$unsubscribe_modeStorageKeyStore();
  return `${$$result.head += `<!-- HEAD_svelte-1nen96w_START -->${themeColors$1 ? `   <meta name="theme-color"${add_attribute("content", themeColors$1.dark, 0)}>` : ``}${trueNonce ? ` <!-- HTML_TAG_START -->${`<script nonce=${trueNonce}>(` + setInitialMode.toString() + `)(` + JSON.stringify(initConfig) + `);<\/script>`}<!-- HTML_TAG_END -->` : ` <!-- HTML_TAG_START -->${`<script>(` + setInitialMode.toString() + `)(` + JSON.stringify(initConfig) + `);<\/script>`}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1nen96w_END -->`, ""}`;
});
export {
  Mode_watcher as M,
  setMode as s
};
