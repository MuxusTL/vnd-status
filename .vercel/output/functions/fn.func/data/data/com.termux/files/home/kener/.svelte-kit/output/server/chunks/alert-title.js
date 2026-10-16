import { c as create_ssr_component, l as compute_rest_props, p as spread, t as escape_attribute_value, q as escape_object } from "./ssr.js";
import { c as cn } from "./utils.js";
import { a as alertVariants } from "./index7.js";
import { i as is_void } from "./names.js";
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "variant"]);
  let { class: className = void 0 } = $$props;
  let { variant = "default" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(cn(alertVariants({ variant }), className))
      },
      escape_object($$restProps),
      { role: "alert" }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Alert_description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(cn("text-sm [&_p]:leading-relaxed", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Alert_title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "level"]);
  let { class: className = void 0 } = $$props;
  let { level = "h5" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  return `${((tag) => {
    return tag ? `<${level}${spread(
      [
        {
          class: escape_attribute_value(cn("mb-1 font-medium leading-none tracking-tight", className))
        },
        escape_object($$restProps)
      ],
      {}
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(level)}`;
});
export {
  Alert as A,
  Alert_title as a,
  Alert_description as b
};
