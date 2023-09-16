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
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.9],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75,
                            },
                        },
                    },
                ],
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
            // inject: 'body'
        }),
        new HtmlWebpackPlugin({
            title: 'Manzar-e-Masawar dev',
            filename: 'galleryReg.html',
            template: './src/galleryReg.html', // Use the head template
            // inject: 'body'
        }),
        new HtmlWebpackPlugin({
            title: 'Manzar-e-Masawar dev',
            filename: 'ExpoReg.html',
            template: './src/ExpoReg.html', // Use the head template
            // inject: 'body'
        }),
        new HtmlWebpackPlugin({
            title: 'Manzar-e-Masawar dev',
            filename: 'FutureArtistsReg.html',
            template: './src/FutureArtistsReg.html', // Use the head template
            // inject: 'body'
        }),
        new HtmlWebpackPlugin({
            title: 'Manzar-e-Masawar dev',
            filename: 'Sponsor.html',
            template: './src/Sponsor.html', // Use the head template
            // inject: 'body'
        }),
        new HtmlWebpackPlugin({
            title: 'Manzar-e-Masawar dev',
            filename: 'contact.html',
            template: './src/contact.html', // Use the head template
            // inject: 'body'
        }),
    ],
    optimization: {
        runtimeChunk: 'single',
    }
};
