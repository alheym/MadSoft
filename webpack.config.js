const path = require('path')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.resolve(__dirname, './dist'),
}

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    index: path.join(PATHS.src, '/app.tsx'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: path.join(PATHS.src, '/index.html'),
    }),
    new Dotenv(),
  ],
  output: {
    path: PATHS.dist,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg?$/,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        loader: 'file-loader',
        exclude: /node_modules/,
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@mocks': path.resolve(__dirname, 'src/mocks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
}
