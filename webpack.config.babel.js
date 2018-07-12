import webpack from 'webpack';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const vendor = ['react', 'react-dom', 'react-redux', 'react-router-dom'];

export default {
  name: 'client',
  mode: 'production',
  target: 'web',

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss'],
  },

  entry: {
    bundle: './entry.js',
    vendor,
  },

  stats: {
    // Disable the verbose output on build
    children: false,
  },

  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'target', 'build'),
    publicPath: '/',
    chunkFilename: '[name].[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader?cacheDirectory'],
      },
      {
        test: /\.font\.(js|json)$/,
        use: ['style-loader', 'css-loader', 'fontgen-loader?embed'],
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]',
      },
      {
        test: /\.(png)$/,
        loader: 'file-loader?name=public/images/[name].[ext]',
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        // Don't generate automatic common chunks
        default: false,
        // Don't generate automatic vendor chunks
        vendors: false,
        // Custom common chunk
        bundle: {
          name: 'commons',
          chunks: 'all',
          minChunks: 3,
          reuseExistingChunk: false,
        },
        // Custom vendor chunk by name
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
        },
        // Merge all the CSS into one file
        styles: {
          name: 'styles',
          test: /\.s?css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },

  context: path.join(__dirname, 'src'),

  profile: false,
  watch: false,

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[name].[hash].css',
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      // Looks prettier
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: true,
      },
      template: 'index.html',
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
    }),
  ],
};
