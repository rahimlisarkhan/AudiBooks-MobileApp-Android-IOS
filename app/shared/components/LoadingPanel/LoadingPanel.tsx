import {lazy} from 'react';
import {View} from 'react-native';
import {styles} from './styles';

const LogoImg = lazy(() => import('../../../assets/images/logo.svg'));

export const LoadingPanel = () => {
  return (
    <View style={styles.content}>
      <LogoImg width={70} />
    </View>
  );
};
