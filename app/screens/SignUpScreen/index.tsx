import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {AppLayout} from '../../shared/components/AppLayout';

const SignUpScreen = () => {
  return (
    <AppLayout>
      <Text style={style.container}>SignUpScreen</Text>
    </AppLayout>
  );
};

export default SignUpScreen;

const style = StyleSheet.create({
  container: {
    fontSize: 40,
    fontFamily: 'Poppins',
  },
});
