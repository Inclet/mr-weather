// Dependencies
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useColorScheme} from 'react-native';

// Navigations
import Navigation from './navigations';

const App = (): React.JSX.Element => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
    </SafeAreaProvider>
  );
};

export default App;
