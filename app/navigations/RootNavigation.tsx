import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthNavigation} from './AuthNavigation';
import ErrorScreen from '../screens/ErrorScreen';
import {PATH} from '../shared/constants/path';
import {GeneralRouter} from './GeneralRouter';
import {AppHeader} from '../shared/components/AppHeader';
import {getHeaderTitle} from '@react-navigation/elements';

const Stack = createStackNavigator();

export const RootNavigation = () => {
  const auth = false;

  const AUTH_OR_GENERAL = auth ? (
    <Stack.Screen
      name={PATH.Auth.pathname}
      component={AuthNavigation}
      options={{headerShown: false}}
    />
  ) : (
    <Stack.Screen
      name={PATH.GeneralRouter.pathname}
      component={GeneralRouter}
      options={{headerShown: false}}
    />
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: ({navigation, route, options}) => {
            const title = getHeaderTitle(options, route.name);

            return <AppHeader title={title} onBackButton={navigation.goBack} />;
          },
        }}>
        {AUTH_OR_GENERAL}
        <Stack.Screen
          name={PATH.ErrorNotFound.pathname}
          component={ErrorScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
