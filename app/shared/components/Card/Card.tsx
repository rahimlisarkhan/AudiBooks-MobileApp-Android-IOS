import {View, Text} from 'react-native';
import React, {FunctionComponent} from 'react';
import {Typography} from '../../../ui/Typography';

import {styles} from './styles';
import {COLORS} from '../../theme/colors';

type Props = {
  icon: FunctionComponent<SVGElement>;
  title: string;
  desc: string;
};

export const InfoCard: React.FC<Props> = ({icon, title, desc}) => {
  const Icon = icon;

  return (
    <View style={styles.card}>
      <View>
        <Icon />
      </View>
      <Typography
        style={styles.title}
        variant="body2"
        weight="semibold"
        color={COLORS.neutral80}>
        {title}
      </Typography>
      <Typography variant="headline" weight="regular" color={COLORS.neutral80}>
        {desc}
      </Typography>
    </View>
  );
};
