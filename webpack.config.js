const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/cjs.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
            loader: 'babel-loader',
            options: {
                presets: [
                    [
                      '@babel/preset-env',
                      {
                        targets: {
                          node: '6.9.0',
                        },
                      },
                    ],
                  ], //Preset used for env setup
                plugins: ['@babel/plugin-proposal-object-rest-spread']
            }
        }]
    }]
  },
  target: 'node',
  resolve: {
    extensions: ['.js'],
  },
};