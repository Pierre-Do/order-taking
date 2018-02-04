import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const vendor = ['react', 'react-dom', 'react-redux', 'react-router-dom'];
const isProduction = process.env.NODE_ENV === 'production';

export default {
  name: 'client',
  target: 'web',

  devtool: isProduction ? null : 'cheap-module-eval-source-map',

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss'],
  },

  entry: {
    bundle: './entry.js',
    vendor,
  },

  // Remove support for node libraries in our build
  // ref: https://github.com/webpack/node-libs-browser
  node: {
    __filename: false,
    __dirname: false,
    assert: false,
    Buffer: false,
    console: false,
    crypto: false,
    dns: false,
    domain: false,
    events: false,
    fs: false,
    net: false,
    os: false,
    path: false,
    process: false,
    punycode: false,
    querystring: false,
    setImmediate: false,
    tty: false,
    url: false,
    util: false,
    vm: false,
    zlib: false,
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        }),
      },
    ],
  },

  context: path.join(__dirname, 'src'),
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'target', 'build'),
    publicPath: '/',
    chunkFilename: '[name].[hash].js',
  },
  profile: false,
  watch: false,

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
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        dead_code: true,
        warnings: false,
        unused: true,
        drop_console: true,
        conditionals: true,
        evaluate: true,
        sequences: true,
        booleans: true,
        loops: true,
      },
      beautify: false,
      mangle: true,
      output: {
        comments: false,
      },
      ie8: false,
      comments: /@license|@preserv/gi,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      // Vendors has their own entry point and chunk.
      name: 'vendor',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      // Everything but the vendors.
      name: 'bundle',
      children: true,
      async: 'commons',
      minChunks: 3,
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash].css',
      allChunks: true,
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
  ],
};