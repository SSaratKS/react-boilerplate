var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'none',
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
      path: __dirname,
      filename: './public/bundle.js'
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules'
    ],
    //root: __dirname,
    alias: {
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['.js','.jsx','.scss','.css']
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react','stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_componets)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
