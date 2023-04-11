import OnBoarding from '../screens/OnBoardingScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {PATH} from '../shared/constants/path';
// import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={PATH.OnBoarding.pathname} component={OnBoarding} />
      <Stack.Screen name={PATH.Login.pathname} component={LoginScreen} />
      {/* <Stack.Screen name={PATH.SingUp.pathname} component={SignUpScreen} /> */}
    </Stack.Navigator>
  );
};
