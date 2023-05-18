import React, {useState} from 'react';
import {AuthForm} from '../AuthForm';
import {TextInput} from '../../../../ui/TextInput';
import {styles} from './style';
import {View} from 'react-native';
import {Button} from '../../../../ui/Button';
import {PATHNAME} from '../../../../shared/constants/pathname';
import {useNavigation} from '@react-navigation/native';

export const ForgetPassword = () => {
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
    navigate(PATHNAME.EmailSent.pathname, {
      email: form.info,
    });
  };

  return (
    <AuthForm
      title="Forget Password"
      info="Please fill email or phone number and we'll send you a link to get back into your account.">
      <TextInput
        style={styles.input}
        placeholder="Email / Phone number"
        autoCapitalize={false}
        onChangeText={(value: string) => handleChangeForm('info', value)}
      />

      <View style={styles.btnGroup}>
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
