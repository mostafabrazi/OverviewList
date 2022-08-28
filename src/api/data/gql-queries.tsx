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

export const GET_PEOPLE_ITEMS = `
    allPeople(first: $limit) {
      people {
        name
        type: __typename
      }
    }
  
`;

export const GET_PLANET_ITEMS = `
    allPlanets(first: $limit) {
      planets {
        name
        type: __typename
      }
    }
`;
export const GET_STARSHIP_ITEMS = `
    allStarships(first: $limit) {
      starships {
        name
        type: __typename
      }
    }
`;

export const GET_ITEMS_BY_TYPE = {
  All: GET_ITEMS,
  Person: gql`query($limit: Int) {${GET_PEOPLE_ITEMS}}`,
  Planet: gql`query($limit: Int) {${GET_PLANET_ITEMS}}`,
  Starship: gql`query($limit: Int) {${GET_STARSHIP_ITEMS}}`,
};
