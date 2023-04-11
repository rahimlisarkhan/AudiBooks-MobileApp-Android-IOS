import OnBoarding from '../screens/OnBoardingScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {PATH} from '../shared/constants/path';
import Login from '../screens/LoginScreen';
import SignUp from '../screens/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import PersonalizationScreen from '../screens/PersonalizationScreen';

const Stack = createStackNavigator();

export const GeneralRouter = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={PATH.Welcome.pathname} component={WelcomeScreen} />
      <Stack.Screen
        name={PATH.Personalization.pathname}
        component={PersonalizationScreen}
      />
    </Stack.Navigator>
  );
};
