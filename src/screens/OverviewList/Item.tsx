import React from 'react';
import {ItemType} from 'api';
import {useNavigation} from '@react-navigation/native';
import {ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Pressable, styles, Text, useTheme, View} from 'ui';
import {ITEM_HEIGHT, SCREEN_WIDTH} from 'utils';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'navigation/types';

const CARD_WIDTH = (SCREEN_WIDTH - 3 * 14) / 2;

export function Item({item, index}: {item: ItemType; index: number}) {
  const {spacing} = useTheme();
  const {push} = useNavigation<StackNavigationProp<RootStackParamList>>();
  const openDetails = () => push('OverviewItemDetails', item);

  return (
    <View style={styles.shadow}>
      <Pressable
        mr="m"
        mb="m"
        borderRadius={20}
        overflow="hidden"
        key={index.toString()}
        borderBottomEndRadius={60}
        width={CARD_WIDTH}
        ml={index % 2 !== 0 ? undefined : 'm'}>
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
          <View>
            <Text fontSize={20} fontWeight="500">
              {item.name}
            </Text>
            <Pressable
              p="s"
              mt="xss"
              bg="red"
              borderRadius={8}
              alignItems="center"
              justifyContent="center"
              width={CARD_WIDTH - 2 * spacing.ml}
              onPress={openDetails}>
              <Text fontSize={13} fontWeight="500">
                Details
              </Text>
            </Pressable>
          </View>
        </View>
        <ImageBackground
          resizeMode="cover"
          source={{uri: item.image}}
          style={{width: (SCREEN_WIDTH - 3 * 14) / 2, height: ITEM_HEIGHT}}>
          <LinearGradient
            // dark more the bottom area (0.6) to well show the name of item
            colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.6)']}
            style={[styles.h100, styles.w100]}
          />
        </ImageBackground>
      </Pressable>
    </View>
  );
}
