'use strict';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'c-gantt-core.bundle.min.js',
    library: 'C_Gantt'
  },

  watch: true,

  devtool: 'eval',

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'c-gantt-core.min.css',
    }),
  ],

  module: {
    rules: [
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
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },

  mode: 'production',
}