import {View} from 'react-native';
import React, {CSSProperties} from 'react';
import {Typography} from '../../../ui/Typography';
import {styles} from './styles';
import {Button} from '../../../ui/Button';

type Props = {
  title: string;
  style?: CSSProperties | {};
  onSeeMore?: () => void;
};

export const InfoTitle: React.FC<Props> = ({title, onSeeMore, style}) => {
  return (
    <View style={[styles.content, style]}>
      <Typography variant="body2" weight="medium">
        {title}
      </Typography>
      <Button variant="text" size="xsmall" onPress={onSeeMore}>
        See more
      </Button>
    </View>
  );
};
