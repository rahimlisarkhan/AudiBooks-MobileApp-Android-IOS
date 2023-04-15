import {View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {Typography} from '../../../ui/Typography';

import {styles} from './styles';

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
      <Typography style={styles.title} variant="body2" weight="semibold">
        {title}
      </Typography>
      <Typography variant="headline" weight="regular">
        {desc}
      </Typography>
    </View>
  );
};
