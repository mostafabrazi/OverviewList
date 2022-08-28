import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import {ViewProps} from 'react-native';
import {View} from 'ui';

export const Loading = ({
  width = 100,
  height = 100,
  ...props
}: ViewProps & {width?: number; height?: number}) => {
  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <AnimatedLottieView
        style={{width, height}}
        source={require('../../assets/loading.json')}
        autoPlay
        loop
        {...props}
      />
    </View>
  );
};
