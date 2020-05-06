import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import ErrorComponent from '../components/ErrorComponent';
import { TOKEN } from '../constants/storeKeys';

type Params = { token: string };

export default function AuthScene() {
  let params = useParams<Params>();
  let hasToken = window.localStorage.getItem(TOKEN);
  if (params?.token) {
    // decode token param
    let regexPlus = /[+]/g;
    let token = params.token.replace(regexPlus, '.');
    window.localStorage.setItem(TOKEN, token);
    return <Redirect to="/" />;
  } else if (hasToken) {
    return <Redirect to="/" />;
  }
  return <ErrorComponent />;
}
