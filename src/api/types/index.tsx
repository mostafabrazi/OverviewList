export type ItemType = {
  type: string;
  name: string;
};

export type ItemsGroupKeyType = 'allPeople' | 'allPlanets' | 'allStarships';
export type ItemsKeyType = 'people' | 'planet' | 'starship';
export type ItemsResultType = {
  [k in ItemsGroupKeyType]: {
    [j in ItemsKeyType]: ItemType[];
  };
};

export type ItemsType = {[key in ItemsKeyType]: ItemType[]};
