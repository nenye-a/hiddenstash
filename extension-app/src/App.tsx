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

const requestHostInterceptor = (host: string) => (_client: Client) => async (
  action: Action,
) => {
  let token = window.localStorage.getItem('hiddenstash-token');
  return {
    ...action,
    endpoint: `${host}${action.endpoint}`,
    ...(token && {
      headers: {
        'x-auth-token': token,
      },
    }),
  };
};

const client = createClient({
  requestInterceptors: [requestHostInterceptor('http://localhost:3000/api/')],
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
