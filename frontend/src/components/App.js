import React, { Component } from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";

import Home from "./Home";
import LandingPage from "./LandingPage";
import auth from "../auth/Auth";
import Callback from "./Callback";
import GuardedRoute from "./GuardedRoute";
import Signup from "./Signup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idTokenPayload: {}
    };
  }

  async componentDidMount() {
    if (this.props.location.pathname === "/callback") return;
    try {
      const authResult = await auth.silentAuth();
      console.log("authResult: ", authResult);
      if (authResult) {
        this.setState({ idTokenPayload: authResult.idTokenPayload });
      }
      this.forceUpdate();
    } catch (err) {
      if (err.error === "login_required") return;
      console.log(err.error);
    }
  }

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => <LandingPage auth={auth} {...props} />}
        />
        <GuardedRoute
          path="/home"
          component={Home}
          auth={auth}
          payload={this.state.idTokenPayload}
        />
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

export default withRouter(App);
