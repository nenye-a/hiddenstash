import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes, { RouteType } from './routes';

export default function App() {
  return (
    <Router basename={process.env.REACT_BASE_NAME || ''}>
      <Switch>
        <>
          {routes.map((route: RouteType, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={(props: RouteType) => {
                  let Layout = route.layout;
                  let Component = route.component;
                  return (
                    <Layout {...props}>
                      <Component {...props} />
                    </Layout>
                  );
                }}
              />
            );
          })}
        </>
      </Switch>
    </Router>
  );
}
