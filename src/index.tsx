import App from 'App';
import { RouterProvider } from '_providers/router-provider';
import React, { StrictMode } from 'react';

import { hydrateRoot } from 'react-dom/client';

import { routes } from '../routes';

hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <RouterProvider>
      <App />
    </RouterProvider>
  </StrictMode>
);
