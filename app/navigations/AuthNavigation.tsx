import OnBoarding from '../screens/AuthScreens/OnBoardingScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {PATH} from '../shared/constants/path';
import SignUpScreen from '../screens/AuthScreens/SignUpScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import ForgetPasswordScreen from '../screens/AuthScreens/ForgetPasswordScreen';
import EmailSentScreen from '../screens/AuthScreens/EmailSentScreen';
import ConfirmCodeScreen from '../screens/AuthScreens/ConfirmCodeScreen';

const Stack = createStackNavigator();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={PATH.OnBoarding.pathname} component={OnBoarding} />
      <Stack.Screen name={PATH.Login.pathname} component={LoginScreen} />
      <Stack.Screen name={PATH.SingUp.pathname} component={SignUpScreen} />
      <Stack.Screen
        name={PATH.ConfirmationCode.pathname}
        component={ConfirmCodeScreen}
      />
      <Stack.Screen
        name={PATH.ForgetPassword.pathname}
        component={ForgetPasswordScreen}
      />
      <Stack.Screen
        name={PATH.EmailSent.pathname}
        component={EmailSentScreen}
      />
    </Stack.Navigator>
  );
};
