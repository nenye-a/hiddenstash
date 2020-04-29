import React from 'react';
import { BrowserRouter, Route, Switch, RouteProps } from 'react-router-dom';
import { View, StyleSheet } from 'react-native';

import { MAIN_ROUTES } from './routes';

export default function MainRoute() {
  let renderRoutes = (routes: Array<RouteProps>) =>
    routes.map(({ ...routeInfo }, i) => <Route key={i} {...routeInfo} />);

  return (
    <BrowserRouter>
      <View style={styles.root}>
        <Switch>{renderRoutes(MAIN_ROUTES)}</Switch>
      </View>
    </BrowserRouter>
  );
}

const styles = StyleSheet.create({
  root: { height: 470 },
});
