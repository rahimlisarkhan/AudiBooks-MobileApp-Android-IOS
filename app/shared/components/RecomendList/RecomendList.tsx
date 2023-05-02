import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {InfoTitle} from '../InfoTitle';
import {styles} from './style';
import {SuggestionCard} from '../SuggestionCard';
import {CardInfo} from '../CardWithInfo';

type Item = {
  [key in string]: unknown;
};

type Props = {
  title: string;
  onSeeMore?: () => void;
  variant?: 'withinfo' | 'suggestion' | 'normal';
  data: Item[];
  onPressItem?: (item: Item) => void;
};

const CardType = {
  normal: (item: Item) => (
    <Image style={styles.imageContent} source={{uri: item?.image_url ?? ''}} />
  ),

  suggestion: (item: Item) => <SuggestionCard {...item} />,
  withinfo: (item: Item) => <CardInfo {...item} />,
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
        keyExtractor={(item: any) => {
          return item.title;
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
