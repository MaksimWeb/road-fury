import React, { StrictMode } from 'react';

import App from '../src/App';

import { hydrateRoot } from 'react-dom/client';

hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <App />
  </StrictMode>
);
