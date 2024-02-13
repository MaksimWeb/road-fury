import webpack from 'webpack';
import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import fs from 'fs';

const pages = fs.readdirSync(path.resolve('../client/src/pages'));

// fs.writeFileSync(
//   './routes.ts',
//   `export default ${JSON.stringify(
//     pages.reduce<any>((routes, currentPage) => {
//       if (
//         fs.existsSync(
//           `./build/server/${currentPage.replace('.tsx', '')}.bundle.js`
//         )
//       ) {
//         return {
//           ...routes,
//           [currentPage.replace('.tsx', '')]: `./src/pages/${currentPage.replace(
//             '.tsx',
//             ''
//           )}`,
//         };
//       }

//       return routes;
//     }, {})
//   )}`
// );

// const pagesDynamicImports = pages
//   .map((pageName) => {
//     return `import ${pageName[0].toUpperCase()}${pageName
//       .replace('.tsx', '')
//       .slice(1)} from './src/pages/${pageName.replace('.tsx', '')}'`;
//   })
//   .join('\n');

// fs.writeFileSync(
//   './routes.ts',
//   `${pagesDynamicImports} \n export default ${JSON.stringify(
//     pages.reduce<any>((routes, currentPage) => {
//       return {
//         ...routes,
//         [currentPage.replace('.tsx', '')]: JSON.parse(
//           currentPage[0].toUpperCase() +
//             currentPage.replace('.tsx', '').slice(1)
//         ),
//       };
//     }, {})
//   )}`
// );

export default (env: {
  mode: 'production' | 'development';
  port: number;
}): webpack.Configuration => ({
  mode: env.mode,
  entry: {
    ...pages.reduce((config, pageName) => {
      config[pageName.replace('.tsx', '')] = path.resolve(
        `../client/src/pages/${pageName}`
      );

      return config;
    }, {} as any),
  },
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
      template: path.resolve('../../public/index.html'),
      inject: false,
    }),
  ],

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

  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },

  devtool: 'inline-source-map',
});
