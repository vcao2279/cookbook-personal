import React, { Component } from "react";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div>This is landing page</div>
        <button onClick={this.props.auth.login}>Login/Register</button>
      </div>
    );
  }
}

export default LandingPage;
