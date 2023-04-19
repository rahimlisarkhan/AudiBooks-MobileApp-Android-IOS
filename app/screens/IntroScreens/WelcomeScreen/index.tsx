import React from 'react';
import {AppLayout} from '../../shared/components/AppLayout';
import {WelcomeContent} from '../../feature/Intro/WelcomeContent';

const WelcomeScreen = () => {
  return (
    <AppLayout bgShow>
      <WelcomeContent />
    </AppLayout>
  );
};

export default WelcomeScreen;
