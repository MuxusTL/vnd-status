import { r as redirect } from "../../../../../../chunks/index.js";
import { i as instance } from "../../../../../../chunks/db.js";
import { j as VerifyToken } from "../../../../../../chunks/controller.js";
import { b as base } from "../../../../../../chunks/paths.js";
async function load({ params, route, url, cookies }) {
  let tokenData = cookies.get("kener-user");
  if (!!tokenData) {
    let tokenUser = await VerifyToken(tokenData);
    if (!!!tokenUser) {
      throw redirect(302, base + "/manage/signin/logout");
    }
    let userDB = await instance.getUserByEmail(tokenUser.email);
    if (!!userDB) {
      throw redirect(302, base + "/manage/app/site");
    }
  }
  let userCount = await instance.getUsersCount();
  const query = url.searchParams;
  return {
    error: query.get("error"),
    firstUser: userCount.count === 0
  };
}
export {
  load
};
