import { json } from "@sveltejs/kit";
import { Minuter } from "$lib/server/cron-minute.js";
import { GetMonitorsParsed } from "$lib/server/controllers/controller.js";

export async function GET({ url }) {
  if (url.searchParams.get("key") !== process.env.KENER_CRON_KEY) {
    return json({ error: "unauthorized" }, { status: 401 });
  }
  const monitors = await GetMonitorsParsed({ status: "ACTIVE" });
  const results = await Promise.allSettled(monitors.map((m) => Minuter(m)));
  const failed = results.filter((r) => r.status === "rejected").length;
  return json({ total: monitors.length, failed });
}
