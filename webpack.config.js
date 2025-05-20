const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Cấu hình cho thư viện
const libraryConfig = {
  name: 'library',
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'button-lib.js',
    library: 'ButtonLib',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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
};

// Cấu hình cho demo
const demoConfig = {
  name: 'demo',
  mode: 'development',
  entry: './demo/demo.js',
  output: {
    path: path.resolve(__dirname, 'demo/dist'),
    filename: 'demo.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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
    new HtmlWebpackPlugin({
      template: './demo/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'demo/dist'),
    },
    compress: true,
    port: 9000,
  },
};

// Export cả hai cấu hình
module.exports = [libraryConfig, demoConfig];
