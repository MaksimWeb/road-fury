import { useEffect, useState } from 'react';

export function useRoute() {
  const [pathName, setPathName] = useState(
    typeof window !== 'undefined' ? window.location.pathname : ''
  );
  const [render, setRender] = useState(0);

  function handleRouteEvent(e: CustomEvent<string>) {
    window.history.pushState(null, '', e.detail);
    setPathName(e.detail);
    setRender((prev) => prev + 1);
  }

  useEffect(() => {
    // @ts-ignore
    window.addEventListener('change-route', handleRouteEvent);

    // @ts-ignore
    return () => window.removeEventListener('change-route', handleRouteEvent);
  }, []);

  return { pathName, render };
}
