import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import ErrorComponent from '../components/ErrorComponent';

type Params = { token: string };

export default function AuthScene() {
  let params = useParams<Params>();
  let hasToken = window.localStorage.getItem('hiddenstash-token');
  if (params.token) {
    window.localStorage.setItem('hiddenstash-token', params.token);
    return <Redirect to="/" />;
  } else if (hasToken) {
    return <Redirect to="/" />;
  }
  return <ErrorComponent />;
}
