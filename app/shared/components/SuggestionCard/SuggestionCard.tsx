import {View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import {Typography} from '../../../ui/Typography';
import {COLORS} from '../../theme/colors';
import RaitingShow from '../RaitingShow/RaitingShow';
import {BookType} from '../../../types/books';
import {shortName} from '../../utils/shortName';

export const SuggestionCard: React.FC<
  BookType & {raiting?: number; name?: string}
> = ({picture, picture_urls, title, name, authors, raiting = 4}) => {
  const [load, setLoad] = useState(true);

  return (
    <View style={styles.container}>
      {load && <Typography>Loading...</Typography>}
      <Image
        style={styles.image}
        onLoadEnd={() => setLoad(false)}
        source={{uri: picture?.small ?? picture_urls?.small}}
      />
      <View style={styles.info_content}>
        <View>
          <Typography weight="semibold" variant="body2">
            {shortName(name ?? '', 20)}
          </Typography>
          <Typography variant="caption" color={COLORS.neutral60}>
            {shortName(authors?.[0]?.name, 20)}
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
