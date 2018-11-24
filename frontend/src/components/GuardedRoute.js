import React from "react";
import { Route, Redirect } from "react-router-dom";

function GuardedRoute(props) {
  const auth = props.auth;
  const payload = props.payload;
  const isAuthenticated = auth.isAuthenticated();
  const { component: Component, path } = props;
  return (
    <Route
      path={path}
      render={props => {
        if (!isAuthenticated) return <Redirect to="/" />;
        return <Component {...props} payload={payload} auth={auth} />;
      }}
    />
  );
}

export default GuardedRoute;
