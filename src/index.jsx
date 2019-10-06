import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { ApolloProvider } from "react-apollo";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Client from "./graphql/client";

ReactDOM.render(
  <ApolloProvider client={Client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();