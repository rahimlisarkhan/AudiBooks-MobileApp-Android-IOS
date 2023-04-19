import {Text, View} from 'react-native';
import {AppLayout} from '../../shared/components/AppLayout';
import {Categories} from '../../feature/Home/Categories';

const HomeScreen = () => {
  return (
    <AppLayout variant="none">
      <Categories />
      <View>
        <Text>Home</Text>
      </View>
    </AppLayout>
  );
};

export default HomeScreen;
