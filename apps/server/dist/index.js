import { jsx as _jsx } from "react/jsx-runtime";
import path from 'path';
import fs from 'fs';
import express from 'express';
import { renderToString } from 'react-dom/server';
const app = express();
const scriptPathRegexp = /.*\.js/;
const mainScript = fs.readFileSync(path.resolve('../client/build/index.bundle.js'));
const myPages = fs.readdirSync(path.resolve('../client/src/pages'));
const pageHtml = fs.readFileSync(path.resolve('../../public/index.html'), 'utf-8');
const pageLayoutPath = path.resolve('./build/layout.bundle.js');
// myPages.forEach(async (page) => {
//   const pageRouteName = page.replace('.tsx', '');
//   const pageRoute = pageRouteName === 'index' ? '/' : `/${pageRouteName}`;
//   if (fs.existsSync(path.resolve(`./build/cache/${pageRouteName}.html`))) {
//     const { default: Layout } = await import(pageLayoutPath);
//     const { default: Component, cached } = await import(
//       path.resolve(`./build/cache/${pageRouteName}.bundle.js`)
//     );
//     const cachedPage = fs.readFileSync(
//       path.resolve(`./build/cache/${pageRouteName}.html`),
//       'utf-8'
//     );
//     const CCC = Component.default;
//     console.log(renderToString(<div />));
//     app.get(pageRoute, (req, res) => {
//       const resultPage = cachedPage
//         .replace(
//           '<!--mycode-->',
//           renderToString(Component.default(cached.props))
//         )
//         .replace(
//           '<!--myscript-->',
//           `<script defer src='${path.join(
//             '../client/build/index.bundle.js'
//           )}'></script>`
//         )
//         .replace(
//           '<!--page-data-->',
//           `<script id="PAGE_DATA" type="application/json">${JSON.stringify({
//             max: 'posakdop',
//           })}</script>`
//         );
//       res.send(resultPage);
//     });
//   } else {
//     const Component = (
//       await import(path.resolve(`./build/pages/${pageRouteName}.bundle.js`))
//     ).default.default;
//     app.get(pageRoute, (req, res) => {
//       const resultPage = pageHtml
//         .replace('<!--mycode-->', renderToString(Component()))
//         .replace(
//           '<!--myscript-->',
//           `<script defer src='${path.join(
//             '../client/build/index.bundle.js'
//           )}'></script>`
//         );
//       res.send(resultPage);
//     });
//   }
//   app.get(scriptPathRegexp, (req, res) => {
//     res.send(mainScript);
//   });
// });
function App({ value }) {
    return _jsx("input", { value: value });
}
app.listen(4001, () => {
    console.log('Server is running on port 4001');
    console.log(renderToString(_jsx(App, { value: 'PIDOOOOOR' })));
    // require('child_process').exec(
    //   process.platform.replace('darwin', '').replace(/win32|linux/, 'xdg-') +
    //     'open ' +
    //     'http://localhost:4001'
    // );
});