import React from 'react';
import {AppLayout} from '../../../shared/components/AppLayout';
import {SignUp} from '../../../feature/Auth/components/SignUp';

const SignUpScreen = () => {
  return (
    <AppLayout>
      <SignUp />
    </AppLayout>
  );
};

export default SignUpScreen;
