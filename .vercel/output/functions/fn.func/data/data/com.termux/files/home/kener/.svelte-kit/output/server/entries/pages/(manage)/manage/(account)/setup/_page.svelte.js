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
  let form = { email: "", password: "", name: "" };
  let { data = { error: null, isSecretSet: false } } = $$props;
  let httpDomainPort = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"><div class="sm:mx-auto sm:w-full sm:max-w-sm" data-svelte-h="svelte-1nnhze3"><img class="mx-auto h-10 w-auto" src="${escape(base, true) + "/logo.png"}" alt="Your Company"> <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight">Set up Kener.ing</h2> <p class="mt-4 text-center">Welcome to Kener.ing! Let&#39;s get you set up.</p></div> ${data.isSecretSet && data.isOriginSet ? `<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">${data.error ? `${validate_component(Alert, "Alert.Root").$$render($$result, { variant: "destructive", class: "my-4" }, {}, {
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
    })}` : ``} <form class="space-y-6" action="${escape(base, true) + "/manage/setup/submit"}" method="POST"><div><label for="email" class="block text-sm/6 font-medium" data-svelte-h="svelte-13nczam">Your Name</label> <div class="mt-2">${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "text",
        name: "name",
        id: "form_name",
        autocomplete: "first-name",
        placeholder: "Jane Doe",
        required: true,
        value: form.name
      },
      {
        value: ($$value) => {
          form.name = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> <div><label for="email" class="block text-sm/6 font-medium" data-svelte-h="svelte-1pqkcvk">Email address</label> <div class="mt-2">${validate_component(Input, "Input").$$render(
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
    )} <p class="mt-0.5 text-xs text-muted-foreground" data-svelte-h="svelte-19lhfyh">This will email address will use be used to login so that you can manage
							this instance of kener.</p></div></div> <div><div class="flex items-center justify-between" data-svelte-h="svelte-1z0j8zp"><label for="password" class="block text-sm/6 font-medium">Password</label></div> <div class="mt-2"><div class="mt-2">${validate_component(Input, "Input").$$render(
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
    )} <p class="mt-0.5 text-xs text-muted-foreground" data-svelte-h="svelte-i6yq24">Please make sure you remember this password. Other wise you will
								have to reset it manually from db.</p></div></div></div> <div>${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
      default: () => {
        return `Let&#39;s Go`;
      }
    })} <p class="mt-4 text-center text-xs font-semibold" data-svelte-h="svelte-5x4hyp">Already set up done? Please go to <a href="${escape(base, true) + "/manage/signin"}" class="text-primary underline decoration-1">signin page</a></p></div></form></div>` : `<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-md">${!!!data.isSecretSet ? `<div class="rounded-md bg-card p-4" data-svelte-h="svelte-1xplo2l"><p class="text-lg/6">Environment variable <span class="font-mono text-yellow-500">KENER_SECRET_KEY</span>
						not found.</p> <hr class="my-2"> <p class="text-muted-foreground">Please set the environment variable <span class="font-mono">KENER_SECRET_KEY</span>. Then restart the server / refresh this page. Check the
						<a href="https://kener.ing/docs/environment-vars" target="_blank" class="text-primary">documentation</a> for more Information.</p></div>` : ``} ${!!!data.isOriginSet ? `<div class="mt-3 rounded-md bg-card p-4"><p class="text-lg/6" data-svelte-h="svelte-1ehgck1">Environment variable <span class="font-mono text-yellow-500">ORIGIN</span>
						not found.</p> <hr class="my-2"> <p class="text-muted-foreground">Please set the environment variable <span class="block font-mono text-primary">ORIGIN=${escape(httpDomainPort)}</span>
						Then restart the server / refresh this page. Check the
						<a href="https://kener.ing/docs/environment-vars" target="_blank" class="text-primary" data-svelte-h="svelte-13w3qh8">documentation</a> for more Information.</p></div>` : ``}</div>`}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
