import webpack from 'webpack';
import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import fs from 'fs';

const pages = fs.readdirSync(path.resolve('./src/pages'));

export default (env: {
  mode: 'production' | 'development';
  port: number;
}): webpack.Configuration => ({
  mode: env.mode,
  entry: pages.reduce((config, pageName) => {
    config[pageName.replace('.tsx', '')] = path.resolve(
      `./src/pages/${pageName}`
    );

    return config;
  }, {} as any),
  output: {
    path: path.resolve('./build'),
    filename: '[name].bundle.js',
    clean: true,
    globalObject: 'this',
    library: {
      type: 'commonjs-static',
    },
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve('./public/index.html'),
      inject: false,
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
