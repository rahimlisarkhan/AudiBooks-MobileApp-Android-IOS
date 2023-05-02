import {View, Text, Image} from 'react-native';
import React from 'react';
import {Typography} from '../../../ui/Typography';
import {styles} from './styles';

type Props = {
  title?: string;
  image_url?: string;
};

export const CardInfo: React.FC<Props> = ({title, image_url}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: image_url ?? ''}} />
      <Typography variant="body2" weight="medium">
        {title}
      </Typography>
    </View>
  );
};
