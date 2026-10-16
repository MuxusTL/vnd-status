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
  let form = { email: "" };
  let { data } = $$props;
  let isResendSet = data.isResendSet && data.isSecretSet;
  if (!isResendSet && !data.isSMTPSet) {
    data.view = "error";
    data.error = `<p>Environment variables are not set. Read the documentation to set them. https://kener.ing/docs/environment-vars</p>
		<br/>
		<p>Either Set RESEND_API_KEY, RESEND_SENDER_EMAIL <br>or<br> Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM_EMAIL</p>
		<br/>
		<p>If both are set then SMTP will take priority</p>`;
  }
  if (data.isSiteURLSet === false) {
    data.view = "error";
    data.error = "Site URL is not set. Read the documentation to set it. https://kener.ing/docs/site";
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-qdo03o_START -->${$$result.title = `<title>Forgot Password Kener</title>`, ""}<!-- HEAD_svelte-qdo03o_END -->`, ""} <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"><div class="sm:mx-auto sm:w-full sm:max-w-sm" data-svelte-h="svelte-v9ct1g"><img class="mx-auto h-10 w-auto" src="${escape(base, true) + "/logo.png"}" alt="Your Company"> <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight">Reset Password</h2> <p class="mt-4 text-center">Follow instructions to reset your password</p></div> <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">${data.view == "error" ? `${validate_component(Alert, "Alert.Root").$$render($$result, { variant: "destructive", class: "my-4" }, {}, {
      default: () => {
        return `${validate_component(Alert_title, "Alert.Title").$$render($$result, {}, {}, {
          default: () => {
            return `Error`;
          }
        })} ${validate_component(Alert_description, "Alert.Description").$$render($$result, {}, {}, {
          default: () => {
            return `<!-- HTML_TAG_START -->${data.error}<!-- HTML_TAG_END -->`;
          }
        })}`;
      }
    })}` : ``} ${data.view == "forgot" ? `<form class="space-y-6" action="${escape(base, true) + "/manage/forgot/submit"}" method="POST"><div><label for="email" class="block text-sm/6 font-medium" data-svelte-h="svelte-1pqkcvk">Email address</label> <div class="mt-2">${validate_component(Input, "Input").$$render(
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
    )}</div></div> <div>${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
      default: () => {
        return `Reset Password`;
      }
    })}</div></form>` : ``} ${data.view == "sent" ? `${validate_component(Alert, "Alert.Root").$$render($$result, { variant: "success", class: "my-4" }, {}, {
      default: () => {
        return `${validate_component(Alert_title, "Alert.Title").$$render($$result, {}, {}, {
          default: () => {
            return `Success`;
          }
        })} ${validate_component(Alert_description, "Alert.Description").$$render($$result, { class: "flex flex-col gap-y-2" }, {}, {
          default: () => {
            return `<p>An email has been sent to ${escape(data.email)} with instructions on how to reset your password.</p> <p data-svelte-h="svelte-1kc62cp">If you don&#39;t see the email, check other places it might be, like your junk, spam, social, or other folders.</p> <p data-svelte-h="svelte-qqmlmw">Once you have reset your password, you can <a class="font-semibold text-blue-500" href="${escape(base, true) + "/manage/signin"}">login</a></p>`;
          }
        })}`;
      }
    })}` : ``} ${data.view == "token" ? `<form class="space-y-6" action="${escape(base, true) + "/manage/forgot/reset"}" method="POST"><div><label for="password" class="block text-sm/6 font-medium" data-svelte-h="svelte-bk3im2">New password</label> <div class="mt-2">${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "password",
        name: "password",
        id: "form_password",
        autocomplete: "new-password",
        placeholder: "********",
        required: true
      },
      {},
      {}
    )}</div> ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "hidden",
        name: "token",
        id: "form_password",
        required: true,
        value: data.token
      },
      {
        value: ($$value) => {
          data.token = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div>${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
      default: () => {
        return `Confirm Password`;
      }
    })}</div></form>` : ``} ${data.view == "success" ? `${validate_component(Alert, "Alert.Root").$$render($$result, { variant: "success", class: "my-4" }, {}, {
      default: () => {
        return `${validate_component(Alert_title, "Alert.Title").$$render($$result, {}, {}, {
          default: () => {
            return `Success`;
          }
        })} ${validate_component(Alert_description, "Alert.Description").$$render($$result, {}, {}, {
          default: () => {
            return `Your password has been reset successfully. <a class="font-semibold text-blue-500" href="${escape(base, true) + "/manage/signin"}" data-svelte-h="svelte-6r199h">Login</a> with you new password`;
          }
        })}`;
      }
    })}` : ``}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
