import { renderers } from './renderers.mjs';
import { manifest } from './manifest_cDpisJ75.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_pdZvaZZB.mjs');
const _page1 = () => import('./chunks/404_CSfaGYqZ.mjs');
const _page2 = () => import('./chunks/about_4zNTTO5n.mjs');
const _page3 = () => import('./chunks/contact_DAApUiDx.mjs');
const _page4 = () => import('./chunks/content_DKy15iHn.mjs');
const _page5 = () => import('./chunks/products_CuFFCg5O.mjs');
const _page6 = () => import('./chunks/index_BJQ0NDCu.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/content.astro", _page4],
    ["src/pages/products.astro", _page5],
    ["src/pages/index.astro", _page6]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "fdd09f97-d43c-4e52-afe4-d4f3e35ac99e"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
