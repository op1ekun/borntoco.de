var path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: './dist/bundle.js'
    },
    resolve: {
        extensions: [
            '.js', 
            '.tsx',
        ]
    },
    module: {
        loaders: [
            { 
                test: /\.tsx$/, 
                loader: 'ts-loader'
            }
        ]
    }
}