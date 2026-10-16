import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../../chunks/ssr.js";
import { b as base } from "../../../../../../chunks/paths.js";
import "../../../../../../chunks/index3.js";
import { I as Input } from "../../../../../../chunks/input.js";
import "dequal";
import "clsx";
import "../../../../../../chunks/index7.js";
import { A as Alert, a as Alert_title, b as Alert_description } from "../../../../../../chunks/alert-title.js";
import { B as Button } from "../../../../../../chunks/button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let form = { email: "", password: "" };
  let { data = { error: null, firstUser: false } } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-6sh1w8_START -->${$$result.title = `<title>Login Kener</title>`, ""}<!-- HEAD_svelte-6sh1w8_END -->`, ""} <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"><div class="sm:mx-auto sm:w-full sm:max-w-sm" data-svelte-h="svelte-nptui8"><img class="mx-auto h-10 w-auto" src="${escape(base, true) + "/logo.png"}" alt="Your Company"> <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight">Sign in</h2> <p class="mt-4 text-center">Sign in to manage your kener instance.</p></div> <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">${data.error ? `${validate_component(Alert, "Alert.Root").$$render($$result, { variant: "destructive", class: "my-4" }, {}, {
      default: () => {
        return `${validate_component(Alert_title, "Alert.Title").$$render($$result, {}, {}, {
          default: () => {
            return `Error`;
          }
        })} ${validate_component(Alert_description, "Alert.Description").$$render($$result, {}, {}, {
          default: () => {
            return `${escape(data.error)}`;
          }
        })}`;
      }
    })}` : ``} ${data.firstUser ? `${validate_component(Alert, "Alert.Root").$$render($$result, { variant: "destructive", class: "my-4" }, {}, {
      default: () => {
        return `${validate_component(Alert_title, "Alert.Title").$$render($$result, { class: "flex justify-center text-center" }, {}, {
          default: () => {
            return `<picture data-svelte-h="svelte-8oievo"><source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f973/512.webp" type="image/webp"> <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f973/512.gif" alt="🥳" width="32" height="32"></picture>`;
          }
        })} ${validate_component(Alert_description, "Alert.Description").$$render($$result, { class: "mt-4 text-center font-medium" }, {}, {
          default: () => {
            return `It looks like this is the first time you are signing in. Please <a href="${escape(base, true) + "/manage/setup"}" class="text-blue-600" data-svelte-h="svelte-1xu5yps">sign up</a> first.`;
          }
        })}`;
      }
    })}` : ``} <form class="space-y-6" action="${escape(base, true) + "/manage/signin/submit"}" method="POST"><div><label for="email" class="block text-sm/6 font-medium" data-svelte-h="svelte-1pqkcvk">Email address</label> <div class="mt-2">${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "email",
        name: "email",
        id: "form_email",
        autocomplete: "email",
        placeholder: "user@example.com",
        required: true,
        value: form.email
      },
      {
        value: ($$value) => {
          form.email = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div><div class="flex items-center justify-between" data-svelte-h="svelte-te18qv"><label for="password" class="block text-sm/6 font-medium">Password</label></div> <div class="mt-2"><div class="mt-2">${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "password",
        name: "password",
        id: "form_password",
        autocomplete: "password",
        placeholder: "***********",
        required: true,
        value: form.password
      },
      {
        value: ($$value) => {
          form.password = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div></div> <div><p class="mb-2 text-right" data-svelte-h="svelte-6k1ce0"><a href="${escape(base, true) + "/manage/forgot"}" class="text-xs font-semibold text-muted-foreground hover:text-primary">Forgot your password?</a></p> ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
      default: () => {
        return `Sign In`;
      }
    })}</div></form></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
