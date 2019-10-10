import gql from "graphql-tag";

export default gql`
  query RepositorySearch($query: String!, $first: Int, $after: String) {
    search(query: $query, type: REPOSITORY, first: $first, after: $after) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            nameWithOwner
            description
            openGraphImageUrl
            url
            issues {
              totalCount
            }
            pullRequests {
              totalCount
            }
            createdAt
            assignableUsers {
              totalCount
            }
            primaryLanguage {
              color
              name
            }
          }
        }
      }
    }
  }
`;
