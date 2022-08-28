export type Parameters = {
  limit?: number;
};

export type ItemsGroupKeyType = 'allPeople' | 'allPlanets' | 'allStarships';
export type ItemsKeyType = 'people' | 'planet' | 'starship';
export type ItemType = {
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
