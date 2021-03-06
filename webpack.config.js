const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry : ['babel-polyfill', './src/app.js'],
    output : {
        path : path.join(__dirname, 'public'),//this is the abs path on machine you want o/p of that webpack
        publicPath: '/',
        filename : 'bundle.js'
    },
    devServer: {
        contentBase: "./build",
    },
    performance: {
        hints: false
  },
    resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
     rules : [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: { babelrcRoots: ['.', '../'] }, // <-- this line fixed it!
        },
        {
            test : /\.s?css$/,
            use : [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }]
  },
    plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname,"public/index.html"),
      filename: "./index.html"
    })
  ]
};
