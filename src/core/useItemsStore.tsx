import create from 'zustand';
import {getItems, GET_ITEMS_BY_TYPE, ItemType} from 'api';
import {INITIAL_PAGE} from 'utils';

interface IItemsStore {
  loading: boolean;
  items: ItemType[] | null;
  filter: string | null;
  search: string;
  setLoading: (loading: boolean) => void;
  setFilter: (filter: string | null) => void;
  setItems: (items: ItemType[] | null) => void;
  setSearch: (filter: string) => void;
}

export const useItemsStore = create<IItemsStore>((set, _get) => ({
  loading: false,
  items: null,
  filter: null,
  search: '',
  setLoading: (loading: boolean) => {
    set({loading});
  },
  setItems: (items: ItemType[] | null) => {
    set({items});
  },
  setFilter: (filter: string | null) => {
    set({filter});
  },
  setSearch: (search: string) => {
    set({search});
  },
}));

export const hydrateItems = async () => {
  useItemsStore.getState().setLoading(true);
  setItems(await getItems({limit: INITIAL_PAGE}));
  useItemsStore.getState().setLoading(false);
};
export const setItems = (items: ItemType[] | null) =>
  useItemsStore.getState().setItems(items);
export const setFilter = async (filter: string) => {
  useItemsStore.getState().setLoading(true);
  useItemsStore.getState().setFilter(filter);
  // calling max of 3*INITIAL_PAGE = 18
  setItems(
    await getItems({limit: 3 * INITIAL_PAGE}, GET_ITEMS_BY_TYPE[filter]),
  );
  useItemsStore.getState().setLoading(false);
};
export const setSearch = async (search: string) => {
  useItemsStore.getState().setLoading(true);
  useItemsStore.getState().setSearch(search);
  const items = await getItems(
    {limit: 3 * INITIAL_PAGE},
    GET_ITEMS_BY_TYPE.All,
  );
  // calling max of 3*INITIAL_PAGE = 18
  setItems(items.filter(item => item.name.indexOf(search) !== -1));
  useItemsStore.getState().setLoading(false);
};
