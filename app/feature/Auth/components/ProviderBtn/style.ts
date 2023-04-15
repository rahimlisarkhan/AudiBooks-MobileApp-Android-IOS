import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../shared/theme/colors';
import {
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../../../shared/theme/metrics';

export const styles = StyleSheet.create({
  iconContent: {
    borderRadius: 8,
    borderColor: COLORS.primary50,
    borderWidth: 1,
    borderStyle: 'solid',
    paddingHorizontal: pixelSizeHorizontal(30),
    paddingVertical: pixelSizeVertical(16),
  },
});
