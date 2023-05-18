import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthNavigation} from './AuthNavigation';
import ErrorScreen from '../screens/ErrorScreen';
import {PATHNAME} from '../shared/constants/pathname';
import {GeneralRouter} from './GeneralRouter';
import {AppHeader} from '../shared/components/AppHeader';
import {getHeaderTitle} from '@react-navigation/elements';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const Stack = createStackNavigator();

const queryClient = new QueryClient();

export const RootNavigation = () => {
  const navigationRef = useNavigationContainerRef();
  const auth = false;

  const AUTH_OR_GENERAL = auth ? (
    <Stack.Screen
      name={PATHNAME.Auth.pathname}
      component={AuthNavigation}
      options={{headerShown: false}}
    />
  ) : (
    <Stack.Screen
      name={PATHNAME.GeneralRouter.pathname}
      component={GeneralRouter}
      options={{headerShown: false}}
    />
  );

  return (
    <NavigationContainer ref={navigationRef}>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator
          screenOptions={{
            header: ({navigation, route, options}) => {
              const title = getHeaderTitle(options, route.name);

              return (
                <AppHeader title={title} onBackButton={navigation.goBack} />
              );
            },
          }}>
          {AUTH_OR_GENERAL}
          <Stack.Screen
            name={PATHNAME.ErrorNotFound.pathname}
            component={ErrorScreen}
          />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
};
