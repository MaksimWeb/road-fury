import React, { useEffect, useState } from 'react';

import { useRoute } from '../hooks/use-route';

import { RouterProvider } from './_providers/router-provider';
import { useMiddleware } from './_middleware';
import * as pages from '../../../pages';

export default function App() {
  const { pathName, renderCount } = useRoute();

  const cachedProps = useMiddleware(pathName.slice(1) as any);

  //@ts-ignore
  const Page = pages[pathName[1].toUpperCase() + pathName.slice(2)];

  let pageProps =
    renderCount === 0
      ? typeof document !== undefined && document.getElementById('PAGE_DATA')
        ? JSON.parse(document.getElementById('PAGE_DATA')?.textContent ?? '{}')
        : {}
      : cachedProps;

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
