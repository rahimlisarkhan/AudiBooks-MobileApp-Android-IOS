import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../theme/metrics';

export const styles = StyleSheet.create({
  inputContent: {
    position: 'relative',
  },

  inputReadOnly: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.neutral5,
    opacity: 0.5,
    zIndex: 3,
  },

  input: {
    height: heightPixel(53),
    backgroundColor: COLORS.neutral5,
    borderRadius: 8,
    paddingVertical: pixelSizeVertical(16),
    paddingHorizontal: pixelSizeHorizontal(24),
    color: COLORS.neutral80,
    fontSize: fontPixel(14),
    fontWeight: '500',
  },

  activeInput: {
    borderWidth: 1,
    borderColor: COLORS.primary50,
    borderStyle: 'solid',
  },

  disabled: {
    backgroundColor: COLORS.neutra5,
  },
});
