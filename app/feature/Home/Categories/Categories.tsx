import {View, FlatList} from 'react-native';
import React, {CSSProperties} from 'react';
import {styles} from './styles';
import {Button} from '../../../ui/Button';
import {COLORS} from '../../../shared/theme/colors';
import {InfoTitle} from '../../../shared/components/InfoTitle';

type Props = {
  title: string;
  data: any;
  style?: CSSProperties;
  onChooseCategory: (data: any) => void;
};

export const Categories: React.FC<Props> = ({
  title,
  data,
  onChooseCategory,
}) => {
  const renderItem = ({item}) => {
    return (
      <Button
        size="xsmall"
        bgColor={COLORS.neutral5}
        color={COLORS.neutral80}
        style={styles.customBtn}
        textStyle={styles.customBtnText}
        onPress={() => onChooseCategory(item)}>
        {item.title}
      </Button>
    );
  };

  return (
    <>
      <InfoTitle title={title} style={styles.mt} />
      <View style={styles.content}>
        <FlatList data={data} horizontal renderItem={renderItem} />
      </View>
    </>
  );
};

Categories.defaultProps = {
  title: 'Title',
};
