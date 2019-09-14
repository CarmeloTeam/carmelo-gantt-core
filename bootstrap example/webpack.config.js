'use strict';

module.exports = {
  entry: './index.js',
  output: {
    filename: 'build.js'
  },

  watch: true,

  devtool: 'eval',

  module: {
    rules: 
    [
      {
        test: /\.js$/,
        loader: 'babel-loader?stage=0',
        options: {
          presets: ['@babel/preset-env',
                    {
                      'plugins': ['@babel/plugin-proposal-class-properties']
                    }
                  ]
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}