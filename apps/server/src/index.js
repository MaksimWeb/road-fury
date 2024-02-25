import path from 'path';
import fs from 'fs';
import express from 'express';
import { renderToString } from 'react-dom/server';

const app = express();

const scriptPathRegexp = /.*\.js/;

const myPages = fs.readdirSync(path.resolve('../client/src/pages'));

const pageHtml = fs.readFileSync(
  path.resolve('../client/build/index.html'),
  'utf-8'
);
const pageLayoutPath = path.resolve('../client/build/layout.bundle.js');

myPages.forEach(async (page) => {
  const pageRouteName = page.replace('.tsx', '');
  const pageRoute = pageRouteName === 'index' ? '/' : `/${pageRouteName}`;

  if (
    fs.existsSync(path.resolve(`../client/build/cache/${pageRouteName}.html`))
  ) {
    const cachedPage = fs.readFileSync(
      path.resolve(`../client/build/cache/${pageRouteName}.html`),
      'utf-8'
    );

    app.get(pageRoute, (req, res) => {
      const resultPage = cachedPage.replace(
        '<!--myscript-->',
        `<script type='module' defer src='${path.join(
          '../client/build/main/index.bundle.js'
        )}'></script>`
      );

      res.set('Cache-Control', 'no-cache');
      res.send(resultPage);
    });
  } else {
    const {
      default: { default: Layout },
    } = await import(pageLayoutPath);

    const {
      default: { default: Component, SSR },
    } = await import(
      path.resolve(`../client/build/pages/${pageRouteName}.bundle.js`)
    );

    const { props } = await SSR();

    app.get(pageRoute, (req, res) => {
      const resultPage = pageHtml
        .replace(
          '<!--mycode-->',
          renderToString(
            <Layout>
              <Component {...props} />
            </Layout>
          )
        )
        .replace(
          '<!--myscript-->',
          `<script type='module' defer src='${path.join(
            '../client/build/main/index.bundle.js'
          )}'></script>`
        )
        .replace(
          '<!--page-data-->',
          `<script id="PAGE_DATA" type="application/json">${JSON.stringify(
            props
          )}</script>`
        );

      res.set('Cache-Control', 'no-cache');
      res.send(resultPage);
    });
  }

  app.get(scriptPathRegexp, (req, res) => {
    res.set('Cache-Control', 'no-cache');
    res.sendFile(path.resolve('../client/build/main/index.bundle.js'));
  });
});

app.listen(4001, () => {
  console.log('Server is running on port 4001');

  // require('child_process').exec(
  //   process.platform.replace('darwin', '').replace(/win32|linux/, 'xdg-') +
  //     'open ' +
  //     'http://localhost:4001'
  // );
});
