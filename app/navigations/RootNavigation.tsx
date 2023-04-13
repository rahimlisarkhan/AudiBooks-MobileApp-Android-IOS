import OnBoarding from '../screens/OnBoardingScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthNavigation} from './AuthNavigation';
import ErrorScreen from '../screens/ErrorScreen';
import {PATH} from '../shared/constants/path';
import {GeneralRouter} from './GeneralRouter';
import {Text} from 'react-native';
import {AppHeader} from '../shared/components/AppHeader';
import {getHeaderTitle} from '@react-navigation/elements';

const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: ({navigation, route, options}) => {
            const title = getHeaderTitle(options, route.name);

            return <AppHeader title={title} onBackButton={navigation.goBack} />;
          },
        }}>
        <Stack.Screen
          name={PATH.Auth.pathname}
          component={AuthNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={PATH.ErrorNotFound.pathname}
          component={ErrorScreen}
        />
        <Stack.Screen
          name={PATH.GeneralRouter.pathname}
          component={GeneralRouter}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
