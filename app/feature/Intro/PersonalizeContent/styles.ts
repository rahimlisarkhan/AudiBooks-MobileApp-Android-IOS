import {StyleSheet} from 'react-native';
import {pixelSizeVertical} from '../../../shared/theme/metrics';

export const styles = StyleSheet.create({
  title: {
    marginBottom: pixelSizeVertical(12),
  },

  searchContent: {
    marginTop: pixelSizeVertical(40),
  },

  searchList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: pixelSizeVertical(20),
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
