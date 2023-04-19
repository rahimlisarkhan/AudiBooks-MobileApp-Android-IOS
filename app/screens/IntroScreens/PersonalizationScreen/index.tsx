import React from 'react';
import {AppLayout} from '../../../shared/components/AppLayout';
import {PersonalizeContent} from '../../../feature/Intro/PersonalizeContent/PersonalizeContent';

const PersonalizationScreen = () => {
  return (
    <AppLayout bgShow>
      <PersonalizeContent />
    </AppLayout>
  );
};

export default PersonalizationScreen;
