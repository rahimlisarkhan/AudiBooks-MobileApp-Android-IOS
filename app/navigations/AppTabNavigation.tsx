import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {PATHNAME} from '../shared/constants/pathname';
import {AppIcon} from '../shared/components/AppIcon';
import {COLORS} from '../shared/theme/colors';
import {IconType} from '../shared/components/AppIcon/icons';
import HomeRouter from './HomeRouter';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

const AppTabNavigation = () => {
  const options = (icon1: IconType, icon2: IconType) => ({
    tabBarActiveTintColor: COLORS.primary50,
    tabBarIcon: ({focused}: any) => (
      <AppIcon
        name={focused ? icon1 : icon2}
        size={20}
        color={COLORS[focused ? 'primary50' : 'neutral50']}
      />
    ),
  });

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={'HomeRouter'}
        component={HomeRouter}
        options={options('home-filled', 'home')}
      />
      <Tab.Screen
        name={PATHNAME.Search.pathname}
        component={SearchScreen}
        options={options('search-filled', 'search')}
      />
      <Tab.Screen
        name={'Library'}
        component={HomeScreen}
        options={options('document-filled', 'document')}
      />
    </Tab.Navigator>
  );
};

export default AppTabNavigation;
