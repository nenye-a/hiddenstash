import React from 'react';
import { ActivityIndicator } from 'exoflex';
import { Redirect } from 'react-router-dom';
import { useQuery } from 'react-fetching-library';

import { GetToken } from '../types/types';
import ErrorComponent from '../components/ErrorComponent';

export default function AuthScene() {
  let { loading, payload, query } = useQuery<GetToken>({
    endpoint: '/getToken',
    method: 'GET',
  });
  if (loading) {
    return <ActivityIndicator />;
  } else if (payload) {
    window.localStorage.setItem('hiddenstash-token', payload.token);
    return <Redirect to="/" />;
  }
  return <ErrorComponent onRetry={query} />;
}
