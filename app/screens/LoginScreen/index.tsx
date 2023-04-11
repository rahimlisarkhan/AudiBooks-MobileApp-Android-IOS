import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {AppLayout} from '../../shared/components/AppLayout';

const LoginScreen = () => {
  return (
    <AppLayout>
      <Text style={style.container}>OnBdsdsorading</Text>
    </AppLayout>
  );
};

export default LoginScreen;

const style = StyleSheet.create({
  container: {
    fontSize: 40,
    fontFamily: 'Poppins',
  },
});
