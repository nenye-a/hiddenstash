import React from 'react';
import { Redirect } from 'react-router-dom';

import SearchHistory from './SearchHistory';

export default function Home() {
  let hasToken = window.localStorage.getItem('hiddenstash-token');
  if (!hasToken) {
    return <Redirect to="/auth" />;
  }
  return <SearchHistory />;
}
