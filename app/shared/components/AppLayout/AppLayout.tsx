import {CSSProperties, PropsWithChildren} from 'react';
import {View} from 'react-native';
import {SafeAreaView, StatusBar} from 'react-native';
import {styles} from '../../theme/root';
import LogoCycle from '../../../assets/images/logo-cycle.svg';
import Elipse from '../../../assets/icons/ellipse.svg';

import {styles as layoutStyle} from './styles';
import {COLORS} from '../../theme/colors';
import {AppIcon} from '../AppIcon';
import {ScrollView} from 'react-native-gesture-handler';

type Props = {
  bgShow?: boolean;
  variant?: 'small' | 'normal' | 'none';
  style?: CSSProperties | {};
};

export const AppLayout: React.FC<PropsWithChildren<Props>> = ({
  bgShow,
  variant = 'normal',
  children,
  style = {},
}) => {
  return (
    <>
      <StatusBar
        barStyle={styles.barStyle}
        backgroundColor={styles.statusBarBackground}
      />
      <View style={layoutStyle.container_area}>
        {bgShow && (
          <View style={layoutStyle.overlay}>
            <LogoCycle width={224} height={157} color={COLORS.primary50} />
            <AppIcon
              style={layoutStyle.rightBgImage}
              name="ellipse"
              size={135}
              color={COLORS.accent50}
            />
          </View>
        )}
        <ScrollView
          style={[
            layoutStyle.container,
            variant && layoutStyle[variant],
            {marginTop: bgShow ? -70 : 0},
            style,
          ]}>
          {children}
        </ScrollView>
      </View>
    </>
  );
};
