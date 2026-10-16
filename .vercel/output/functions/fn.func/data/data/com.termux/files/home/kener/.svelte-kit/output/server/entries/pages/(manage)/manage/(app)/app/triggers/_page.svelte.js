import { c as create_ssr_component, a as subscribe, v as validate_component, b as each, d as add_attribute, e as escape } from "../../../../../../../chunks/ssr.js";
import "../../../../../../../chunks/index3.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import "clsx";
import "dequal";
import { b as base } from "../../../../../../../chunks/paths.js";
import { S as Select, a as Select_trigger, V as Value, b as Select_content, G as Group, c as Select_label, d as Select_item } from "../../../../../../../chunks/index8.js";
import { W as WebhookJSONTemplate, e as DiscordJSONTemplate, S as SlackJSONTemplate } from "../../../../../../../chunks/anywhere.js";
import "../../../../../../../chunks/index4.js";
import "canvas-confetti";
import { C as Card } from "../../../../../../../chunks/card.js";
import { C as Card_header, a as Card_title } from "../../../../../../../chunks/card-title.js";
/* empty css                                                                    */import "@uiw/codemirror-theme-github";
import { d as derivedMode } from "../../../../../../../chunks/stores2.js";
import { B as Button } from "../../../../../../../chunks/button.js";
import { P as Plus } from "../../../../../../../chunks/plus.js";
import { L as Loader } from "../../../../../../../chunks/loader.js";
import { C as Check } from "../../../../../../../chunks/check.js";
import { X } from "../../../../../../../chunks/x.js";
import { S as Settings } from "../../../../../../../chunks/settings.js";
import { E as ExternalLink } from "../../../../../../../chunks/external-link.js";
const TriggerInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $$unsubscribe_mode;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_mode = subscribe(derivedMode, (value) => value);
  let status = "ACTIVE";
  let triggers = [];
  let loadingData = false;
  let { data } = $$props;
  ({
    id: 0,
    name: "some name",
    trigger_type: "webhook",
    trigger_desc: "",
    trigger_status: "ACTIVE",
    trigger_meta: {
      url: "",
      headers: [],
      to: "",
      from: data.fromEmail,
      webhook_body: WebhookJSONTemplate,
      has_webhook_body: false,
      has_discord_body: false,
      discord_body: DiscordJSONTemplate,
      has_slack_body: false,
      slack_body: SlackJSONTemplate,
      email_type: data.preferredModeEmail,
      smtp_host: data.smtp?.smtp_host ? data.smtp.smtp_host : "",
      smtp_port: data.smtp?.smtp_port ? data.smtp.smtp_port : "",
      smtp_user: data.smtp?.smtp_user ? data.smtp.smtp_user : "",
      smtp_pass: data.smtp?.smtp_pass ? data.smtp.smtp_pass : "",
      smtp_secure: data.smtp?.smtp_secure ? data.smtp.smtp_secure : ""
    }
  });
  function selectChange(e) {
    status = e.value;
    loadData();
  }
  async function loadData() {
    loadingData = true;
    try {
      let apiResp = await fetch(base + "/manage/app/api/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "getTriggers", data: { status } })
      });
      triggers = await apiResp.json();
      triggers = triggers.map((t) => {
        t.testLoaders = "idle";
        return t;
      });
    } catch (error) {
      alert("Error: " + error);
    } finally {
      loadingData = false;
    }
  }
  JSON.stringify(
    {
      id: "${id}",
      alert_name: "${alert_name}",
      severity: "${severity}",
      status: "${status}",
      source: "${source}",
      timestamp: "${timestamp}",
      description: "${description}",
      details: {
        metric: "${metric}",
        current_value: "${current_value}",
        threshold: "${threshold}"
      },
      actions: [
        {
          text: "${action_text}",
          url: "${action_url}"
        }
      ]
    },
    null,
    2
  );
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="mt-4 flex justify-between"><div class="flex w-40">${validate_component(Select, "Select.Root").$$render(
      $$result,
      {
        portal: null,
        onSelectedChange: selectChange
      },
      {},
      {
        default: () => {
          return `${validate_component(Select_trigger, "Select.Trigger").$$render($$result, { id: "statusmonitor2" }, {}, {
            default: () => {
              return `${validate_component(Value, "Select.Value").$$render($$result, { placeholder: status }, {}, {})}`;
            }
          })} ${validate_component(Select_content, "Select.Content").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Group, "Select.Group").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Select_label, "Select.Label").$$render($$result, {}, {}, {
                    default: () => {
                      return `Status`;
                    }
                  })} ${validate_component(Select_item, "Select.Item").$$render(
                    $$result,
                    {
                      value: "ACTIVE",
                      label: "ACTIVE",
                      class: "text-sm font-medium"
                    },
                    {},
                    {
                      default: () => {
                        return `ACTIVE`;
                      }
                    }
                  )} ${validate_component(Select_item, "Select.Item").$$render(
                    $$result,
                    {
                      value: "INACTIVE",
                      label: "INACTIVE",
                      class: "text-sm font-medium"
                    },
                    {},
                    {
                      default: () => {
                        return `INACTIVE`;
                      }
                    }
                  )}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )} ${loadingData ? `${validate_component(Loader, "Loader").$$render(
      $$result,
      {
        class: "ml-2 mt-2 inline h-6 w-6 animate-spin"
      },
      {},
      {}
    )}` : ``}</div> ${$page.data.user.role != "member" ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Plus, "Plus").$$render($$result, { class: "mr-2 inline h-6 w-6" }, {}, {})}
      New Trigger`;
      }
    })}` : ``}</div> <div class="mt-4">${each(triggers, (trigger, i) => {
      return `${validate_component(Card, "Card.Root").$$render($$result, { class: "mb-4" }, {}, {
        default: () => {
          return `${validate_component(Card_header, "Card.Header").$$render($$result, { class: "relative" }, {}, {
            default: () => {
              return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
                default: () => {
                  return `${trigger.trigger_type == "webhook" ? `<img${add_attribute("src", base + "/webhooks.svg", 0)}${add_attribute("alt", trigger.trigger_type, 0)} class="mr-2 inline-block h-6 w-6">` : `${trigger.trigger_type == "slack" ? `<img${add_attribute("src", base + "/slack.svg", 0)}${add_attribute("alt", trigger.trigger_type, 0)} class="mr-2 inline-block h-6 w-6">` : `${trigger.trigger_type == "discord" ? `<img${add_attribute("src", base + "/discord.svg", 0)}${add_attribute("alt", trigger.trigger_type, 0)} class="mr-2 inline-block h-6 w-6">` : `${trigger.trigger_type == "email" ? `<img${add_attribute("src", base + "/email.png", 0)}${add_attribute("alt", trigger.trigger_type, 0)} class="mr-2 inline-block h-6 w-6">` : ``}`}`}`} ${escape(trigger.name)} `;
                }
              })} <div class="absolute right-3 top-3 flex gap-x-2">${validate_component(Button, "Button").$$render(
                $$result,
                {
                  variant: "secondary",
                  class: "h-8   p-2 ",
                  disabled: trigger.testLoaders == "loading"
                },
                {},
                {
                  default: () => {
                    return `${trigger.testLoaders == "loading" ? `${validate_component(Loader, "Loader").$$render(
                      $$result,
                      {
                        class: "mr-1 inline h-3 w-3 animate-spin"
                      },
                      {},
                      {}
                    )}` : ``} ${trigger.testLoaders == "success" ? `${validate_component(Check, "Check").$$render(
                      $$result,
                      {
                        class: "mr-1 inline h-3 w-3 text-green-500 "
                      },
                      {},
                      {}
                    )}` : ``} ${trigger.testLoaders == "error" ? `${validate_component(X, "X").$$render(
                      $$result,
                      {
                        class: "mr-1 inline h-3 w-3 text-red-500 "
                      },
                      {},
                      {}
                    )}` : ``} <span class="h-4 text-xs font-medium" data-svelte-h="svelte-1tn6qh0">Test Trigger</span> `;
                  }
                }
              )} ${$page.data.user.role != "member" ? `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  variant: "secondary",
                  class: " h-8 w-8 p-2",
                  href: "#" + trigger.id
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Settings, "Settings").$$render($$result, { class: "inline h-4 w-4" }, {}, {})} `;
                  }
                }
              )}` : ``}</div> `;
            }
          })} `;
        }
      })}`;
    })}</div> ${``}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_mode();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="min-h-[70vh]"><div class="flex justify-end">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "outline",
      href: "https://kener.ing/docs/triggers",
      class: " text-sm"
    },
    {},
    {
      default: () => {
        return `Documentation ${validate_component(ExternalLink, "ExternalLink").$$render($$result, { size: "12", class: "ml-1" }, {}, {})}`;
      }
    }
  )}</div> ${validate_component(TriggerInfo, "TriggerInfo").$$render($$result, { data }, {}, {})}</div>`;
});
export {
  Page as default
};
