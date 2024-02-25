import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';
import fs from 'fs';

// plugins: pages.map((page) => {
//   const isCached = fs
//     .readFileSync(path.resolve(`../client/src/pages/${page}`))

//     .includes('cached');

//   return new HTMLWebpackPlugin({
//     filename: isCached
//       ? path.resolve(`./build/cache/${page.replace('.tsx', '')}.html`)
//       : path.resolve('./build/index.html'),
//     template: path.resolve('../../public/index.html'),
//     inject: false,
//     templateContent: isCached
//       ? async () => {
//           const { default: Layout } = await import(pageLayoutPath);

//           const { default: Component, cached } = await import(
//             path.resolve(`../client/src/pages/${page}`)
//           );

//           const { props } = cached();

//           console.log(Layout(Component(props)));

//           const resultPage = pageHtml
//             // .replace('<!--mycode-->', fullRenderedPage)
//             .replace(
//               '<!--page-data-->',
//               `<script id="PAGE_DATA" type="application/json">${JSON.stringify(
//                 props
//               )}</script>`
//             );

//           return resultPage;
//         }
//       : pageHtml,
//   });
// }),

const pages = fs.readdirSync(path.resolve('../client/src/pages'));

export default (env: {
  mode: 'production' | 'development';
  port: number;
}): webpack.Configuration => ({
  extends: path.resolve('../../webpack.base.config.ts'),
  target: 'web',
  mode: env.mode,
  entry: {
    index: './src/index.tsx',
    ...pages.reduce((config, pageName) => {
      config[pageName.replace('.tsx', '')] = path.resolve(
        `../client/src/pages/${pageName}`
      );

      return config;
    }, {} as any),
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve('../../public/index.html'),
      inject: false,
    }),
  ],

  output: {
    path: path.resolve('./build'),
    filename: (pathdata) => {
      if (pathdata.chunk?.name === 'index') {
        return '[name].bundle.js';
      }

      const isCached = fs
        .readFileSync(
          path.resolve(`../client/src/pages/${pathdata.chunk?.id}.tsx`)
        )
        .includes('cached');

      return isCached ? 'cache/[name].bundle.js' : 'pages/[name].bundle.js';
    },
    clean: true,
    globalObject: 'this',
    library: {
      type: 'commonjs-static',
    },
  },
});
