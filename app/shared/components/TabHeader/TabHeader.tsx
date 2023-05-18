import {View} from 'react-native';
import React, {CSSProperties, lazy} from 'react';
import {AppIcon} from '../AppIcon';
import {COLORS} from '../../theme/colors';
import {styles} from './style';
import {StyleProp} from 'react-native';

const LogoWithText = lazy(() => import('../../../assets/images/logo-text.svg'));

type Props = {
  style?: CSSProperties | {};
};

export const TabHeader: React.FC<Props> = ({style = {}}) => {
  return (
    <View style={[styles.header, style]}>
      <LogoWithText />
      <AppIcon
        name="settings"
        width={20}
        height={20}
        color={COLORS.primary50}
      />
    </View>
  );
};
