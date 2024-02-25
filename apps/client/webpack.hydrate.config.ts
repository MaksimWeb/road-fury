import webpack from 'webpack';
import path from 'path';

export default (env: {
  mode: 'production' | 'development';
  port: number;
}): webpack.Configuration => ({
  target: 'web',
  mode: env.mode,
  entry: { index: './src/index.tsx' },

  output: {
    path: path.resolve('./build/main'),
    filename: '[name].bundle.js',
    clean: true,
    globalObject: 'this',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          rootMode: 'upward',
        },
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
