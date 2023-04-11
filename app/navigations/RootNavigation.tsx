import OnBoarding from '../screens/OnBoardingScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthNavigation} from './AuthNavigation';
import ErrorScreen from '../screens/ErrorScreen';
import {PATH} from '../shared/constants/path';
import {GeneralRouter} from './GeneralRouter';

const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={PATH.Auth.name}
          component={AuthNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen name={PATH.ErrorNotFound.name} component={ErrorScreen} />
        <Stack.Screen
          name={PATH.GeneralRouter.name}
          component={GeneralRouter}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
