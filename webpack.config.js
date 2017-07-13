const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
    entry: './src/main.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js|jsx$/,
            loader: 'babel-loader',
            query: {
                presets:['es2015', 'react']
            }
        }]
    },
    plugins: []
};

config.plugins.push(new HtmlWebpackPlugin({
    inject: true,
    minify: {
        collapseWhitespace: true,
    },
}));

module.exports = config;