'use strict';

/* eslint camelcase: 'off' */

const path = require('path');
const webpack = require('webpack');

function getConfig() {
    return {
        devtool: 'source-map',

        entry: [
        path.join(__dirname, 'app/index.js')
        ],

        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js',
            publicPath: "/songyu-wang.github.io/",
        },

        module: {
            rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'app'),
                loaders: ['babel-loader']
            }
            ]
        },

        plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),

        ]
    };
}

module.exports = getConfig();
