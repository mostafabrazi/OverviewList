import create from 'zustand';

interface IAnimatedHeader {
  animate: boolean;
  showFilter: boolean;
  showSearch: boolean;
  setAnimated: (animate: boolean) => void;
  setShowFilter: (showFilter: boolean) => void;
  setShowSearch: (showSearch: boolean) => void;
}

export const useAnimatedHeader = create<IAnimatedHeader>((set, _get) => ({
  animate: false,
  showFilter: false,
  showSearch: false,
  setAnimated: (animate: boolean) => {
    set({animate});
  },
  setShowFilter: (showFilter: boolean) => {
    set({showFilter});
  },
  setShowSearch: (showSearch: boolean) => {
    set({showSearch});
  },
}));

export const animateHeader = (animate: boolean) =>
  useAnimatedHeader.getState().setAnimated(animate);
export const toggleFilter = () => {
  useAnimatedHeader.getState().showSearch && toggleSearch();
  useAnimatedHeader
    .getState()
    .setShowFilter(!useAnimatedHeader.getState().showFilter);
};
export const toggleSearch = () => {
  useAnimatedHeader.getState().showFilter && toggleFilter();
  useAnimatedHeader
    .getState()
    .setShowSearch(!useAnimatedHeader.getState().showSearch);
};
