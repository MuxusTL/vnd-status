

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ace4838f.js","_app/immutable/chunks/scheduler.0a362f98.js","_app/immutable/chunks/index.61e7fc56.js","_app/immutable/chunks/stores.093aa259.js","_app/immutable/chunks/singletons.869c41c8.js","_app/immutable/chunks/paths.b39379cc.js"];
export const stylesheets = [];
export const fonts = [];
