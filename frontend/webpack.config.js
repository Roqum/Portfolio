const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/dist'),
    //clean: true,
  },
  devtool: 'inline-source-map',
  devServer:  {
    port:4200,
    static: path.resolve(__dirname, './dist'),
    open: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body'
    })],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: function () {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            }
          }, 
          'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      }
    ],
  },
};