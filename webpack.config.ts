import webpack from 'webpack';
import path from 'path';

export default (env: { mode: 'production' | 'development'; port: number }) => ({
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.bundle.js',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
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

  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    compress: true,
    port: 4000,
  },
});
