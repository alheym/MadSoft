const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const baseWebpackConfig = require('./webpack.config')

const prodWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: true,
        },
      }),
    ],
  },
  devtool: 'source-map',
  plugins: [],
})

module.exports = new Promise((resolve, reject) => {
  resolve(prodWebpackConfig)
})
