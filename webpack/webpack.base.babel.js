/*
   Setting webpack for Base.
*/

import webpack from 'webpack'
import path from 'path'
import ForkTsChecker from 'fork-ts-checker-webpack-plugin'
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin'
import WebpackBuildNotifierPlugin from 'webpack-build-notifier'

module.exports = {
  entry: './base/core.tsx',
  output: {
    path: `${__dirname}/../`,
    filename: path.join('js', 'core.min.js')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'cache-loader' },
          { loader: 'thread-loader' },
          { loader: 'babel-loader?cacheDirectory' }
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'cache-loader' },
          { loader: 'thread-loader' },
          { loader: 'babel-loader?cacheDirectory' },
          { loader: 'ts-loader', options: { happyPackMode: true }}
        ]
      },
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'cache-loader' },
          { loader: 'thread-loader' },
          { loader: 'stylelint-custom-processor-loader', options: { emitWarning: true } }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loaders: 'url-loader',
        options: {
          // limit: 10000,
          outputPath: 'materials/images'
        }
      },
      {
        test: /\.jsx.svg$/,
        use: [
          'babel-loader',
          {
            loader: 'react-svg-loader',
            options: {
              svgo: {
                plugins: [
                  {
                    removeTitle: true,
                    removeDesc: true
                  }
                ],
                floatPrecision: 2
              }
            }
          }
        ]
      },
      {
        test: /\.inline.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.ico$/,
        loaders: 'url-loader',
        options: {
          limit: 10000,
          outputPath: 'materials/icons'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loaders: 'url-loader',
        options: {
          limit: 10000,
          outputPath: 'materials/fonts'
        }
      },
      {
        test: /\.pdf$/,
        loaders: 'url-loader',
        options: {
          limit: 10000,
          outputPath: 'materials/pdf'
        }
      },
      {
        type: 'javascript/auto',
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'source-map-loader'
      }
    ]
  },

  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
      '.svg',
      '.jpg',
      '.png',
      '.gif'
    ],

    alias: {
      '@': path.resolve(__dirname, './../apps'),
      'react-dom': '@hot-loader/react-dom'
    }
  },

  plugins: [
    new ForkTsChecker({ checkSyntacticErrors: true }),
    new HardSourceWebpackPlugin(),
    new WebpackBuildNotifierPlugin({ suppressSuccess: 'initial' })
  ],
  performance: {
    maxEntrypointSize: 400000,
    maxAssetSize: 400000
  }
}
