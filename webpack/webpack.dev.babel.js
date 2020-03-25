/*
   Setting webpack for Development.
*/

import webpack from 'webpack'
import webpackMerge from 'webpack-merge'
import webpackBase from './webpack.base.babel'

export default webpackMerge(webpackBase, {
  plugins: [],
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    open: 'google chrome canary',
    progress: true,
    clientLogLevel: 'info',
    contentBase: `${__dirname}/../`,
    historyApiFallback: true,
    watchOptions: {
      poll: true
    }
  }
})
