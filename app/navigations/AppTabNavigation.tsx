import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {PATH} from '../shared/constants/path';
import {TabHeader} from '../shared/components/TabHeader';
import {getHeaderTitle} from '@react-navigation/elements';

const Tab = createBottomTabNavigator();

const AppTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: ({navigation, route, options}) => {
          const title = getHeaderTitle(options, route.name);

          return <TabHeader title={title} onBackButton={navigation.goBack} />;
        },
      }}>
      <Tab.Screen name={PATH.Home.pathname} component={HomeScreen} />
      <Tab.Screen name={'test1'} component={HomeScreen} />
      <Tab.Screen name={'test2'} component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default AppTabNavigation;
