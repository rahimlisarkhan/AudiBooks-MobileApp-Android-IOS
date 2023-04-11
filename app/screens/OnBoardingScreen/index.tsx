import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {AppLayout} from '../../shared/components/AppLayout';
import {Typography} from '../../ui/Typography';
import Slide from '../../feature/Onboarding/Slide/Slide';
import {onBoardData} from '../../shared/constants/onboard';
import {Card} from '../../feature/Onboarding/Card';

const OnBoardingScreen = () => {
  return (
    <AppLayout bgShow>
      <Slide data={onBoardData} renderCard={item => <Card {...item} />} />
    </AppLayout>
  );
};

export default OnBoardingScreen;
