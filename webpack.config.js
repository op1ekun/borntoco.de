var path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: './dist/bundle.js'
    },
    resolve: {
        extensions: [
            '.js', 
            '.ts',
            '.tsx'
        ]
    },
    module: {
        loaders: [
            { 
                test: /\.(tsx|ts)$/, 
                loader: 'ts-loader'
            }
        ]
    }
}