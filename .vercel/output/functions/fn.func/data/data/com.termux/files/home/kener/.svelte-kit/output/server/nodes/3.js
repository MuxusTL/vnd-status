import * as server from '../entries/pages/(embed)/_layout.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(embed)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(embed)/+layout.server.js";
export const imports = ["_app/immutable/nodes/3.c5cd571e.js","_app/immutable/chunks/scheduler.0a362f98.js","_app/immutable/chunks/index.61e7fc56.js","_app/immutable/chunks/each.ffdd26ad.js","_app/immutable/chunks/index.5b185319.js","_app/immutable/chunks/paths.b39379cc.js","_app/immutable/chunks/mode-watcher.13da918f.js","_app/immutable/chunks/stores.39e3bb50.js"];
export const stylesheets = ["_app/immutable/assets/3.7e255582.css","_app/immutable/assets/kener.5c460ac9.css"];
export const fonts = [];
