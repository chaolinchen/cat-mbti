const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// 加載環境變量
const env = dotenv.config().parsed || {};

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash].js' : '[name].js',
      clean: true,
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: 'ts-loader'
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource'
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify({
          ...env,
          HUGGING_FACE_TOKEN: env.HUGGING_FACE_TOKEN
        })
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        minify: isProduction ? {
          collapseWhitespace: true,
          removeComments: true
        } : false
      }),
      ...(isProduction ? [
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css'
        })
      ] : [])
    ],
    optimization: {
      minimize: isProduction,
      minimizer: [
        ...(isProduction ? [
          new CssMinimizerPlugin(),
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true
              }
            }
          })
        ] : [])
      ],
      splitChunks: {
        chunks: 'all',
        name: 'vendors'
      }
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public')
      },
      compress: true,
      port: 3006,
      hot: true,
      open: true,
      historyApiFallback: true,
      client: {
        overlay: true
      },
      devMiddleware: {
        writeToDisk: false
      },
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      allowedHosts: 'all'
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map'
  };
};