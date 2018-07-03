const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html',
  favicon: './public/favicon.ico',
});

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/dist',
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json', '.css'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, './src'),
        use: ['style-loader', 'css-loader'],
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  plugins: [htmlWebpackPlugin],
  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM',
  // },
};
