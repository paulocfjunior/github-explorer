import "./styles/index.scss";
import { ApolloProvider } from "react-apollo";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Client from "./graphql/client";

ReactDOM.render(
  <ApolloProvider client={Client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
