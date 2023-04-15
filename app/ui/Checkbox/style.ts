import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme/colors';
import {
  heightPixel,
  pixelSizeHorizontal,
  widthPixel,
} from '../../shared/theme/metrics';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  content: {
    width: widthPixel(20),
    height: heightPixel(20),
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.primary20,
    marginRight: pixelSizeHorizontal(12),
  },

  checkContent: {
    width: widthPixel(18),
    height: widthPixel(18),
    backgroundColor: COLORS.primary50,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
