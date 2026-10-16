

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.0d147f59.js","_app/immutable/chunks/scheduler.0a362f98.js","_app/immutable/chunks/index.61e7fc56.js"];
export const stylesheets = [];
export const fonts = [];
