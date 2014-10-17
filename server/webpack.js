var Server  = require("webpack-dev-server")
var Webpack = require("webpack")
var url     = require('url')
var config  = require('../config/webpack')

config.entry = [
  'webpack/hot/dev-server',
  "webpack-dev-server/client?" + process.env.ASSETS_HOST
].concat(config.entry)

config.plugins = [
  new Webpack.HotModuleReplacementPlugin()
].concat(config.plugins)

var compiler = Webpack(config)

var server = new Server(compiler, {
  hot: true,
  stats: false,
  watchDelay: 300,
  contentBase: url.format({ hostname: 'localhost', protocol: 'http', port: process.env.PORT }),
  publicPath: process.env.ASSETS_HOST
})

module.exports = server;
