import {View, Image, FlatList} from 'react-native';
import React from 'react';
import {Typography} from '../../../../ui/Typography';
import {styles} from './styles';
import {COLORS} from '../../../../shared/theme/colors';
import RaitingShow from '../../../../shared/components/RaitingShow/RaitingShow';
import {pixelSizeHorizontal} from '../../../../shared/theme/metrics';
import {Button} from '../../../../ui/Button';

type Props = {image_url: string; title: string; desc: string};

const arr = [
  {
    key: 1,
    name: 'Fantasy',
  },
  {
    key: 2,
    name: 'Drama',
  },
  {
    key: 3,
    name: 'Fiction',
  },
];

export const DetailInfo: React.FC<Props> = ({image_url, title, desc}) => {
  return (
    <View>
      <View style={styles.image_content}>
        <Image style={styles.image} source={{uri: image_url}} />
      </View>
      <Typography variant="title5" weight="medium">
        {title}
      </Typography>
      <Typography
        variant="body2"
        color={COLORS.neutral50}
        style={{
          marginTop: pixelSizeHorizontal(5),
          marginBottom: pixelSizeHorizontal(19),
        }}>
        {desc}
      </Typography>
      <RaitingShow raiting={4} show />

      <View>
        {
          <FlatList
            style={styles.list}
            data={arr}
            horizontal
            renderItem={({item}) => (
              <Button
                variant="outlined"
                rounded
                size="xsmall"
                style={{marginRight: pixelSizeHorizontal(12)}}
                textStyle={{color: COLORS.neutral60}}
                bgColor={COLORS.neutral60}>
                {item.name}
              </Button>
            )}
          />
        }
      </View>
    </View>
  );
};
