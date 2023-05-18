import {createStackNavigator} from '@react-navigation/stack';
import {PATHNAME} from '../shared/constants/pathname';
import PersonalizationScreen from '../screens/IntroScreens/PersonalizationScreen';
import WelcomeScreen from '../screens/IntroScreens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import SeeMoreScreen from '../screens/SeeMoreScreen';
import {getHeaderTitle} from '@react-navigation/elements';
import {AppHeader} from '../shared/components/AppHeader';

const Stack = createStackNavigator();

const HomeRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({navigation, route, options}) => {
          const title = getHeaderTitle(options, route.name);
          return <AppHeader title={title} onBackButton={navigation.goBack} />;
        },
      }}>
      <Stack.Screen
        name={PATHNAME.Home.pathname}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={PATHNAME.SeeMore.pathname}
        component={SeeMoreScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeRouter;
