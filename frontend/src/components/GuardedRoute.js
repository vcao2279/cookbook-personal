import React from "react";
import { Route } from "react-router-dom";
import auth from "../auth/Auth";

function GuardedRoute(props) {
  const { component: Component, path } = props;
  return (
    <Route
      path={path}
      render={props => {
        if (!auth.isAuthenticated()) return auth.login();
        return <Component auth={auth} {...props} />;
      }}
    />
  );
}

export default GuardedRoute;
