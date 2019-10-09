import { useQuery } from "react-apollo";

function getPaginationConfig(query, variables, endCursor) {
  return {
    query,
    variables: Object.assign(variables, { after: endCursor }),
    updateQuery: (prev, { fetchMoreResult }) => {
      fetchMoreResult.search.edges = [
        ...prev.search.edges,
        ...fetchMoreResult.search.edges
      ];

      fetchMoreResult.search.edges = [...new Set(fetchMoreResult.search.edges)];

      return fetchMoreResult;
    }
  };
}

export function usePagination(query, variables) {
  const { loading, data, error, fetchMore } = useQuery(query, { variables });

  if (!loading) {
    const showMoreItems = () =>
      fetchMore(
        getPaginationConfig(query, variables, data.search.pageInfo.endCursor)
      );

    return { loading, data, error, showMoreItems };
  }

  return { loading, data, error };
}
