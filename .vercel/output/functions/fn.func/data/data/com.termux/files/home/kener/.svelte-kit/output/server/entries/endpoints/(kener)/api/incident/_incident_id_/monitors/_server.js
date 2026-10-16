import { j as json } from "../../../../../../../chunks/index.js";
import { a as auth } from "../../../../../../../chunks/webhook.js";
import { G as GetIncidentMonitors, a as RemoveIncidentMonitor, A as AddIncidentMonitor } from "../../../../../../../chunks/controller.js";
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
    let resp = await GetIncidentMonitors(incident_id);
    return json(resp, {
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
async function DELETE({ request, params, url }) {
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
  const query = url.searchParams;
  const tag = query.get("tag");
  if (!tag) {
    return json(
      { error: "Invalid tag" },
      {
        status: 400
      }
    );
  }
  try {
    let resp = await RemoveIncidentMonitor(incident_id, tag);
    if (resp.changes == 0) {
      return json(
        { error: "Monitor not found" },
        {
          status: 404
        }
      );
    }
    return json(await GetIncidentMonitors(incident_id), {
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
async function POST({ request, params }) {
  const payload = await request.json();
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
  if (!incident_id || isNaN(incident_id)) {
    return json(
      { error: "Invalid incident_id" },
      {
        status: 400
      }
    );
  }
  if (!payload.tag || typeof payload.tag !== "string") {
    return json(
      { error: "Invalid tag" },
      {
        status: 400
      }
    );
  }
  if (!payload.impact || typeof payload.impact !== "string") {
    return json(
      { error: "Invalid impact" },
      {
        status: 400
      }
    );
  }
  try {
    let incidentDb = await AddIncidentMonitor(incident_id, payload.tag, payload.impact);
    return json(await GetIncidentMonitors(incident_id), {
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
export {
  DELETE,
  GET,
  POST
};
