import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'exoflex';
import { Redirect } from 'react-router-dom';
import { useQuery } from 'react-fetching-library';

import { GetToken } from '../types/types';

export default function AuthScene() {
  let { loading, payload } = useQuery<GetToken>({
    endpoint: '/getToken',
    method: 'GET',
  });
  if (loading) {
    return <ActivityIndicator />;
  } else if (payload) {
    window.localStorage.setItem('hiddenstash-token', payload.token);
    return <Redirect to="/" />;
  }
  // TODO: return error component
  return <View />;
}
