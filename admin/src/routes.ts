import { FC } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { BasicLayout, MinimalLayout } from './layouts';
import Profile from './views/Profile';
import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';
import Address from './views/Address';
import Billing from './views/Billing';
import Orders from './views/Orders';

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
    layout: BasicLayout,
    component: Home,
  },
  {
    path: '/profile',
    layout: BasicLayout,
    component: Profile,
  },
  {
    path: '/login',
    layout: MinimalLayout,
    component: Login,
  },
  {
    path: '/signup',
    layout: MinimalLayout,
    component: Signup,
  },
  {
    path: '/address',
    layout: MinimalLayout,
    component: Address,
  },
  {
    path: '/billing',
    layout: BasicLayout,
    component: Billing,
  },
  {
    path: '/orders',
    layout: BasicLayout,
    component: Orders,
  },
];

export default COMMON_ROUTES;
