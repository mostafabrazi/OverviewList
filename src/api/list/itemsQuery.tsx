import gql from 'graphql-tag';

export const GET_ITEMS = gql`
  query {
    allStarships(first: 2) {
      starships {
        id
        name
        model
        starshipClass
        length
        crew
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
