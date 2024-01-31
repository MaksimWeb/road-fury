const express = require('express');
const app = express();

const path = require('path');
const fs = require('fs');

const scriptPathRegexp = /.*\.js/;

const myPages = fs
  .readdirSync(path.resolve(__dirname, '..', 'src'))
  .filter((page) => page !== 'index.tsx');

myPages.forEach(async (page) => {
  const pageRouteName = page.replace('.tsx', '');

  const pageHtml = fs.readFileSync(
    path.resolve(__dirname, '..', 'build', `${pageRouteName}.html`),
    'utf-8'
  );
  const pageScript = fs.readFileSync(
    path.resolve(__dirname, '..', 'build', `${pageRouteName}.bundle.js`)
  );

  const pageFunction = import('../build/about.bundle.js').then((mod) => {
    console.log(mod);
  });

  const pageRoute = pageRouteName === 'index' ? '/' : `/${pageRouteName}`;

  app.get(pageRoute, (req, res) => {
    res.send(pageHtml);
  });

  app.get(scriptPathRegexp, (req, res) => {
    res.send(pageScript);
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
