export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.t8w0XQ9A.js","app":"_app/immutable/entry/app.7hECkSB8.js","imports":["_app/immutable/entry/start.t8w0XQ9A.js","_app/immutable/chunks/entry.WM5dDn5d.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.BGTSHx9J.js","_app/immutable/entry/app.7hECkSB8.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CiyiXUsO.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/thanks",
				pattern: /^\/thanks\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();