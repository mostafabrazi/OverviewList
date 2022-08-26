import React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from 'ui';
import {RootNavigator} from 'navigation';
import APIProvider from 'api/ReactQueryProvider';

const App = () => {
  return (
    <APIProvider>
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </APIProvider>
  );
};

export default App;
