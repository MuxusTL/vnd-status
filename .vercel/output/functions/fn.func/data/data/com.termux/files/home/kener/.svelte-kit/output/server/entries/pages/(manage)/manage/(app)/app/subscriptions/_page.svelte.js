import { c as create_ssr_component, v as validate_component, b as each, e as escape } from "../../../../../../../chunks/ssr.js";
import { C as Card } from "../../../../../../../chunks/card.js";
import { C as Card_content } from "../../../../../../../chunks/card-content.js";
import { C as Card_description } from "../../../../../../../chunks/card-description.js";
import "clsx";
import { C as Card_header, a as Card_title } from "../../../../../../../chunks/card-title.js";
import { b as base } from "../../../../../../../chunks/paths.js";
import "../../../../../../../chunks/index3.js";
import { G as Gmi } from "../../../../../../../chunks/gmi.js";
import { S as Select, a as Select_trigger, V as Value, b as Select_content, G as Group, c as Select_label, d as Select_item } from "../../../../../../../chunks/index8.js";
import "dequal";
import { L as Loader } from "../../../../../../../chunks/loader.js";
let limit = 25;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let canSendEmail = data.canSendEmail;
  let page = 1;
  let total = 0;
  let totalPages = 0;
  let subscriptionTrigger = {
    id: null,
    subscription_trigger_status: "INACTIVE",
    subscription_trigger_type: "email",
    config: {
      createIncident: false,
      updateIncident: false,
      insertIncidentMonitor: false,
      updateIncidentComment: false,
      insertIncidentComment: false
    }
  };
  let subscriberListLoading = false;
  let subscribers = [];
  async function loadSubscribers() {
    subscriberListLoading = true;
    try {
      const res = await fetch(base + "/manage/app/api/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "getSubscribers",
          data: { page, limit }
        })
      });
      const data2 = await res.json();
      subscribers = data2.subscriptions || [];
      total = data2.total || 0;
      totalPages = Math.ceil(total / limit);
    } catch (error) {
      console.error("Error fetching subscribers:", error);
      alert("Error loading subscribers. Please try again.");
      subscribers = [];
      total = 0;
    } finally {
      subscriberListLoading = false;
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="min-h-[70vh]">${validate_component(Card, "Card.Root").$$render($$result, { class: "mt-4" }, {}, {
    default: () => {
      return `${validate_component(Card_header, "Card.Header").$$render($$result, { class: "border-b" }, {}, {
        default: () => {
          return `${validate_component(Card_title, "Card.Title").$$render($$result, { class: "relative" }, {}, {
            default: () => {
              return `Events Subscription
        ${`${validate_component(Loader, "Loader").$$render(
                $$result,
                {
                  size: "16",
                  class: "absolute right-0 top-0 animate-spin text-gray-500"
                },
                {},
                {}
              )}`}`;
            }
          })} ${validate_component(Card_description, "Card.Description").$$render($$result, {}, {}, {
            default: () => {
              return `Configure and view who have subscribed to updates for your status page.`;
            }
          })}`;
        }
      })} ${validate_component(Card_content, "Card.Content").$$render($$result, { class: "py-2" }, {}, {
        default: () => {
          return `${!canSendEmail ? `<div class="my-2 rounded-sm border border-destructive p-2 text-sm font-medium text-destructive" data-svelte-h="svelte-z897tg">You have not configured your email settings yet. Please configure your email settings to send updates to your
          subscribers. You can read the documentation by visiting this link
          <a href="https://kener.ing/docs/environment-vars#smtp" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">here
          </a>. You will either have to set up SMTP or use Resend.</div>` : ``} <div class="mt-5 grid grid-cols-2 gap-y-2"> <div class="border-b pb-3"><label class="cursor-pointer"><input class="mr-1" type="checkbox" ${""} ${!canSendEmail || subscriptionTrigger.subscription_trigger_status != "ACTIVE" ? "disabled" : ""}>
            Event Triggered</label> <p class="pl-6 text-xs font-medium text-muted-foreground" data-svelte-h="svelte-zh82f0">Send notification when a new event like incident or maintenance is created.</p></div> <div class="border-b pb-3"><label class="cursor-pointer"><input class="mr-1" type="checkbox" ${""} ${!canSendEmail || subscriptionTrigger.subscription_trigger_status != "ACTIVE" ? "disabled" : ""}>
            Event Updated</label> <p class="pl-6 text-xs font-medium text-muted-foreground" data-svelte-h="svelte-6ianc">Send notification when an event is updated.</p></div> <div class="border-b pb-3"><label class="cursor-pointer"><input class="mr-1" type="checkbox" ${""} ${!canSendEmail || subscriptionTrigger.subscription_trigger_status != "ACTIVE" ? "disabled" : ""}>
            Update Monitor in Event</label> <p class="pl-6 text-xs font-medium text-muted-foreground" data-svelte-h="svelte-nzjj5j">Send notification when a new monitor is added to an event.</p></div> <div class="border-b pb-3"><label class="cursor-pointer"><input class="mr-1" type="checkbox" ${""} ${!canSendEmail || subscriptionTrigger.subscription_trigger_status != "ACTIVE" ? "disabled" : ""}>
            Update Incident Comment</label> <p class="pl-6 text-xs font-medium text-muted-foreground" data-svelte-h="svelte-1igb3kb">Send notification when an event comment is updated.</p></div> <div class="pb-3"><label class="cursor-pointer"><input class="mr-1" type="checkbox" ${""} ${!canSendEmail || subscriptionTrigger.subscription_trigger_status != "ACTIVE" ? "disabled" : ""}>
            Insert Incident Comment</label> <p class="pl-6 text-xs font-medium text-muted-foreground" data-svelte-h="svelte-h2rfwi">Send notification when a new comment is added to an event.</p></div></div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card.Root").$$render($$result, { class: "mt-4" }, {}, {
    default: () => {
      return `${validate_component(Card_header, "Card.Header").$$render($$result, { class: "border-b" }, {}, {
        default: () => {
          return `${validate_component(Card_title, "Card.Title").$$render($$result, { class: "relative" }, {}, {
            default: () => {
              return `Site Subscribers
         `;
            }
          })} ${validate_component(Card_description, "Card.Description").$$render($$result, {}, {}, {
            default: () => {
              return `View and manage subscribers who have signed up for updates on your status page.`;
            }
          })}`;
        }
      })} ${validate_component(Card_content, "Card.Content").$$render($$result, { class: "py-4" }, {}, {
        default: () => {
          return `<div class="flex flex-col"><div class="-m-1.5 overflow-x-auto"><div class="inline-block min-w-full p-1.5 align-middle"><div class="overflow-hidden rounded-lg border dark:border-neutral-700"><table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700"><thead><tr><th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500" data-svelte-h="svelte-2bewxs">Email</th> <th scope="col" class="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500" data-svelte-h="svelte-1smnfgj">Subscribed Monitors</th> <th scope="col" class="px-6 py-3 text-center text-xs font-medium uppercase text-gray-500 dark:text-neutral-500" data-svelte-h="svelte-1gmpxoc">Subscribed At</th> <th scope="col" class="flex w-[130px] gap-x-2 px-1 py-3 text-start text-xs font-medium uppercase">${validate_component(Select, "Select.Root").$$render(
            $$result,
            {
              portal: null,
              class: "w-full",
              onSelectedChange: (e) => {
                if (e) {
                  page = e.value;
                  loadSubscribers();
                }
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
                        })} ${totalPages > 0 ? `${each(Array.from({ length: totalPages }, (_, i) => i + 1), (pageNum) => {
                          return `${validate_component(Select_item, "Select.Item").$$render(
                            $$result,
                            {
                              value: pageNum,
                              class: "text-xs font-medium uppercase"
                            },
                            {},
                            {
                              default: () => {
                                return `Page ${escape(pageNum)}`;
                              }
                            }
                          )}`;
                        })}` : `${validate_component(Select_item, "Select.Item").$$render(
                          $$result,
                          {
                            value: 1,
                            disabled: true,
                            class: "text-xs font-medium uppercase"
                          },
                          {},
                          {
                            default: () => {
                              return `Page 1`;
                            }
                          }
                        )}`}`;
                      }
                    })}`;
                  }
                })}`;
              }
            }
          )}</th></tr></thead> <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">${subscriberListLoading ? `<tr><td colspan="5" class="py-4 text-center text-sm text-gray-500">${validate_component(Loader, "Loader").$$render(
            $$result,
            {
              size: "16",
              class: "mx-auto animate-spin"
            },
            {},
            {}
          )} Loading subscribers...</td></tr>` : `${subscribers.length === 0 ? `<tr data-svelte-h="svelte-992mkc"><td colspan="5" class="py-4 text-center text-sm text-gray-500">No subscribers found.</td></tr>` : `${each(subscribers, (user) => {
            return ` <tr><td class="whitespace-nowrap px-6 py-4 text-sm font-medium">${escape(user.subscriber.email)}</td> <td class="whitespace-nowrap px-6 py-4 text-sm"> ${!!user.monitor?.name ? `<div class="items-left flex gap-x-2">${!!user.monitor.image ? `${validate_component(Gmi, "GMI").$$render(
              $$result,
              {
                src: user.monitor.image,
                alt: "",
                classList: "h-4"
              },
              {},
              {}
            )}` : ``} <span class="text-sm font-medium">${escape(user.monitor.name)}</span> </div>` : `<span class="text-sm font-medium uppercase italic text-cyan-500" data-svelte-h="svelte-l5p7lr">All Monitors</span>`}</td> <td class="whitespace-nowrap px-6 py-4 text-center text-xs font-semibold uppercase"> ${escape(new Date(user.created_at).toLocaleString())}</td> <td class="whitespace-nowrap px-6 py-4 text-center text-xs font-semibold"><label class="flex w-full cursor-pointer items-center justify-between"><input type="checkbox" value="" ${!canSendEmail || subscriptionTrigger.subscription_trigger_status != "ACTIVE" ? "disabled" : ""} class="peer sr-only" ${user.subscriptions_status == "ACTIVE" ? "checked" : ""}> <div class="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div> </label></td> </tr>`;
          })}`}`}</tbody></table></div></div></div></div>`;
        }
      })}`;
    }
  })}</div>`;
});
export {
  Page as default
};
