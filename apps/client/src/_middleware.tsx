import path from 'path';
import routes from '../../../routes.json';

// type CreateMutable<Type> = {
//   -readonly [Property in keyof Type]: Type[Property];
// };

// type Pathname = {
//   [k in keyof typeof routes]: {
//     page: string;
//     layout?: string;
//   };
// };

type ss = keyof typeof routes;

export async function middleware(pathname: keyof typeof routes) {
  const route = routes[pathname];

  const Component = isPage(route)
    ? await import(`./pages/${formatAbsoluteToRelative(route.page, pathname)}`)
    : null;

  console.log(Component);
  return Component;
}

interface PageLayout {
  layout: string;
  page: string;
}

function isPage(route: unknown): route is PageLayout {
  return 'page' in (route as Partial<PageLayout>);
}

function formatAbsoluteToRelative(pathname: string, route: string) {
  const ext = path.extname(pathname);
  const basename = path.basename(pathname);
  console.log('./pages/about' === `./pages/${basename.replace(ext, '')}`);
  return basename.replace(ext, '') === route
    ? basename.replace(ext, '')
    : `${route}/${basename.replace(ext, '')}`;
}
