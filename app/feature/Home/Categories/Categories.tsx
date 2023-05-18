import {View, FlatList} from 'react-native';
import React, {CSSProperties} from 'react';
import {styles} from './styles';
import {Button} from '../../../ui/Button';
import {COLORS} from '../../../shared/theme/colors';
import {InfoTitle} from '../../../shared/components/InfoTitle';
import {shortName} from '../../../shared/utils/shortName';
import {CategoryType} from '../../../types/category';

type Props = {
  title: string;
  data: CategoryType[];
  style?: CSSProperties;
  onSeeMore?: () => void;
  onChooseCategory: (data: any) => void;
};

export const Categories: React.FC<Props> = ({
  title,
  data,
  onSeeMore,
  onChooseCategory,
}) => {
  const renderItem = ({item}: {item: CategoryType}) => {
    return (
      <Button
        size="xsmall"
        bgColor={COLORS.neutral5}
        color={COLORS.neutral80}
        style={styles.customBtn}
        textStyle={styles.customBtnText}
        onPress={() => onChooseCategory(item)}>
        {shortName(item.name, 15)}
      </Button>
    );
  };

  return (
    <>
      <InfoTitle title={title} style={styles.mt} onSeeMore={onSeeMore} />
      <View style={styles.content}>
        <FlatList data={data} horizontal renderItem={renderItem} />
      </View>
    </>
  );
};

Categories.defaultProps = {
  title: 'Title',
};
