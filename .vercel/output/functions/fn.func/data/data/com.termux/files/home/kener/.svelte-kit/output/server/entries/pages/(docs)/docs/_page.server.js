import { r as redirect } from "../../../../chunks/index.js";
import { b as base } from "../../../../chunks/paths.js";
async function load({ parent, url }) {
  throw redirect(302, base + "/docs/home");
}
export {
  load
};
