import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_rDwG0oiB.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.B9ZXGEbK.js"}],"styles":[{"type":"external","src":"/_astro/about.C2RIlaU-.css"},{"type":"external","src":"/_astro/index.BBVhkE78.css"},{"type":"inline","content":".content-div[data-astro-cid-zetdm5md]{position:fixed;top:0;text-align:center}.content-img[data-astro-cid-zetdm5md]{width:100%;display:flex;justify-content:center;align-items:center;img{width:300px;display:block;animation:animates 2s linear infinite alternate}}.content-number[data-astro-cid-zetdm5md]{position:absolute;font-size:5.5rem;font-family:$font;top:9rem;animation:animatestext 2s linear infinite alternate}.content-error[data-astro-cid-zetdm5md]{width:50%;margin:2em auto}@keyframes animates{0%{transform:translate(5%)}to{transform:translate(-5%)}}@keyframes animatestext{0%{transform:translate(5deg)}to{transform:translate(-5deg)}}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C2RIlaU-.css"},{"type":"inline","content":".about[data-astro-cid-kh7btl4r]{position:relative;top:50px;left:50px;text-align:center}.about[data-astro-cid-kh7btl4r] img[data-astro-cid-kh7btl4r]{width:600px}\nsection[data-astro-cid-4f2eqvyx]{height:100vh;background-color:#000}video[data-astro-cid-4f2eqvyx]{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C2RIlaU-.css"},{"type":"inline","content":"section[data-astro-cid-4f2eqvyx]{height:100vh;background-color:#000}video[data-astro-cid-4f2eqvyx]{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}\n.pretty[data-astro-cid-uw5kdbxl]{position:relative;top:50px;left:50px;text-align:center}.pretty[data-astro-cid-uw5kdbxl] img[data-astro-cid-uw5kdbxl]{width:600px}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C2RIlaU-.css"},{"type":"inline","content":"section[data-astro-cid-ytil4yit]{height:100vh;background-color:#000}video[data-astro-cid-ytil4yit]{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.cosmetics[data-astro-cid-ytil4yit]{position:relative;top:100px;left:50px;text-align:center}.cosmetics[data-astro-cid-ytil4yit] img[data-astro-cid-ytil4yit]{width:1020px}section[data-astro-cid-cs26kvb3]{height:100vh;background-color:#000}video[data-astro-cid-cs26kvb3]{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.beauty[data-astro-cid-cs26kvb3]{position:relative;top:100px;left:50px;text-align:center}.beauty[data-astro-cid-cs26kvb3] img[data-astro-cid-cs26kvb3]{width:600px}section[data-astro-cid-2d66dihu]{height:100vh;background-color:#000}video[data-astro-cid-2d66dihu]{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.hair[data-astro-cid-2d66dihu]{position:relative;top:50px;left:50px;text-align:center}.hair[data-astro-cid-2d66dihu] img[data-astro-cid-2d66dihu]{width:600px}section[data-astro-cid-nomoevz3]{height:100vh;background-color:#000}video[data-astro-cid-nomoevz3]{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.take[data-astro-cid-nomoevz3]{position:relative;top:100px;left:50px;text-align:center}.pretty[data-astro-cid-nomoevz3] img[data-astro-cid-nomoevz3]{width:100px;height:100px}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/content","isIndex":false,"type":"page","pattern":"^\\/content\\/?$","segments":[[{"content":"content","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/content.astro","pathname":"/content","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C2RIlaU-.css"},{"type":"inline","content":".img[data-astro-cid-i5mwzbw6]{width:400px;-o-object-fit:cover;object-fit:cover}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/products","isIndex":false,"type":"page","pattern":"^\\/products\\/?$","segments":[[{"content":"products","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/products.astro","pathname":"/products","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.B9ZXGEbK.js"}],"styles":[{"type":"external","src":"/_astro/about.C2RIlaU-.css"},{"type":"external","src":"/_astro/index.BBVhkE78.css"},{"type":"inline","content":".img[data-astro-cid-i5mwzbw6]{width:400px;-o-object-fit:cover;object-fit:cover}\n.about[data-astro-cid-kh7btl4r]{position:relative;top:50px;left:50px;text-align:center}.about[data-astro-cid-kh7btl4r] img[data-astro-cid-kh7btl4r]{width:600px}\nsection[data-astro-cid-4f2eqvyx]{height:100vh;background-color:#000}video[data-astro-cid-4f2eqvyx]{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}\nsection[data-astro-cid-ytil4yit]{height:100vh;background-color:#000}video[data-astro-cid-ytil4yit]{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.cosmetics[data-astro-cid-ytil4yit]{position:relative;top:100px;left:50px;text-align:center}.cosmetics[data-astro-cid-ytil4yit] img[data-astro-cid-ytil4yit]{width:1020px}section[data-astro-cid-cs26kvb3]{height:100vh;background-color:#000}video[data-astro-cid-cs26kvb3]{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.beauty[data-astro-cid-cs26kvb3]{position:relative;top:100px;left:50px;text-align:center}.beauty[data-astro-cid-cs26kvb3] img[data-astro-cid-cs26kvb3]{width:600px}section[data-astro-cid-2d66dihu]{height:100vh;background-color:#000}video[data-astro-cid-2d66dihu]{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.hair[data-astro-cid-2d66dihu]{position:relative;top:50px;left:50px;text-align:center}.hair[data-astro-cid-2d66dihu] img[data-astro-cid-2d66dihu]{width:600px}section[data-astro-cid-nomoevz3]{height:100vh;background-color:#000}video[data-astro-cid-nomoevz3]{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.take[data-astro-cid-nomoevz3]{position:relative;top:100px;left:50px;text-align:center}.pretty[data-astro-cid-nomoevz3] img[data-astro-cid-nomoevz3]{width:100px;height:100px}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n.pretty[data-astro-cid-uw5kdbxl]{position:relative;top:50px;left:50px;text-align:center}.pretty[data-astro-cid-uw5kdbxl] img[data-astro-cid-uw5kdbxl]{width:600px}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/components/HeaderImage.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/components/InteractiveBgAbout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/pages/about.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/pages/contact.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/contact@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/components/InteractiveBgCosmetic.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/pages/content.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/content@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/components/InteractiveBgBeauty.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/components/InteractiveBgHair.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/components/InteractiveBgTakeCare.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/pages/products.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/products@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","/src/pages/contact.astro":"chunks/pages/contact_BLzpXR3e.mjs","/src/pages/content.astro":"chunks/pages/content_B1viSj_X.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_Q8JJmItd.mjs","/src/pages/index.astro":"chunks/pages/index_BaeZ0z3j.mjs","/src/pages/products.astro":"chunks/pages/products_D_1QpiPO.mjs","\u0000@astrojs-manifest":"manifest_cDpisJ75.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_pdZvaZZB.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_CSfaGYqZ.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_4zNTTO5n.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_DAApUiDx.mjs","\u0000@astro-page:src/pages/content@_@astro":"chunks/content_DKy15iHn.mjs","\u0000@astro-page:src/pages/products@_@astro":"chunks/products_CuFFCg5O.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BJQ0NDCu.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.B9ZXGEbK.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/nutriatech.CzHRh5_6.png","/_astro/slide4.DubVr-IY.jpg","/_astro/slide1.BImJ7lSV.jpg","/_astro/slide3.D1ke07tj.jpg","/_astro/slide5.B3zZHCPo.jpg","/_astro/cosmetics.CRpHnNJS.jpg","/_astro/slide2.r82mDlbx.jpg","/_astro/takeCare.Bp91MuVZ.jpg","/_astro/pretty-woman.Dl05xbHs.jpg","/_astro/beauty.B4gLv8wo.jpg","/_astro/video-loop-2.Cxo8Srqw.mp4","/_astro/about.Blqzw67c.jpg","/_astro/hair.evmGBEUb.jpg","/_astro/rafaela.BBgyCslH.png","/_astro/video-loop-1.DxdoDIpH.mp4","/_astro/angeluz.C6UXEZLI.png","/_astro/milagros.DK9bvb31.png","/_astro/kaba.P_9wETfO.png","/_astro/pocion.CGsStCIw.png","/_astro/video-loop-3.C6_YvqbO.mp4","/_astro/video-loop-5.CPdKGmXf.mp4","/_astro/video-loop-4.Cbd8XxXA.mp4","/_astro/about.C2RIlaU-.css","/_astro/index.BBVhkE78.css","/favicon.svg","/_astro/hoisted.B9ZXGEbK.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false});

export { manifest };