import * as server from '../entries/pages/(docs)/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(docs)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(docs)/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.2e1ab61f.js","_app/immutable/chunks/scheduler.0a362f98.js","_app/immutable/chunks/index.61e7fc56.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/each.ffdd26ad.js","_app/immutable/chunks/index.5b185319.js","_app/immutable/chunks/paths.b39379cc.js","_app/immutable/chunks/confetti.module.f5bae7ef.js","_app/immutable/chunks/index.e39c7cb0.js","_app/immutable/chunks/stores.093aa259.js","_app/immutable/chunks/singletons.869c41c8.js","_app/immutable/chunks/spread.8a54911c.js","_app/immutable/chunks/Icon.90354235.js","_app/immutable/chunks/x.86b7dceb.js","_app/immutable/chunks/menu.c477f902.js"];
export const stylesheets = ["_app/immutable/assets/2.ff0fb249.css","_app/immutable/assets/kener.5c460ac9.css"];
export const fonts = [];
