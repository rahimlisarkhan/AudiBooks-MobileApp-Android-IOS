import {StyleSheet} from 'react-native';
import {pixelSizeVertical} from '../../../shared/theme/metrics';

export const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: pixelSizeVertical(16),
  },
});
