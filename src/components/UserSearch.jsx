import { useQuery } from "@apollo/react-hooks";
import React from "react";

import Loader from "./Loader";
import UserResults from "./UserResults";
import UserSearchQuery from "../graphql/queries/UserSearch";

function UserSearch({ query }) {
  const { loading, data } = useQuery(UserSearchQuery, {
    variables: { query, first: 10 }
  });

  return (
    <div className="UserSearch">
      {loading ? <Loader /> : <UserResults data={data} />}
    </div>
  );
}

export default UserSearch;
