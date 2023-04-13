import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {AppLayout} from '../../shared/components/AppLayout';
import {TextInput} from '../../shared/components/TextInput/TextInput';

const LoginScreen = () => {
  return (
    <AppLayout>
      <Text style={style.container}>Login</Text>

      <TextInput placeholder="test" />
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
