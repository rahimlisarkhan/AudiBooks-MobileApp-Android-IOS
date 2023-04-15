import {StyleSheet} from 'react-native';
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../theme/metrics';
import {COLORS} from '../../theme/colors';

export const styles = StyleSheet.create({
  overlay: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: heightPixel(200),
    backgroundColor: COLORS.neutralWhite,
    zIndex: 2,
  },

  rightBgImage: {
    alignSelf: 'flex-end',
  },

  container: {
    flex: 1,
    backgroundColor: COLORS.neutralWhite,
    paddingVertical: pixelSizeVertical(32),
    paddingHorizontal: pixelSizeHorizontal(40),
  },
});
