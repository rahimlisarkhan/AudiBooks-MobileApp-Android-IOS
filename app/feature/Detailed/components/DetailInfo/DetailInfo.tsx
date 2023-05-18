import {View, Image, FlatList, Text} from 'react-native';
import React from 'react';
import {Typography} from '../../../../ui/Typography';
import {styles} from './styles';
import {COLORS} from '../../../../shared/theme/colors';
import RaitingShow from '../../../../shared/components/RaitingShow/RaitingShow';
import {
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../../../shared/theme/metrics';
import {Button} from '../../../../ui/Button';
import {AppIcon} from '../../../../shared/components/AppIcon';
import {shortName} from '../../../../shared/utils/shortName';

import RenderHtml from 'react-native-render-html';
import {useWindowDimensions} from 'react-native';

type Props = {picture_urls: any; title: string; desc: string};

const renderTypograph = (text: string) => (
  <Typography
    variant="headline"
    color={COLORS.neutral60}
    style={{marginTop: pixelSizeVertical(12), lineHeight: 21}}>
    {text}
  </Typography>
);

export const DetailInfo: React.FC<any> = ({
  picture_urls,
  rating,
  title,
  description,
  genre,
  desc,
}) => {
  const {width} = useWindowDimensions();

  const source = {
    html: description,
  };

  return (
    <View>
      <View style={styles.image_content}>
        <Image style={styles.image} source={{uri: picture_urls?.small ?? ''}} />
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
      <RaitingShow raiting={rating} show />

      <View>
        <FlatList
          style={styles.list}
          keyExtractor={item => item.id}
          data={genre}
          horizontal
          renderItem={({item}) => (
            <Button
              variant="outlined"
              rounded
              size="xsmall"
              style={{marginRight: pixelSizeHorizontal(12)}}
              textStyle={{color: COLORS.neutral60}}
              bgColor={COLORS.neutral60}>
              {shortName(item.name, 15)}
            </Button>
          )}
        />

        <View style={styles.button_group}>
          <Button
            size="medium"
            icon={
              <AppIcon name="play" size={16} color={COLORS.neutralWhite} />
            }>
            Play Audio
          </Button>
          <Button
            variant="outlined"
            size="medium"
            color={COLORS.primary50}
            icon={
              <AppIcon name="document" size={16} color={COLORS.primary50} />
            }
            textStyle={{color: COLORS.primary50}}>
            Read Book
          </Button>
        </View>

        <View style={styles.summary_content}>
          <Typography variant="headline" weight="semibold">
            Summary
          </Typography>
          <Typography
            variant="body2"
            color={COLORS.neutral60}
            style={{marginTop: pixelSizeVertical(12), lineHeight: 21}}>
            <RenderHtml contentWidth={width} source={source} />
          </Typography>
        </View>
      </View>
    </View>
  );
};
