import {ItemType} from 'api';
import React, {memo} from 'react';
import {ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Pressable, styles, Text, View} from 'ui';
import {ITEM_HEIGHT, SCREEN_WIDTH} from 'utils';

export const Item = memo(({item, index}: {item: ItemType; index: number}) => {
  return (
    <View style={styles.shadow}>
      <Pressable
        key={index.toString()}
        width={(SCREEN_WIDTH - 3 * 14) / 2}
        mr="m"
        ml={index % 2 !== 0 ? undefined : 'm'}
        borderRadius={20}
        borderBottomEndRadius={60}
        overflow="hidden"
        mb="m">
        <View
          p="ml"
          flex={1}
          zIndex={999}
          position="absolute"
          borderRadius={20}
          height={ITEM_HEIGHT}
          alignItems="flex-start"
          justifyContent="space-between">
          <Text fontSize={15} fontWeight="200">
            {item.type}
          </Text>
          <Text fontSize={20} fontWeight="500">
            {item.name}
          </Text>
        </View>
        <ImageBackground
          resizeMode="cover"
          source={{uri: item.image}}
          style={{width: (SCREEN_WIDTH - 3 * 14) / 2, height: ITEM_HEIGHT}}>
          <LinearGradient
            colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.3)']}
            style={[styles.h100, styles.w100]}
          />
        </ImageBackground>
      </Pressable>
    </View>
  );
});
