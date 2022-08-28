import React from 'react';
import {ViewProps} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles, useTheme, View} from 'ui';

export const Container = ({children, ...props}: ViewProps) => {
  const {colors} = useTheme();
  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary, colors.tertiary]}
      start={{x: 0.5, y: 0.2}}
      locations={[0, 0.8, 1]}
      style={styles.container}
      {...props}>
      <View flex={1} height={'100%'}>
        {children}
      </View>
    </LinearGradient>
  );
};
