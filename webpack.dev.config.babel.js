import path from 'path';
import webpack from 'webpack';

import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  name: 'devServer',
  target: 'web',

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss'],
  },

  entry: ['./entry.js'],

  context: path.join(__dirname, 'src'),
  output: {
    filename: '[name].js',
    publicPath: '/',
    path: path.join(__dirname, 'target', 'dev'),
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader?cacheDirectory'],
      },
      {
        test: /\.md$/,
        use: ['raw-loader'],
      },
      {
        test: /\.font\.(js|json)$/,
        loaders: ['style-loader', 'css-loader', 'fontgen-loader?embed'],
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  devtool: 'cheap-module-eval-source-map',
  profile: true,
  watch: true,

  node: {
    dns: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },

  devServer: {
    stats: { colors: true },
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: process.env.PORT || 8081,
    host: '0.0.0.0',
    disableHostCheck: true,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new HtmlWebpackPlugin({
      title: 'Dev Server',
      template: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{ from: path.join(__dirname, 'src/assets') }]),
    new webpack.LoaderOptionsPlugin({
      debug: false,
    }),
  ],
};
