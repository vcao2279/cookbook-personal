import React, { Component } from "react";
// import {withRouter} from 'react-router-dom';

class Callback extends Component {
  async componentDidMount() {
    await this.props.auth.handleAuthentication();
    this.props.history.replace("/home");
  }

  render() {
    return <div>Loading...</div>;
  }
}

export default Callback;
