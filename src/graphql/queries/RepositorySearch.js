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
            nameWithOwner
            description
            openGraphImageUrl
            url
            sshUrl
            issues {
              totalCount
            }
            pullRequests {
              totalCount
            }
            createdAt
            forkCount
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
