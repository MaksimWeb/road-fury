import React from 'react';

import { useRoute } from '../hooks/use-route';
import { routes } from '../../../routes';
import { RouterProvider } from './_providers/router-provider';

export default function App() {
  const { pathName } = useRoute();

  let pageProps = {};
  React.useEffect(() => {
    if (document && document.getElementById('PAGE_DATA')) {
      // @ts-ignore
      pageProps = JSON.parse(document.getElementById('PAGE_DATA').textContent);
    }
  }, []);

  if (typeof window === 'undefined') {
    return null;
  }

  const Page = routes ? routes[pathName.slice(1) as keyof typeof routes] : null;

  return (
    <RouterProvider>
      {/* @ts-ignore */}
      <Page {...pageProps} />
    </RouterProvider>
  );
}
