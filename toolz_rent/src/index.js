import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import routes from './Routes/routes'
import { Router, hashHistory } from "react-router";

ReactDOM.render(
  <Router history={hashHistory}>
  {routes}
  </Router>,
  document.getElementById("root")
);
 