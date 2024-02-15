const { renderToString } = require('react-dom/server');

const express = require('express');
const app = express();

const path = require('path');
const fs = require('fs');

const scriptPathRegexp = /.*\.js/;

const mainScript = fs.readFileSync(
  path.resolve('../client/build/index.bundle.js')
);

const myPages = fs.readdirSync(path.resolve('../client/src/pages'));

const pageHtml = fs.readFileSync(path.resolve('./build/index.html'), 'utf-8');

myPages.forEach(async (page) => {
  const pageRouteName = page.replace('.tsx', '');
  const pageRoute = pageRouteName === 'index' ? '/' : `/${pageRouteName}`;

  if (fs.existsSync(path.resolve(`./build/cache/${pageRouteName}.html`))) {
    const cachedPage = fs.readFileSync(
      path.resolve(`./build/cache/${pageRouteName}.html`),
      'utf-8'
    );

    app.get(pageRoute, (req, res) => {
      const resultPage = cachedPage.replace(
        '<!--myscript-->',
        `<script defer src='${path.join(
          '../client/build/index.bundle.js'
        )}'></script>`
      );

      res.send(resultPage);
    });
  } else {
    const Component = (
      await import(path.resolve(`./build/pages/${pageRouteName}.bundle.js`))
    ).default.default;

    app.get(pageRoute, (req, res) => {
      const resultPage = pageHtml
        .replace('<!--mycode-->', renderToString(Component()))
        .replace(
          '<!--myscript-->',
          `<script defer src='${path.join(
            '../client/build/index.bundle.js'
          )}'></script>`
        );

      res.send(resultPage);
    });
  }

  app.get(scriptPathRegexp, (req, res) => {
    res.send(mainScript);
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
