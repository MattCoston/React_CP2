import React from "react";
import { Switch, Route } from "react-router";
import App from "./App.js";
const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  );
};

export default Router;
