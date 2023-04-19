import {View} from 'react-native';
import React, {PropsWithChildren, lazy} from 'react';
import {styles} from './style';
import {Typography} from '../../../../ui/Typography';
import {pixelSizeVertical} from '../../../../shared/theme/metrics';

type Props = {title: string; info?: string | JSX.Element};

const Logo = lazy(() => import('../../../../assets/images/logo.svg'));

export const AuthForm: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
  info,
}) => {
  return (
    <View style={styles.formContent}>
      <View style={styles.logoContent}>
        <Logo />
      </View>
      <Typography variant="body2" weight="semibold">
        {title}
      </Typography>

      {info && (
        <Typography
          style={{marginTop: pixelSizeVertical(12)}}
          variant="headline">
          {info}
        </Typography>
      )}

      <View>{children}</View>
    </View>
  );
};
