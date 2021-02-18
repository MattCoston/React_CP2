import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";
import LandingPage from "./Components/landingpage";
import cookie from "cookie";

const checkAuth = () => {
  const cookie = cookie.parse(document.cookie);
  return (cookie = ["loggedIn"] ? true : false);
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
    </Switch>
  );
};

export default Router;
