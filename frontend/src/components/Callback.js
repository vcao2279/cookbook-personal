import React, { Component } from "react";
import { Query } from "react-apollo";
import { CURRENT_USER_QUERY } from "./User";
import { Redirect } from "react-router-dom";

class Callback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }
  async componentDidMount() {
    try {
      const authResult = await this.props.auth.handleAuthentication();
      if (authResult) {
        this.setState({ isAuthenticated: true });
      }
    } catch (error) {
      this.props.history.replace("/");
    }
  }

  render() {
    if (!this.state.isAuthenticated) {
      return <p>loading...</p>;
    } else {
      return (
        <Query {...this.props} query={CURRENT_USER_QUERY}>
          {({ data: { currentUser }, loading, error }) => {
            if (loading) return <p>loading...</p>;
            if (error) return <p>{error.message}</p>;
            if (!currentUser) return <Redirect to="/signup" />;
            return <Redirect to="/home" />;
          }}
        </Query>
      );
    }
  }
}

export default Callback;
