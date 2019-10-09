import React from "react";

import { usePagination } from "../util/pagination";
import Loader from "./Loader";
import UserResults from "./UserResults";
import UserSearchQuery from "../graphql/queries/UserSearch";

function UserSearch({ query }) {
  const { loading, data, showMoreItems } = usePagination(UserSearchQuery, {
    query,
    first: 10
  });

  return (
    <div className="UserSearch">
      {loading ? (
        <Loader />
      ) : (
        <UserResults data={data} showMoreItems={showMoreItems} />
      )}
    </div>
  );
}

export default UserSearch;
