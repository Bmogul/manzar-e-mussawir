const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: 'development',
    entry: {
        index: './src/js/script.js',
        styles: './src/css/style.css'
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
                        {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
                        {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
                new HtmlWebpackPlugin({
            title: 'Manzar-e-Masawar dev',
            filename: 'index.html',
            template: './src/index.html', // Use the head template
        }),
    ],
        optimization: {
        runtimeChunk: 'single',
    }
};
