import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from './NavigationContainer';
import {OverviewItemDetails, OverviewList} from 'screens';
import {SafeAreaView} from 'ui';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <SafeAreaView edges={['top']} bg="primary" />
      <Stack.Navigator
        initialRouteName="OverviewList"
        screenOptions={{
          cardOverlayEnabled: false,
          headerShown: false,
          gestureEnabled: true,
          animationTypeForReplace: 'push',
        }}>
        <Stack.Screen name="OverviewList" component={OverviewList} />
        <Stack.Screen
          name="OverviewItemDetails"
          component={OverviewItemDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
