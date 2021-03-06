module.exports = {
  entry: './example/app.js',
  output: {
    filename: "bundle.js",
  },
  devServer: {
    contentBase: __dirname,
    compress: true
  },
  resolve: {
    alias: {
      Thwip: '../src'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}
