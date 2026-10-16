import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, y as add_classes } from "../../../../../../../chunks/ssr.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { C as Card } from "../../../../../../../chunks/card.js";
import { C as Card_content } from "../../../../../../../chunks/card-content.js";
import { C as Card_description } from "../../../../../../../chunks/card-description.js";
import "clsx";
import { C as Card_header, a as Card_title } from "../../../../../../../chunks/card-title.js";
import "../../../../../../../chunks/index3.js";
import { I as Input } from "../../../../../../../chunks/input.js";
import { L as Label } from "../../../../../../../chunks/label.js";
import "../../../../../../../chunks/index7.js";
import { A as Alert, a as Alert_title, b as Alert_description } from "../../../../../../../chunks/alert-title.js";
import { I as Info } from "../../../../../../../chunks/info.js";
import { B as Button } from "../../../../../../../chunks/button.js";
import { C as Check } from "../../../../../../../chunks/check.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hasDigit;
  let hasLowercase;
  let hasUppercase;
  let hasLetter;
  let hasMinLength;
  let passwordsMatch;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let savingName = false;
  let sendingEmail = false;
  let resettingPass = false;
  let myName = $page.data.user.name;
  let myPassword = "";
  let plainPassword = "";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    hasDigit = /\d/.test(myPassword);
    hasLowercase = /[a-z]/.test(myPassword);
    hasUppercase = /[A-Z]/.test(myPassword);
    hasLetter = /[a-zA-Z]/.test(myPassword);
    hasMinLength = myPassword.length >= 8;
    passwordsMatch = myPassword === plainPassword && myPassword !== "";
    $$rendered = `<div class="min-h-[70vh]">${validate_component(Card, "Card.Root").$$render($$result, { class: "mt-4" }, {}, {
      default: () => {
        return `${validate_component(Card_header, "Card.Header").$$render($$result, { class: "border-b" }, {}, {
          default: () => {
            return `${validate_component(Card_title, "Card.Title").$$render($$result, { class: "flex justify-between" }, {}, {
              default: () => {
                return `<div data-svelte-h="svelte-7muwru">Your Profile</div> <div class="text-sm font-medium uppercase text-muted-foreground">${$page.data.user.role === "editor" ? `<span class="me-2 rounded-sm bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">${escape($page.data.user.role)}</span>` : `${$page.data.user.role === "member" ? `<span class="me-2 rounded-sm bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">${escape($page.data.user.role)}</span>` : `${$page.data.user.role === "admin" ? `<span class="me-2 rounded-sm bg-pink-100 px-2.5 py-0.5 text-xs font-medium text-pink-800 dark:bg-pink-900 dark:text-pink-300">${escape($page.data.user.role)}</span>` : ``}`}`}</div>`;
              }
            })} ${validate_component(Card_description, "Card.Description").$$render($$result, {}, {}, {
              default: () => {
                return `Configure your profile information here.`;
              }
            })}`;
          }
        })} ${validate_component(Card_content, "Card.Content").$$render($$result, { class: "flex flex-col gap-y-8 pt-4" }, {}, {
          default: () => {
            return `<div class="flex-col gap-y-2">Hi, your email address is <i>${escape($page.data.user.email)}</i>. To change your email address, please contact support.</div> ${$page.data.canSendEmail && $page.data.user.is_verified === 0 ? `${validate_component(Alert, "Alert.Root").$$render(
              $$result,
              {
                class: "relative my-4 border-yellow-500 bg-transparent pr-12 "
              },
              {},
              {
                default: () => {
                  return `${validate_component(Info, "Info").$$render($$result, { class: "h-4 w-4 " }, {}, {})} ${validate_component(Alert_title, "Alert.Title").$$render($$result, {}, {}, {
                    default: () => {
                      return `Email Not Verified`;
                    }
                  })} ${$page.data.activeInvitationExists === false ? `${validate_component(Alert_description, "Alert.Description").$$render($$result, {}, {}, {
                    default: () => {
                      return `Your email is not verified. Please verify your email.`;
                    }
                  })}` : `${validate_component(Alert_description, "Alert.Description").$$render($$result, {}, {}, {
                    default: () => {
                      return `Please check your inbox for an email to verify your email`;
                    }
                  })}`} ${validate_component(Button, "Button").$$render(
                    $$result,
                    {
                      disabled: sendingEmail,
                      class: "absolute right-3 top-4",
                      variant: "secondary"
                    },
                    {},
                    {
                      default: () => {
                        return `${$page.data.activeInvitationExists === false ? `Send Verification Email` : `Resend Verification Email`} ${``}`;
                      }
                    }
                  )}`;
                }
              }
            )}` : ``} <div class="flex-col gap-y-2"><form class="flex flex-row gap-x-2"><div class="flex w-64 flex-col gap-y-2">${validate_component(Label, "Label").$$render($$result, { for: "name" }, {}, {
              default: () => {
                return `Name`;
              }
            })} ${validate_component(Input, "Input").$$render(
              $$result,
              {
                disabled: savingName,
                id: "name",
                placeholder: "Your name",
                value: myName
              },
              {
                value: ($$value) => {
                  myName = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div> <div class="">${validate_component(Button, "Button").$$render(
              $$result,
              {
                class: "mt-6 ",
                variant: "primary",
                type: "submit",
                disabled: savingName
              },
              {},
              {
                default: () => {
                  return `Update Name

              ${``}`;
                }
              }
            )}</div></form> <p>${``}</p></div> <hr> <div class="flex flex-col gap-y-2"><form class="flex flex-row gap-x-2"><div class="flex w-64 flex-col gap-y-2">${validate_component(Label, "Label").$$render($$result, { for: "myPassword" }, {}, {
              default: () => {
                return `New Password`;
              }
            })} ${validate_component(Input, "Input").$$render(
              $$result,
              {
                disabled: resettingPass,
                type: "password",
                id: "myPassword",
                placeholder: "New Password",
                value: myPassword
              },
              {
                value: ($$value) => {
                  myPassword = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div> <div class="flex w-64 flex-col gap-y-2">${validate_component(Label, "Label").$$render($$result, { for: "plainPassword" }, {}, {
              default: () => {
                return `Confirm Password`;
              }
            })} ${validate_component(Input, "Input").$$render(
              $$result,
              {
                disabled: resettingPass,
                type: "text",
                id: "plainPassword",
                placeholder: "Re-Enter New Password",
                value: plainPassword
              },
              {
                value: ($$value) => {
                  plainPassword = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div> <div class="">${validate_component(Button, "Button").$$render(
              $$result,
              {
                class: "mt-6",
                variant: "primary",
                type: "submit",
                disabled: resettingPass
              },
              {},
              {
                default: () => {
                  return `Update Password

              ${``}`;
                }
              }
            )}</div></form> <div><p class="mb-1 text-sm" data-svelte-h="svelte-kc1nav">Your password should:</p> <ul class="flex flex-col gap-y-1"><li class="text-xs font-medium text-muted-foreground"><i${add_classes(((!hasDigit ? "hidden" : "") + " " + (hasDigit ? "text-green-500" : "")).trim())}>${validate_component(Check, "Check").$$render($$result, { class: "inline h-3 w-3" }, {}, {})}</i>
              Contains at least one digit</li> <li class="text-xs font-medium text-muted-foreground"><i${add_classes(((!hasLowercase ? "hidden" : "") + " " + (hasLowercase ? "text-green-500" : "")).trim())}>${validate_component(Check, "Check").$$render($$result, { class: "inline h-3 w-3" }, {}, {})}</i>
              Contains at least one lowercase letter</li> <li class="text-xs font-medium text-muted-foreground"><i${add_classes(((!hasUppercase ? "hidden" : "") + " " + (hasUppercase ? "text-green-500" : "")).trim())}>${validate_component(Check, "Check").$$render($$result, { class: "inline h-3 w-3" }, {}, {})}</i>
              Contains at least one uppercase letter</li> <li class="text-xs font-medium text-muted-foreground"><i${add_classes(((!hasLetter ? "hidden" : "") + " " + (hasLetter ? "text-green-500" : "")).trim())}>${validate_component(Check, "Check").$$render($$result, { class: "inline h-3 w-3" }, {}, {})}</i>
              Contains at least one letter</li> <li class="text-xs font-medium text-muted-foreground"><i${add_classes(((!hasMinLength ? "hidden" : "") + " " + (hasMinLength ? "text-green-500" : "")).trim())}>${validate_component(Check, "Check").$$render($$result, { class: "inline h-3 w-3" }, {}, {})}</i>
              Has a minimum length of 8 characters</li> <li class="text-xs font-medium text-muted-foreground"><i${add_classes(((!passwordsMatch ? "hidden" : "") + " " + (passwordsMatch ? "text-green-500" : "")).trim())}>${validate_component(Check, "Check").$$render($$result, { class: "inline h-3 w-3" }, {}, {})}</i>
              Passwords match</li></ul></div> <p>${``}</p></div>`;
          }
        })}`;
      }
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
