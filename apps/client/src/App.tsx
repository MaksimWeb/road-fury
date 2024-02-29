import React, { useEffect, useState } from 'react';

import { useRoute } from '../hooks/use-route';

import { RouterProvider } from './_providers/router-provider';
import { middleware } from './_middleware';
import About from './pages/about';

export default function App() {
  const { pathName, renderCount } = useRoute();

  const Page = middleware(pathName.slice(1) as any);

  const [dynamicProps, setDynamicProps] = useState<any | null>(null);

  useEffect(() => {
    const sss = async () => {
      console.log(await Page);
    };

    sss();
  }, []);

  let pageProps =
    renderCount === 0
      ? typeof document !== undefined && document.getElementById('PAGE_DATA')
        ? JSON.parse(document.getElementById('PAGE_DATA')?.textContent ?? '{}')
        : {}
      : dynamicProps?.props;

  // useEffect(() => {
  //   const getProps = async () => {
  //     if (renderCount !== 0) {
  //       setDynamicProps(
  //         routes[pathName.slice(1) as keyof typeof routes].isStatic &&
  //           !checkPromise(routes[pathName.slice(1) as keyof typeof routes])
  //           ? routes[pathName.slice(1) as keyof typeof routes].props
  //           : await routes[pathName.slice(1) as keyof typeof routes].props
  //       );
  //     }
  //   };

  //   getProps();
  // }, [pathName, render]);

  return (
    <RouterProvider>
      {/* @ts-ignore */}
      {/* <Page {...pageProps} /> */}
      <About userName='Maxim' />
    </RouterProvider>
  );
}

function checkPromise(
  props: unknown
): props is Awaited<ReturnType<() => { props: any }>> {
  return (props as any).isStatic === false;
}
