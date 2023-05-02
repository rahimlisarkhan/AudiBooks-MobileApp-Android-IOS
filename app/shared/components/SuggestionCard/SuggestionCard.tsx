import {View, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Typography} from '../../../ui/Typography';
import {COLORS} from '../../theme/colors';
import RaitingShow from '../RaitingShow/RaitingShow';

type Props = {
  image_url?: string | null;
  title?: string;
  desc?: string;
  raiting?: number;
};

export const SuggestionCard: React.FC<Props> = ({
  image_url,
  title,
  desc,
  raiting = 4,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image_url}} />
      <View style={styles.info_content}>
        <View>
          <Typography weight="semibold" variant="body2">
            {title?.slice(0, 20)} {title?.length > 20 ? '...' : ''}
          </Typography>
          <Typography variant="caption" color={COLORS.neutral60}>
            {desc?.slice(0, 20)} {desc?.length > 20 ? '...' : ''}
          </Typography>
        </View>
        <View>
          <RaitingShow raiting={raiting} />
          <Typography variant="caption" color={COLORS.neutral60}>
            1,000+ Listeners
          </Typography>
        </View>
      </View>
    </View>
  );
};
