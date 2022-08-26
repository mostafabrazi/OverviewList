import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from './NavigationContainer';
import {Home} from 'screens';
import {SafeAreaView, useTheme} from 'ui';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  const {colors} = useTheme();
  return (
    <NavigationContainer>
      <SafeAreaView edges={['top']} style={{backgroundColor: colors.black}} />
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
