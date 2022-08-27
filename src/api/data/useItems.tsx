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
  return useQuery(
    'items',
    async () => {
      const result = await graphQLClient.request<ItemsResultType>(
        GET_ITEMS,
        params,
      );
      return result && Object.keys(result).length > 0
        ? normalizeResults(result)
        : [];
    },
    config,
  );
};
