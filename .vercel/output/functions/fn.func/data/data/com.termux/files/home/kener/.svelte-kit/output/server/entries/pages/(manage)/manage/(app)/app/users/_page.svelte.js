import { c as create_ssr_component, v as validate_component, b as each, e as escape } from "../../../../../../../chunks/ssr.js";
import "clsx";
import "../../../../../../../chunks/index3.js";
import "dequal";
import { b as base } from "../../../../../../../chunks/paths.js";
import "../../../../../../../chunks/index7.js";
import { S as Select, a as Select_trigger, V as Value, b as Select_content, G as Group, c as Select_label, d as Select_item } from "../../../../../../../chunks/index8.js";
import "../../../../../../../chunks/index4.js";
import "canvas-confetti";
import "moment";
import { B as Button } from "../../../../../../../chunks/button.js";
import { I as Icon } from "../../../../../../../chunks/Icon.js";
import { S as Settings } from "../../../../../../../chunks/settings.js";
import { A as ArrowRight } from "../../../../../../../chunks/arrow-right.js";
const Check_check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M18 6 7 17l-5-5" }],
    ["path", { "d": "m22 10-7.5 7.5L13 16" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "check-check" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const CheckCheck = Check_check;
const Mail_warning = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"
      }
    ],
    [
      "path",
      {
        "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
      }
    ],
    ["path", { "d": "M20 14v4" }],
    ["path", { "d": "M20 22v.01" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "mail-warning" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const MailWarning = Mail_warning;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let currentUser = data.user;
  let page = data.page;
  let limit = data.limit;
  let total = data.total;
  let users = data.users;
  data.canSendEmail;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${``} ${``} <div class="min-h-[70vh]"><div class="mt-8"><div class="mb-4 flex justify-between"><div>${``}</div> ${!!currentUser.role && currentUser.role !== "member" ? `<div>${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `<span data-svelte-h="svelte-128tyv2">Add New User</span>`;
      }
    })}</div>` : ``} </div> <div class="flex flex-col"><div class="-m-1.5 overflow-x-auto"><div class="inline-block min-w-full p-1.5 align-middle"><div class="overflow-hidden rounded-lg border dark:border-neutral-700"><table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700"><thead><tr><th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500" data-svelte-h="svelte-9btjuf">Name</th> <th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500" data-svelte-h="svelte-vggg50">Email</th> <th scope="col" class="px-6 py-3 text-center text-xs font-medium uppercase text-gray-500 dark:text-neutral-500" data-svelte-h="svelte-61yhq1">Verified</th> <th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500" data-svelte-h="svelte-1mbsfjo">Role</th> <th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500" data-svelte-h="svelte-1ey3fge">Status</th> <th scope="col" class="flex w-[130px] gap-x-2 px-1 py-3 text-start text-xs font-medium uppercase">${validate_component(Select, "Select.Root").$$render(
      $$result,
      {
        portal: null,
        class: "w-full",
        onSelectedChange: (e) => {
          page = e.value;
          window.location.href = `${base}/manage/app/users?page=${page}&limit=${limit}`;
        },
        selected: { value: page, label: "Page " + page }
      },
      {},
      {
        default: () => {
          return `${validate_component(Select_trigger, "Select.Trigger").$$render(
            $$result,
            {
              id: "page",
              class: "h-6 w-full px-2 py-1"
            },
            {},
            {
              default: () => {
                return `${validate_component(Value, "Select.Value").$$render($$result, { placeholder: "Page", class: "text-xs" }, {}, {})}`;
              }
            }
          )} ${validate_component(Select_content, "Select.Content").$$render($$result, { class: "text-xs" }, {}, {
            default: () => {
              return `${validate_component(Group, "Select.Group").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Select_label, "Select.Label").$$render($$result, { class: "text-xs" }, {}, {
                    default: () => {
                      return `Pages`;
                    }
                  })} ${each(Array.from({ length: total }, (_, i) => i + 1), (page2) => {
                    return `${validate_component(Select_item, "Select.Item").$$render(
                      $$result,
                      {
                        value: page2,
                        class: "text-xs font-medium uppercase"
                      },
                      {},
                      {
                        default: () => {
                          return `Page ${escape(page2)}`;
                        }
                      }
                    )}`;
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}</th></tr></thead> <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">${each(users, (user) => {
      return `<tr><td class="whitespace-nowrap px-6 py-4 text-sm font-medium">${escape(user.name)}</td> <td class="whitespace-nowrap px-6 py-4 text-sm font-medium">${escape(user.email)}</td> <td class="whitespace-nowrap px-6 py-4 text-center text-sm">${!!user.is_verified ? `${validate_component(CheckCheck, "CheckCheck").$$render($$result, { class: "mx-auto h-4 w-4 text-blue-500" }, {}, {})}` : `${validate_component(MailWarning, "MailWarning").$$render($$result, { class: "mx-auto h-4 w-4 text-yellow-500" }, {}, {})}`}</td> <td class="whitespace-nowrap px-6 py-4 text-xs font-semibold uppercase">${user.role === "editor" ? `<span class="me-2 rounded-sm bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">${escape(user.role)} </span>` : `${user.role === "member" ? `<span class="me-2 rounded-sm bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">${escape(user.role)} </span>` : `${user.role === "admin" ? `<span class="me-2 rounded-sm bg-pink-100 px-2.5 py-0.5 text-xs font-medium text-pink-800 dark:bg-pink-900 dark:text-pink-300">${escape(user.role)} </span>` : ``}`}`}</td> <td class="whitespace-nowrap px-6 py-4 text-xs">${!!user.is_active ? `<span class="h-4 w-4 font-semibold text-green-500" data-svelte-h="svelte-hug3su">ACTIVE</span>` : `<span class="h-4 w-4 font-semibold text-pink-500" data-svelte-h="svelte-1k3zus">INACTIVE</span>`}</td> <td class="whitespace-nowrap text-center text-xs font-semibold">${!!currentUser.role && currentUser.role === "admin" && currentUser.id !== user.id ? `${validate_component(Button, "Button").$$render(
        $$result,
        {
          size: "icon",
          class: "h-6 w-6",
          variant: "ghost"
        },
        {},
        {
          default: () => {
            return `${validate_component(Settings, "Settings").$$render($$result, { class: "h-4 w-4 " }, {}, {})} `;
          }
        }
      )}` : ``} ${currentUser.id === user.id ? `${validate_component(Button, "Button").$$render(
        $$result,
        {
          size: "icon",
          class: "h-6 w-6",
          variant: "ghost",
          href: `${base}/manage/app/profile`
        },
        {},
        {
          default: () => {
            return `${validate_component(ArrowRight, "ArrowRight").$$render($$result, { class: "h-4 w-4 " }, {}, {})} `;
          }
        }
      )}` : ``}</td> </tr>`;
    })}</tbody></table></div></div></div></div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
