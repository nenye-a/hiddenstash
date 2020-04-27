import React from 'react';
import { Provider as ExoflexProvider } from 'exoflex';

import CartScene from './scenes/CartScene';
import Home from './scenes/Home';
import Search from './scenes/Search';
import Results from './scenes/Results';
import customTheme from './constants/theme';

export default function App() {
  return (
    <ExoflexProvider theme={customTheme}>
      {/* TODO: move to router */}
      {/* <CartScene /> */}
      <Results />
    </ExoflexProvider>
  );
}
