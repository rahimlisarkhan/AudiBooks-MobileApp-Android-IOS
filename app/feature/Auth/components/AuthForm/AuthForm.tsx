import {View} from 'react-native';
import React, {PropsWithChildren, lazy} from 'react';
import {styles} from './style';
import {Typography} from '../../../../ui/Typography';

type Props = {title: string};

const Logo = lazy(() => import('../../../../assets/images/logo.svg'));

export const AuthForm: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
}) => {
  return (
    <View style={styles.formContent}>
      <View style={styles.logoContent}>
        <Logo />
      </View>
      <Typography variant="body2" weight="semibold" align="left">
        {title}
      </Typography>

      <View>{children}</View>
    </View>
  );
};
