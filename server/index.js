const { renderToString } = require('react-dom/server');
const { hydrateRoot } = require('react-dom/client');
const React = require('react');

const express = require('express');
const app = express();

const path = require('path');
const fs = require('fs');

const scriptPathRegexp = /.*\.js/;

const myPages = fs.readdirSync(path.resolve('./src/pages'));

myPages.forEach(async (page) => {
  const pageRouteName = page.replace('.tsx', '');

  const pageHtml = fs.readFileSync(path.resolve('./build/index.html'), 'utf-8');
  const pageScript = fs.readFileSync(
    path.resolve(`./build/${pageRouteName}.bundle.js`)
  );

  const Component = (
    await import(path.resolve(`./build/${pageRouteName}.bundle.js`))
  ).default.default;

  const pageRoute = pageRouteName === 'index' ? '/' : `/${pageRouteName}`;

  console.log(hydrateRoot(renderToString(Component()), Component()));

  app.get(pageRoute, (req, res) => {
    const resultPage = pageHtml.replace(
      '<!--mycode-->',
      renderToString(Component())
    );
    // .replace(
    //   '<!--myscript-->',
    //   `<script defer src='./build/${pageRouteName}.bundle.js'></script>`
    // );

    res.send(resultPage);
  });

  // app.get(scriptPathRegexp, (req, res) => {
  //   res.send(pageScript);
  // });
});

app.listen(4001, () => {
  console.log('Server is running on port 4001');
  // require('child_process').exec(
  //   process.platform.replace('darwin', '').replace(/win32|linux/, 'xdg-') +
  //     'open ' +
  //     'http://localhost:4001'
  // );
});
