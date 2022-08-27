import gql from 'graphql-tag';

export const GET_ITEMS = gql`
  query ($limit: Int) {
    allPeople(first: $limit) {
      people {
        name
        type: __typename
      }
    }
    allPlanets(first: $limit) {
      planets {
        name
        type: __typename
      }
    }
    allStarships(first: $limit) {
      starships {
        name
        type: __typename
      }
    }
  }
`;

export const GET_ONE_ITEM = gql`
  query ($id: ID!) {
    starship(id: $id) {
      id
      name
      model
      starshipClass
      length
      crew
    }
  }
`;
