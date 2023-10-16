const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer:  {
    historyApiFallback: true,
    port:4200,
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