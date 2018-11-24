import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { CURRENT_USER_QUERY } from "./User";

const CREATE_USER_MUTATION = gql`
  mutation($name: String!) {
    createUser(name: $name) {
      id
      auth0sub
      email
      name
    }
  }
`;

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated())
      return this.props.history.replace("/");
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <Mutation
        mutation={CREATE_USER_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {createUser => (
          <form
            onSubmit={async e => {
              e.preventDefault();
              const user = await createUser();
              this.props.history.replace("/home");
            }}
          >
            <input type="text" onChange={this.handleChange} />
            <button type="submit">Complete Signup</button>
          </form>
        )}
      </Mutation>
    );
  }
}

export default Signup;
