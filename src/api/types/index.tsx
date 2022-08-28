export type Parameters = {
  limit?: number;
};

export type ItemsGroupKeyType = 'allPeople' | 'allPlanets' | 'allStarships';
export type ItemsKeyType = 'people' | 'planet' | 'starship';
export type ItemType = {
  id: string;
  type: 'Person' | 'Starship' | 'Planet';
  name: string;
  image?: string;
};
export type ItemsType = {[key in ItemsKeyType]: ItemType[]};
export type ItemsResultType = {
  [k in ItemsGroupKeyType]: {
    [j in ItemsKeyType]: ItemType[];
  };
};

export type PlanetType = {
  id: string;
  name: string;
  diameter: number;
  rotationPeriod: number;
  orbitalPeriod: number;
  gravity: string;
  population: number;
  surfaceWater: number;
};

export type PersonType = {
  id: string;
  name: string;
  birthYear: string;
  eyeColor: string;
  gender: string;
  hairColor: string;
  height: number;
  mass: number;
  homeworld: PlanetType;
};

export type StarshipType = {
  id: string;
  name: string;
  model: string;
  starshipClass: string;
  manufacturers: string[];
  costInCredits: number;
  length: number;
  crew: string;
  passengers: string;
  MGLT: number;
};

export type UnionType = PlanetType & PersonType & StarshipType;
