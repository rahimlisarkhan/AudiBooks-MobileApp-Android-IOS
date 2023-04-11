import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {AppLayout} from '../../shared/components/AppLayout';

const WelcomeScreen = () => {
  return (
    <AppLayout>
      <Text style={style.container}>OnBdsdsorading</Text>
    </AppLayout>
  );
};

export default WelcomeScreen;

const style = StyleSheet.create({
  container: {
    fontSize: 40,
    fontFamily: 'Poppins',
  },
});
