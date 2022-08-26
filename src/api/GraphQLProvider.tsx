import {API_URL} from '@env';
import {GraphQLClient} from 'graphql-request';

export const graphQLClient = new GraphQLClient(API_URL, {
  method: 'GET',
  jsonSerializer: {
    parse: JSON.parse,
    stringify: JSON.stringify,
  },
});
