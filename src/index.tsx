import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";

console.log(process.env);
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
