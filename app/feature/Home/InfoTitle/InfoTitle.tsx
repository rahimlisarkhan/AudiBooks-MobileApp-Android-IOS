import {View, Text} from 'react-native';
import React from 'react';
import {Typography} from '../../../ui/Typography';
import {styles} from './styles';
import {Button} from '../../../ui/Button';

type Props = {
  title: string;
};

export const InfoTitle: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.content}>
      <Typography variant="body2" weight="medium">
        {title}
      </Typography>
      <Button variant="text" size="xsmall">
        See more
      </Button>
    </View>
  );
};
