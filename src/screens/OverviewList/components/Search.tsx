import React from 'react';
import {setSearch, useAnimatedHeader, useItemsStore} from 'core';
import {useTheme} from 'ui';
import {SCREEN_WIDTH} from 'utils';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {TextInput} from 'react-native';

export const Search = () => {
  const {colors, spacing} = useTheme();
  const search = useItemsStore(state => state.search);
  const showSearch = useAnimatedHeader(state => state.showSearch);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(showSearch ? SCREEN_WIDTH : 0, {duration: 500}),
      opacity: withTiming(showSearch ? 1 : 0, {duration: 500}),
    };
  }, [showSearch]);

  if (!showSearch) {
    return null;
  }

  return (
    <Animated.View style={animatedStyle}>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search..."
        autoCapitalize="words"
        placeholderTextColor={colors.secondary}
        style={{
          color: colors.text,
          fontSize: spacing.ml,
          marginHorizontal: spacing.m,
          marginBottom: spacing.m,
          padding: spacing.m,
          borderRadius: spacing.l,
          backgroundColor: colors.transparent_button,
        }}
      />
    </Animated.View>
  );
};
