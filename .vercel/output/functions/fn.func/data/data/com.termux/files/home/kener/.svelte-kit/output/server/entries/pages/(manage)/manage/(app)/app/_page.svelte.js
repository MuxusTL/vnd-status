import { c as create_ssr_component } from "../../../../../../chunks/ssr.js";
import { a as afterNavigate, g as goto } from "../../../../../../chunks/navigation.js";
import { b as base } from "../../../../../../chunks/paths.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  afterNavigate((e) => {
    goto(base + "/manage/app/site");
  });
  return ``;
});
export {
  Page as default
};
