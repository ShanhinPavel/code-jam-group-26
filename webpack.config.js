const path = require('path');

// eslint-disable-next-line import/no-unresolved
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// eslint-disable-next-line import/no-unresolved
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    page1: './src/page1/src/main.js',
    page2: './src/page2/src/main.js',
    page3: './src/page3/src/main.js',
    page4: './src/page4/src/main.js',
    page5: './src/page5/src/main.js',
    index: './src/index/src/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'apps/[name]/build/[name].js',
    chunkFilename: '[id].[chunkhash].js',
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
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['page1'],
      filename: 'apps/page1/build/index.html',
      template: '!!html-webpack-plugin/lib/loader.js!./src/template/author.html',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['page2'],
      filename: 'apps/page2/build/index.html',
      template: '!!html-webpack-plugin/lib/loader.js!./src/template/author.html',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['page3'],
      filename: 'apps/page3/build/index.html',
      template: '!!html-webpack-plugin/lib/loader.js!./src/template/author.html',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['page4'],
      filename: 'apps/page4/build/index.html',
      template: '!!html-webpack-plugin/lib/loader.js!./src/template/author.html',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['page5'],
      filename: 'apps/page5/build/index.html',
      template: '!!html-webpack-plugin/lib/loader.js!./src/template/author.html',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['index'],
      filename: 'apps/index.html',
      template: '!!html-webpack-plugin/lib/loader.js!./src/template/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'apps/[name]/build/[name].css',
    }),
  ],
};
