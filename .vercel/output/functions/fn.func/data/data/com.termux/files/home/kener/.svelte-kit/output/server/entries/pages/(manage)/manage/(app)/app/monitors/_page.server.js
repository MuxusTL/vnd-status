import { B as GetSiteDataByKey } from "../../../../../../../chunks/controller.js";
async function load({ parent }) {
  let categories = await GetSiteDataByKey("categories");
  return {
    categories
  };
}
export {
  load
};
