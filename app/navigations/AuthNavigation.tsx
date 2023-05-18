import OnBoarding from '../screens/AuthScreens/OnBoardingScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {PATHNAME} from '../shared/constants/pathname';
import SignUpScreen from '../screens/AuthScreens/SignUpScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import ForgetPasswordScreen from '../screens/AuthScreens/ForgetPasswordScreen';
import EmailSentScreen from '../screens/AuthScreens/EmailSentScreen';
import ConfirmCodeScreen from '../screens/AuthScreens/ConfirmCodeScreen';

const Stack = createStackNavigator();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={PATHNAME.OnBoarding.pathname}
        component={OnBoarding}
      />
      <Stack.Screen name={PATHNAME.Login.pathname} component={LoginScreen} />
      <Stack.Screen name={PATHNAME.SingUp.pathname} component={SignUpScreen} />
      <Stack.Screen
        name={PATHNAME.ConfirmationCode.pathname}
        component={ConfirmCodeScreen}
      />
      <Stack.Screen
        name={PATHNAME.ForgetPassword.pathname}
        component={ForgetPasswordScreen}
      />
      <Stack.Screen
        name={PATHNAME.EmailSent.pathname}
        component={EmailSentScreen}
      />
    </Stack.Navigator>
  );
};
