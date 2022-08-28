import create from 'zustand';

interface IAnimatedHeader {
  animate: boolean;
  showFilter: boolean;
  setAnimated: (animate: boolean) => void;
  setShowFilter: (showFilter: boolean) => void;
}

export const useAnimatedHeader = create<IAnimatedHeader>((set, _get) => ({
  animate: false,
  showFilter: false,
  setAnimated: (animate: boolean) => {
    set({animate});
  },
  setShowFilter: (showFilter: boolean) => {
    set({showFilter});
  },
}));

export const animateHeader = (animate: boolean) =>
  useAnimatedHeader.getState().setAnimated(animate);
export const toggleFilter = () =>
  useAnimatedHeader
    .getState()
    .setShowFilter(!useAnimatedHeader.getState().showFilter);
