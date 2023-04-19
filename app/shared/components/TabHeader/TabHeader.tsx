import {View, Text} from 'react-native';
import React, {lazy} from 'react';
import {AppIcon} from '../AppIcon';
import {COLORS} from '../../theme/colors';
import {Button} from '../../../ui/Button';
import {styles} from './style';

const LogoWithText = lazy(() => import('../../../assets/images/logo-text.svg'));

export const TabHeader = () => {
  return (
    <View style={styles.header}>
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
