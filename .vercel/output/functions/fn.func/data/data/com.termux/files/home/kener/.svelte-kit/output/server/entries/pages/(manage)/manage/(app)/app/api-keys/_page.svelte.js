import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, b as each } from "../../../../../../../chunks/ssr.js";
import moment from "moment";
import "../../../../../../../chunks/index3.js";
import "clsx";
import "dequal";
import { p as page } from "../../../../../../../chunks/stores.js";
import { B as Button } from "../../../../../../../chunks/button.js";
import { P as Plus } from "../../../../../../../chunks/plus.js";
import { C as Check } from "../../../../../../../chunks/check.js";
import { C as Copy } from "../../../../../../../chunks/copy.js";
import { E as ExternalLink } from "../../../../../../../chunks/external-link.js";
const ApiKeys = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let apiKeys = [];
  let newKeyResp = {};
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="mt-4"><div class="mb-4 flex justify-between"><div>${``}</div> <div>${$page.data.user.role != "member" ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Plus, "Plus").$$render($$result, { class: "mr-2 h-4 w-4" }, {}, {})} Create New API Key`;
      }
    })}` : ``}</div></div></div> ${!!newKeyResp && !!newKeyResp.apiKey ? `<div class="my-4 rounded-lg border border-green-700 bg-green-800 bg-opacity-20 p-4"><p class="font-medium" data-svelte-h="svelte-xr18ck"><picture class="mr-1 inline-block"><source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.webp" type="image/webp"> <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.gif" alt="🎉" width="24" height="24"></picture>
      API Key Created</p> <p class="relative my-2 rounded-sm border bg-card px-4 py-2 pr-8 font-mono text-sm font-medium">${escape(newKeyResp.apiKey)} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "icon",
        variant: "ghost",
        class: "copybtn absolute right-2 top-2 h-5 w-5 p-1"
      },
      {},
      {
        default: () => {
          return `${validate_component(Check, "Check").$$render(
            $$result,
            {
              class: "check-btn absolute left-0 top-0 h-4 w-4 text-green-500"
            },
            {},
            {}
          )} ${validate_component(Copy, "Copy").$$render(
            $$result,
            {
              class: "copy-btn absolute left-0 top-0 h-4 w-4 "
            },
            {},
            {}
          )}`;
        }
      }
    )}</p> <p class="text-xs text-muted-foreground" data-svelte-h="svelte-11ijnru">Your new API key has been created. It will be <b class="uppercase underline">not be shown again</b>, so make sure
      to save it.</p></div>` : ``} <div class="flex flex-col"><div class="-m-1.5 overflow-x-auto"><div class="inline-block min-w-full p-1.5 align-middle"><div class="overflow-hidden rounded-lg border dark:border-neutral-700"><table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700"><thead data-svelte-h="svelte-16vu1nk"><tr><th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">Name</th> <th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">Key</th> <th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">Created At</th> <th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500"></th></tr></thead> <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">${each(apiKeys, (apiKey) => {
      return `<tr><td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800 dark:text-neutral-200">${escape(apiKey.name)}</td> <td class="whitespace-nowrap px-6 py-4 text-xs font-semibold text-gray-800 dark:text-neutral-200">${escape(apiKey.masked_key.slice(-32))}</td> <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-neutral-200">${escape(moment.utc(apiKey.created_at, "YYYY-MM-DD HH:mm:ss").local().format("YYYY-MM-DD HH:mm:ss"))}</td> <td class="whitespace-nowrap px-6 py-4 text-xs font-semibold text-gray-800 dark:text-neutral-200"><label class="inline-flex cursor-pointer items-center"><input type="checkbox" ${$page.data.user.role == "member" ? "disabled" : ""} value="" class="peer sr-only" ${apiKey.status == "ACTIVE" ? "checked" : ""}> <div class="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 peer-disabled:opacity-55 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div> </label></td> </tr>`;
    })}</tbody></table></div></div></div></div> ${``}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="min-h-[70vh]"><div class="flex justify-end">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "outline",
      href: "https://kener.ing/docs/apikeys",
      class: " text-sm"
    },
    {},
    {
      default: () => {
        return `Documentation ${validate_component(ExternalLink, "ExternalLink").$$render($$result, { size: "12", class: "ml-1" }, {}, {})}`;
      }
    }
  )}</div> ${validate_component(ApiKeys, "APIKeys").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
