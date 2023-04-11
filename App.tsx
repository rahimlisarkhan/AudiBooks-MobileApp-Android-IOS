import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import 'react-native-gesture-handler';
import {RootNavigation} from './app/navigations/RootNavigation';
import {AppLayout} from './app/shared/components/AppLayout';

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  );
};

export default App;
