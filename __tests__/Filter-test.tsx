import {getItems, GET_ITEMS_BY_TYPE, ItemType} from 'api';

test('Test Filter data (filter by person)', async () => {
  let items = await getItems({limit: 1}, GET_ITEMS_BY_TYPE.Person);
  if (items && items.length > 0) {
    items = items.map(({image: _image, ...rest}: ItemType) => {
      return rest;
    });
  }
  const expectedResult = JSON.stringify([
    {name: 'Luke Skywalker', type: 'Person'},
  ]);
  expect(JSON.stringify(items)).toBe(expectedResult);
});
