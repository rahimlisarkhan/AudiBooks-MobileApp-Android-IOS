import {View, Text} from 'react-native';
import React from 'react';
import {InfoTitle} from '../InfoTitle';
import {styles} from './styles';

export const Categories = () => {
  return (
    <View style={styles.content}>
      <InfoTitle title="Categories" />
      <Text>Categories</Text>
    </View>
  );
};
