import * as server from '../entries/pages/(docs)/docs/_doc_/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(docs)/docs/_doc_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(docs)/docs/[doc]/+page.server.js";
export const imports = ["_app/immutable/nodes/8.da3861ed.js","_app/immutable/chunks/scheduler.0a362f98.js","_app/immutable/chunks/index.61e7fc56.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/index.5b185319.js","_app/immutable/chunks/paths.b39379cc.js","_app/immutable/chunks/navigation.5bbf63fd.js","_app/immutable/chunks/singletons.869c41c8.js","_app/immutable/chunks/button.b47727db.js","_app/immutable/chunks/spread.8a54911c.js","_app/immutable/chunks/utils.859a9685.js","_app/immutable/chunks/arrow-left.0ce31e46.js","_app/immutable/chunks/Icon.90354235.js","_app/immutable/chunks/each.ffdd26ad.js","_app/immutable/chunks/arrow-right.fa9a9bf4.js"];
export const stylesheets = ["_app/immutable/assets/8.5d5aa37f.css"];
export const fonts = [];
