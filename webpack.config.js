module.exports = {
  cache: true,
  debug: true,
  devtool: 'sourcemap',
  entry: './app/index.js',

  output: {
    path: __dirname + './public',
    publicPath: '/',
    filename: 'public/app.js',
    sourceMapFilename: 'public/app.map'
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
