import {StyleSheet} from 'react-native';
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../theme/metrics';

export const styles = StyleSheet.create({
  card: {
    marginRight: pixelSizeHorizontal(16),
    marginBottom: pixelSizeVertical(16),
  },

  image: {
    width: widthPixel(200),
    marginRight: pixelSizeHorizontal(16),
    height: heightPixel(300),
  },
});
