var path = require('path');

var config = {
    entry: './app/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader']
        }]
    }
};

module.exports = config;