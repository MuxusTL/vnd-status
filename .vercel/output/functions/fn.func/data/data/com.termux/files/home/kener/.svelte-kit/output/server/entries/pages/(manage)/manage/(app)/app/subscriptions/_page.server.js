import { ap as IsEmailSetup } from "../../../../../../../chunks/controller.js";
async function load({ parent }) {
  let canSendEmail = IsEmailSetup();
  return {
    canSendEmail
  };
}
export {
  load
};
