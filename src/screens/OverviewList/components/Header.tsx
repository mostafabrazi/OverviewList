import React from 'react';
import {toggleFilter, useAnimatedHeader} from 'core';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {Filter, Pressable, StarWars, styles, Text, useTheme, View} from 'ui';
import {FilterUp} from 'ui/icons/FilterUp';

export const Header = () => {
  const {colors, spacing} = useTheme();
  const animateHeader = useAnimatedHeader(state => state.animate);
  const showFilter = useAnimatedHeader(state => state.showFilter);

  const headerAnimationStyle = useAnimatedStyle(() => {
    return {
      paddingVertical: withTiming(animateHeader ? spacing.m : spacing.l, {
        duration: 350,
      }),
      backgroundColor: withTiming(
        animateHeader ? 'rgba(0,0,0,0.5)' : 'transparent',
        {
          duration: 350,
        },
      ),
      marginBottom: withTiming(animateHeader ? spacing.ms : 0, {
        duration: 350,
      }),
    };
  }, [animateHeader]);
  const textAnimation = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(animateHeader ? 20 : 30),
    };
  }, [animateHeader]);

  return (
    <Animated.View
      style={[
        styles.h_spaced_list,
        headerAnimationStyle,
        {paddingHorizontal: spacing.m},
      ]}>
      <View flexDirection="row" alignItems="center">
        <StarWars width={34} height={34} color={colors.secondary} />
        <View ml="m">
          <Animated.Text style={textAnimation}>
            <Text fontWeight="bold">ITEMS</Text>
            <Text fontWeight="200">APP</Text>
          </Animated.Text>
        </View>
      </View>
      <Pressable onPress={toggleFilter}>
        {showFilter ? (
          <FilterUp color={colors.secondary} width={26} height={26} />
        ) : (
          <Filter color={colors.secondary} width={26} height={26} />
        )}
      </Pressable>
    </Animated.View>
  );
};
