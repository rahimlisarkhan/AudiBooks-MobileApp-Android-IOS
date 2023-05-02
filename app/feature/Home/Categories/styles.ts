import {StyleSheet} from 'react-native';
import {
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../../shared/theme/metrics';

export const styles = StyleSheet.create({
  content: {
    paddingLeft: pixelSizeHorizontal(24),
  },

  customBtnText: {
    fontWeight: '400',
  },

  customBtn: {
    marginRight: pixelSizeVertical(12),
  },

  mt: {
    marginTop: pixelSizeVertical(29),
  },
});
