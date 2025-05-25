// client/webpack.config.js
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default {
  entry: './src/index.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    clean: true,
  },
  devServer: {
    static: './dist',
    port: 3000,
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: 'public/index.html' })],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
