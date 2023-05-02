import {StyleSheet} from 'react-native';
import {pixelSizeHorizontal, pixelSizeVertical} from '../../theme/metrics';

export const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: pixelSizeHorizontal(24),
    marginTop: pixelSizeVertical(24),
    marginBottom: pixelSizeVertical(16),
  },
});
