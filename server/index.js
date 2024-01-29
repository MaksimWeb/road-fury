const express = require('express');
const app = express();

const path = require('path');
const fs = require('fs');

const myHtml = fs.readFileSync(
  path.resolve(__dirname, '..', 'build', 'index.html'),
  'utf-8'
);
const myScript = fs.readFileSync(
  path.resolve(__dirname, '..', 'build', 'main.bundle.js')
);

const scriptPathRegexp = /.*\.js/;

const myPages = fs
  .readdirSync(path.resolve(__dirname, '..', 'src'))
  .filter((page) => page !== 'App.tsx');

myPages.forEach(async (page) => {
  // const pageFunction = fs.readFileSync(
  //   path.resolve(__dirname, '..', 'src', page),
  //   'utf-8'
  // );
  const pageImport = await import(path.join(__dirname, '..', 'src', page))
    .default;

  const pageRouteName = page.replace('.tsx', '');
  const pageRoute = pageRouteName === 'index' ? '/' : `/${pageRouteName}`;

  app.get(pageRoute, (req, res) => {
    res.send(myHtml);
  });
});

app.get(scriptPathRegexp, (req, res) => {
  res.send(myScript);
});

app.listen(4001, () => {
  console.log('Server is running on port 4001');
  // require('child_process').exec(
  //   process.platform.replace('darwin', '').replace(/win32|linux/, 'xdg-') +
  //     'open ' +
  //     'http://localhost:4001'
  // );
});
