import React, { useEffect, useState } from 'react';

import { useRoute } from '../hooks/use-route';
import { routes } from '../../../routes';
import { RouterProvider } from './_providers/router-provider';

export default function App() {
  const { pathName, render } = useRoute();
  const [dynamicProps, setDynamicProps] = useState<any | null>(null);

  let pageProps =
    render === 0
      ? typeof document !== undefined && document.getElementById('PAGE_DATA')
        ? JSON.parse(document.getElementById('PAGE_DATA')?.textContent ?? '{}')
        : {}
      : dynamicProps?.props;

  const Page = routes
    ? routes[pathName.slice(1) as keyof typeof routes].page
    : null;

  useEffect(() => {
    const getProps = async () => {
      if (render !== 0) {
        setDynamicProps(
          routes[pathName.slice(1) as keyof typeof routes].isStatic &&
            !checkPromise(routes[pathName.slice(1) as keyof typeof routes])
            ? routes[pathName.slice(1) as keyof typeof routes].props
            : await routes[pathName.slice(1) as keyof typeof routes].props
        );
      }
    };

    getProps();
  }, [pathName, render]);

  return (
    <RouterProvider>
      {/* @ts-ignore */}
      <Page {...pageProps} />
    </RouterProvider>
  );
}

function checkPromise(
  props: unknown
): props is Awaited<ReturnType<() => { props: any }>> {
  return (props as any).isStatic === false;
}
