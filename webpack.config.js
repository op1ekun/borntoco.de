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
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname)
      },
      port: 8888
    }
}