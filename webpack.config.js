const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/script.js',
  entry: {
    index: './src/js/script.js',
    styles: './src/js/styles.js'
  },
  plugins:[
    new HtmlWebpackPlugin({
        title: 'Manzar-e-Masawar',
        template:'./src/index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true,
  },
  module:{
    rules:[
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }
    ],
  },
};