import React, {lazy, useState} from 'react';
import {AuthForm} from '../AuthForm';
import {TextInput} from '../../../../ui/TextInput';
import {styles} from './style';
import {Checkbox} from '../../../../ui/Checkbox';
import {TouchableOpacity, View} from 'react-native';
import {Button} from '../../../../ui/Button';
import {Typography} from '../../../../ui/Typography';
import {COLORS} from '../../../../shared/theme/colors';
import {ProviderBtn} from '../ProviderBtn/ProviderBtn';
import {PATHNAME} from '../../../../shared/constants/pathname';
import {useNavigation} from '@react-navigation/native';
import {ProviderType} from '../../../../interface/provider';

const GoogleIcon = lazy(() => import('../../../../assets/images/google.svg'));
const FacebookIcon = lazy(
  () => import('../../../../assets/images/facebook.svg'),
);
const TwitterIcon = lazy(() => import('../../../../assets/images/twitter.svg'));

export const Login = () => {
  const {navigate} = useNavigation();

  const [form, setForm] = useState({});

  const handleChangeForm = (name: string, value: string) => {
    setForm(prevForm => ({...prevForm, [name]: value}));
  };

  const routeRegister = () => {
    navigate(PATHNAME.SingUp.pathname);
  };

  const routeForgetPassword = () => {
    navigate(PATHNAME.ForgetPassword.pathname);
  };

  const handleSubmitForm = () => {
    console.log(form);
  };

  const onHandleProvider = (provider: string) => {
    console.log('provider: ', provider);
  };

  return (
    <AuthForm title="Login to Your Account">
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
      <Checkbox
        style={styles.input}
        label="Remember me"
        onChange={(value: boolean) => handleChangeForm('remember', value)}
      />

      <View style={styles.btnGroup}>
        <View style={styles.btnSendContent}>
          <Button
            text="Login"
            style={styles.btnSend}
            onPress={handleSubmitForm}
          />
          <TouchableOpacity onPress={routeForgetPassword}>
            <Typography
              variant="headline"
              weight="semibold"
              align="right"
              color={COLORS.accent50}>
              Forget Password ?
            </Typography>
          </TouchableOpacity>
        </View>
        <View>
          <Typography variant="headline" align="center">
            Or login with
          </Typography>
          <View style={styles.providerGroup}>
            <ProviderBtn
              icon={GoogleIcon}
              onPress={() => onHandleProvider(ProviderType.FB)}
            />
            <ProviderBtn
              icon={FacebookIcon}
              onPress={() => onHandleProvider(ProviderType.GOOGLE)}
            />
            <ProviderBtn
              icon={TwitterIcon}
              onPress={() => onHandleProvider(ProviderType.TWITTER)}
            />
          </View>

          <TouchableOpacity onPress={routeRegister}>
            <Typography variant="headline" align="center">
              Don’t have an accoun’t ?{' '}
              <Typography
                variant="headline"
                weight="semibold"
                align="right"
                color={COLORS.accent50}>
                Register
              </Typography>
            </Typography>
          </TouchableOpacity>
        </View>
      </View>
    </AuthForm>
  );
};
