import React from 'react';
import { Provider as ExoflexProvider } from 'exoflex';
import { ClientContextProvider, createClient } from 'react-fetching-library';

import MainRoute from './routes/MainRoute';
import customTheme from './constants/theme';

const client = createClient({});

export default function App() {
  return (
    <ClientContextProvider client={client}>
      <ExoflexProvider theme={customTheme}>
        <MainRoute />
      </ExoflexProvider>
    </ClientContextProvider>
  );
}
