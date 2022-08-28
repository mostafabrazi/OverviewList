import React, {memo} from 'react';
import AnimatedLottieView from 'lottie-react-native';
import {ViewProps} from 'react-native';
import {View} from 'ui';

export const Loading = memo((props: ViewProps) => {
  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <AnimatedLottieView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: 100, height: 100}}
        source={require('../../assets/loading.json')}
        autoPlay
        loop
        {...props}
      />
    </View>
  );
});
