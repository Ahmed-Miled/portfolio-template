// client/webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    mode: isDevelopment ? 'development' : 'production',
    entry: './src/index.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/',
      clean: true,
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: 'public/_redirects', to: '' }],
      }),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'public'),
      },
      port: 3000,
      hot: true,
      open: true,
      historyApiFallback: true, // or { index: '/index.html' }
      proxy: [
        {
          context: ['/services/api'], // This is the key: define which paths to proxy
          target: 'http://localhost:5000', // Your backend server
          secure: false, 
          changeOrigin: true,
          logLevel: 'debug', 
        },
      ],
    },
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  };
};
