import React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from 'ui';
import {RootNavigator} from 'navigation';
import APIProvider from 'api/ReactQueryProvider';
import {hydrateItems} from 'core/useItemsStore';

// call api to init data
hydrateItems();

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
