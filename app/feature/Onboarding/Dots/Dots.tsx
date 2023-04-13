import {View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {pixelSizeHorizontal} from '../../../shared/theme/metrics';
import {styles} from './style';
import {COLORS} from '../../../shared/theme/colors';

type Props = {
  count: number;
  activeDot: number;
};

export const Dots: React.FC<Props> = ({activeDot, count}) => {
  const [dots, setDots] = useState<number[]>(new Array(count).fill(0));

  const dynamicStyle = useCallback(
    (index: number) => ({
      ...styles.dot,
      marginRight: index === dots.length - 1 ? 0 : pixelSizeHorizontal(12),
      backgroundColor: COLORS[activeDot === index ? 'accent50' : 'primary40'],
    }),
    [dots, activeDot],
  );

  const content = dots.map((_, index, list) => {
    return <View style={dynamicStyle(index)} key={`dot-id-${index}`}></View>;
  });

  return <View style={styles.list}>{content}</View>;
};

Dots.defaultProps = {
  count: 3,
  activeDot: 0,
};
