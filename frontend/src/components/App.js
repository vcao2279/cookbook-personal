import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Home from "./Home";
import LandingPage from "./LandingPage";
import auth from "../auth/Auth";
import Callback from "./Callback";
import GuardedRoute from "./GuardedRoute";
import Signup from "./Signup";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => <LandingPage auth={auth} {...props} />}
        />
        <GuardedRoute path="/home" component={Home} auth={auth} />
        <Route
          exact
          path="/callback"
          render={props => <Callback auth={auth} {...props} />}
        />
        <Route
          exact
          path="/signup"
          render={props => <Signup auth={auth} {...props} />}
        />
      </div>
    );
  }
}

export default App;
