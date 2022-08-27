import {ItemsKeyType, ItemsResultType, ItemsType, ItemType} from 'api/types';

export const normalizeResults = (data: ItemsResultType) => {
  return Object.values(data).reduce((acc: ItemType[], val: ItemsType) => {
    let result: ItemType[] = [];
    Object.keys(val).forEach((key: ItemsKeyType | string) => {
      const arr = val[key as ItemsKeyType];
      result = result.concat(arr);
    });
    return [...acc, ...result];
  }, []);
};
