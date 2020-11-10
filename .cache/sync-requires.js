const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/home/pvenhryn/apollo/taxi/src/pages/404.js"))),
  "component---src-templates-home-js": hot(preferDefault(require("/home/pvenhryn/apollo/taxi/src/templates/home.js")))
}

