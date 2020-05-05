import React from 'react';
import { Redirect } from 'react-router-dom';

import { TOKEN } from '../constants/storeKeys';

import SearchHistory from './SearchHistory';

export default function Home() {
  let hasToken = window.localStorage.getItem(TOKEN);
  if (!hasToken) {
    return <Redirect to="/auth" />;
  }
  return <SearchHistory />;
}
