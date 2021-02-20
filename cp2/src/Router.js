import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";
import LandingPage from "./Components/landingpage";
import cookie from "cookie";
import ButtonAppBar from "./Components/buttonappbar";
import UsernameField from "./Components/usernamefield";

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
      <Route exact path="/login" component={UsernameField} />
    </Switch>
  );
};

export default Router;
