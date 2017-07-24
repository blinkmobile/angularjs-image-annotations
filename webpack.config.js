const path = require('path')
const fs = require('fs')

const CleanWebpackPlugin = require('clean-webpack-plugin')

const distPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bm-angularjs-image-annotations.js',
    path: distPath
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin([distPath])
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }/*,
      {
        test: /\.html$/,
        loader: 'ngtemplate-loader?relativeTo=' + __dirname + '/!html-loader'
      }*/
    ]
  },
  externals: ['konva'],
  devServer: {
    contentBase: [
      path.join(__dirname, 'example'),
      path.join(__dirname, 'dist/'),
      path.join(__dirname, 'node_modules')],
    watchContentBase: true,
    compress: true,
    port: 8080,
    https: true,
    https: {
      key: fs.readFileSync("/src/private-ssl/key.pem"),
      cert: fs.readFileSync("/src/private-ssl/cert.pem")
    }
  }
}
