import fs from 'fs';
import path from 'path';

export function buildRoutes() {
  const clientPageStructure = fs.readdirSync(path.resolve('./src'));

  const routes: Record<string, any> = {};

  clientPageStructure.forEach(async (fileName) => {
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
        if (
          !fs
            .statSync(path.resolve(`./src/${fileName}/${pageName}`))
            .isDirectory()
        ) {
          routes[pageName.replace('.tsx', '')] = path.resolve(
            `./src/${fileName}/${pageName}`
          );
        } else {
          if (
            fs.existsSync(path.resolve(`./src/${fileName}/${pageName}/layout`))
          ) {
            routes[pageName.replace('.tsx', '')] = {
              page: path.resolve(`./src/${fileName}/${pageName}/index.tsx`),
              layout: path.resolve(
                `./src/${fileName}/${pageName}/layout/index.tsx`
              ),
            };
          }

          if (
            fs.existsSync(
              path.resolve(`./src/${fileName}/${pageName}/layout.tsx`)
            )
          ) {
            routes[pageName.replace('.tsx', '')] = {
              page: path.resolve(`./src/${fileName}/${pageName}/index.tsx`),
              layout: path.resolve(`./src/${fileName}/${pageName}/layout.tsx`),
            };
          }
        }
      });
    }
  });

  return routes;
}
