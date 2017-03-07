var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: 'dist',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextWebpackPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader'],
        publicPath: './dist'
      })
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: './src/index.html'
    }),
    new ExtractTextWebpackPlugin({
      filename: 'styles.css',
      disable: false,
      allChunks: true
    })
  ]
};