import { writeFileSync } from "fs";
import { randomUUID } from "crypto";
import { j as json } from "../../../../../../../chunks/index.js";
import { j as VerifyToken } from "../../../../../../../chunks/controller.js";
async function POST({ request, cookies }) {
  let tokenData = cookies.get("kener-user");
  if (!!!tokenData) {
    return json(
      {
        error: "Unauthorized"
      },
      { status: 401 }
    );
  }
  let tokenUser = await VerifyToken(tokenData);
  if (!!!tokenUser) {
    return json(
      {
        error: "Unauthorized"
      },
      { status: 401 }
    );
  }
  const formData = await request.formData();
  const imageFile = formData.get("image");
  const filename = `${randomUUID()}-${imageFile.name}`;
  const fileBuffer = await imageFile.arrayBuffer();
  let uploadPath = process.env.UPLOAD_PATH || "./static/uploads";
  writeFileSync(`${uploadPath}/${filename}`, Buffer.from(fileBuffer));
  return json({ filename });
}
export {
  POST
};
