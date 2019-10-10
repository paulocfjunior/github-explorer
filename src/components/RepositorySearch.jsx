import React from "react";

import { usePagination } from "../util/pagination";
import Loader from "./Loader";
import RepoSearchQuery from "../graphql/queries/RepositorySearch";
import RepositoryResults from "./RepositoryResults";

function RepositorySearch({ query, isVisible }) {
  const isVisibleClass = isVisible ? "visible" : "";
  const { loading, data, showMoreItems } = usePagination(RepoSearchQuery, {
    query,
    first: 10
  });

  return (
    <div className={["RepositorySearch", isVisibleClass].join(" ")}>
      {loading ? (
        <Loader />
      ) : (
        <RepositoryResults data={data} showMoreItems={showMoreItems} />
      )}
    </div>
  );
}

export default RepositorySearch;
