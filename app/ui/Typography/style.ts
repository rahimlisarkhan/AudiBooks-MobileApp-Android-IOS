import {StyleSheet} from 'react-native';
import {fontPixel} from '../../shared/theme/metrics';

export const styles = StyleSheet.create({
  font: {
    fontFamily: 'Poppins',
  },

  title1: {
    fontSize: fontPixel(32),
  },

  title2: {
    fontSize: fontPixel(28),
  },

  title3: {
    fontSize: fontPixel(24),
  },

  title4: {
    fontSize: fontPixel(22),
  },

  title5: {
    fontSize: fontPixel(20),
  },

  body1: {
    fontSize: fontPixel(18),
  },

  body2: {
    fontSize: fontPixel(16),
  },

  headline: {
    fontSize: fontPixel(14),
  },

  caption: {
    fontSize: fontPixel(12),
  },

  regular: {
    fontWeight: '400',
  },

  medium: {
    fontWeight: '500',
  },

  semibold: {
    fontWeight: '600',
  },

  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
});
