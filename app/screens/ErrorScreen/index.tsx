import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {AppLayout} from '../../shared/components/AppLayout';

const ErrorScreen = () => {
  return (
    <AppLayout>
      <Text style={style.container}>ErrorScreen</Text>
    </AppLayout>
  );
};

export default ErrorScreen;

const style = StyleSheet.create({
  container: {
    fontSize: 40,
    fontFamily: 'Poppins',
  },
});
