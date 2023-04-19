import React from 'react';
import {AppLayout} from '../../../shared/components/AppLayout';
import {ConfirmCode} from '../../../feature/Auth/components/ConfirmCode';

const ConfirmCodeScreen = () => {
  return (
    <AppLayout>
      <ConfirmCode />
    </AppLayout>
  );
};

export default ConfirmCodeScreen;
