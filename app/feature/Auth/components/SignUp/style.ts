import {StyleSheet} from 'react-native';
import {pixelSizeVertical} from '../../../../shared/theme/metrics';

export const styles = StyleSheet.create({
  input: {
    marginTop: pixelSizeVertical(16),
  },

  btnGroup: {
    marginTop: pixelSizeVertical(16),
  },

  btnSend: {
    marginBottom: pixelSizeVertical(16),
  },

  btnSendContent: {
    marginBottom: pixelSizeVertical(36),
  },

  providerGroup: {
    marginTop: pixelSizeVertical(20),
    marginBottom: pixelSizeVertical(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
