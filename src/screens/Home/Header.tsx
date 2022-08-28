import React from 'react';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {Filter, Pressable, StarWars, styles, Text, useTheme, View} from 'ui';

interface HeaderProps {
  animate?: boolean;
}

export const Header = ({animate}: HeaderProps) => {
  const {colors, spacing} = useTheme();
  const headerAnimation = useAnimatedStyle(() => {
    return {
      padding: withTiming(animate ? spacing.m : spacing.l),
    };
  }, [animate]);
  const textAnimation = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(animate ? 20 : 30),
    };
  }, [animate]);
  return (
    <Animated.View style={[styles.h_spaced_list, headerAnimation]}>
      <View flexDirection="row" alignItems="center">
        <StarWars width={40} height={40} color={colors.secondary} />
        <View ml="m">
          <Animated.Text style={textAnimation}>
            <Text fontWeight="bold">ITEMS</Text>
            <Text fontWeight="200">APP</Text>
          </Animated.Text>
        </View>
      </View>
      <Pressable>
        <Filter color={colors.secondary} width={30} height={30} />
      </Pressable>
    </Animated.View>
  );
};
