import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'exoflex';
import { useHistory } from 'react-router-dom';

export default function AuthScene() {
  let history = useHistory();
  // TODO: useQuery
  let { loading, payload } = { loading: false, payload: 1 };
  if (loading) {
    return <ActivityIndicator />;
  } else if (payload) {
    window.localStorage.setItem('hiddenstash-token', payload.toString());
    history.push('/');
  }
  // TODO: return error component
  return <View />;
}
