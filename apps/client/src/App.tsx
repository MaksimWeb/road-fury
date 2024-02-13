import React from 'react';

import { useRoute } from '../hooks/use-route';
import { routes } from '../../../routes';

export default function App() {
  const { pathName } = useRoute();

  const Page = routes ? routes[pathName.slice(1) as keyof typeof routes] : null;

  return <Page />;
}
