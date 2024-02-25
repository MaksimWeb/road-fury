import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { buildRoutes } from './src/utils/build-routes';

const routes = buildRoutes();

const pages = fs.readdirSync(path.resolve('../client/src/pages'));
const pageHtml = fs.readFileSync(
  path.resolve('../../public/index.html'),
  'utf-8'
);

export default (env: {
  mode: 'production' | 'development';
  port: number;
}): webpack.Configuration => ({
  extends: path.resolve('../../webpack.base.config.ts'),
  target: 'node',
  mode: env.mode,
  entry: {
    layout: './src/layout.tsx',
    ...pages.reduce((config, pageName) => {
      config[pageName.replace('.tsx', '')] = path.resolve(
        `../client/src/pages/${pageName}`
      );

      return config;
    }, {} as any),
  },

  output: {
    path: path.resolve('./build'),
    filename: (pathdata) => {
      if (pathdata.chunk?.name === 'layout') {
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
      type: 'commonjs',
    },
  },

  plugins: [
    ...pages.map((page) => {
      const isCached = fs
        .readFileSync(path.resolve(`../client/src/pages/${page}`))
        .includes('cached');

      return new HTMLWebpackPlugin({
        filename: isCached
          ? path.resolve(`./build/cache/${page.replace('.tsx', '')}.html`)
          : path.resolve('./build/index.html'),
        template: path.resolve('../../public/index.html'),
        inject: false,
        templateContent: isCached
          ? async () => {
              const { default: Layout } = await import(
                path.resolve('./src/layout.tsx')
              );

              const { default: Component, cached } = await import(
                path.resolve(`../client/src/pages/${page}`)
              );

              const { props } = cached();

              const fullRenderedPage = renderToString(
                <Layout>
                  <Component {...props} />
                </Layout>
              );

              const resultPage = pageHtml
                .replace('<!--mycode-->', fullRenderedPage)
                .replace(
                  '<!--page-data-->',
                  `<script id="PAGE_DATA" type="application/json">${JSON.stringify(
                    props
                  )}</script>`
                );

              return resultPage;
            }
          : pageHtml,
      });
    }),

    new webpack.ProvidePlugin({
      fetch: ['node-fetch', 'default'],
    }),
  ],
});
