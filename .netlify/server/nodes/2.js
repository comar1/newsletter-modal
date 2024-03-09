

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CIm0hRRE.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CiyiXUsO.js","_app/immutable/chunks/stores.BnA_H-kh.js","_app/immutable/chunks/index.BGTSHx9J.js"];
export const stylesheets = ["_app/immutable/assets/2.CltCAgab.css"];
export const fonts = ["_app/immutable/assets/Roboto-Regular.Dj9u0zRN.ttf","_app/immutable/assets/Roboto-Bold.BnrYUwvd.ttf"];
