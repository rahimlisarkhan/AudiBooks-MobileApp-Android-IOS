import {StyleSheet} from 'react-native';
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../theme/metrics';
import {COLORS} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: pixelSizeVertical(12),
    paddingHorizontal: pixelSizeHorizontal(12),
    backgroundColor: COLORS.neutral5,
    borderRadius: 12,
    gap: 16,
    flexDirection: 'row',
    marginRight: pixelSizeHorizontal(16),
  },

  image: {
    width: widthPixel(120),
    height: heightPixel(120),
    borderRadius: 4,
  },

  info_content: {
    gap: 20,
  },
});
