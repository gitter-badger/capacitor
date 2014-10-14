var WebpackDevMiddleware = require("webpack-dev-middleware")
var Webpack = require("webpack")
var config  = require('../../webpack.config')

var middleware = WebpackDevMiddleware(Webpack(config), {
  contentBase: config.output.path,
  stats: { colors: true },
  watchDelay: 300
})

module.exports = function(app) {
  app.use(middleware)
}
