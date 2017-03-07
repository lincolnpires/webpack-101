var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
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
