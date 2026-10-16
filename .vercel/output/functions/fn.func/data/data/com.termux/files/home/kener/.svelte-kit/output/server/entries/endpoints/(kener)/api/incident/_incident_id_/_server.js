import { j as json } from "../../../../../../chunks/index.js";
import { a as auth } from "../../../../../../chunks/webhook.js";
import { U as UpdateIncident, P as ParseIncidentToAPIResp } from "../../../../../../chunks/controller.js";
async function PATCH({ request, params }) {
  const authError = await auth(request);
  if (authError !== null) {
    return json(
      { error: authError.message },
      {
        status: 401
      }
    );
  }
  const incident_id = params.incident_id;
  const payload = await request.json();
  try {
    let resp = await UpdateIncident(incident_id, payload);
    return json(await ParseIncidentToAPIResp(incident_id), {
      status: 200
    });
  } catch (e) {
    return json(
      { error: e.message },
      {
        status: 400
      }
    );
  }
}
async function GET({ request, params }) {
  const authError = await auth(request);
  if (authError !== null) {
    return json(
      { error: authError.message },
      {
        status: 401
      }
    );
  }
  const incident_id = params.incident_id;
  try {
    return json(await ParseIncidentToAPIResp(incident_id), {
      status: 200
    });
  } catch (e) {
    return json(
      { error: e.message },
      {
        status: 404
      }
    );
  }
}
export {
  GET,
  PATCH
};
