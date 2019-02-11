const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry : ['babel-polyfill', './src/app.js'],
    output : {
        path : path.join(__dirname, 'public'), //this is the abs path on machine you want o/p of that webpack
        filename : 'bundle.js' 
    },
    performance: {
        hints: false
},
  module: {
     rules : [{
            loader : 'babel-loader',
            test : /\.js$/, // run through all the js files in your application
            exclude : /node_modules/
        },{
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
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};