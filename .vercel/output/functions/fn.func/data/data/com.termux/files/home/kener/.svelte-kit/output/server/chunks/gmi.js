import { c as create_ssr_component, d as add_attribute } from "./ssr.js";
import { b as base } from "./paths.js";
const Gmi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src = "" } = $$props;
  let { alt = "GMI" } = $$props;
  let { classList = "" } = $$props;
  let { style = "" } = $$props;
  let { srcset = "" } = $$props;
  if (!src.startsWith("http"))
    src = `${base}${src}`;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.classList === void 0 && $$bindings.classList && classList !== void 0)
    $$bindings.classList(classList);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.srcset === void 0 && $$bindings.srcset && srcset !== void 0)
    $$bindings.srcset(srcset);
  return `<img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}${add_attribute("class", classList, 0)}${add_attribute("style", style, 0)}${add_attribute("srcset", srcset, 0)}>`;
});
export {
  Gmi as G
};
