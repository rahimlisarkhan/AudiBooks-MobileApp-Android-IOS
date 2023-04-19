import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';
import {pixelSizeHorizontal, pixelSizeVertical} from '../../theme/metrics';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.neutralWhite,
    paddingHorizontal: pixelSizeHorizontal(28),
    paddingVertical: pixelSizeVertical(5),
  },
});
