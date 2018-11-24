import React from "react";
import { Route, Redirect } from "react-router-dom";

function GuardedRoute(props) {
  const auth = props.auth;
  const isAuthenticated = auth.isAuthenticated();
  const { component: Component, path } = props;
  return (
    <Route
      path={path}
      render={props => {
        if (!isAuthenticated) return <Redirect to="/" />;
        return <Component auth={auth} {...props} />;
      }}
    />
  );
}

export default GuardedRoute;
