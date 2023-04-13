import {PropsWithChildren} from 'react';
import {View} from 'react-native';
import {SafeAreaView, StatusBar} from 'react-native';
import {styles} from '../../theme/root';
import LogoCycle from '../../../assets/images/logo-cycle.svg';
import Elipse from '../../../assets/icons/ellipse.svg';

import {styles as layoutStyle} from './styles';
import {COLORS} from '../../theme/colors';

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
          <Elipse
            style={layoutStyle.rightBgImage}
            width={85}
            height={134}
            color={COLORS.accent50}
          />
          {/* <ImageSvg width="200" height="100" source={imageLeft} /> */}
        </View>
      )}
      <View style={{...layoutStyle.container, marginTop: bgShow ? -30 : 0}}>
        {children}
      </View>
    </>
  );
};
