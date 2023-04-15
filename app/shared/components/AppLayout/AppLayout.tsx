import {PropsWithChildren} from 'react';
import {View} from 'react-native';
import {SafeAreaView, StatusBar} from 'react-native';
import {styles} from '../../theme/root';
import LogoCycle from '../../../assets/images/logo-cycle.svg';
import Elipse from '../../../assets/icons/ellipse.svg';

import {styles as layoutStyle} from './styles';
import {COLORS} from '../../theme/colors';
import {AppIcon} from '../AppIcon';

type Props = {
  bgShow?: boolean;
};

export const AppLayout: React.FC<PropsWithChildren<Props>> = ({
  bgShow,
  children,
}) => {
  return (
    <>
      <StatusBar
        barStyle={styles.barStyle}
        backgroundColor={styles.statusBarBackground}
      />
      {bgShow && (
        <View style={layoutStyle.overlay}>
          <LogoCycle width={224} height={157} color={COLORS.neutral80} />
          <AppIcon
            style={layoutStyle.rightBgImage}
            name="ellipse"
            width={85}
            size={85}
            height={134}
            color={COLORS.accent50}
          />
        </View>
      )}
      <View style={{...layoutStyle.container, marginTop: bgShow ? -30 : 0}}>
        {children}
      </View>
    </>
  );
};
