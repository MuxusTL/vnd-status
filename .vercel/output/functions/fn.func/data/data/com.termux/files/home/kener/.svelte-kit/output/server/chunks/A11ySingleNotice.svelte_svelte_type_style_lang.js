import { D as tick } from "./index3.js";
import { c as create_ssr_component, u as createEventDispatcher, d as add_attribute, x as add_styles, v as validate_component, m as missing_component, e as escape } from "./ssr.js";
import { colord } from "colord";
const Slider_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".slider.svelte-w4j1dz.svelte-w4j1dz{---track-width:var(--track-width, unset);---track-height:var(--track-height, 6px);---track-background:var(--track-background, #949494);---track-border:var(--track-border, none);---thumb-size:var(--thumb-size, 16px);---thumb-background:var(--thumb-background, #2d2d2d);---thumb-border:var(--thumb-border, none);---position:var(--position, 0px);---margin-inline-thumb-bigger:max(var(---thumb-size) - var(---track-height), 0px);---margin-inline-thumb-smaller:max(var(---track-height) - var(---thumb-size), 0px);position:relative;margin:auto;user-select:none;-webkit-user-select:none;background-color:transparent}.slider.svelte-w4j1dz.svelte-w4j1dz::before{background-color:transparent}[aria-orientation='horizontal'].svelte-w4j1dz.svelte-w4j1dz{width:var(---track-width);max-width:calc(100% - 2 * var(---margin-inline-thumb-bigger));height:calc(max(var(---track-height), var(---thumb-size)) + 4px);height:max(var(---track-height), var(---thumb-size));margin-inline:var(---margin-inline-thumb-bigger);margin-block:var(--margin-block, 8px)}[aria-orientation='vertical'].svelte-w4j1dz.svelte-w4j1dz{width:calc(max(var(---track-height), var(---thumb-size)) + 4px);width:max(var(---track-height), var(---thumb-size));height:var(---track-width);max-height:calc(100% - 2 * var(---margin-inline-thumb-bigger));margin-block:var(---margin-inline-thumb-bigger);margin-inline:var(--margin-block, 8px)}.track.svelte-w4j1dz.svelte-w4j1dz{position:absolute;pointer-events:none;background:var(---track-background);border:var(---track-border);border-radius:calc(var(---track-height) / 2);box-sizing:border-box}[aria-orientation='horizontal'].svelte-w4j1dz .track.svelte-w4j1dz{height:var(---track-height);top:50%;transform:translateY(-50%);left:0;right:0}[aria-orientation='vertical'].svelte-w4j1dz .track.svelte-w4j1dz{width:var(---track-height);left:50%;transform:translateX(-50%);top:0;bottom:0}.thumb.svelte-w4j1dz.svelte-w4j1dz{pointer-events:none;position:absolute;height:var(---thumb-size);width:var(---thumb-size);border-radius:calc(var(---thumb-size) / 2);background:var(---thumb-background);border:var(---thumb-border);box-sizing:border-box;transform:translate(-50%, -50%);--margin-left:(\n				2 * var(---track-height) - var(---thumb-size) - var(---margin-inline-thumb-smaller)\n			) / 2;--left:calc(var(---position) * (100% - 2 * var(--margin-left)) + var(--margin-left))}[aria-orientation='horizontal'].svelte-w4j1dz:not(.reverse) .thumb.svelte-w4j1dz{top:50%;left:var(--left)}[aria-orientation='vertical'].svelte-w4j1dz:not(.reverse) .thumb.svelte-w4j1dz{left:50%;bottom:calc(var(--left) - var(---thumb-size))}[aria-orientation='horizontal'].reverse.svelte-w4j1dz .thumb.svelte-w4j1dz{top:50%;right:calc(var(--left) - var(---thumb-size))}[aria-orientation='vertical'].reverse.svelte-w4j1dz .thumb.svelte-w4j1dz{left:50%;top:calc(var(--left))}.slider.svelte-w4j1dz.svelte-w4j1dz:focus-visible{outline:none}.slider.svelte-w4j1dz:focus-visible .track.svelte-w4j1dz{outline:2px solid var(--focus-color, red);outline-offset:2px}",
  map: null
};
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _min;
  let _max;
  let position;
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { step = 1 } = $$props;
  let { value = 50 } = $$props;
  let { ariaValueText = (current) => current.toString() } = $$props;
  let { name = void 0 } = $$props;
  let { direction = "horizontal" } = $$props;
  let { reverse = false } = $$props;
  let { keyboardOnly = false } = $$props;
  let { slider = void 0 } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { ariaLabelledBy = void 0 } = $$props;
  let { ariaControls = void 0 } = $$props;
  let { isDragging = false } = $$props;
  createEventDispatcher();
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.ariaValueText === void 0 && $$bindings.ariaValueText && ariaValueText !== void 0)
    $$bindings.ariaValueText(ariaValueText);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  if ($$props.keyboardOnly === void 0 && $$bindings.keyboardOnly && keyboardOnly !== void 0)
    $$bindings.keyboardOnly(keyboardOnly);
  if ($$props.slider === void 0 && $$bindings.slider && slider !== void 0)
    $$bindings.slider(slider);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.ariaLabelledBy === void 0 && $$bindings.ariaLabelledBy && ariaLabelledBy !== void 0)
    $$bindings.ariaLabelledBy(ariaLabelledBy);
  if ($$props.ariaControls === void 0 && $$bindings.ariaControls && ariaControls !== void 0)
    $$bindings.ariaControls(ariaControls);
  if ($$props.isDragging === void 0 && $$bindings.isDragging && isDragging !== void 0)
    $$bindings.isDragging(isDragging);
  $$result.css.add(css$7);
  _min = typeof min === "string" ? parseFloat(min) : min;
  _max = typeof max === "string" ? parseFloat(max) : max;
  position = ((value - _min) / (_max - _min) * 1).toFixed(4);
  return ` <div class="${["slider svelte-w4j1dz", reverse ? "reverse" : ""].join(" ").trim()}" role="slider"${add_attribute("aria-orientation", direction, 0)}${add_attribute("aria-valuemax", _max, 0)}${add_attribute("aria-valuemin", _min, 0)}${add_attribute("aria-valuenow", value, 0)}${add_attribute("aria-valuetext", ariaValueText(value), 0)}${add_attribute("aria-label", ariaLabel, 0)}${add_attribute("aria-labelledby", ariaLabelledBy, 0)}${add_attribute("aria-controls", ariaControls, 0)} tabindex="0"${add_styles({ "--position": position })}${add_attribute("this", slider, 0)}><div class="track svelte-w4j1dz"></div> <div class="thumb svelte-w4j1dz"></div></div> ${name ? `<input type="hidden"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)}>` : ``} `;
});
const Picker_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".picker.svelte-1x9tz9y{position:relative;display:inline-block;width:var(--picker-width, 200px);height:var(--picker-height, 200px);background:linear-gradient(#ffffff00, #000000ff), linear-gradient(0.25turn, #ffffffff, #00000000),\n			var(--picker-color-bg);border-radius:var(--picker-radius, 8px);outline:none;user-select:none}.s.svelte-1x9tz9y,.v.svelte-1x9tz9y{position:absolute;--track-background:none;--track-border:none;--thumb-background:none;--thumb-border:none;--thumb-size:2px;--margin-block:0;--track-height:var(--picker-indicator-size, 10px);user-select:none;-webkit-user-select:none}.s.svelte-1x9tz9y{top:calc(var(--pos-y) * (var(--picker-height, 200px) - var(--picker-indicator-size, 10px) - 4px) / 100 + 2px);left:2px;--track-width:calc(var(--picker-width, 200px) - 4px)}.v.svelte-1x9tz9y{top:2px;left:calc(var(--pos-x) * (var(--picker-width, 200px) - var(--picker-indicator-size, 10px) - 4px) / 100 + 2px);--track-width:calc(var(--picker-height, 200px) - 4px)}",
  map: null
};
const Picker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  let { components } = $$props;
  let { h } = $$props;
  let { s } = $$props;
  let { v } = $$props;
  let { isDark } = $$props;
  let { texts } = $$props;
  let picker;
  let pickerColorBg;
  let pos = { x: 100, y: 0 };
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.h === void 0 && $$bindings.h && h !== void 0)
    $$bindings.h(h);
  if ($$props.s === void 0 && $$bindings.s && s !== void 0)
    $$bindings.s(s);
  if ($$props.v === void 0 && $$bindings.v && v !== void 0)
    $$bindings.v(v);
  if ($$props.isDark === void 0 && $$bindings.isDark && isDark !== void 0)
    $$bindings.isDark(isDark);
  if ($$props.texts === void 0 && $$bindings.texts && texts !== void 0)
    $$bindings.texts(texts);
  $$result.css.add(css$6);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (typeof h === "number")
        pickerColorBg = colord({ h, s: 100, v: 100, a: 1 }).toHex();
    }
    {
      if (typeof s === "number" && typeof v === "number" && picker)
        pos = { x: s, y: 100 - v };
    }
    {
      dispatch("input", { s, v });
    }
    $$rendered = `  <div class="picker svelte-1x9tz9y"${add_styles({ "--picker-color-bg": pickerColorBg })}${add_attribute("this", picker, 0)}>${validate_component(components.pickerIndicator || missing_component, "svelte:component").$$render($$result, { pos, isDark }, {}, {})} <div class="s svelte-1x9tz9y"${add_styles({ "--pos-y": pos.y })}>${validate_component(Slider, "Slider").$$render(
      $$result,
      {
        keyboardOnly: true,
        ariaValueText: (value) => `${value}%`,
        ariaLabel: texts.label.s,
        value: s
      },
      {
        value: ($$value) => {
          s = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="v svelte-1x9tz9y"${add_styles({ "--pos-x": pos.x })}>${validate_component(Slider, "Slider").$$render(
      $$result,
      {
        keyboardOnly: true,
        ariaValueText: (value) => `${value}%`,
        direction: "vertical",
        ariaLabel: texts.label.v,
        value: v
      },
      {
        value: ($$value) => {
          v = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> `;
  } while (!$$settled);
  return $$rendered;
});
const PickerIndicator_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "div.svelte-i5mg2p{position:absolute;left:calc(var(--pos-x) * (var(--picker-width, 200px) - var(--picker-indicator-size, 10px) - 4px) / 100 + 2px);top:calc(var(--pos-y) * (var(--picker-height, 200px) - var(--picker-indicator-size, 10px) - 4px) / 100 + 2px);width:var(--picker-indicator-size, 10px);height:var(--picker-indicator-size, 10px);background-color:white;box-shadow:0 0 4px black;border-radius:50%;pointer-events:none;z-index:1;transition:box-shadow 0.2s}.is-dark.svelte-i5mg2p{box-shadow:0 0 4px white}",
  map: null
};
const PickerIndicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pos } = $$props;
  let { isDark } = $$props;
  if ($$props.pos === void 0 && $$bindings.pos && pos !== void 0)
    $$bindings.pos(pos);
  if ($$props.isDark === void 0 && $$bindings.isDark && isDark !== void 0)
    $$bindings.isDark(isDark);
  $$result.css.add(css$5);
  return `<div class="${["picker-indicator svelte-i5mg2p", isDark ? "is-dark" : ""].join(" ").trim()}"${add_styles({ "--pos-x": pos.x, "--pos-y": pos.y })}></div>`;
});
const TextInput_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".text-input.svelte-qtukzs.svelte-qtukzs{margin:var(--text-input-margin, 5px 0 0)}.input-container.svelte-qtukzs.svelte-qtukzs{display:flex;flex:1;gap:10px}input.svelte-qtukzs.svelte-qtukzs,button.svelte-qtukzs.svelte-qtukzs,.button-like.svelte-qtukzs.svelte-qtukzs{flex:1;border:none;background-color:var(--cp-input-color, #eee);color:var(--cp-text-color, var(--cp-border-color));padding:0;border-radius:5px;height:30px;line-height:30px;text-align:center}input.svelte-qtukzs.svelte-qtukzs{width:5px;font-family:inherit}button.svelte-qtukzs.svelte-qtukzs,.button-like.svelte-qtukzs.svelte-qtukzs{position:relative;flex:1;margin:8px 0 0;height:30px;width:100%;transition:background-color 0.2s;cursor:pointer;font-family:inherit}.button-like.svelte-qtukzs.svelte-qtukzs{cursor:default}.appear.svelte-qtukzs.svelte-qtukzs,.disappear.svelte-qtukzs.svelte-qtukzs{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);width:100%;transition:all 0.5s}button.svelte-qtukzs:hover .disappear.svelte-qtukzs,.appear.svelte-qtukzs.svelte-qtukzs{opacity:0}.disappear.svelte-qtukzs.svelte-qtukzs,button.svelte-qtukzs:hover .appear.svelte-qtukzs{opacity:1}button.svelte-qtukzs.svelte-qtukzs:hover{background-color:var(--cp-button-hover-color, #ccc)}input.svelte-qtukzs.svelte-qtukzs:focus,button.svelte-qtukzs.svelte-qtukzs:focus{outline:none}input.svelte-qtukzs.svelte-qtukzs:focus-visible,button.svelte-qtukzs.svelte-qtukzs:focus-visible{outline:2px solid var(--focus-color, red);outline-offset:2px}",
  map: null
};
const TextInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nextMode;
  let h;
  let s;
  let v;
  let a;
  createEventDispatcher();
  let { isAlpha } = $$props;
  let { rgb } = $$props;
  let { hsv } = $$props;
  let { hex } = $$props;
  let { textInputModes } = $$props;
  let { texts } = $$props;
  let mode = textInputModes[0] || "hex";
  if ($$props.isAlpha === void 0 && $$bindings.isAlpha && isAlpha !== void 0)
    $$bindings.isAlpha(isAlpha);
  if ($$props.rgb === void 0 && $$bindings.rgb && rgb !== void 0)
    $$bindings.rgb(rgb);
  if ($$props.hsv === void 0 && $$bindings.hsv && hsv !== void 0)
    $$bindings.hsv(hsv);
  if ($$props.hex === void 0 && $$bindings.hex && hex !== void 0)
    $$bindings.hex(hex);
  if ($$props.textInputModes === void 0 && $$bindings.textInputModes && textInputModes !== void 0)
    $$bindings.textInputModes(textInputModes);
  if ($$props.texts === void 0 && $$bindings.texts && texts !== void 0)
    $$bindings.texts(texts);
  $$result.css.add(css$4);
  nextMode = textInputModes[(textInputModes.indexOf(mode) + 1) % textInputModes.length];
  h = Math.round(hsv.h);
  s = Math.round(hsv.s);
  v = Math.round(hsv.v);
  a = hsv.a === void 0 ? 1 : Math.round(hsv.a * 100) / 100;
  return `<div class="text-input svelte-qtukzs"><div class="input-container svelte-qtukzs">${mode === "hex" ? `<input${add_attribute("aria-label", texts.label.hex, 0)}${add_attribute("value", hex, 0)} class="svelte-qtukzs"${add_styles({ "flex": 3 })}>` : `${mode === "rgb" ? `<input${add_attribute("aria-label", texts.label.r, 0)}${add_attribute("value", rgb.r, 0)} type="number" min="0" max="255" class="svelte-qtukzs"> <input${add_attribute("aria-label", texts.label.g, 0)}${add_attribute("value", rgb.g, 0)} type="number" min="0" max="255" class="svelte-qtukzs"> <input${add_attribute("aria-label", texts.label.b, 0)}${add_attribute("value", rgb.b, 0)} type="number" min="0" max="255" class="svelte-qtukzs">` : `<input${add_attribute("aria-label", texts.label.h, 0)}${add_attribute("value", h, 0)} type="number" min="0" max="360" class="svelte-qtukzs"> <input${add_attribute("aria-label", texts.label.s, 0)}${add_attribute("value", s, 0)} type="number" min="0" max="100" class="svelte-qtukzs"> <input${add_attribute("aria-label", texts.label.v, 0)}${add_attribute("value", v, 0)} type="number" min="0" max="100" class="svelte-qtukzs">`}`} ${isAlpha ? `<input${add_attribute("aria-label", texts.label.a, 0)}${add_attribute("value", a, 0)} type="number" min="0" max="1" step="0.01" class="svelte-qtukzs">` : ``}</div> ${textInputModes.length > 1 ? `<button type="button" class="svelte-qtukzs"><span class="disappear svelte-qtukzs" aria-hidden="true">${escape(texts.color[mode])}</span> <span class="appear svelte-qtukzs">${escape(texts.changeTo)} ${escape(nextMode)}</span></button>` : `<div class="button-like svelte-qtukzs">${escape(texts.color[mode])}</div>`}</div> `;
});
const Input_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "label.svelte-lemcb1.svelte-lemcb1{display:inline-flex;align-items:center;gap:8px;cursor:pointer;border-radius:3px;margin:4px;height:var(--input-size, 25px);user-select:none}.container.svelte-lemcb1.svelte-lemcb1{position:relative;display:block;display:flex;align-items:center;justify-content:center;width:var(--input-size, 25px)}input.svelte-lemcb1.svelte-lemcb1{margin:0;padding:0;border:none;width:1px;height:1px;flex-shrink:0;opacity:0}.alpha.svelte-lemcb1.svelte-lemcb1{clip-path:circle(50%);background:var(--alpha-grid-bg)}.alpha.svelte-lemcb1.svelte-lemcb1,.color.svelte-lemcb1.svelte-lemcb1{position:absolute;width:var(--input-size, 25px);height:var(--input-size, 25px);border-radius:50%;user-select:none}input.svelte-lemcb1:focus-visible~.color.svelte-lemcb1{outline:2px solid var(--focus-color, red);outline-offset:2px}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { labelElement } = $$props;
  let { hex } = $$props;
  let { label } = $$props;
  let { name = void 0 } = $$props;
  let { isOpen } = $$props;
  if ($$props.labelElement === void 0 && $$bindings.labelElement && labelElement !== void 0)
    $$bindings.labelElement(labelElement);
  if ($$props.hex === void 0 && $$bindings.hex && hex !== void 0)
    $$bindings.hex(hex);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  $$result.css.add(css$3);
  return ` <label class="svelte-lemcb1"${add_attribute("this", labelElement, 0)}><div class="container svelte-lemcb1"><input type="color"${add_attribute("name", name, 0)}${add_attribute("value", hex, 0)} aria-haspopup="dialog" class="svelte-lemcb1"> <div class="alpha svelte-lemcb1"></div> <div class="color svelte-lemcb1"${add_styles({ "background": hex })}></div></div> ${escape(label)}</label> `;
});
const Wrapper_svelte_svelte_type_style_lang$1 = "";
const css$2 = {
  code: "div.svelte-h9ar9{padding:8px;background-color:var(--cp-bg-color, white);margin:0 10px 10px;border:1px solid var(--cp-border-color, black);border-radius:12px;display:none;width:max-content}.is-open.svelte-h9ar9{display:inline-block}[role='dialog'].svelte-h9ar9{position:absolute;top:calc(var(--input-size, 25px) + 12px);left:0;z-index:var(--picker-z-index, 2)}",
  map: null
};
const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { wrapper } = $$props;
  let { isOpen } = $$props;
  let { isDialog } = $$props;
  if ($$props.wrapper === void 0 && $$bindings.wrapper && wrapper !== void 0)
    $$bindings.wrapper(wrapper);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.isDialog === void 0 && $$bindings.isDialog && isDialog !== void 0)
    $$bindings.isDialog(isDialog);
  $$result.css.add(css$2);
  return `<div class="${["wrapper svelte-h9ar9", isOpen ? "is-open" : ""].join(" ").trim()}"${add_attribute("role", isDialog ? "dialog" : void 0, 0)} aria-label="color picker"${add_attribute("this", wrapper, 0)}>${slots.default ? slots.default({}) : ``}</div> `;
});
const defaultTexts = {
  label: {
    h: "hue channel",
    s: "saturation channel",
    v: "brightness channel",
    r: "red channel",
    g: "green channel",
    b: "blue channel",
    a: "alpha channel",
    hex: "hex color",
    withoutColor: "without color"
  },
  color: {
    rgb: "rgb",
    hsv: "hsv",
    hex: "hex"
  },
  changeTo: "change to "
};
const NullabilityCheckbox_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "label.svelte-oskb5b.svelte-oskb5b{display:flex;justify-content:center;margin-bottom:4px;grid-area:nullable;user-select:none}input.svelte-oskb5b.svelte-oskb5b{margin:0}input.svelte-oskb5b.svelte-oskb5b:focus-visible{outline:none}input.svelte-oskb5b:focus-visible+span.svelte-oskb5b{width:14px;height:14px;border-radius:2px;outline:2px solid var(--focus-color, red);outline-offset:2px}div.svelte-oskb5b.svelte-oskb5b{width:32px;aspect-ratio:2;position:relative}div.svelte-oskb5b .svelte-oskb5b{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}",
  map: null
};
const NullabilityCheckbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isUndefined } = $$props;
  let { texts } = $$props;
  if ($$props.isUndefined === void 0 && $$bindings.isUndefined && isUndefined !== void 0)
    $$bindings.isUndefined(isUndefined);
  if ($$props.texts === void 0 && $$bindings.texts && texts !== void 0)
    $$bindings.texts(texts);
  $$result.css.add(css$1);
  return `<label class="nullability-checkbox svelte-oskb5b"><div class="svelte-oskb5b"><input type="checkbox" class="svelte-oskb5b"${add_attribute("checked", isUndefined, 1)}> <span class="svelte-oskb5b"></span></div> ${escape(texts.label.withoutColor)} </label>`;
});
const ColorPicker_svelte_svelte_type_style_lang = "";
const css = {
  code: "span.svelte-tsvobk.svelte-tsvobk{position:relative;color:var(--cp-text-color, var(--cp-border-color));--alpha-grid-bg:linear-gradient(45deg, #eee 25%, #0000 25%, #0000 75%, #eee 75%) 0 0 / 10px 10px,\n			linear-gradient(45deg, #eee 25%, #0000 25%, #0000 75%, #eee 75%) 5px 5px / 10px 10px}.h.svelte-tsvobk.svelte-tsvobk,.a.svelte-tsvobk.svelte-tsvobk{display:inline-flex;justify-content:center;--track-height:var(--slider-width, 10px);--track-width:var(--picker-height, 200px);--track-border:none;--thumb-size:calc(var(--slider-width, 10px) - 3px);--thumb-background:white;--thumb-border:1px solid black;--margin-block:0;--gradient-direction:0.5turn}.horizontal.svelte-tsvobk .h.svelte-tsvobk,.horizontal.svelte-tsvobk .a.svelte-tsvobk{--track-width:calc(var(--picker-width, 200px) - 12px);--gradient-direction:0.25turn;margin:4px 6px}.horizontal.svelte-tsvobk .h.svelte-tsvobk{margin-top:8px}.vertical.svelte-tsvobk .h.svelte-tsvobk,.vertical.svelte-tsvobk .a.svelte-tsvobk{margin-left:3px}.h.svelte-tsvobk.svelte-tsvobk{grid-area:hue;--gradient-hue:#ff1500fb, #ffff00 17.2%, #ffff00 18.2%, #00ff00 33.3%, #00ffff 49.5%, #00ffff 51.5%, #0000ff 67.7%,\n			#ff00ff 83.3%, #ff0000;--track-background:linear-gradient(var(--gradient-direction), var(--gradient-hue))}.a.svelte-tsvobk.svelte-tsvobk{grid-area:alpha;margin-top:2px;--track-background:linear-gradient(var(--gradient-direction), rgba(0, 0, 0, 0), var(--alphaless-color)),\n			var(--alpha-grid-bg)}span.svelte-tsvobk .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}",
  map: null
};
const wrapperPadding = 12;
const ColorPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  let { components = {} } = $$props;
  let { label = "Choose a color" } = $$props;
  let { name = void 0 } = $$props;
  let { nullable = false } = $$props;
  let { rgb = nullable ? void 0 : { r: 255, g: 0, b: 0, a: 1 } } = $$props;
  let { hsv = nullable ? void 0 : { h: 0, s: 100, v: 100, a: 1 } } = $$props;
  let { hex = nullable ? void 0 : "#ff0000" } = $$props;
  let { color = void 0 } = $$props;
  let { isDark = false } = $$props;
  let { isAlpha = true } = $$props;
  let { isDialog = true } = $$props;
  let { isOpen = !isDialog } = $$props;
  let { position = "fixed" } = $$props;
  let { isTextInput = true } = $$props;
  let { textInputModes = ["hex", "rgb", "hsv"] } = $$props;
  let { sliderDirection = "vertical" } = $$props;
  let { disableCloseClickOutside = false } = $$props;
  let { a11yColors = [{ bgHex: "#ffffff" }] } = $$props;
  let { a11yLevel = "AA" } = $$props;
  let { texts = void 0 } = $$props;
  let { a11yTexts = void 0 } = $$props;
  let _rgb = { r: 255, g: 0, b: 0, a: 1 };
  let _hsv = { h: 0, s: 100, v: 100, a: 1 };
  let _hex = "#ff0000";
  let isUndefined = false;
  let _isUndefined = isUndefined;
  let spanElement;
  let labelElement;
  let wrapper;
  let innerWidth;
  let innerHeight;
  const default_components = {
    pickerIndicator: PickerIndicator,
    textInput: TextInput,
    input: Input,
    nullabilityCheckbox: NullabilityCheckbox,
    wrapper: Wrapper
  };
  function getComponents() {
    return { ...default_components, ...components };
  }
  function getTexts() {
    return {
      label: { ...defaultTexts.label, ...texts?.label },
      color: { ...defaultTexts.color, ...texts?.color },
      changeTo: texts?.changeTo ?? defaultTexts.changeTo
    };
  }
  function updateColor() {
    if (isUndefined && !_isUndefined) {
      _isUndefined = true;
      hsv = rgb = hex = void 0;
      dispatch("input", { color, hsv, rgb, hex });
      return;
    } else if (_isUndefined && !isUndefined) {
      _isUndefined = false;
      hsv = _hsv;
      rgb = _rgb;
      hex = _hex;
      dispatch("input", { color, hsv, rgb, hex });
      return;
    }
    if (!hsv && !rgb && !hex) {
      isUndefined = true;
      _isUndefined = true;
      dispatch("input", { color: void 0, hsv, rgb, hex });
      return;
    }
    if (hsv && rgb && hsv.h === _hsv.h && hsv.s === _hsv.s && hsv.v === _hsv.v && hsv.a === _hsv.a && rgb.r === _rgb.r && rgb.g === _rgb.g && rgb.b === _rgb.b && rgb.a === _rgb.a && hex === _hex) {
      return;
    }
    isUndefined = false;
    if (hsv && hsv.a === void 0)
      hsv.a = 1;
    if (_hsv.a === void 0)
      _hsv.a = 1;
    if (rgb && rgb.a === void 0)
      rgb.a = 1;
    if (_rgb.a === void 0)
      _rgb.a = 1;
    if (hex?.substring(7) === "ff")
      hex = hex.substring(0, 7);
    if (hex?.substring(7) === "ff")
      hex = hex.substring(0, 7);
    if (hsv && (hsv.h !== _hsv.h || hsv.s !== _hsv.s || hsv.v !== _hsv.v || hsv.a !== _hsv.a || !rgb && !hex)) {
      color = colord(hsv);
      rgb = color.toRgb();
      hex = color.toHex();
    } else if (rgb && (rgb.r !== _rgb.r || rgb.g !== _rgb.g || rgb.b !== _rgb.b || rgb.a !== _rgb.a || !hsv && !hex)) {
      color = colord(rgb);
      hex = color.toHex();
      hsv = color.toHsv();
    } else if (hex && (hex !== _hex || !hsv && !rgb)) {
      color = colord(hex);
      rgb = color.toRgb();
      hsv = color.toHsv();
    }
    if (color) {
      isDark = color.isDark();
    }
    if (!hex)
      return;
    _hsv = Object.assign({}, hsv);
    _rgb = Object.assign({}, rgb);
    _hex = hex;
    _isUndefined = isUndefined;
    dispatch("input", { color, hsv, rgb, hex });
  }
  async function wrapperBoundaryCheck() {
    await tick();
    if (position !== "fixed" && isOpen && isDialog && labelElement && wrapper) {
      const rect = wrapper.getBoundingClientRect();
      const labelRect = labelElement.getBoundingClientRect();
      if (position === "responsive" || position === "responsive-y") {
        if (labelRect.top + rect.height + wrapperPadding > innerHeight) {
          wrapper.style.top = `-${rect.height + wrapperPadding}px`;
        } else {
          wrapper.style.top = `${labelRect.height + wrapperPadding}px`;
        }
      }
      if (position === "responsive" || position === "responsive-x") {
        if (labelRect.left + rect.width + wrapperPadding > innerWidth) {
          wrapper.style.left = `-${rect.width - labelRect.width + wrapperPadding}px`;
        } else {
          wrapper.style.left = `${wrapperPadding}px`;
        }
      }
    }
  }
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.nullable === void 0 && $$bindings.nullable && nullable !== void 0)
    $$bindings.nullable(nullable);
  if ($$props.rgb === void 0 && $$bindings.rgb && rgb !== void 0)
    $$bindings.rgb(rgb);
  if ($$props.hsv === void 0 && $$bindings.hsv && hsv !== void 0)
    $$bindings.hsv(hsv);
  if ($$props.hex === void 0 && $$bindings.hex && hex !== void 0)
    $$bindings.hex(hex);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.isDark === void 0 && $$bindings.isDark && isDark !== void 0)
    $$bindings.isDark(isDark);
  if ($$props.isAlpha === void 0 && $$bindings.isAlpha && isAlpha !== void 0)
    $$bindings.isAlpha(isAlpha);
  if ($$props.isDialog === void 0 && $$bindings.isDialog && isDialog !== void 0)
    $$bindings.isDialog(isDialog);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.isTextInput === void 0 && $$bindings.isTextInput && isTextInput !== void 0)
    $$bindings.isTextInput(isTextInput);
  if ($$props.textInputModes === void 0 && $$bindings.textInputModes && textInputModes !== void 0)
    $$bindings.textInputModes(textInputModes);
  if ($$props.sliderDirection === void 0 && $$bindings.sliderDirection && sliderDirection !== void 0)
    $$bindings.sliderDirection(sliderDirection);
  if ($$props.disableCloseClickOutside === void 0 && $$bindings.disableCloseClickOutside && disableCloseClickOutside !== void 0)
    $$bindings.disableCloseClickOutside(disableCloseClickOutside);
  if ($$props.a11yColors === void 0 && $$bindings.a11yColors && a11yColors !== void 0)
    $$bindings.a11yColors(a11yColors);
  if ($$props.a11yLevel === void 0 && $$bindings.a11yLevel && a11yLevel !== void 0)
    $$bindings.a11yLevel(a11yLevel);
  if ($$props.texts === void 0 && $$bindings.texts && texts !== void 0)
    $$bindings.texts(texts);
  if ($$props.a11yTexts === void 0 && $$bindings.a11yTexts && a11yTexts !== void 0)
    $$bindings.a11yTexts(a11yTexts);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if (hsv || rgb || hex) {
        updateColor();
      }
    }
    {
      updateColor();
    }
    {
      wrapperBoundaryCheck();
    }
    $$rendered = ` <span class="${"color-picker " + escape(sliderDirection, true) + " svelte-tsvobk"}"${add_attribute("this", spanElement, 0)}>${isDialog ? `${validate_component(getComponents().input || missing_component, "svelte:component").$$render(
      $$result,
      {
        isOpen: true,
        hex,
        label,
        name,
        labelElement
      },
      {
        labelElement: ($$value) => {
          labelElement = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${name ? `<input type="hidden"${add_attribute("value", hex, 0)}${add_attribute("name", name, 0)}>` : ``}`} ${validate_component(getComponents().wrapper || missing_component, "svelte:component").$$render(
      $$result,
      { isOpen, isDialog, wrapper },
      {
        wrapper: ($$value) => {
          wrapper = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${nullable ? `${validate_component(getComponents().nullabilityCheckbox || missing_component, "svelte:component").$$render(
            $$result,
            { texts: getTexts(), isUndefined },
            {
              isUndefined: ($$value) => {
                isUndefined = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${validate_component(Picker, "Picker").$$render(
            $$result,
            {
              components: getComponents(),
              h: hsv?.h ?? _hsv.h,
              s: hsv?.s ?? _hsv.s,
              v: hsv?.v ?? _hsv.v,
              isDark,
              texts: getTexts()
            },
            {},
            {}
          )} <div class="h svelte-tsvobk">${validate_component(Slider, "Slider").$$render(
            $$result,
            {
              min: 0,
              max: 360,
              step: 1,
              value: hsv?.h ?? _hsv.h,
              direction: sliderDirection,
              reverse: sliderDirection === "vertical",
              ariaLabel: getTexts().label.h
            },
            {},
            {}
          )}</div> ${isAlpha ? `<div class="a svelte-tsvobk"${add_styles({
            "--alphaless-color": (hex ? hex : _hex).substring(0, 7)
          })}>${validate_component(Slider, "Slider").$$render(
            $$result,
            {
              min: 0,
              max: 1,
              step: 0.01,
              value: hsv?.a ?? _hsv.a,
              direction: sliderDirection,
              reverse: sliderDirection === "vertical",
              ariaLabel: getTexts().label.a
            },
            {},
            {}
          )}</div>` : ``} ${isTextInput ? `${validate_component(getComponents().textInput || missing_component, "svelte:component").$$render(
            $$result,
            {
              hex: hex ?? _hex,
              rgb: rgb ?? _rgb,
              hsv: hsv ?? _hsv,
              isAlpha,
              textInputModes,
              texts: getTexts()
            },
            {},
            {}
          )}` : ``} ${getComponents().a11yNotice ? `${validate_component(getComponents().a11yNotice || missing_component, "svelte:component").$$render(
            $$result,
            {
              components: getComponents(),
              a11yColors,
              hex: hex || "#00000000",
              a11yTexts,
              a11yLevel
            },
            {},
            {}
          )}` : ``}`;
        }
      }
    )}</span> `;
  } while (!$$settled);
  return $$rendered;
});
const Wrapper_svelte_svelte_type_style_lang = "";
const A11yHorizontalWrapper_svelte_svelte_type_style_lang = "";
const A11yNotice_svelte_svelte_type_style_lang = "";
const A11ySingleNotice_svelte_svelte_type_style_lang = "";
export {
  ColorPicker as C
};
