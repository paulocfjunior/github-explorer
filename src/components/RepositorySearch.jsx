import React from "react";

import { usePagination } from "../util/pagination";
import Loader from "./Loader";
import RepoSearchQuery from "../graphql/queries/RepositorySearch";
import RepositoryResults from "./RepositoryResults";

function RepositorySearch({ query }) {
  const { loading, data, showMoreItems } = usePagination(RepoSearchQuery, {
    query,
    first: 10
  });

  return (
    <div className="RepositorySearch">
      {loading ? (
        <Loader />
      ) : (
        <RepositoryResults data={data} showMoreItems={showMoreItems} />
      )}
    </div>
  );
}

export default RepositorySearch;
