import React from 'react';
import {AppLayout} from '../../../shared/components/AppLayout';
import {Login} from '../../../feature/Auth/components/Login';

const LoginScreen = () => {
  return (
    <AppLayout>
      <Login />
    </AppLayout>
  );
};

export default LoginScreen;
