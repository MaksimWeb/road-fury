import webpack from 'webpack';
import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';

export default (env: {
  mode: 'production' | 'development';
  port: number;
}): webpack.Configuration => ({
  mode: env.mode,
  entry: path.resolve(__dirname, 'src', 'index.tsx'),

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.bundle.js',
    clean: true,
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],

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
