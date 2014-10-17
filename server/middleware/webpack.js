var WebpackDevMiddleware = require("webpack-dev-middleware")
var Webpack = require("webpack")
var config  = require('../../config/webpack')

var compiler = Webpack(config)

module.exports = WebpackDevMiddleware(compiler, {
  contentBase: config.output.path,
  stats: { colors: true },
  watchDelay: 300
})
