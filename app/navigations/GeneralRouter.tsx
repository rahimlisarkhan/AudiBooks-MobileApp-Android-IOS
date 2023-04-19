import {createStackNavigator} from '@react-navigation/stack';
import {PATH} from '../shared/constants/path';
import WelcomeScreen from '../screens/WelcomeScreen';
import PersonalizationScreen from '../screens/IntroScreens/PersonalizationScreen';
import AppTabNavigation from './AppTabNavigation';
import HomeScreen from '../screens/HomeScreen';
import AboutItemsScreen from '../screens/AboutItemsScreen';

const Stack = createStackNavigator();

const suggestion = true;

export const GeneralRouter = () => {
  return (
    <Stack.Navigator>
      {suggestion && (
        <>
          <Stack.Screen
            name={PATH.Welcome.pathname}
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={PATH.Personalization.pathname}
            component={PersonalizationScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={PATH.Home.pathname}
            component={AppTabNavigation}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name={PATH.AboutItems.pathname}
            component={AboutItemsScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
