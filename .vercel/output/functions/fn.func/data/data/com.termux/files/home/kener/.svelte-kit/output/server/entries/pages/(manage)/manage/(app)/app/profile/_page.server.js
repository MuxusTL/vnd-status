import { ap as IsEmailSetup, az as CheckInvitationExists } from "../../../../../../../chunks/controller.js";
import { I as INVITE_VERIFY_EMAIL } from "../../../../../../../chunks/db.js";
async function load({ parent }) {
  let canSendEmail = IsEmailSetup();
  const parentData = await parent();
  return {
    canSendEmail,
    activeInvitationExists: await CheckInvitationExists(parentData.user.id, INVITE_VERIFY_EMAIL)
  };
}
export {
  load
};
