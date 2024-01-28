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

app.get('/', (req, res) => {
  res.send(myHtml);
});

app.get(scriptPathRegexp, (req, res) => {
  res.send(myScript);
});

app.listen(4001, () => {
  console.log('Server is running on port 4001');
});
