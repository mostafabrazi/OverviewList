import {ItemType} from 'api';

export type RootStackParamList = {
  OverviewItemDetails: ItemType;
};

// very important to type check useNavigation hook
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
