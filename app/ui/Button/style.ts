import {StyleSheet} from 'react-native';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../shared/theme/metrics';
import {COLORS} from '../../shared/theme/colors';

export const btStyle = StyleSheet.create({
  button: {
    borderRadius: 8,
  },

  buttonText: {
    fontFamily: 'Popins',
  },

  xlarge: {
    paddingHorizontal: pixelSizeHorizontal(38),
    paddingVertical: pixelSizeVertical(18),
    fontSize: fontPixel(22),
  },

  large: {
    paddingHorizontal: pixelSizeHorizontal(32),
    paddingVertical: pixelSizeVertical(16),
    fontSize: fontPixel(18),
  },
  medium: {
    paddingHorizontal: pixelSizeHorizontal(28),
    paddingVertical: pixelSizeVertical(12),
    fontSize: fontPixel(16),
  },

  small: {
    paddingHorizontal: pixelSizeHorizontal(18),
    paddingVertical: pixelSizeVertical(8),
    fontSize: fontPixel(14),
  },

  contained: {
    backgroundColor: COLORS.mainBlue,
    color: COLORS.white,
  },

  outlined: {
    color: COLORS.mainBlue,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.mainBlue,
  },

  text: {
    borderColor: COLORS.mainBlue,
  },
});
