/* globals module __dirname */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const api = require('./config/api.json');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'babel-loader'},
                    {loader: 'eslint-loader'},
                ],
            },
        ],
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            googleMapsApiKey: api.googleMapsApiKey,
            template: './src/index.ejs',
        }),
    ],
};
