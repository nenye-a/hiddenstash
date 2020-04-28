import React from 'react';
import { BrowserRouter, Route, Switch, RouteProps } from 'react-router-dom';

import { MAIN_ROUTES } from './routes';

export default function MainRoute() {
  let renderRoutes = (routes: Array<RouteProps>) =>
    routes.map(({ ...routeInfo }, i) => <Route key={i} {...routeInfo} />);

  return (
    <BrowserRouter>
      <Switch>{renderRoutes(MAIN_ROUTES)}</Switch>
    </BrowserRouter>
  );
}
