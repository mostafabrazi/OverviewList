import {graphQLClient} from 'api/GraphQLProvider';
import {ItemsResultType, ItemsType} from 'api/types';
import {normalizeResults} from 'api/utils';
import {useQuery, UseQueryOptions} from 'react-query';
import {GET_ITEMS} from './gql-queries';

export const useItems = (
  config?:
    | Omit<
        UseQueryOptions<
          ItemsType | never[],
          unknown,
          ItemsType | never[],
          'items'
        >,
        'queryKey' | 'queryFn'
      >
    | undefined,
) => {
  return useQuery(
    'items',
    async () => {
      const result = await graphQLClient.request<ItemsResultType>(GET_ITEMS, {
        limit: 6,
      });
      return result && Object.keys(result).length > 0
        ? normalizeResults(result)
        : [];
    },
    config,
  );
};
