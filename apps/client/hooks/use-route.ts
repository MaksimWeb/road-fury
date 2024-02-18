import { useEffect, useState } from 'react';

export function useRoute() {
  const [pathName, setPathName] = useState(
    typeof window !== 'undefined' ? window.location.pathname : ''
  );

  function handleRouteEvent(e: CustomEvent<string>) {
    window.history.pushState(null, '', e.detail);
    setPathName(e.detail);
  }

  useEffect(() => {
    window.addEventListener('change-route', handleRouteEvent);

    return () => window.removeEventListener('change-route', handleRouteEvent);
  }, []);

  return { pathName };
}
