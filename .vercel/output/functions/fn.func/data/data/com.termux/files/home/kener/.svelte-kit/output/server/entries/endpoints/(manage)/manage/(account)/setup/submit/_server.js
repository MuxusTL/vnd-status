import { r as redirect } from "../../../../../../../chunks/index.js";
import { b as base } from "../../../../../../../chunks/paths.js";
import { i as instance } from "../../../../../../../chunks/db.js";
import { ak as ValidatePassword, ai as HashPassword, aj as GenerateToken, al as CookieConfig } from "../../../../../../../chunks/controller.js";
async function POST({ request, cookies }) {
  const formdata = await request.formData();
  const email = formdata.get("email");
  const password = formdata.get("password");
  const name = formdata.get("name");
  let userCount = await instance.getUsersCount();
  if (userCount.count != 0) {
    let errorMessage = "Set up already done. Please login with the email and password you have set up.";
    throw redirect(302, base + "/manage/setup?error=" + errorMessage);
  }
  if (!ValidatePassword(password)) {
    let errorMessage = "Password must contain at least one digit, one lowercase letter, one uppercase letter, and have a minimum length of 8 characters.";
    throw redirect(302, base + "/manage/setup?error=" + errorMessage);
  }
  let user = {
    email,
    password_hash: await HashPassword(password),
    name,
    role: "admin"
  };
  await instance.insertUser(user);
  let userDB = await instance.getUserByEmail(email);
  if (!!!userDB) {
    let errorMessage = "User does not exist";
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
