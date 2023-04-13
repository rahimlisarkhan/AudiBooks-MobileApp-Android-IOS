import {StyleSheet} from 'react-native';
import {pixelSizeHorizontal, pixelSizeVertical} from '../../theme/metrics';
import {COLORS} from '../../theme/colors';

export const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: pixelSizeHorizontal(24),
    paddingVertical: pixelSizeVertical(20),
    justifyContent: 'space-between',
    backgroundColor: COLORS.neutralWhite,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.primary5,
  },
});
