import {IMAGE_URL} from '@env';
import {ItemsKeyType, ItemsResultType, ItemsType, ItemType} from 'api/types';

export const normalizeResults = (data: ItemsResultType, jest = false) => {
  return Object.values(data).reduce((acc: ItemType[], val: ItemsType) => {
    let result: ItemType[] = [];
    Object.keys(val).forEach((key: ItemsKeyType | string) => {
      const arr = val[key as ItemsKeyType];
      result = attachRandomImages(result.concat(arr), jest);
    });
    return [...acc, ...result];
  }, []);
};

const attachRandomImages = (arr: ItemType[], jest = false) => {
  if (jest) {
    return arr;
  }
  return arr.map((item, i) => {
    const img =
      item.type === 'Person'
        ? randomPeopleImages[
            i < randomPeopleImages.length
              ? i
              : Math.floor(i % randomPeopleImages.length)
          ]
        : item.type === 'Starship'
        ? randomStarShipsImages[
            i < randomStarShipsImages.length
              ? i
              : Math.floor(i % randomStarShipsImages.length)
          ]
        : randomPlanetsImages[
            i < randomPlanetsImages.length
              ? i
              : Math.floor(i % randomPlanetsImages.length)
          ];
    return {...item, image: IMAGE_URL + img};
  });
};

const randomPeopleImages = [
  '76/e9/1f/76e91f415fc81579d81e54654b12a17b.jpg',
  'd8/3f/63/d83f63b9854bdf32e55e097c1d593157.jpg',
  '1c/de/35/1cde3594e111a4b848e3f8680ddfb305.jpg',
  '8f/51/ae/8f51aeccf9b28d3b4771d925b59f0649.jpg',
];

const randomStarShipsImages = [
  '5a/bf/bf/5abfbf9bd7ecda16dd51b93478127229.jpg',
  'ef/6a/09/ef6a09889fc4a5006d5dd65b535d8bf7.jpg',
  '1e/08/78/1e0878598234c7d5a95c45e33a85d3a6.jpg',
  '4a/35/a1/4a35a124cea1ca1bb95945cf505689a5.jpg',
];

const randomPlanetsImages = [
  '01/e8/d2/01e8d28e247989235a485e74b095c4d8.jpg',
  '8b/0e/74/8b0e74b5e664ade1a3653f986883af63.jpg',
  '01/49/e8/0149e85c2191190395e87c89ed1c77ff.jpg',
  'cb/d8/77/cbd8772937a77898de0fe1ffb5cb6d5f.jpg',
];
