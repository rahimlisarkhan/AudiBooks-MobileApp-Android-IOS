import React, {useState} from 'react';
import {AuthForm} from '../AuthForm';
import {TextInput} from '../../../../ui/TextInput';
import {styles} from './style';
import {TouchableOpacity, View} from 'react-native';
import {Button} from '../../../../ui/Button';
import {Typography} from '../../../../ui/Typography';
import {COLORS} from '../../../../shared/theme/colors';
import {PATH} from '../../../../shared/constants/path';
import {useNavigation, useRoute} from '@react-navigation/native';
import {convertToSecureEmail} from '../../../../shared/utils/convertToSecureEmail';

export const ConfirmCode = () => {
  const {navigate} = useNavigation();

  const {
    params: {email},
  } = useRoute();

  const [form, setForm] = useState({});

  const handleChangeForm = (name: string, value: string) => {
    setForm(prevForm => ({...prevForm, [name]: value}));
  };

  const routeLogin = () => {
    navigate(PATH.Login.pathname);
  };

  const handleResend = () => {
    // ... resend code
  };

  const handleSubmitForm = () => {
    console.log(form);

    // navigate(PATH.Login.pathname);
  };
  const emailContent = (
    <Typography variant="headline" weight="semibold">
      {convertToSecureEmail(email)}
    </Typography>
  );

  return (
    <AuthForm
      title="Email Sent"
      info={
        <Typography variant="headline">
          Enter the confirmation code we sent to {emailContent}.
        </Typography>
      }>
      <TextInput
        style={styles.input}
        placeholder="Confirmation Code"
        keyboardType="numeric"
        onChangeText={(value: string) => handleChangeForm('code', value)}
      />

      <View style={styles.btnGroup}>
        <TouchableOpacity onPress={handleResend}>
          <Typography variant="headline" align="left">
            Didn’t receive the code?
            <Typography
              variant="headline"
              weight="semibold"
              align="right"
              color={COLORS.accent50}>
              {' '}
              Resend
            </Typography>{' '}
          </Typography>
        </TouchableOpacity>

        <View style={styles.btnSendContent}>
          <Button
            text="Submit"
            style={styles.btnSend}
            onPress={handleSubmitForm}
          />
          <Button
            variant="outlined"
            text="Cancel"
            style={styles.btnSend}
            onPress={routeLogin}
          />
        </View>
      </View>
    </AuthForm>
  );
};
