import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../../chunks/ssr.js";
import "../../../../../../chunks/index3.js";
import { b as base } from "../../../../../../chunks/paths.js";
import { B as Button } from "../../../../../../chunks/button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1svtvpd_START -->${$$result.title = `<title>Accept Invitation from Kener</title>`, ""}<!-- HEAD_svelte-1svtvpd_END -->`, ""} <div class="mx-auto mt-32 flex max-w-[475px] flex-col gap-y-4 text-center">${data.error ? `<picture class="mx-auto" data-svelte-h="svelte-1xdxiwd"><source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f6a8/512.webp" type="image/webp"> <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f6a8/512.gif" alt="🚨" width="32" height="32"></picture>` : `<picture class="mx-auto" data-svelte-h="svelte-29t9rc"><source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f38a/512.webp" type="image/webp"> <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f38a/512.gif" alt="🎊" width="32" height="32"></picture>`} <h2 class="text-xl">${escape(data.header)}</h2> <p class="text-sm">${escape(data.message)}</p> ${data.error ? `${validate_component(Button, "Button").$$render($$result, { href: base + "/", class: "mt-4 " }, {}, {
    default: () => {
      return `Go back`;
    }
  })}` : `${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: base + "/manage/app/site",
      class: "mt-4 "
    },
    {},
    {
      default: () => {
        return `Go to Dashboard`;
      }
    }
  )}`}</div>`;
});
export {
  Page as default
};
