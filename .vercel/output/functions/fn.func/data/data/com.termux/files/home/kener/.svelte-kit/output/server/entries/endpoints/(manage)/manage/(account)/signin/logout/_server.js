import { r as redirect } from "../../../../../../../chunks/index.js";
import { b as base } from "../../../../../../../chunks/paths.js";
import "../../../../../../../chunks/db.js";
import { al as CookieConfig } from "../../../../../../../chunks/controller.js";
async function GET({ request, cookies }) {
  let cookieConfig = CookieConfig();
  cookies.set(cookieConfig.name, "", {
    path: cookieConfig.path,
    maxAge: 0,
    httpOnly: cookieConfig.httpOnly,
    secure: cookieConfig.secure,
    sameSite: cookieConfig.sameSite
  });
  throw redirect(302, base + "/manage/signin");
}
export {
  GET
};
