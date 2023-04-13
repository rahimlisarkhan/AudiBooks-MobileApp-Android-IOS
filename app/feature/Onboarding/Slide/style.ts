import {StyleSheet} from 'react-native';
import {
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../../shared/theme/metrics';

export const styles = StyleSheet.create({
  btnGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: pixelSizeHorizontal(40),
    paddingHorizontal: pixelSizeHorizontal(40),
  },
});
