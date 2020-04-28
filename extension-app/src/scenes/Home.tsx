import React from 'react';

import SearchHistory from './SearchHistory';
import AuthScene from './AuthScene';

export default function Home() {
  let hasToken = window.localStorage.getItem('hiddenstash-tkn');
  if (hasToken) {
    <SearchHistory />;
  }
  return <AuthScene />;
}
