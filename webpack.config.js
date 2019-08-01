const path = require('path');

module.exports = {
  target: 'node',
  entry: './src/frontend/index.tsx',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.j|tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.jsx' ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
};
