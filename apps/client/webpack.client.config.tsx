import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import routes from '../../routes.json';

const pages = Object.entries(routes);
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
    ...pages.reduce((config, [pageName, pageValue]) => {
      if ('page' in pageValue) {
        config[pageName] = path.resolve(pageValue.page);
      }

      return config;
    }, {} as any),
  },

  output: {
    path: path.resolve('./build'),
    filename: (pathdata) => {
      if (pathdata.chunk?.name === 'layout') {
        return '[name].bundle.js';
      }

      const route = routes[String(pathdata.chunk?.id) as keyof typeof routes];
      const isCached = fs
        .readFileSync(path.resolve('page' in route ? route.page : ''))
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
    ...pages.map(([pageName, pageValue]) => {
      const isCached =
        'page' in pageValue
          ? fs.readFileSync(pageValue.page).includes('cached')
          : false;

      return new HTMLWebpackPlugin({
        filename: isCached
          ? path.resolve(`./build/cache/${pageName}.html`)
          : path.resolve('./build/index.html'),
        template: path.resolve('../../public/index.html'),
        inject: false,
        templateContent: isCached
          ? async () => {
              const { default: Layout } = await import(
                path.resolve('./src/layout.tsx')
              );

              const { default: Component, cached } = await import(
                'page' in pageValue ? pageValue.page : ''
              );

              const { props } = await cached();

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

              fs.writeFileSync(
                path.resolve(`data.ts`),
                `export const ${pageName} =  ${JSON.stringify(props)};\n`,
                {
                  encoding: 'utf-8',
                  flag: 'a',
                }
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
