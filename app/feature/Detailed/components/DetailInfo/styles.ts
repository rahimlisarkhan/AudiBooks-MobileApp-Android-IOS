import {StyleSheet} from 'react-native';
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../../../shared/theme/metrics';

export const styles = StyleSheet.create({
  image_content: {
    alignItems: 'center',
    marginBottom: pixelSizeHorizontal(28),
  },

  image: {
    width: widthPixel(260),
    height: heightPixel(260),
  },

  list: {
    flexDirection: 'row',
    marginTop: pixelSizeHorizontal(4),
  },

  button_group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: pixelSizeVertical(32),
  },

  summary_content: {
    marginTop: pixelSizeVertical(32),
  },
});
