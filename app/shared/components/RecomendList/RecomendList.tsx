import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {InfoTitle} from '../InfoTitle';
import {styles} from './style';
import {SuggestionCard} from '../SuggestionCard';
import {CardInfo} from '../CardWithInfo';
import {BookType} from '../../../types/books';
import {CardImage} from '../CardImage';

type Item = {
  [key in string]: unknown;
};

type Props = {
  title: string;
  onSeeMore?: () => void;
  variant?: 'withinfo' | 'suggestion' | 'normal';
  data: BookType[];
  onPressItem?: (item: any) => void;
};

const CardType = {
  normal: (item: BookType) => <CardImage {...item} />,

  suggestion: (item: BookType) => <SuggestionCard {...item} />,
  withinfo: (item: BookType) => <CardInfo {...item} />,
};

export const RecomendList: React.FC<Props> = ({
  title,
  onSeeMore,
  variant = 'normal',
  data,
  onPressItem,
}) => {
  const component = CardType[variant];

  const renderItem = ({index, item}: any) => {
    return (
      <TouchableOpacity onPress={() => onPressItem?.(item)}>
        {component(item)}
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <InfoTitle title={title} onSeeMore={onSeeMore} />
      <FlatList
        keyExtractor={(item: any, index) => {
          return item.id + index;
        }}
        style={styles.container}
        horizontal
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

RecomendList.defaultProps = {
  title: 'Title',
  variant: 'normal',
};
