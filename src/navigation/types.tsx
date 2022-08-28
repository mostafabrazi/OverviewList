export type RootStackParamList = {
  OverviewItemDetails: {id: string};
};

// very important to type check useNavigation hook
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
