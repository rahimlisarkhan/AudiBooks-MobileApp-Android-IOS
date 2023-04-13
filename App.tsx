import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import 'react-native-gesture-handler';
import {RootNavigation} from './app/navigations/RootNavigation';
import {AppLayout} from './app/shared/components/AppLayout';
import {styles} from './app/shared/theme/root';
import {SafeAreaView} from 'react-native';

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.root.safeArea}>
      <RootNavigation />
    </SafeAreaView>
  );
};

export default App;

// npx -p @storybook/cli sb init --type react_native
