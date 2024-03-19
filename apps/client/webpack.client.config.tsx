import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';
import fs from 'fs';
import routes from '../../routes.json';

if (fs.existsSync(path.resolve('cache-data'))) {
  fs.rmSync(path.resolve('cache-data'), { recursive: true });
}

fs.mkdirSync(path.resolve('cache-data'));

const pages = Object.entries(routes).filter(
  ([_, pageValue]) => 'page' in pageValue
);

pages.forEach(async ([pageName, pageValue]) => {
  //@ts-ignore
  const { getPageProps } = await import(pageValue.page);

  const { props, revalidate = 0 } = await getPageProps();

  if (revalidate) {
    fs.writeFileSync(
      path.resolve(`./cache-data/${pageName}.json`),
      `${JSON.stringify({
        props,
        createDate: Date.now(),
      })}`,
      {
        encoding: 'utf-8',
      }
    );
  }
});

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
    new HTMLWebpackPlugin({
      filename: path.resolve('./build/index.html'),
      template: path.resolve('../../public/index.html'),
      inject: false,
    }),

    new webpack.ProvidePlugin({
      fetch: ['node-fetch', 'default'],
    }),
  ],
});
