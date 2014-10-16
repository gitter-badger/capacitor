require('node-env-file')('./.env')

var Path = require('path')
var WebPack = require('webpack')
var isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  cache: true,
  debug: isDevelopment,
  devtool: isDevelopment ? 'sourcemap' : null,
  entry: './client/index.js',

  output: {
    path: Path.resolve(__dirname, '..', 'public'),
    publicPath: '/',
    filename: 'capacitor.js',
    sourceMapFilename: 'capacitor.map'
  },

  plugins: [
    new WebPack.DefinePlugin({
      '__DEV__'  : isDevelopment
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: [ 'web_modules', 'node_modules' ]
  },

  module: {
    loaders: [
      {
        test    : /\.js$/,
        exclude : /node_modules/,
        loader  : 'react-hot'
      },
      {
        test    : /\.js$/,
        loader  : 'envify-loader'
      },
      {
        test    : /\.js$/,
        exclude : /node_modules/,
        loader  : 'jsx-loader',
        query   : { harmony: true }
      },
      {
        test    : /\.json$/,
        exclude : /node_modules/,
        loader  : 'json-loader'
      }
    ]
  }
}
