import {useItems} from 'api';
import {useEffect, useReducer} from 'react';
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
  // disable loading data until we trigger it via refetch
  const {refetch} = useItems({limit}, {enabled: false});
  useEffect(() => {
    limit && limit > INITIAL_PAGE && refetch && refetch();
  }, [limit, refetch]);
  return {nextPage: () => dispatch({type: 'NEXT'})};
};
