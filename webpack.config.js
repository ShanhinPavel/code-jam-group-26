const path = require('path');

// eslint-disable-next-line import/no-unresolved
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// eslint-disable-next-line import/no-unresolved
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    page1: './src/page1/scripts/main.js',
    page2: './src/page2/scripts/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'apps/[name]/build/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['page1'],
      filename: 'apps/page1/build/index.html',
      template: '!!html-webpack-plugin/lib/loader.js!./src/template/index.html',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['page2'],
      filename: 'apps/page2/build/index.html',
      template: '!!html-webpack-plugin/lib/loader.js!./src/template/index.html',
    }),
  ],
};
