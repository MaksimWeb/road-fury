import App from '../src/App';
import { RouterProvider } from '../src/_providers/router-provider';
import React, { StrictMode } from 'react';

import { hydrateRoot } from 'react-dom/client';

hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <RouterProvider>
      <App />
    </RouterProvider>
  </StrictMode>
);
