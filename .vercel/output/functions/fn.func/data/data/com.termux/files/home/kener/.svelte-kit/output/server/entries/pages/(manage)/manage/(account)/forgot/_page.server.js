import dotenv from "dotenv";
import { i as instance } from "../../../../../../chunks/db.js";
import { aw as GetSMTPFromENV } from "../../../../../../chunks/controller.js";
dotenv.config();
async function load({ params, route, url, parent }) {
  const query = url.searchParams;
  const token = query.get("token");
  const email = query.get("email");
  let view = query.get("view") || "forgot";
  let siteURL = await instance.getSiteData("siteURL");
  return {
    error: query.get("error"),
    isSecretSet: !!process.env.KENER_SECRET_KEY,
    isResendSet: !!process.env.RESEND_API_KEY && !!process.env.RESEND_SENDER_EMAIL,
    isSiteURLSet: !!siteURL.value,
    isSMTPSet: !!GetSMTPFromENV(),
    view,
    token,
    email
  };
}
export {
  load
};
