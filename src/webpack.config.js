const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'production', // Измените на 'development' для разработки
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Проверяем файлы с расширениями .js и .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Используем preset для обработки JSX
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Позволяет импортировать эти типы файлов без указания расширения
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
