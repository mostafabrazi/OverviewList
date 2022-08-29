import {ItemsResultType} from 'api';
import {normalizeResults} from 'api/utils';

test('Test Normalize data', () => {
  const dataFromAPI = {
    allPeople: {
      people: [{id: '1', name: 'person 1'}],
    },
    allPlanets: {
      planets: [{id: '2', name: 'planet 1'}],
    },
    allStarships: {
      starships: [{id: '3', name: 'starship 1'}],
    },
  };

  const result = normalizeResults(dataFromAPI as ItemsResultType, true);
  const expectedTestResult = [
    {id: '1', name: 'person 1'},
    {id: '2', name: 'planet 1'},
    {id: '3', name: 'starship 1'},
  ];
  expect(JSON.stringify(result)).toBe(JSON.stringify(expectedTestResult));
});
