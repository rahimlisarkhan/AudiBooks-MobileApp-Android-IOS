import {View} from 'react-native';
import React from 'react';
import {Typography} from '../../../ui/Typography';
import {COLORS} from '../../../shared/theme/colors';
import {styles} from './styles';
import {Button} from '../../../ui/Button';
import {useNavigation} from '@react-navigation/native';
import {PATH} from '../../../shared/constants/path';

export const WelcomeContent = () => {
  const {navigate} = useNavigation();

  const changeRoutePersonalize = () => {
    navigate(PATH.Personalization.pathname);
  };

  const changeRouteHome = () => {
    navigate(PATH.Home.pathname);
  };

  return (
    <View>
      <Typography variant="body2" weight="semibold" color={COLORS.accent50}>
        Welcome !
      </Typography>
      <Typography
        variant="titleLarge"
        style={styles.title}
        color={COLORS.primary50}>
        Find what you are looking for
      </Typography>

      <Typography variant="headline" style={styles.parag}>
        By personalize your account, we can help you to find what you like.
      </Typography>

      <View style={styles.btnGroup}>
        <View style={styles.btnSendContent}>
          <Button
            text="Personalize Your Account"
            style={styles.marginBtn}
            onPress={changeRoutePersonalize}
          />
          <Button
            variant="outlined"
            text="Skip"
            style={styles.marginBtn}
            onPress={changeRouteHome}
          />
        </View>
      </View>
    </View>
  );
};
