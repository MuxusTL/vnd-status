import { r as readable } from "./index2.js";
readable(/* @__PURE__ */ new Date(), (set) => {
  const interval = setInterval(() => {
    set(/* @__PURE__ */ new Date());
  }, 10);
  return () => clearInterval(interval);
});
