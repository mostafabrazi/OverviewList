import {API_URL} from '@env';
import {GraphQLClient, Variables} from 'graphql-request';
import {useQuery, UseQueryOptions} from 'react-query';
import {GET_ITEMS, GET_ONE_ITEM} from './itemsQuery';

const graphQLClient = new GraphQLClient(API_URL, {
  method: 'GET',
  jsonSerializer: {
    parse: JSON.parse,
    stringify: JSON.stringify,
  },
});

export const useItems = (
  config?: Omit<
    UseQueryOptions<void, unknown, void, 'items'>,
    'queryKey' | 'queryFn'
  >,
) => {
  return useQuery(
    'items',
    async () => await graphQLClient.request(GET_ITEMS),
    config,
  );
};

export const useOneItem = (
  variables?: Variables,
  config?: Omit<
    UseQueryOptions<void, unknown, void, 'one-items'>,
    'queryKey' | 'queryFn'
  >,
) => {
  return useQuery(
    'one-items',
    async () => await graphQLClient.request(GET_ONE_ITEM, variables),
    config,
  );
};
