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
            exclude: path.join(__dirname, '/node_modules/'),
            use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        module: true
                    }
                }]
        }, {
            // For all .css files in node_modules
            test: /\.css$/,
            include: path.join(__dirname, '/node_modules/'),
            use: ['style-loader', 'css-loader']
        }
        , {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            use: ['url-loader', 'file-loader']
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