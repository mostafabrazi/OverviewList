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
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  h_list: {flexDirection: 'row', alignItems: 'center'},
  h_spaced_list: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rotated_text: {
    marginTop: 120,
    transform: [{rotate: '90deg'}, {translateY: 90}],
    width: 220,
    height: 30,
  },
  big_image: {width: '100%', aspectRatio: 0.7},
});
