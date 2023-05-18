import React, {lazy, useState} from 'react';
import {AuthForm} from '../AuthForm';
import {TextInput} from '../../../../ui/TextInput';
import {styles} from './style';
import {View} from 'react-native';
import {Button} from '../../../../ui/Button';
import {Typography} from '../../../../ui/Typography';
import {COLORS} from '../../../../shared/theme/colors';
import {PATHNAME} from '../../../../shared/constants/pathname';
import {useNavigation} from '@react-navigation/native';
import {DatePickerInput} from '../../../../ui/DatePickerInput';

export const SignUp = () => {
  const {navigate} = useNavigation();

  const [form, setForm] = useState({});

  const handleChangeForm = (name: string, value: string) => {
    setForm(prevForm => ({...prevForm, [name]: value}));
  };

  const routeLogin = () => {
    navigate(PATHNAME.Login.pathname);
  };

  const handleSubmitForm = () => {
    console.log(form);
  };
  return (
    <AuthForm title="Register">
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(value: string) => handleChangeForm('email', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        textContentType="password"
        onChangeText={(value: string) => handleChangeForm('password', value)}
      />
      <DatePickerInput
        style={styles.input}
        placeholder="Date of Birth"
        onChangeText={(value: string) => handleChangeForm('birth', value)}
      />

      <View style={styles.btnGroup}>
        <View style={styles.btnSendContent}>
          <Button
            text="Register"
            style={styles.btnSend}
            onPress={handleSubmitForm}
          />
          <Button
            variant="outlined"
            text="Cancel"
            style={styles.btnSend}
            onPress={routeLogin}
          />
          <Typography variant="headline" align="left">
            By signing up, you agree to our
            <Typography
              variant="headline"
              weight="semibold"
              align="right"
              color={COLORS.accent50}>
              {' '}
              Terms, Data Policy
            </Typography>{' '}
            and{' '}
            <Typography
              variant="headline"
              weight="semibold"
              align="right"
              color={COLORS.accent50}>
              Cookies Policy.
            </Typography>
          </Typography>
        </View>
      </View>
    </AuthForm>
  );
};
