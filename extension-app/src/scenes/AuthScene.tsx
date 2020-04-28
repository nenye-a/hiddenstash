import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'exoflex';
import { Redirect } from 'react-router-dom';
import { useQuery } from 'react-fetching-library';

export default function AuthScene() {
  let { loading, payload } = useQuery({
    endpoint: 'getToken',
    method: 'GET',
  });
  if (loading) {
    return <ActivityIndicator />;
  } else if (payload) {
    window.localStorage.setItem('hiddenstash-token', payload.token.toString());
    return <Redirect to="/" />;
  }
  // TODO: return error component
  return <View />;
}
