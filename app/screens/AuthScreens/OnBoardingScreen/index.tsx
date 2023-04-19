import React, {useEffect} from 'react';
import {AppLayout} from '../../../shared/components/AppLayout';
import Slide from '../../../feature/Onboarding/Slide/Slide';
import {onBoardData} from '../../../shared/constants/onboard';
import {useNavigation} from '@react-navigation/native';
import {PATH} from '../../../shared/constants/path';
import {InfoCard} from '../../../shared/components/Card';

const OnBoardingScreen = () => {
  const {navigate} = useNavigation();

  const onHandleRouter = () => {
    navigate(PATH.Login.pathname);
  };

  return (
    <AppLayout bgShow>
      <Slide
        data={onBoardData}
        renderCard={item => <InfoCard {...item} />}
        onPrevPress={onHandleRouter}
        onLastPress={onHandleRouter}
      />
    </AppLayout>
  );
};

export default OnBoardingScreen;
