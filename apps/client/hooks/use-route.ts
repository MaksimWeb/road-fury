import { useEffect, useState } from 'react';

export function useRoute() {
  const [pathName, setPathName] = useState(
    typeof window !== 'undefined' ? window.location.pathname : ''
  );

  function handleRouteEvent(e: CustomEvent<string>) {
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', e.detail);
      setPathName(e.detail);
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('change-route', handleRouteEvent);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('change-route', handleRouteEvent);
      }
    };
  }, []);

  return { pathName };
}
