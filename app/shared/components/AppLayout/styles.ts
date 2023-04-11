import {StyleSheet} from 'react-native';
import {heightPixel} from '../../theme/metrics';

export const styles = StyleSheet.create({
  overlay: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: heightPixel(200),
  },

  rightBgImage: {
    alignSelf: 'flex-end',
  },
});
