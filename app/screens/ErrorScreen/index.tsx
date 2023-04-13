import React, {lazy, useLayoutEffect} from 'react';
import {View} from 'react-native';
import {AppLayout} from '../../shared/components/AppLayout';
import {useNavigation} from '@react-navigation/native';
import {InfoCard} from '../../shared/components/Card';
import {Button} from '../../ui/Button/Button';
import {pixelSizeHorizontal} from '../../shared/theme/metrics';

const ErrorImg = lazy(() => import('../../assets/images/error.svg'));

const ErrorScreen = () => {
  const {setOptions, goBack} = useNavigation();

  useLayoutEffect(() => {
    setOptions({title: 'Error'});
  }, []);

  return (
    <AppLayout>
      <InfoCard
        icon={ErrorImg}
        title="Ops! Something Went Wrong"
        desc="Please check your internet connection and try again"
      />
      <View style={{paddingHorizontal: pixelSizeHorizontal(40)}}>
        <Button text="Retry" variant="outlined" onPress={goBack} />
      </View>
    </AppLayout>
  );
};

export default ErrorScreen;
