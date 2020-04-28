import React from 'react';
import { Provider as ExoflexProvider } from 'exoflex';

import MainRoute from './routes/MainRoute';
import customTheme from './constants/theme';

export default function App() {
  return (
    <ExoflexProvider theme={customTheme}>
      <MainRoute />
    </ExoflexProvider>
  );
}
