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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    textAlign: 'center',
  },

  xlarge: {
    paddingHorizontal: pixelSizeHorizontal(22),
    paddingVertical: pixelSizeVertical(18),
    fontSize: fontPixel(22),
  },

  large: {
    paddingHorizontal: pixelSizeHorizontal(32),
    paddingVertical: pixelSizeVertical(16),
    fontSize: fontPixel(16),
  },
  medium: {
    paddingHorizontal: pixelSizeHorizontal(28),
    paddingVertical: pixelSizeVertical(12),
    fontSize: fontPixel(12),
  },

  small: {
    paddingHorizontal: pixelSizeHorizontal(18),
    paddingVertical: pixelSizeVertical(8),
    fontSize: fontPixel(12),
  },

  xsmall: {
    paddingHorizontal: pixelSizeHorizontal(12),
    paddingVertical: pixelSizeVertical(4),
    fontSize: fontPixel(12),
  },

  contained: {
    backgroundColor: COLORS.primary50,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.primary50,
  },

  outlined: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.primary50,
    backgroundColor: 'transparent !important',
  },

  text: {
    borderColor: COLORS.neutral80,
    backgroundColor: 'transparent !important',
    textAlign: 'center',
  },

  rounded: {
    borderRadius: 300,
  },

  disabled: {
    opacity: 0.3,
  },
});
