import {graphQLClient} from 'api/GraphQLProvider';
import {Variables} from 'graphql-request';
import {useQuery, UseQueryOptions} from 'react-query';
import {GET_ONE_ITEM} from './gql-queries';

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
