import {graphQLClient} from 'api/GraphQLProvider';
import {ItemsResultType, ItemType, Parameters} from 'api/types';
import {normalizeResults} from 'api/utils';
import {useQuery, UseQueryOptions} from 'react-query';
import {GET_ITEMS} from './gql-queries';

export const useItems = (
  params: Parameters,
  config?:
    | Omit<
        UseQueryOptions<ItemType[], unknown, ItemType[], 'items'>,
        'queryKey' | 'queryFn'
      >
    | undefined,
) => {
  return useQuery('items', () => getItems(params), config);
};

export const getItems = async (params: Parameters, query = GET_ITEMS) => {
  const result = await graphQLClient.request<ItemsResultType>(query, params);
  return result && Object.keys(result).length > 0
    ? normalizeResults(result)
    : [];
};
