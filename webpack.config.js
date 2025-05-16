const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = () => {
  return {
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new ReactRefreshWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    },
    devServer: {
      compress: true,
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
      client: {
        overlay: false,
      },
    },
  };
};
