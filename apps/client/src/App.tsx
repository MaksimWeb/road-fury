import React from 'react';

import { useRoute } from '../hooks/use-route';
import { routes } from '../../../routes';
import { RouterProvider } from './_providers/router-provider';

export default function App() {
  const { pathName } = useRoute();

  const pageProps =
    typeof document !== undefined && document.getElementById('PAGE_DATA')
      ? JSON.parse(document.getElementById('PAGE_DATA')?.textContent ?? '{}')
      : {};

  const Page = routes ? routes[pathName.slice(1) as keyof typeof routes] : null;

  return (
    <RouterProvider>
      {/* @ts-ignore */}
      <Page {...pageProps} />
    </RouterProvider>
  );
}
