var path = require('path');

module.exports = {
    devtool: 'source-map',
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js'
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
        }
      ],
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname),
        watch: true
      },
      port: 8888
    }
}