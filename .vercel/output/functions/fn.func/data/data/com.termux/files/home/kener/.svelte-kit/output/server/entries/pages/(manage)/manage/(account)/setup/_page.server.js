import dotenv from "dotenv";
dotenv.config();
async function load({ params, route, url, parent }) {
  const query = url.searchParams;
  return {
    error: query.get("error"),
    isSecretSet: !!process.env.KENER_SECRET_KEY,
    isOriginSet: !!process.env.ORIGIN
  };
}
export {
  load
};
