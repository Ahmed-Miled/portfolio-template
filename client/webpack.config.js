// client/webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        // Ensure this is an array
        {
          context: ['/services/api'], // This is the key: define which paths to proxy
          target: 'http://localhost:5000', // Your backend server
          secure: false, // If your backend is not HTTPS
          changeOrigin: true, // Recommended for most cases
          logLevel: 'debug', // Optional: for more detailed proxy logging
          // pathRewrite: { '^/api': '' }, // Uncomment if backend routes don't start with /api
        },
      ],
    },
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  };
};
