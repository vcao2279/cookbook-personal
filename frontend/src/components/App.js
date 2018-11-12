import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import LandingPage from "./LandingPage";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
