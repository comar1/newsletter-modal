import { init } from '../serverless.js';

export const handler = init((() => {
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
		client: {"start":"_app/immutable/entry/start.CI3B4rLX.js","app":"_app/immutable/entry/app.4wiaV4Es.js","imports":["_app/immutable/entry/start.CI3B4rLX.js","_app/immutable/chunks/entry.BAALfjcY.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.BGTSHx9J.js","_app/immutable/entry/app.4wiaV4Es.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CiyiXUsO.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js'))
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
})());
