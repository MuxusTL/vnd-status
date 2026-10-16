import * as server from '../entries/pages/(manage)/manage/(account)/invitation/_page.server.js';

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(manage)/manage/(account)/invitation/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(manage)/manage/(account)/invitation/+page.server.js";
export const imports = ["_app/immutable/nodes/16.170274d3.js","_app/immutable/chunks/scheduler.0a362f98.js","_app/immutable/chunks/index.61e7fc56.js","_app/immutable/chunks/index.5b185319.js","_app/immutable/chunks/paths.b39379cc.js","_app/immutable/chunks/button.b47727db.js","_app/immutable/chunks/spread.8a54911c.js","_app/immutable/chunks/utils.859a9685.js"];
export const stylesheets = [];
export const fonts = [];
