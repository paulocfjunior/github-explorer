import gql from "graphql-tag";

export default gql`
  query UserSearch($query: String!, $first: Int, $after: String) {
    search(query: $query, type: USER, first: $first, after: $after) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      userCount
      edges {
        node {
          ... on User {
            avatarUrl
            name
            bio
            url
            followers {
              totalCount
            }
            following {
              totalCount
            }
            location
            login
            createdAt
          }
          ... on Organization {
            avatarUrl
            name
            description
            url
            location
            login
            createdAt
            repositories {
              totalCount
            }
            membersWithRole {
              totalCount
            }
          }
        }
      }
    }
  }
`;
