import webpack from 'webpack';
import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import fs from 'fs';

const pages = fs.readdirSync(path.resolve('./src/pages'));

export default (env: {
  mode: 'production' | 'development';
  port: number;
}): webpack.Configuration => ({
  target: 'web',
  mode: env.mode,
  entry: { index: './src/index.tsx' },

  output: {
    path: path.resolve('./build/client'),
    filename: '[name].bundle.js',
    clean: true,
    globalObject: 'this',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: '/node_modules',
        use: ['babel-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    mainFiles: ['index'],
    fallback: {
      path: require.resolve('path-browserify'),
    },
  },

  devtool: 'inline-source-map',
});
