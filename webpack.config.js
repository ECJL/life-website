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
        rules: [{
            test: /\.js|jsx$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets:['es2015', 'react']
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        module: true
                    }
                }]
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            use: ['url-loader?limit=100000']
        }]
    },
    plugins: []
};

config.plugins.push(new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: true,
    minify: {
        collapseWhitespace: true,
    }
}));

module.exports = config;