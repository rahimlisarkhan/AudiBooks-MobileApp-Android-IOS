import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {AppLayout} from '../../shared/components/AppLayout';

const PersonalizationScreen = () => {
  return (
    <AppLayout>
      <Text style={style.container}>OnBdsdsorading</Text>
    </AppLayout>
  );
};

export default PersonalizationScreen;

const style = StyleSheet.create({
  container: {
    fontSize: 40,
    fontFamily: 'Poppins',
  },
});
