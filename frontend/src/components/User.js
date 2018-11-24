import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const CURRENT_USER_QUERY = gql`
  query getCurrentUser($auth0sub: String) {
    currentUser(auth0sub: $auth0sub) {
      id
      email
      name
      auth0sub
    }
  }
`;

const User = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {payload => props.children(payload)}
  </Query>
);

export default User;
export { CURRENT_USER_QUERY };
