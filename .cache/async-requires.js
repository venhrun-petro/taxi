// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-templates-home-js": () => import("./../../../src/templates/home.js" /* webpackChunkName: "component---src-templates-home-js" */)
}

