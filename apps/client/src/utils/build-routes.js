const fs = require('fs');
const path = require('path');

const allowedFileNameInPageDir = ['index.tsx', 'layout.tsx', 'layout'];

(function () {
  const clientPageStructure = fs.readdirSync(path.resolve('./src'));

  const routes = {};

  clientPageStructure.forEach((fileName) => {
    if (fileName === 'layout.tsx') {
      routes['index'] = {
        layout: path.resolve(`./src/${fileName}`),
      };
    }

    if (
      fileName === 'pages' &&
      fs.statSync(path.resolve(`./src/${fileName}`)).isDirectory()
    ) {
      const pages = fs.readdirSync(path.resolve(`./src/${fileName}`));

      pages.forEach((pageName) => {
        routes[pageName.replace('.tsx', '')] = {};

        if (
          !fs
            .statSync(path.resolve(`./src/${fileName}/${pageName}`))
            .isDirectory()
        ) {
          routes[pageName.replace('.tsx', '')] = {
            page: path.resolve(`./src/${fileName}/${pageName}`),
          };
        } else {
          const pageDirectory = fs.readdirSync(
            path.resolve(`./src/${fileName}/${pageName}`)
          );

          pageDirectory.forEach((pageFileName) => {
            if (!allowedFileNameInPageDir.includes(pageFileName)) {
              throw new Error(
                `${pageFileName} is not allowed name for file in pages directory
                Watch in ${path.resolve(`./src/${fileName}/${pageName}`)}
                `
              );
            }

            if (pageFileName === 'layout') {
              const layoutDir = fs.readdirSync(
                path.resolve(`./src/${fileName}/${pageName}/${pageFileName}`)
              );

              if (layoutDir.length === 0) {
                return;
              }

              if (layoutDir.length > 1) {
                throw new Error(
                  `Can't be more than 1 file inside layout folder ${path.resolve(
                    `./src/${fileName}/${pageName}/${pageFileName}`
                  )}`
                );
              }

              if (layoutDir[0] !== 'index.tsx') {
                throw new Error(`Invalid file name for Layout
                Watch in ${path.resolve(
                  `./src/${fileName}/${pageName}/${pageFileName}`
                )}
                `);
              }

              routes[pageName.replace('.tsx', '')].layout = path.resolve(
                `./src/${fileName}/${pageName}/${pageFileName}/${layoutDir[0]}`
              );
            }

            if (pageFileName === 'layout.tsx') {
              routes[pageName.replace('.tsx', '')].layout = path.resolve(
                `./src/${fileName}/${pageName}/${pageFileName}`
              );
            }

            if (pageFileName === 'index.tsx') {
              routes[pageName.replace('.tsx', '')].page = path.resolve(
                `./src/${fileName}/${pageName}/${pageFileName}`
              );
            }
          });
        }
      });
    }
  });

  fs.writeFileSync(path.resolve('../../routes.json'), JSON.stringify(routes), {
    encoding: 'utf-8',
  });
})();
