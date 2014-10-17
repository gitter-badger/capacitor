var WebpackDevMiddleware = require("webpack-dev-middleware")
var Webpack = require("webpack")
var config  = require('../../webpack.config')

module.exports = WebpackDevMiddleware(Webpack(config), {
  contentBase: config.output.path,
  stats: { colors: true },
  watchDelay: 300
})
