const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader']
        }]
    },
    plugins: []
};

config.plugins.push(new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: true,
    minify: {
        collapseWhitespace: true,
    },
}));

module.exports = config;