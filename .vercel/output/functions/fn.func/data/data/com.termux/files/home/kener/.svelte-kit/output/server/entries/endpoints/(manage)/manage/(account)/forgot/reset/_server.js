import { r as redirect } from "../../../../../../../chunks/index.js";
import { b as base } from "../../../../../../../chunks/paths.js";
import { i as instance } from "../../../../../../../chunks/db.js";
import { j as VerifyToken, ai as HashPassword } from "../../../../../../../chunks/controller.js";
async function POST({ request, cookies }) {
  const formdata = await request.formData();
  const password = formdata.get("password");
  const token = formdata.get("token");
  try {
    let data = await VerifyToken(token);
    let email = data.email;
    let userDB = await instance.getUserByEmail(email);
    if (!!!userDB) {
      let errorMessage = "User does not exist";
      throw redirect(302, base + "/manage/signin?view=error&error=" + errorMessage);
    }
    let password_hash = await HashPassword(password);
    await instance.updateUserPassword({
      id: userDB.id,
      password_hash
    });
  } catch (e) {
    let errorMessage = "Invalid token";
    throw redirect(302, base + "/manage/forgot?view=error&error=" + errorMessage);
  }
  throw redirect(302, base + "/manage/forgot?view=success");
}
export {
  POST
};
