import {StyleSheet} from 'react-native';
import {pixelSizeHorizontal, pixelSizeVertical} from '../../theme/metrics';

export const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: pixelSizeVertical(10),
    marginRight: pixelSizeHorizontal(14),
  },

  stars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
