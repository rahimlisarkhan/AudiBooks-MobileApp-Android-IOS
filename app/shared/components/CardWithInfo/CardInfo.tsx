import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {Typography} from '../../../ui/Typography';
import {styles} from './styles';
import {COLORS} from '../../theme/colors';
import {BookType} from '../../../types/books';
import {shortName} from '../../utils/shortName';

export const CardInfo: React.FC<BookType> = ({title, picture, authors}) => {
  const [load, setLoad] = useState(true);

  return (
    <View style={styles.card}>
      {load && <Typography>Loading...</Typography>}
      <Image
        style={styles.image}
        onLoad={() => setLoad(false)}
        source={{uri: picture?.small ?? ''}}
      />
      <Typography variant="body2" weight="medium">
        {shortName(title, 15)}
      </Typography>
      {authors.length && (
        <Typography variant="caption" weight="medium" color={COLORS.primary50}>
          {authors[0].name}
        </Typography>
      )}
    </View>
  );
};
