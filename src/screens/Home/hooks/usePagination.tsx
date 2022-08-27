import {useItems} from 'api';
import {useCallback, useEffect, useReducer} from 'react';
import {INITIAL_PAGE} from 'utils';

export type Pagination = {
  limit: number;
};
type Action = {
  type: 'NEXT';
};

const paginationReducer = (state: Pagination, action: Action) => {
  switch (action.type) {
    case 'NEXT':
      return {...state, limit: state.limit + INITIAL_PAGE};
    default:
      return state;
  }
};

export const usePagination = () => {
  const [{limit}, dispatch] = useReducer(paginationReducer, {
    limit: INITIAL_PAGE,
  });
  const {isLoading, data, refetch} = useItems({limit});
  const nextPage = useCallback(() => dispatch({type: 'NEXT'}), []);
  useEffect(() => {
    if (limit && limit > INITIAL_PAGE && refetch) {
      console.log('limit: ', limit);
      refetch();
    }
  }, [limit, refetch]);
  return {data, isLoading, nextPage};
};
