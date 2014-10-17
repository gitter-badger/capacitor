module.exports = {
  cache: true,
  debug: true,
  devtool: 'sourcemap',
  entry: './browser/application.js',

  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'application.js',
    sourceMapFilename: 'application.map'
  },

  resolve: {
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      {
        test : /\.js$/,
        loader  : 'jsx-loader?harmony=true'
      }
    ]
  }
}
