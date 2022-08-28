import gql from 'graphql-tag';

export const GET_ITEMS = gql`
  query ($limit: Int) {
    allPeople(first: $limit) {
      people {
        id
        name
        type: __typename
      }
    }
    allPlanets(first: $limit) {
      planets {
        id
        name
        type: __typename
      }
    }
    allStarships(first: $limit) {
      starships {
        id
        name
        type: __typename
      }
    }
  }
`;

export const GET_ONE_STARSHIP = gql`
  query ($id: ID!) {
    starship(id: $id) {
      id
      name
      model
      starshipClass
      manufacturers
      costInCredits
      length
      crew
      passengers
      MGLT
    }
  }
`;

export const GET_ONE_PERSON = gql`
  query ($id: ID!) {
    person(id: $id) {
      id
      name
      birthYear
      eyeColor
      gender
      hairColor
      height
      mass
    }
  }
`;

export const GET_ONE_PLANET = gql`
  query ($id: ID!) {
    planet(id: $id) {
      name
      diameter
      rotationPeriod
      orbitalPeriod
      gravity
      population
      surfaceWater
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
