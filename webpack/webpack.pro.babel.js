/*
   Setting webpack for Production.
*/

import webpack from 'webpack'
import webpackMerge from 'webpack-merge'
import webpackBase from './webpack.base.babel'
import TerserPlugin from 'terser-webpack-plugin'
import licenseInfoWebpackPlugin from 'license-info-webpack-plugin'

export default webpackMerge(webpackBase, {
  plugins: [
    new licenseInfoWebpackPlugin({ glob: '{LICENSE,license,License}*' }),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true
          },
          output: {
            comments: /^\**!|@preserve|@license|@cc_on/
          }
        }
      })
    ]
  }
})
