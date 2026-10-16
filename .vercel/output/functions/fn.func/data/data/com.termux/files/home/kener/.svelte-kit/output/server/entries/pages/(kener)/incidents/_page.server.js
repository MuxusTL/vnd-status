import { r as redirect } from "../../../../chunks/index.js";
import { b as base } from "../../../../chunks/paths.js";
import { format } from "date-fns";
async function load({ parent, url }) {
  throw redirect(302, base + "/incidents/" + format(/* @__PURE__ */ new Date(), "MMMM-yyyy"));
}
export {
  load
};
