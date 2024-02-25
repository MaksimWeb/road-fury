import path from 'path';
import webpack from 'webpack';

export default (env: {
  mode: 'production' | 'development';
  port: number;
}): webpack.Configuration => ({
  mode: env.mode,

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
    modules: [path.resolve(__dirname, 'apps', 'client', 'src'), 'node_modules'],
    mainFiles: ['index'],
    fallback: {
      path: require.resolve('path-browserify'),
    },
  },

  externals: {
    react: 'umd react',
    'react-dom': 'umd react-dom',
  },

  devtool: 'inline-source-map',
});
