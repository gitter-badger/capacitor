var Server  = require("webpack-dev-server")
var Webpack = require("webpack")
var url     = require('url')
var config  = require('../config/webpack')

var home    = url.format({ hostname: 'localhost', protocol: 'http', port: process.env.PORT })
var address = url.format({ hostname: 'localhost', protocol: 'http', port: process.env.WEBPACK_PORT })

config.entry = [
  'webpack/hot/dev-server',
  "webpack-dev-server/client?" + address
].concat(config.entry)

config.plugins = [
  new Webpack.HotModuleReplacementPlugin()
].concat(config.plugins)

var compiler = Webpack(config)

var server = new Server(compiler, {
  hot: true,
  stats: false,
  watchDelay: 300,
  contentBase: home,
  publicPath: url.resolve(address, '/assets')
})

module.exports = server;
