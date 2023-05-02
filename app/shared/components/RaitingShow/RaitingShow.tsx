import {View} from 'react-native';
import React from 'react';
import {AppIcon} from '../AppIcon';
import {COLORS} from '../../theme/colors';
import {styles} from './style';
import {pixelSizeHorizontal} from '../../theme/metrics';
import {Typography} from '../../../ui/Typography';

type Props = {
  raiting?: number;
  count?: number;
  show?: boolean;
};

const RaitingShow: React.FC<Props> = ({raiting = 4, count = 5, show}) => {
  const content = new Array(count ?? 5)
    .fill(0)
    .map((_, index) => (
      <AppIcon
        name={index < raiting ? 'star-filled' : 'star'}
        style={{marginRight: pixelSizeHorizontal(8)}}
        color={COLORS.accent50}
      />
    ));

  return (
    <View style={styles.content}>
      {content}
      {show && (
        <Typography variant="title5" color={COLORS.neutral50}>
          {raiting}.0
        </Typography>
      )}
    </View>
  );
};

export default RaitingShow;

RaitingShow.defaultProps = {
  count: 5,
  raiting: 3,
};
