import {StyleSheet} from 'react-native';
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../theme/metrics';

export const styles = StyleSheet.create({
  container: {
    marginLeft: pixelSizeHorizontal(24),
    marginBottom: pixelSizeVertical(32),
  },

  imageContent: {
    width: widthPixel(200),
    marginRight: pixelSizeHorizontal(16),
    height: heightPixel(300),
  },
});
