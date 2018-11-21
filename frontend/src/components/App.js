import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import LandingPage from "./LandingPage";
import auth from "../auth/Auth";
import Callback from "./Callback";
import GuardedRoute from "./GuardedRoute";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={props => <LandingPage auth={auth} {...props} />}
          />
          <GuardedRoute path="/home" component={Home} />
          <Route
            exact
            path="/callback"
            render={props => <Callback auth={auth} {...props} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
