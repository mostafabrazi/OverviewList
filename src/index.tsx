import React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from 'ui';
import {RootNavigator} from 'navigation';
import APIProvider from 'api/APIProvider';

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
