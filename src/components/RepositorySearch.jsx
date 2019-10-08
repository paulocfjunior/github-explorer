import { useQuery } from "@apollo/react-hooks";
import React from "react";

import Loader from "./Loader";
import RepoSearchQuery from "../graphql/queries/RepositorySearch";
import RepositoryResults from "./RepositoryResults";

function RepositorySearch({ query }) {
  const { loading, data } = useQuery(RepoSearchQuery, {
    variables: { query, first: 10 }
  });

  return (
    <div className="RepositorySearch">
      {loading ? <Loader /> : <RepositoryResults data={data} />}
    </div>
  );
}

export default RepositorySearch;
