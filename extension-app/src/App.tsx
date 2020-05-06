import React from 'react';
import { Provider as ExoflexProvider } from 'exoflex';
import {
  ClientContextProvider,
  createClient,
  Action,
  Client,
} from 'react-fetching-library';

import MainRoute from './routes/MainRoute';
import customTheme from './constants/theme';
import { API_URL } from './constants/uri';
import { TOKEN } from './constants/storeKeys';

const requestHostInterceptor = (host: string) => (_client: Client) => async (
  action: Action,
) => {
  // TODO: add helper
  let token = window.localStorage.getItem(TOKEN);
  return {
    ...action,
    endpoint: `${host}${action.endpoint}`,
    headers: {
      ...(token && { 'x-auth-token': token }),
      'Content-Type': 'application/json',
    },
  };
};

const client = createClient({
  requestInterceptors: [requestHostInterceptor(API_URL)],
});

export default function App() {
  return (
    <ClientContextProvider client={client}>
      <ExoflexProvider theme={customTheme}>
        <MainRoute />
      </ExoflexProvider>
    </ClientContextProvider>
  );
}
