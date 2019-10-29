import React from "react";
import { Route, Router,browserHistory } from "react-router";
import home from '../../Home/home'
export default (
    <Router history={browserHistory}>
      <Route path="/" component={home}>
      </Route>
    </Router>
  );