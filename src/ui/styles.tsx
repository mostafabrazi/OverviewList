import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT} from 'utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: SCREEN_HEIGHT,
  },
  h100: {
    height: '100%',
  },
  w100: {
    width: '100%',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  h_list: {flexDirection: 'row', alignItems: 'center'},
  h_spaced_list: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
