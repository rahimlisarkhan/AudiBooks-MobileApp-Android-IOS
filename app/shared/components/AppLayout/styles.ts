import {StyleSheet} from 'react-native';
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../theme/metrics';
import {COLORS} from '../../theme/colors';

export const styles = StyleSheet.create({
  container_area: {
    flex: 1,
    backgroundColor: COLORS.neutralWhite,
  },

  overlay: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: heightPixel(220),
  },

  rightBgImage: {
    marginRight: -30,
    marginBottom: 20,
    alignSelf: 'flex-end',
  },

  container: {
    paddingTop: pixelSizeVertical(16),
    paddingBottom: pixelSizeVertical(36),
  },

  normal: {
    paddingHorizontal: pixelSizeHorizontal(40),
  },

  small: {
    paddingHorizontal: pixelSizeHorizontal(24),
  },

  none: {
    paddingHorizontal: 0,
  },
});
