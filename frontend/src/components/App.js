import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Create from "./Create";
import Recipes from "./Recipes";
import Calendar from "./Calendar";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import Billing from "./Billing";

import Home from "./Home";
import LandingPage from "./LandingPage";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home}>
            <Route path="create" component={Create} />
            <Route path="recipes" component={Recipes} />
            <Route path="calendar" component={Calendar} />
            <Route path="dashboard" component={Dashboard} />
            <Route path="settings" component={Settings} />
            <Route path="billing" component={Billing} />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
