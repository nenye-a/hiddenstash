const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const srcDir = '../src/scripts/';

module.exports = {
  entry: {
    contentScript: path.join(__dirname, srcDir + 'contentScript.ts'),
    amazonContentScript: path.join(
      __dirname,
      srcDir + 'amazonContentScript.ts',
    ),
    background: path.join(__dirname, srcDir + 'background.ts'),
  },
  output: {
    path: path.join(__dirname, '../dist/js'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,

        use: {
          loader: 'file-loader',
          query: {
            name: '[name].[ext]',
            outputPath: './assets/',
          },
        },
        include: [path.join(__dirname, '../assets')],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [new CopyPlugin([{ from: '.', to: '../' }], { context: 'public' })],
};
