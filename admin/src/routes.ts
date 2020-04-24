import { FC } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { BasicLayout, BlankLayout } from './layouts';
import Profile from './views/Profile';
import Home from './views/Home';

export type RouteType = {
  path: string;
  exact?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  layout: FC<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: FC<any>;
};

const COMMON_ROUTES = [
  {
    path: '/',
    exact: true,
    layout: BlankLayout,
    component: Home,
  },
  {
    path: '/profile',
    layout: BasicLayout,
    component: Profile,
  },
  // Routes for future pages, please ensure that these all have layouts and components added.
  // {
  //   path: '/orders',
  // },
  // {
  //   path: '/billing',
  // },
  // {
  //   path: '/login',
  // },
  // {
  //   path: '/signup',
  // },
  // {
  //   path: 'address'
  // },
];

export default COMMON_ROUTES;
