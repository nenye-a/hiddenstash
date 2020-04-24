import React from 'react';
import { Provider as ExoflexProvider } from 'exoflex';

import CartScene from './scenes/CartScene';
import customTheme from './constants/theme';

export default function App() {
  return (
    <ExoflexProvider theme={customTheme}>
      {/* TODO: move to router */}
      <CartScene />
    </ExoflexProvider>
  );
}
