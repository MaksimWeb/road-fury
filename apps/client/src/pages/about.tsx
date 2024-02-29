import React from 'react';

import { REVALIDATE_INTERVAL } from '../utils/constants';

interface AboutPageProps {
  userName?: string;
}

export default function About({
  userName = '',
}: React.PropsWithoutRef<AboutPageProps>) {
  return (
    <div>
      <h1>My About Page</h1>
      <h2>My name is {userName}</h2>
      <p>My friend</p>
    </div>
  );
}

export const cached = async () => {
  return {
    revalidate: REVALIDATE_INTERVAL,
    props: {
      userName: 'Maxim',
    },
  };
};
