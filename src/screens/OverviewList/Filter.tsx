import React from 'react';
import {FlatList} from 'react-native';
import {setFilter, useAnimatedHeader} from 'core';
import {Pressable, Text, useTheme} from 'ui';
import {extractor, SCREEN_WIDTH} from 'utils';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

const SWAPITypes = [
  {id: 'All'},
  {id: 'Person'},
  {id: 'Planet'},
  {id: 'Starship'},
];

export const Filter = () => {
  const showFilter = useAnimatedHeader(state => state.showFilter);
  const {spacing} = useTheme();
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(showFilter ? SCREEN_WIDTH : 0, {duration: 500}),
      opacity: withTiming(showFilter ? 1 : 0, {duration: 500}),
    };
  }, [showFilter]);

  if (!showFilter) {
    return null;
  }

  return (
    <Animated.View style={animatedStyle}>
      <FlatList
        horizontal
        data={SWAPITypes}
        keyExtractor={extractor}
        renderItem={Item}
        style={{paddingHorizontal: spacing.m, marginBottom: spacing.m}}
      />
    </Animated.View>
  );
};

export const Item = ({item: {id}}: {item: {id: string}}) => {
  const filterBy = () => setFilter(id);

  return (
    <Pressable
      p="ms"
      mr="m"
      justifyContent="center"
      alignItems="center"
      bg="transparent_button"
      borderRadius={20}
      onPress={filterBy}>
      <Text fontSize={15} fontWeight="500">
        {id}
      </Text>
    </Pressable>
  );
};
