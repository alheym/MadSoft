const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    open: true,
    compress: true,
    client: {
      overlay: false,
    },
    static: baseWebpackConfig.externals.paths.dist,
    historyApiFallback: true,
    port: 3000,
    liveReload: true,
  },
  devtool: 'inline-source-map',
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
