import { ap as IsEmailSetup, aA as GetAllUsersPaginated, aB as GetTotalUserPages } from "../../../../../../../chunks/controller.js";
import "../../../../../../../chunks/db.js";
async function load({ parent, url }) {
  let canSendEmail = await IsEmailSetup();
  await parent();
  const query = url.searchParams;
  const page = query.get("page") || 1;
  const limit = query.get("limit") || 10;
  return {
    canSendEmail,
    users: await GetAllUsersPaginated({
      page: parseInt(page),
      limit: parseInt(limit)
    }),
    page: parseInt(page),
    limit: parseInt(limit),
    total: await GetTotalUserPages(limit)
  };
}
export {
  load
};
