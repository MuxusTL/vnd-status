import { r as redirect } from "../../../../../../../chunks/index.js";
import { b as base } from "../../../../../../../chunks/paths.js";
import { i as instance } from "../../../../../../../chunks/db.js";
import { am as VerifyPassword, aj as GenerateToken, al as CookieConfig } from "../../../../../../../chunks/controller.js";
async function POST({ request, cookies }) {
  const formdata = await request.formData();
  const email = formdata.get("email");
  const password = formdata.get("password");
  let userCount = await instance.getUsersCount();
  if (userCount.count == 0) {
    let errorMessage = "Set up not done yet. Create a user first.";
    throw redirect(302, base + "/manage/setup?error=" + errorMessage);
  }
  let userDB = await instance.getUserByEmail(email);
  if (!!!userDB) {
    let errorMessage = "User does not exist";
    throw redirect(302, base + "/manage/signin?error=" + errorMessage);
  }
  let passwordStored = await instance.getUserPasswordHashById(userDB.id);
  let isMatch = await VerifyPassword(password, passwordStored.password_hash);
  if (!isMatch) {
    let errorMessage = "Invalid password or Email";
    throw redirect(302, base + "/manage/signin?error=" + errorMessage);
  }
  let token = await GenerateToken(userDB);
  let cookieConfig = CookieConfig();
  cookies.set(cookieConfig.name, token, {
    path: cookieConfig.path,
    maxAge: cookieConfig.maxAge,
    // 1 year in seconds
    httpOnly: cookieConfig.httpOnly,
    secure: cookieConfig.secure,
    sameSite: cookieConfig.sameSite
  });
  throw redirect(302, base + "/manage/app/site");
}
export {
  POST
};
