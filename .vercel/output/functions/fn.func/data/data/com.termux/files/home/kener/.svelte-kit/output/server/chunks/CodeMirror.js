import { c as create_ssr_component, u as createEventDispatcher, o as onDestroy, e as escape, d as add_attribute } from "./ssr.js";
import { basicSetup } from "codemirror";
import { EditorView, keymap, placeholder } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { indentWithTab } from "@codemirror/commands";
import { indentUnit } from "@codemirror/language";
/* empty css                                          */const css = {
  code: ".codemirror-wrapper.svelte-kcx0g9 .cm-focused{outline:none}.scm-waiting.svelte-kcx0g9{position:relative}.scm-waiting__loading.svelte-kcx0g9{position:absolute;top:0;left:0;bottom:0;right:0;background-color:rgba(255, 255, 255, 0.5)}.scm-loading.svelte-kcx0g9{display:flex;align-items:center;justify-content:center}.scm-loading__spinner.svelte-kcx0g9{width:1rem;height:1rem;border-radius:100%;border:solid 2px #000;border-top-color:transparent;margin-right:0.75rem;animation:svelte-kcx0g9-spin 1s linear infinite}.scm-loading__text.svelte-kcx0g9{font-family:sans-serif}.scm-pre.svelte-kcx0g9{font-size:0.85rem;font-family:monospace;tab-size:2;-moz-tab-size:2;resize:none;pointer-events:none;user-select:none;overflow:auto}@keyframes svelte-kcx0g9-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const CodeMirror = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: classes = "" } = $$props;
  let { value = "" } = $$props;
  let { basic = true } = $$props;
  let { lang = void 0 } = $$props;
  let { theme = void 0 } = $$props;
  let { extensions = [] } = $$props;
  let { useTab = true } = $$props;
  let { tabSize = 2 } = $$props;
  let { styles = void 0 } = $$props;
  let { lineWrapping = false } = $$props;
  let { editable = true } = $$props;
  let { readonly = false } = $$props;
  let { placeholder: placeholder$1 = void 0 } = $$props;
  let { nodebounce = false } = $$props;
  const is_browser = typeof window !== "undefined";
  createEventDispatcher();
  let element;
  let view;
  onDestroy(() => view?.destroy());
  function get_base_extensions(basic2, useTab2, tabSize2, lineWrapping2, placeholder2, editable2, readonly2, lang2) {
    const extensions2 = [
      indentUnit.of(" ".repeat(tabSize2)),
      EditorView.editable.of(editable2),
      EditorState.readOnly.of(readonly2)
    ];
    if (basic2)
      extensions2.push(basicSetup);
    if (useTab2)
      extensions2.push(keymap.of([indentWithTab]));
    if (placeholder2)
      extensions2.push(placeholder(placeholder2));
    if (lang2)
      extensions2.push(lang2);
    if (lineWrapping2)
      extensions2.push(EditorView.lineWrapping);
    return extensions2;
  }
  function get_theme(theme2, styles2) {
    const extensions2 = [];
    if (styles2)
      extensions2.push(EditorView.theme(styles2));
    if (theme2)
      extensions2.push(theme2);
    return extensions2;
  }
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0)
    $$bindings.class(classes);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.basic === void 0 && $$bindings.basic && basic !== void 0)
    $$bindings.basic(basic);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.extensions === void 0 && $$bindings.extensions && extensions !== void 0)
    $$bindings.extensions(extensions);
  if ($$props.useTab === void 0 && $$bindings.useTab && useTab !== void 0)
    $$bindings.useTab(useTab);
  if ($$props.tabSize === void 0 && $$bindings.tabSize && tabSize !== void 0)
    $$bindings.tabSize(tabSize);
  if ($$props.styles === void 0 && $$bindings.styles && styles !== void 0)
    $$bindings.styles(styles);
  if ($$props.lineWrapping === void 0 && $$bindings.lineWrapping && lineWrapping !== void 0)
    $$bindings.lineWrapping(lineWrapping);
  if ($$props.editable === void 0 && $$bindings.editable && editable !== void 0)
    $$bindings.editable(editable);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder$1 !== void 0)
    $$bindings.placeholder(placeholder$1);
  if ($$props.nodebounce === void 0 && $$bindings.nodebounce && nodebounce !== void 0)
    $$bindings.nodebounce(nodebounce);
  $$result.css.add(css);
  [
    ...get_base_extensions(basic, useTab, tabSize, lineWrapping, placeholder$1, editable, readonly, lang),
    ...get_theme(theme, styles),
    ...extensions
  ];
  return `${is_browser ? `<div class="${"codemirror-wrapper " + escape(classes, true) + " svelte-kcx0g9"}"${add_attribute("this", element, 0)}></div>` : `<div class="${"scm-waiting " + escape(classes, true) + " svelte-kcx0g9"}"><div class="scm-waiting__loading scm-loading svelte-kcx0g9" data-svelte-h="svelte-1pxusly"><div class="scm-loading__spinner svelte-kcx0g9"></div> <p class="scm-loading__text svelte-kcx0g9">Loading editor...</p></div> <pre class="scm-pre cm-editor svelte-kcx0g9">${escape(value)}</pre></div>`}`;
});
export {
  CodeMirror as C
};
