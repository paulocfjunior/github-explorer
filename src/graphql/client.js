import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from "apollo-cache-inmemory";
import ApolloClient from "apollo-boost";
import introspectionQueryResultData from "./fragmentTypes.json";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache({ fragmentMatcher }),
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: `token ${process.env.REACT_APP_AUTHORIZATION_TOKEN}`
      }
    });
  }
});

export default client;
