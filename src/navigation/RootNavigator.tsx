import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from './NavigationContainer';
import {Home} from 'screens';
import {SafeAreaView} from 'ui';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <SafeAreaView edges={['top']} bg="primary" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          cardOverlayEnabled: false,
          headerShown: false,
          gestureEnabled: false,
          animationTypeForReplace: 'push',
        }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
