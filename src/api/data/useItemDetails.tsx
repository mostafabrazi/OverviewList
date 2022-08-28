import {graphQLClient} from 'api/GraphQLProvider';
import {UnionType} from 'api/types';
import {DocumentNode} from 'graphql';
import {useQuery, UseQueryOptions} from 'react-query';
import {GET_ONE_PERSON, GET_ONE_PLANET, GET_ONE_STARSHIP} from './gql-queries';

const query: {[id: string]: DocumentNode} = {
  Person: GET_ONE_PERSON,
  Planet: GET_ONE_PLANET,
  Starship: GET_ONE_STARSHIP,
};

export const useOneItem = (
  {id, type}: {id: string; type: string},
  config?: Omit<
    UseQueryOptions<UnionType, unknown, UnionType, 'one-items'>,
    'queryKey' | 'queryFn'
  >,
) => {
  return useQuery(
    'one-items',
    async () => {
      const data = await graphQLClient.request(query[type], {id});
      return data && data[type.toLowerCase()] ? data[type.toLowerCase()] : null;
    },
    config,
  );
};
