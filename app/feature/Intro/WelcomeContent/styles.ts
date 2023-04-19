import {StyleSheet} from 'react-native';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../../shared/theme/metrics';

export const styles = StyleSheet.create({
  title: {
    fontWeight: '200',
    lineHeight: fontPixel(58),
    paddingRight: pixelSizeHorizontal(30),
    marginTop: pixelSizeVertical(16),
  },

  parag: {
    marginTop: pixelSizeVertical(16),
  },

  btnGroup: {
    marginTop: pixelSizeVertical(32),
  },

  marginBtn: {
    marginBottom: pixelSizeVertical(16),
  },

  btnSendContent: {
    marginBottom: pixelSizeVertical(36),
  },
});
