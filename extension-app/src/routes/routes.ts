import { RouteProps } from 'react-router-dom';

import { Home, Results, Search } from '../scenes';

export let MAIN_ROUTES: Array<RouteProps> = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/results',
    component: Results,
  },
  {
    path: '/search',
    component: Search,
  },
];
