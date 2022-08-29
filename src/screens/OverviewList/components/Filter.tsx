import React from 'react';
import {FlatList} from 'react-native';
import {setFilter, useAnimatedHeader, useItemsStore} from 'core';
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
        renderItem={({item, index}) => <Item item={item} index={index} />}
        style={{paddingHorizontal: spacing.m, marginBottom: spacing.m}}
      />
    </Animated.View>
  );
};

const Item = ({item: {id}}: {item: {id: string}; index: number}) => {
  const filterBy = () => setFilter(id);
  const filter = useItemsStore(state => state.filter);

  return (
    <Pressable
      p="m"
      mr="m"
      key={id.toString()}
      justifyContent="center"
      alignItems="center"
      bg={filter === id ? 'secondary' : 'transparent_button'}
      borderRadius={30}
      onPress={filterBy}>
      <Text
        fontSize={15}
        fontWeight="500"
        color={filter === id ? 'primary' : 'secondary'}>
        {id}
      </Text>
    </Pressable>
  );
};
