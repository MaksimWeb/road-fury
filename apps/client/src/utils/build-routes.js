const fs = require('fs');
const path = require('path');

const allowedFileNameInPageDir = ['index.tsx', 'layout.tsx', 'layout'];

(function () {
  const clientPageStructure = fs.readdirSync(path.resolve('./src'));

  const routes = {};
  let components = '';

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
          const isCached = fs
            .readFileSync(path.resolve(`./src/${fileName}/${pageName}`))
            .includes('cached');
          const isSSR = fs
            .readFileSync(path.resolve(`./src/${fileName}/${pageName}`))
            .includes('SSR');

          const pagePropsNaming = `props${pageName.replace('.tsx', '')}`;

          const importPageProps = isCached
            ? `,{cached as ${pagePropsNaming}}`
            : isSSR
            ? `,{SSR as ${pagePropsNaming}}`
            : '';
          const exportPageProps =
            isCached || isSSR ? `,${pagePropsNaming}` : '';

          routes[pageName.replace('.tsx', '')] = {
            page: path.resolve(`./src/${fileName}/${pageName}`),
          };

          components =
            components +
            `import ${
              pageName[0].toUpperCase() + pageName.slice(1).replace('.tsx', '')
            } ${importPageProps} from '${path.resolve(
              `./src/${fileName}/${pageName.replace('.tsx', '')}`
            )}'
            export {${
              pageName[0].toUpperCase() + pageName.slice(1).replace('.tsx', '')
            } ${exportPageProps}}\n`;
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
              const isCached = fs
                .readFileSync(
                  path.resolve(`./src/${fileName}/${pageName}/${pageFileName}`)
                )
                .includes('cached');
              const isSSR = fs
                .readFileSync(
                  path.resolve(`./src/${fileName}/${pageName}/${pageFileName}`)
                )
                .includes('SSR');

              const pagePropsNaming = `props${pageName.replace('.tsx', '')}`;

              const importPageProps = isCached
                ? `,{cached as ${pagePropsNaming}}`
                : isSSR
                ? `,{SSR as ${pagePropsNaming}}`
                : '';
              const exportPageProps =
                isCached || isSSR ? `,${pagePropsNaming}` : '';

              routes[pageName.replace('.tsx', '')].page = path.resolve(
                `./src/${fileName}/${pageName}/${pageFileName}`
              );

              components =
                components +
                `import ${
                  pageName[0].toUpperCase() +
                  pageName.slice(1).replace('.tsx', '')
                } ${importPageProps} from '${path.resolve(
                  `./src/${fileName}/${pageName.replace('.tsx', '')}`
                )}'
            export {${
              pageName[0].toUpperCase() + pageName.slice(1).replace('.tsx', '')
            } ${exportPageProps}}\n`;
            }
          });
        }
      });
    }
  });

  fs.writeFileSync(path.resolve('../../routes.json'), JSON.stringify(routes), {
    encoding: 'utf-8',
  });
  fs.writeFileSync(path.resolve('../../pages.ts'), components, {
    encoding: 'utf-8',
  });
})();
