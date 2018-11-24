import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import auth from "./auth/Auth";
require("dotenv").config();

const httpLink = createHttpLink({
  uri: "http://localhost:4000"
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = auth.getIdToken();
  console.log("client token: ", token);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? token : ``
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
