import { c as create_ssr_component, v as validate_component, u as createEventDispatcher, o as onDestroy, d as add_attribute, a as subscribe, e as escape, b as each } from "../../../../../../../chunks/ssr.js";
import { b as base } from "../../../../../../../chunks/paths.js";
import { C as Card } from "../../../../../../../chunks/card.js";
import { C as Card_content } from "../../../../../../../chunks/card-content.js";
import { C as Card_description } from "../../../../../../../chunks/card-description.js";
import "clsx";
import { C as Card_header, a as Card_title } from "../../../../../../../chunks/card-title.js";
import "../../../../../../../chunks/index3.js";
import { I as Input } from "../../../../../../../chunks/input.js";
import { L as Label } from "../../../../../../../chunks/label.js";
import "../../../../../../../chunks/index7.js";
import { S as Select, a as Select_trigger, V as Value, b as Select_content, G as Group, c as Select_label, d as Select_item } from "../../../../../../../chunks/index8.js";
import { C as ColorPicker } from "../../../../../../../chunks/A11ySingleNotice.svelte_svelte_type_style_lang.js";
import { d as derivedMode } from "../../../../../../../chunks/stores2.js";
import { A as Alert, a as Alert_title, b as Alert_description } from "../../../../../../../chunks/alert-title.js";
import { I as Icon } from "../../../../../../../chunks/Icon.js";
import { B as Button } from "../../../../../../../chunks/button.js";
import { C as Check } from "../../../../../../../chunks/check.js";
import { C as Copy } from "../../../../../../../chunks/copy.js";
const Siren = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M7 18v-6a5 5 0 1 1 10 0v6" }],
    [
      "path",
      {
        "d": "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"
      }
    ],
    ["path", { "d": "M21 12h1" }],
    ["path", { "d": "M18.5 4.5 18 5" }],
    ["path", { "d": "M2 12h1" }],
    ["path", { "d": "M12 2v1" }],
    ["path", { "d": "m4.929 4.929.707.707" }],
    ["path", { "d": "M12 12v6" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "siren" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Siren$1 = Siren;
const Embed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { monitor } = $$props;
  let { theme = "light" } = $$props;
  let { bgc = "transparent" } = $$props;
  let { locale = "en" } = $$props;
  let containerId = `embed-container-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
  onDestroy(() => {
  });
  if ($$props.monitor === void 0 && $$bindings.monitor && monitor !== void 0)
    $$bindings.monitor(monitor);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.bgc === void 0 && $$bindings.bgc && bgc !== void 0)
    $$bindings.bgc(bgc);
  if ($$props.locale === void 0 && $$bindings.locale && locale !== void 0)
    $$bindings.locale(locale);
  return ` <div${add_attribute("id", containerId, 0)}></div>`;
});
const SvelteCode = '<script>\n  import { onMount, onDestroy, beforeUpdate } from "svelte";\n\n  export let monitor;\n  export let theme = "light";\n  export let bgc = "transparent";\n  export let locale = "en";\n\n  let iframe, listeners;\n  let containerId = `embed-container-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;\n  let isMounted = false;\n  let prevMonitor, prevTheme, prevBgc, prevLocale;\n\n  onMount(() => {\n    if (!monitor) return;\n\n    isMounted = true;\n    prevMonitor = monitor;\n    prevTheme = theme;\n    prevBgc = bgc;\n    prevLocale = locale;\n\n    const container = document.getElementById(containerId);\n    if (!container) return;\n\n    const uid = "KENER_" + ~~(new Date().getTime() / 86400000);\n    const uriEmbedded = `${monitor}?theme=${theme}&bgc=${bgc}&locale=${locale}`;\n\n    iframe = document.createElement("iframe");\n    iframe.src = uriEmbedded;\n    iframe.id = uid;\n    iframe.width = "0%";\n    iframe.height = "0";\n    iframe.frameBorder = "0";\n    iframe.allowTransparency = true;\n    iframe.sandbox =\n      "allow-modals allow-forms allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation allow-downloads";\n    iframe.allow = "midi; geolocation; microphone; camera; display-capture; encrypted-media;";\n\n    container.appendChild(iframe);\n\n    const setHeight = (data) => {\n      if (data.height !== undefined) {\n        iframe.height = data.height;\n      }\n    };\n\n    const setWidth = (data) => {\n      if (data.width !== undefined) {\n        iframe.width = data.width;\n      }\n    };\n\n    listeners = (event) => {\n      if (event.data && event.data.height !== undefined) {\n        setHeight(event.data);\n      }\n      if (event.data && event.data.width !== undefined) {\n        setWidth(event.data);\n      }\n    };\n\n    window.addEventListener("message", listeners, false);\n  });\n\n  beforeUpdate(() => {\n    if (\n      isMounted &&\n      iframe &&\n      (monitor !== prevMonitor || theme !== prevTheme || bgc !== prevBgc || locale !== prevLocale)\n    ) {\n      iframe.src = `${monitor}?theme=${theme}&bgc=${bgc}&locale=${locale}`;\n\n      // Update previous values\n      prevMonitor = monitor;\n      prevTheme = theme;\n      prevBgc = bgc;\n      prevLocale = locale;\n    }\n  });\n\n  onDestroy(() => {\n    if (iframe) {\n      window.removeEventListener("message", listeners);\n      iframe.remove();\n    }\n  });\n<\/script>\n\n<!-- Dynamic container with unique ID -->\n<div id={containerId}></div>\n';
const SvelteHowTo = '<script>\n	import EmbedMonitor from "./EmbedMonitor.svelte";\n<\/script>\n\n<EmbedMonitor monitor="{siteURL}{base}/embed/monitor-{selectedMonitor.value}" theme="{embedTheme}" bgc="{embedBgc.substr(1)}" locale="{embedLocale.value}"/>';
const ReactCode = 'import { useEffect, useRef, useState } from "react";\n\nconst EmbedMonitor = ({ monitor, theme = "light", bgc = "transparent", locale = "en" }) => {\n  const containerRef = useRef(null);\n  const iframeRef = useRef(null);\n  const [uid] = useState(`embed-container-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`);\n\n  useEffect(() => {\n    if (!monitor || !containerRef.current) return;\n\n    const container = containerRef.current;\n\n    // Remove previous iframe if exists\n    if (iframeRef.current) {\n      iframeRef.current.remove();\n    }\n\n    // Create a new iframe\n    const iframe = document.createElement("iframe");\n    iframe.src = `${monitor}?theme=${theme}&bgc=${bgc}&locale=${locale}`;\n    iframe.width = "0%";\n    iframe.height = "0";\n    iframe.frameBorder = "0";\n    iframe.allowTransparency = true;\n    iframe.sandbox =\n      "allow-modals allow-forms allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation allow-downloads";\n    iframe.allow = "midi; geolocation; microphone; camera; display-capture; encrypted-media;";\n\n    container.appendChild(iframe);\n    iframeRef.current = iframe;\n\n    const setHeight = (data) => {\n      if (data.height !== undefined) {\n        iframe.height = data.height;\n      }\n    };\n\n    const setWidth = (data) => {\n      if (data.width !== undefined) {\n        iframe.width = data.width;\n      }\n    };\n\n    const messageListener = (event) => {\n      if (event.data && event.data.height !== undefined) {\n        setHeight(event.data);\n      }\n      if (event.data && event.data.width !== undefined) {\n        setWidth(event.data);\n      }\n    };\n\n    window.addEventListener("message", messageListener);\n\n    return () => {\n      window.removeEventListener("message", messageListener);\n      if (iframe) {\n        iframe.remove();\n      }\n    };\n  }, [monitor, theme, bgc, locale]);\n\n  return <div id={uid} ref={containerRef}></div>;\n};\n\nexport default EmbedMonitor;';
const ReactHowTo = 'import EmbedMonitor from "./EmbedMonitor";\n\nfunction App() {\n  return (\n    <div>\n      <h2>React Embed</h2>\n      <EmbedMonitor monitor="{siteURL}{base}/embed/monitor-{selectedMonitor.value}" theme="{embedTheme}" bgc="{embedBgc.substr(1)}" locale="{embedLocale.value}"/>\n    </div>\n  );\n}\n\nexport default App;';
const VueCode = '<template>\n  <div :id="containerId" ref="containerRef"></div>\n</template>\n\n<script>\nimport { ref, watchEffect, onMounted, onBeforeUnmount } from "vue";\n\nexport default {\n  props: {\n    monitor: String,\n    theme: { type: String, default: "light" },\n    bgc: { type: String, default: "transparent" },\n    locale: { type: String, default: "en" }\n  },\n  setup(props) {\n    const containerRef = ref(null);\n    const iframeRef = ref(null);\n    const containerId = ref(`embed-container-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`);\n\n    let messageListener = null;\n\n    const createIframe = () => {\n      if (!props.monitor || !containerRef.value) return;\n\n      // Remove existing iframe if any\n      if (iframeRef.value) {\n        iframeRef.value.remove();\n      }\n\n      const iframe = document.createElement("iframe");\n      iframe.src = `${props.monitor}?theme=${props.theme}&bgc=${props.bgc}&locale=${props.locale}`;\n      iframe.width = "0%";\n      iframe.height = "0";\n      iframe.frameBorder = "0";\n      iframe.allowTransparency = true;\n      iframe.sandbox =\n        "allow-modals allow-forms allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation allow-downloads";\n      iframe.allow = "midi; geolocation; microphone; camera; display-capture; encrypted-media;";\n\n      containerRef.value.appendChild(iframe);\n      iframeRef.value = iframe;\n\n      messageListener = (event) => {\n        if (event.data?.height) iframe.height = event.data.height;\n        if (event.data?.width) iframe.width = event.data.width;\n      };\n\n      window.addEventListener("message", messageListener);\n    };\n\n    onMounted(createIframe);\n\n    watchEffect(() => {\n      createIframe();\n    });\n\n    onBeforeUnmount(() => {\n      window.removeEventListener("message", messageListener);\n      if (iframeRef.value) {\n        iframeRef.value.remove();\n      }\n    });\n\n    return { containerRef, containerId };\n  }\n};\n<\/script>';
const VueHowTo = '<template>\n  <div>\n    <h2>Vue Embed</h2>\n    <EmbedMonitor monitor="{siteURL}{base}/embed/monitor-{selectedMonitor.value}" theme="{embedTheme}" bgc="{embedBgc.substr(1)}" locale="{embedLocale.value}"/>\n  </div>\n</template>\n\n<script>\nimport EmbedMonitor from "./EmbedMonitor.vue";\n\nexport default {\n  components: { EmbedMonitor }\n};\n<\/script>';
const AngularCode = 'import { Component, Input, ElementRef, OnInit, OnDestroy, AfterViewInit } from \'@angular/core\';\n\n@Component({\n  selector: \'app-embed-monitor\',\n  template: `<div [id]="containerId"></div>`\n})\nexport class EmbedMonitorComponent implements OnInit, OnDestroy, AfterViewInit {\n  @Input() monitor!: string;\n  @Input() theme: string = "light";\n  @Input() bgc: string = "transparent";\n  @Input() locale: string = "en";\n\n  containerId = `embed-container-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;\n  private iframe: HTMLIFrameElement | null = null;\n  private messageListener!: (event: MessageEvent) => void;\n\n  constructor(private el: ElementRef) {}\n\n  ngOnInit() {}\n\n  ngAfterViewInit() {\n    this.createIframe();\n  }\n\n  ngOnChanges() {\n    this.createIframe();\n  }\n\n  createIframe() {\n    const container = this.el.nativeElement.querySelector(`#${this.containerId}`);\n    if (!this.monitor || !container) return;\n\n    // Remove previous iframe if it exists\n    if (this.iframe) {\n      this.iframe.remove();\n    }\n\n    this.iframe = document.createElement("iframe");\n    this.iframe.src = `${this.monitor}?theme=${this.theme}&bgc=${this.bgc}&locale=${this.locale}`;\n    this.iframe.width = "0%";\n    this.iframe.height = "0";\n    this.iframe.frameBorder = "0";\n    this.iframe.allowTransparency = true;\n    this.iframe.sandbox =\n      "allow-modals allow-forms allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation allow-downloads";\n    this.iframe.allow = "midi; geolocation; microphone; camera; display-capture; encrypted-media;";\n\n    container.appendChild(this.iframe);\n\n    this.messageListener = (event: MessageEvent) => {\n      if (event.data?.height) this.iframe!.height = event.data.height;\n      if (event.data?.width) this.iframe!.width = event.data.width;\n    };\n\n    window.addEventListener("message", this.messageListener);\n  }\n\n  ngOnDestroy() {\n    window.removeEventListener("message", this.messageListener);\n    if (this.iframe) {\n      this.iframe.remove();\n    }\n  }\n}';
const AngularHowTo = '<app-embed-monitor monitor="{siteURL}{base}/embed/monitor-{selectedMonitor.value}" theme="{embedTheme}" bgc="{embedBgc.substr(1)}" locale="{embedLocale.value}"></app-embed-monitor>';
const HTMLHowTo = '<iframe \n	src="{siteURL}{base}/embed/monitor-{selectedMonitor.value}?bgc={embedBgc.substr(1)}&locale={embedLocale.value}&theme={embedTheme}" \n	width="100%" \n	height="200" \n	allowfullscreen="allowfullscreen" \n	allowpaymentrequest \n	frameborder="0">\n</iframe>';
const JSHowTo = '<script async src="{siteURL}{base}/embed/monitor-{selectedMonitor.value}/js?bgc={embedBgc.substr(1)}&locale={embedLocale.value}&theme={embedTheme}&monitor={siteURL}{base}/embed/monitor-{selectedMonitor.value}"><\/script>';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $mode, $$unsubscribe_mode;
  $$unsubscribe_mode = subscribe(derivedMode, (value) => $mode = value);
  let { data } = $$props;
  let siteName = data.siteName;
  let siteURL = data.siteURL;
  let monitors = data.monitors.map((monitor) => {
    return { label: monitor.name, value: monitor.tag };
  });
  let allMonitorObj = { label: siteName, value: "_" };
  monitors.unshift(allMonitorObj);
  let locales = data.i18n.locales.filter((locale) => {
    return locale.selected;
  }).map((locale) => {
    return { label: locale.name, value: locale.code };
  });
  let selectedMonitor = monitors[0];
  let allStyles = ["flat", "flat-square", "for-the-badge", "plastic", "social"];
  let badges = [
    {
      name: "Create Status Badge",
      description: "Create a status badge for your monitor. You can customize the label color, status color, and style.",
      url: "",
      labelColor: "",
      color: "",
      style: "flat",
      id: "status_themed",
      label: ""
    },
    {
      name: "Create Uptime Badge",
      description: "Create an uptime badge for your monitor. You can customize the label color, status color, and style.",
      url: "",
      labelColor: "#333",
      color: "#7a44dc",
      style: "flat",
      id: "uptime_themed",
      label: "",
      sinceLast: 90 * 24 * 60 * 60,
      hideDuration: "Show Label"
    }
  ];
  function updateBadges() {
    badges = badges.map((badge) => {
      if (selectedMonitor.value == "_") {
        badge.label = siteName;
        return badge;
      }
      badge.label = data.monitors.find((monitor) => monitor.tag == selectedMonitor.value).name;
      return badge;
    });
  }
  let embedTheme = "dark";
  let embedBgc = "#212226";
  let embedLocale = locales.find((l) => l.value == data.i18n.defaultLocale);
  let embedDocs = [
    {
      title: "Svelte 4",
      code: SvelteCode,
      howto: SvelteHowTo,
      guide1: "To embed the monitor on your website, you can use the following code snippet. Save the below snippet in a svelte file example: EmbedMonitor.svelte",
      guide2: "Then, import the Embed component in your svelte file and use it as shown below:"
    },
    {
      title: "React",
      code: ReactCode,
      howto: ReactHowTo,
      guide1: "To embed the monitor on your website, you can use the following code snippet. Save the below snippet in a react file example: EmbedMonitor.jsx",
      guide2: "Then, import the Embed component in your react file and use it as shown below:"
    },
    {
      title: "Vue 3",
      code: VueCode,
      howto: VueHowTo,
      guide1: "To embed the monitor on your website, you can use the following code snippet. Save the below snippet in a vue file example: EmbedMonitor.vue",
      guide2: "Then, import the Embed component in your vue file and use it as shown below:"
    },
    {
      title: "Angular",
      code: AngularCode,
      howto: AngularHowTo,
      guide1: "To embed the monitor on your website, you can use the following code snippet. Save the snippet in an Angular component file, for example: `embed-monitor.component.ts`.",
      guide2: "Then, import the `EmbedMonitorComponent` in your Angular module or component and use it as shown below:"
    },
    {
      title: "HTML",
      code: "",
      howto: HTMLHowTo,
      guide1: "",
      guide2: "To embed the monitor on your website, you can use the following code snippet. This uses an iframe to embed the monitor."
    },
    {
      title: "JavaScript",
      code: "",
      howto: JSHowTo,
      guide1: "",
      guide2: "To embed the monitor on your website, you can use the following code snippet. You can paste this line of code in your HTML file. It will get updated automatically."
    }
  ];
  let selectedDoc;
  function embedDocChangeRun(title) {
    selectedDoc = JSON.parse(JSON.stringify(embedDocs.find((doc) => doc.title == title)));
    selectedDoc.howto = selectedDoc.howto.replaceAll("{embedTheme}", embedTheme);
    selectedDoc.howto = selectedDoc.howto.replaceAll("{embedBgc.substr(1)}", embedBgc.substr(1));
    selectedDoc.howto = selectedDoc.howto.replaceAll("{embedLocale.value}", embedLocale.value);
    selectedDoc.howto = selectedDoc.howto.replaceAll("{selectedMonitor.value}", selectedMonitor.value);
    selectedDoc.howto = selectedDoc.howto.replaceAll("{siteURL}", data.siteURL);
    selectedDoc.howto = selectedDoc.howto.replaceAll("{base}", base);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="min-h-[70vh]">${validate_component(Card, "Card.Root").$$render($$result, { class: "mt-4" }, {}, {
      default: () => {
        return `${validate_component(Card_header, "Card.Header").$$render($$result, { class: "border-b" }, {}, {
          default: () => {
            return `${validate_component(Card_title, "Card.Title").$$render($$result, { class: "flex justify-between" }, {}, {
              default: () => {
                return `<div data-svelte-h="svelte-16ql548">Badges</div>`;
              }
            })} ${validate_component(Card_description, "Card.Description").$$render($$result, {}, {}, {
              default: () => {
                return `Create Badges for your monitors`;
              }
            })}`;
          }
        })} ${validate_component(Card_content, "Card.Content").$$render($$result, { class: "flex flex-col gap-y-4 pt-4" }, {}, {
          default: () => {
            return `${!!!siteURL ? `${validate_component(Alert, "Alert.Root").$$render($$result, { variant: "destructive" }, {}, {
              default: () => {
                return `${validate_component(Siren$1, "Siren").$$render($$result, { class: "h-4 w-4" }, {}, {})} ${validate_component(Alert_title, "Alert.Title").$$render($$result, {}, {}, {
                  default: () => {
                    return `Error`;
                  }
                })} ${validate_component(Alert_description, "Alert.Description").$$render($$result, {}, {}, {
                  default: () => {
                    return `Badges will not work as you have not set the site URL in the settings.
            <a href="${escape(base, true) + "/manage/app/site"}" class="text-card-foreground" data-svelte-h="svelte-1v9ojsm">Set site URL</a>`;
                  }
                })}`;
              }
            })}` : ``} <div class="flex flex-col gap-y-2">${validate_component(Label, "Label").$$render($$result, { for: "customLabsasd" }, {}, {
              default: () => {
                return `Select Monitor`;
              }
            })} ${validate_component(Select, "Select.Root").$$render(
              $$result,
              {
                portal: null,
                onSelectedChange: (e) => {
                  selectedMonitor = e;
                  updateBadges();
                },
                selected: selectedMonitor
              },
              {},
              {
                default: () => {
                  return `${validate_component(Select_trigger, "Select.Trigger").$$render($$result, { id: "mm", class: "w-full" }, {}, {
                    default: () => {
                      return `${validate_component(Value, "Select.Value").$$render($$result, { placeholder: "Select Monitor" }, {}, {})}`;
                    }
                  })} ${validate_component(Select_content, "Select.Content").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Group, "Select.Group").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Select_label, "Select.Label").$$render($$result, {}, {}, {
                            default: () => {
                              return `Select Monitor`;
                            }
                          })} ${each(monitors, (monitor) => {
                            return `${validate_component(Select_item, "Select.Item").$$render(
                              $$result,
                              {
                                value: monitor.value,
                                class: "text-sm font-medium"
                              },
                              {},
                              {
                                default: () => {
                                  return `${escape(monitor.label)}`;
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
            )} ${!!selectedMonitor ? `<div class="grid grid-cols-2 gap-2">${each(badges, (badge, i) => {
              return `<div class="col-span-1 flex flex-col justify-between gap-y-4 rounded-md border p-3"${add_attribute("id", badge.id, 0)}><div class="flex flex-col gap-y-2"><h3 class="text-lg font-semibold">${escape(badge.name)}</h3> <p class="text-sm font-medium text-muted-foreground">${escape(badge.description)}</p> <div class="flex flex-row gap-x-2"><div class="like-input mt-0.5 h-10 rounded-sm border px-1.5 py-1.5 text-sm font-medium"><div style="display: contents; --input-size:16px;">${validate_component(ColorPicker, "ColorPicker").$$render(
                $$result,
                {
                  position: "responsive",
                  isAlpha: false,
                  isDark: $mode == "dark",
                  isTextInput: true,
                  label: "Label Color",
                  hex: badge.labelColor
                },
                {
                  hex: ($$value) => {
                    badge.labelColor = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div></div> <div class="like-input mt-0.5 h-10 rounded-sm border px-1.5 py-1.5 text-sm font-medium"><div style="display: contents; --input-size:16px;">${validate_component(ColorPicker, "ColorPicker").$$render(
                $$result,
                {
                  position: "responsive",
                  isAlpha: false,
                  isDark: $mode == "dark",
                  isTextInput: true,
                  label: "Status Color",
                  hex: badge.color
                },
                {
                  hex: ($$value) => {
                    badge.color = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div> </div></div> <div class="grid grid-cols-2 gap-x-2"><div>${validate_component(Label, "Label").$$render($$result, { for: "customLabel" + i }, {}, {
                default: () => {
                  return `Custom Label`;
                }
              })} ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  class: "mt-2",
                  type: "text",
                  id: "customLabel" + i,
                  placeholder: "any label name",
                  value: badge.label
                },
                {
                  value: ($$value) => {
                    badge.label = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "mm2" + i }, {}, {
                default: () => {
                  return `Badge Style`;
                }
              })} ${validate_component(Select, "Select.Root").$$render(
                $$result,
                {
                  portal: null,
                  onSelectedChange: (e) => {
                    badge.style = e.value;
                  },
                  selected: { label: badge.style, value: badge.style }
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Select_trigger, "Select.Trigger").$$render($$result, { id: "mm2" + i, class: "mt-2 w-full" }, {}, {
                      default: () => {
                        return `${validate_component(Value, "Select.Value").$$render($$result, { placeholder: "Select Style" }, {}, {})} `;
                      }
                    })} ${validate_component(Select_content, "Select.Content").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Group, "Select.Group").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(Select_label, "Select.Label").$$render($$result, {}, {}, {
                              default: () => {
                                return `Select Style`;
                              }
                            })} ${each(allStyles, (style) => {
                              return `${validate_component(Select_item, "Select.Item").$$render(
                                $$result,
                                {
                                  value: style,
                                  class: "text-sm font-medium"
                                },
                                {},
                                {
                                  default: () => {
                                    return `${escape(style)}`;
                                  }
                                }
                              )}`;
                            })} `;
                          }
                        })} `;
                      }
                    })} `;
                  }
                }
              )} </div></div> ${badge.id == "uptime_themed" ? `<div class="grid grid-cols-2 gap-x-2"><div>${validate_component(Label, "Label").$$render($$result, { for: "customLabel22" + i }, {}, {
                default: () => {
                  return `Duration in seconds`;
                }
              })} ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  class: "mt-2",
                  type: "text",
                  id: "customLabel22" + i,
                  placeholder: "duration in seconds",
                  value: badge.sinceLast
                },
                {
                  value: ($$value) => {
                    badge.sinceLast = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "customLabel23" + i }, {}, {
                default: () => {
                  return `Duration Label`;
                }
              })} ${validate_component(Select, "Select.Root").$$render(
                $$result,
                {
                  portal: null,
                  onSelectedChange: (e) => {
                    badge.hideDuration = e.value;
                  },
                  selected: {
                    label: badge.hideDuration,
                    value: badge.hideDuration
                  }
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Select_trigger, "Select.Trigger").$$render($$result, { id: "mm3" + i, class: "mt-2 w-full" }, {}, {
                      default: () => {
                        return `${validate_component(Value, "Select.Value").$$render($$result, { placeholder: "Duration Label" }, {}, {})} `;
                      }
                    })} ${validate_component(Select_content, "Select.Content").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Group, "Select.Group").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(Select_label, "Select.Label").$$render($$result, {}, {}, {
                              default: () => {
                                return `Duration Label`;
                              }
                            })} ${validate_component(Select_item, "Select.Item").$$render(
                              $$result,
                              {
                                value: "Show Label",
                                class: "text-sm font-medium"
                              },
                              {},
                              {
                                default: () => {
                                  return `Show Label`;
                                }
                              }
                            )} ${validate_component(Select_item, "Select.Item").$$render(
                              $$result,
                              {
                                value: "Hide Label",
                                class: "text-sm font-medium"
                              },
                              {},
                              {
                                default: () => {
                                  return `Hide Label`;
                                }
                              }
                            )} `;
                          }
                        })} `;
                      }
                    })} `;
                  }
                }
              )}</div> </div>` : ``}</div> <div class="my-2 flex justify-between rounded-sm border p-2"><div>${badge.id == "status_themed" ? `<img id="${escape(badge.id, true) + "_img"}"${add_attribute("src", `${base}/badge/${selectedMonitor.value}/status?labelColor=${badge.labelColor.substr(1)}&color=${badge.color.substr(1)}&style=${badge.style}&label=${badge.label}`, 0)} alt="Status badge" class="mt-1">` : `${badge.id == "uptime_themed" ? `<img id="${escape(badge.id, true) + "_img"}"${add_attribute("src", `${base}/badge/${selectedMonitor.value}/uptime?labelColor=${badge.labelColor.substr(1)}&color=${badge.color.substr(1)}&style=${badge.style}&label=${badge.label}&sinceLast=${badge.sinceLast}&hideDuration=${badge.hideDuration.includes("Hide")}`, 0)} alt="Uptime badge" class="mt-1">` : ``}`}</div> <div>${validate_component(Button, "Button").$$render(
                $$result,
                {
                  variant: "ghost",
                  class: "copybtn relative mt-1 h-5 w-5 p-0"
                },
                {},
                {
                  default: () => {
                    return `<span class="check-btn absolute top-0">${validate_component(Check, "Check").$$render(
                      $$result,
                      {
                        class: "inline-block h-4 w-4 text-green-500"
                      },
                      {},
                      {}
                    )}</span> <span class="copy-btn absolute top-0">${validate_component(Copy, "Copy").$$render($$result, { class: " inline-block h-4 w-4" }, {}, {})}</span> `;
                  }
                }
              )} </div></div> </div>`;
            })} <div class="col-span-2 flex flex-row gap-x-2"><div class="flex w-1/2 justify-between rounded-sm border p-2"><div class="text-lg font-semibold"><img id="oooo_img"${add_attribute("src", `${base}/badge/${selectedMonitor.value}/dot`, 0)} alt="Uptime badge" class="inline-block">
                  Liveness Badge</div> <div>${validate_component(Button, "Button").$$render(
              $$result,
              {
                variant: "ghost",
                class: "copybtn relative mt-1 h-5 w-5 p-0"
              },
              {},
              {
                default: () => {
                  return `<span class="check-btn absolute top-0">${validate_component(Check, "Check").$$render(
                    $$result,
                    {
                      class: "inline-block h-4 w-4 text-green-500"
                    },
                    {},
                    {}
                  )}</span> <span class="copy-btn absolute top-0">${validate_component(Copy, "Copy").$$render($$result, { class: " inline-block h-4 w-4" }, {}, {})}</span>`;
                }
              }
            )}</div></div> <div class="flex w-1/2 justify-between rounded-sm border p-2"><div class="text-lg font-semibold"><img id="oooo_img"${add_attribute("src", `${base}/badge/${selectedMonitor.value}/dot?animate=ping`, 0)} alt="Uptime badge" class="inline-block">
                  Animated Liveness Badge</div> <div>${validate_component(Button, "Button").$$render(
              $$result,
              {
                variant: "ghost",
                class: "copybtn relative mt-1 h-5 w-5 p-0"
              },
              {},
              {
                default: () => {
                  return `<span class="check-btn absolute top-0">${validate_component(Check, "Check").$$render(
                    $$result,
                    {
                      class: "inline-block h-4 w-4 text-green-500"
                    },
                    {},
                    {}
                  )}</span> <span class="copy-btn absolute top-0">${validate_component(Copy, "Copy").$$render($$result, { class: " inline-block h-4 w-4" }, {}, {})}</span>`;
                }
              }
            )}</div></div></div> ${selectedMonitor.value != "_" ? `<div class="col-span-2 flex flex-col gap-y-2 rounded-md border p-3"><h3 class="text-lg font-semibold" data-svelte-h="svelte-k5k8su">Embed Monitor</h3> <p class="text-sm font-medium text-muted-foreground" data-svelte-h="svelte-s4bxuk">Embed your monitor on your website. You can customize the theme, background color, and locale.</p> <div class="flex flex-row gap-x-2"><div class="w-48">${validate_component(Label, "Label").$$render($$result, { for: "theme" }, {}, {
              default: () => {
                return `Theme`;
              }
            })} ${validate_component(Select, "Select.Root").$$render(
              $$result,
              {
                portal: null,
                onSelectedChange: (e) => {
                  embedTheme = e.value;
                },
                selected: { label: embedTheme, value: embedTheme }
              },
              {},
              {
                default: () => {
                  return `${validate_component(Select_trigger, "Select.Trigger").$$render($$result, { id: "theme", class: "mt-2 w-full" }, {}, {
                    default: () => {
                      return `${validate_component(Value, "Select.Value").$$render($$result, { placeholder: "Select Theme" }, {}, {})}`;
                    }
                  })} ${validate_component(Select_content, "Select.Content").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Group, "Select.Group").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Select_label, "Select.Label").$$render($$result, {}, {}, {
                            default: () => {
                              return `Select Theme`;
                            }
                          })} ${validate_component(Select_item, "Select.Item").$$render(
                            $$result,
                            {
                              value: "light",
                              class: "text-sm font-medium"
                            },
                            {},
                            {
                              default: () => {
                                return `Light`;
                              }
                            }
                          )} ${validate_component(Select_item, "Select.Item").$$render(
                            $$result,
                            {
                              value: "dark",
                              class: "text-sm font-medium"
                            },
                            {},
                            {
                              default: () => {
                                return `Dark`;
                              }
                            }
                          )}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              }
            )}</div> <div class="flex flex-col gap-y-2 pt-1.5">${validate_component(Label, "Label").$$render($$result, { for: "bgc" }, {}, {
              default: () => {
                return `Background Color`;
              }
            })} <div class="like-input mt-0.5 h-10 rounded-sm border px-1.5 py-1.5 text-sm font-medium"><div style="display: contents; --input-size:16px;">${validate_component(ColorPicker, "ColorPicker").$$render(
              $$result,
              {
                position: "responsive",
                isAlpha: false,
                isDark: $mode == "dark",
                isTextInput: true,
                label: "Background Color",
                hex: embedBgc
              },
              {
                hex: ($$value) => {
                  embedBgc = $$value;
                  $$settled = false;
                }
              },
              {}
            )}</div></div></div> <div class="w-48">${validate_component(Label, "Label").$$render($$result, { for: "locale" }, {}, {
              default: () => {
                return `Locale`;
              }
            })} ${validate_component(Select, "Select.Root").$$render(
              $$result,
              {
                portal: null,
                onSelectedChange: (e) => {
                  embedLocale = e;
                },
                selected: embedLocale
              },
              {},
              {
                default: () => {
                  return `${validate_component(Select_trigger, "Select.Trigger").$$render($$result, { id: "locale", class: "mt-2 w-full" }, {}, {
                    default: () => {
                      return `${validate_component(Value, "Select.Value").$$render($$result, { placeholder: "Select Locale" }, {}, {})}`;
                    }
                  })} ${validate_component(Select_content, "Select.Content").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Group, "Select.Group").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Select_label, "Select.Label").$$render($$result, {}, {}, {
                            default: () => {
                              return `Select Locale`;
                            }
                          })} ${each(locales, (locale) => {
                            return `${validate_component(Select_item, "Select.Item").$$render(
                              $$result,
                              {
                                value: locale.value,
                                class: "text-sm font-medium"
                              },
                              {},
                              {
                                default: () => {
                                  return `${escape(locale.label)}`;
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
            )}</div></div> <div class="my-2">${validate_component(Embed, "Embed").$$render(
              $$result,
              {
                monitor: siteURL + base + "/embed/monitor-" + selectedMonitor.value,
                theme: embedTheme,
                bgc: embedBgc.substr(1),
                locale: embedLocale.value
              },
              {},
              {}
            )}</div> <div class="flex flex-col gap-y-2"><h3 class="text-lg font-semibold" data-svelte-h="svelte-w3uljh">Get the Code</h3> <div>${validate_component(Select, "Select.Root").$$render(
              $$result,
              {
                portal: null,
                onSelectedChange: (e) => {
                  embedDocChangeRun(e.value);
                }
              },
              {},
              {
                default: () => {
                  return `${validate_component(Select_trigger, "Select.Trigger").$$render($$result, { id: "docs", class: "mt-2 w-48" }, {}, {
                    default: () => {
                      return `${validate_component(Value, "Select.Value").$$render($$result, { placeholder: "Select Language" }, {}, {})}`;
                    }
                  })} ${validate_component(Select_content, "Select.Content").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Group, "Select.Group").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Select_label, "Select.Label").$$render($$result, {}, {}, {
                            default: () => {
                              return `Select Language`;
                            }
                          })} ${each(embedDocs, (doc) => {
                            return `${validate_component(Select_item, "Select.Item").$$render(
                              $$result,
                              {
                                value: doc.title,
                                class: "text-sm font-medium"
                              },
                              {},
                              {
                                default: () => {
                                  return `${escape(doc.title)}`;
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
            )}</div> ${!!selectedDoc ? `<div class="flex flex-col gap-y-2">${!!selectedDoc.code ? `<p>${escape(selectedDoc.guide1)}</p> <div class="relative rounded-md bg-background p-3 text-sm">${validate_component(Button, "Button").$$render(
              $$result,
              {
                variant: "secondary",
                class: "copybtn absolute right-2 top-2 mt-1 h-8 w-8"
              },
              {},
              {
                default: () => {
                  return `<span class="check-btn absolute top-1">${validate_component(Check, "Check").$$render(
                    $$result,
                    {
                      class: "inline-block h-4 w-4 text-green-500"
                    },
                    {},
                    {}
                  )}</span> <span class="copy-btn absolute top-1">${validate_component(Copy, "Copy").$$render($$result, { class: " inline-block h-4 w-4" }, {}, {})}</span>`;
                }
              }
            )} <pre class="max-h-96 overflow-auto"><code class="language-js">${escape(selectedDoc.code)}</code></pre></div>` : ``} ${!!selectedDoc.howto ? `<p>${escape(selectedDoc.guide2)}</p> <div class="relative rounded-md bg-background p-3 text-sm">${validate_component(Button, "Button").$$render(
              $$result,
              {
                variant: "secondary",
                class: "copybtn absolute right-2 top-2 mt-1 h-8 w-8"
              },
              {},
              {
                default: () => {
                  return `<span class="check-btn absolute top-1">${validate_component(Check, "Check").$$render(
                    $$result,
                    {
                      class: "inline-block h-4 w-4 text-green-500"
                    },
                    {},
                    {}
                  )}</span> <span class="copy-btn absolute top-1">${validate_component(Copy, "Copy").$$render($$result, { class: " inline-block h-4 w-4" }, {}, {})}</span>`;
                }
              }
            )} <pre class="overflow-auto"><code class="language-js">${escape(selectedDoc.howto)}</code></pre></div>` : ``}</div>` : ``}</div></div>` : ``}</div>` : ``}</div>`;
          }
        })}`;
      }
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_mode();
  return $$rendered;
});
export {
  Page as default
};
