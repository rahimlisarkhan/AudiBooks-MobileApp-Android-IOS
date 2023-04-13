import {StyleSheet} from 'react-native';
import {pixelSizeHorizontal} from '../../theme/metrics';
import {pixelSizeVertical} from '../../theme/metrics';

export const styles = StyleSheet.create({
  card: {
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(46),
    paddingVertical: pixelSizeVertical(36),
  },
  title: {marginTop: 24, marginBottom: 12},
});
