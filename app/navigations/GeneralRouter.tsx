import {createStackNavigator} from '@react-navigation/stack';
import {PATH} from '../shared/constants/path';
import PersonalizationScreen from '../screens/IntroScreens/PersonalizationScreen';
import AppTabNavigation from './AppTabNavigation';
import AboutItemsScreen from '../screens/AboutItemsScreen';
import DetailScreen from '../screens/DetailScreen';
import WelcomeScreen from '../screens/IntroScreens/WelcomeScreen';
import {getHeaderTitle} from '@react-navigation/elements';
import {AppHeader} from '../shared/components/AppHeader';

const Stack = createStackNavigator();

const suggestion = true;

export const GeneralRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({navigation, route, options}) => {
          const title = getHeaderTitle(options, route.name);

          return <AppHeader title={title} onBackButton={navigation.goBack} />;
        },
      }}>
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
            name={PATH.DetailItems.pathname}
            component={DetailScreen}
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
