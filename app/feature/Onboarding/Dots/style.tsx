import {StyleSheet} from 'react-native';
import {heightPixel, widthPixel} from '../../../shared/theme/metrics';

export const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  dot: {
    width: widthPixel(12),
    height: heightPixel(12),
    borderRadius: 200,
  },
});
