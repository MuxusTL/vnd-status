import { j as json } from "../../../../../../chunks/index.js";
import { R as RegisterHeartbeat } from "../../../../../../chunks/controller.js";
async function GET({ request, params }) {
  let signal = params.signal;
  let signalData = signal.split(":");
  if (signalData.length != 2) {
    return json({ error: "Invalid url" }, { status: 400 });
  }
  let resp = await RegisterHeartbeat(signalData[0], signalData[1]);
  if (!!!resp) {
    return json({ error: "Invalid heartbeat url" }, { status: 400 });
  }
  return json(
    { status: "OK" },
    {
      status: 200
    }
  );
}
async function POST({ request, params }) {
  let signal = params.signal;
  let signalData = signal.split(":");
  if (signalData.length != 2) {
    return json({ error: "Invalid url" }, { status: 400 });
  }
  let resp = await RegisterHeartbeat(signalData[0], signalData[1]);
  if (!!!resp) {
    return json({ error: "Invalid heartbeat url" }, { status: 400 });
  }
  return json(
    { status: "OK" },
    {
      status: 200
    }
  );
}
export {
  GET,
  POST
};
