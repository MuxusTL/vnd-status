import { g as GetMonitors } from "../../../../../../../chunks/controller.js";
async function load({ parent }) {
  let monitors = await GetMonitors({ status: "ACTIVE" });
  return {
    monitors
  };
}
export {
  load
};
