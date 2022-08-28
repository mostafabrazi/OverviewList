import React from 'react';
import {Pressable, styles, Text, View} from 'ui';
import {Container, Loading} from 'components';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from 'navigation/types';
import {UnionType, useOneItem} from 'api';
import {capitalize, splitWord} from 'utils';
import LinearGradient from 'react-native-linear-gradient';
import {ImageBackground, ScrollView} from 'react-native';

export const OverviewItemDetails = () => {
  // get id passed via navigation
  const {
    params: {id, type, image},
  } = useRoute<RouteProp<RootStackParamList, 'OverviewItemDetails'>>();
  const {goBack} = useNavigation();
  const {data: item, isLoading} = useOneItem(
    {id, type},
    {enabled: id !== undefined && id !== null},
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
      <Container>
        <View flexDirection="row" alignItems="center">
          <View
            mt="l"
            bg="red"
            width="80%"
            borderTopEndRadius={20}
            borderBottomEndRadius={80}
            overflow="hidden">
            <View
              p="l"
              width="100%"
              position="absolute"
              height={'100%'}
              zIndex={999}
              justifyContent="space-between">
              <Text fontSize={18} fontWeight="300">
                {type}
              </Text>
              <Text fontSize={40} fontWeight="500">
                {item?.name}
              </Text>
            </View>
            <ImageBackground
              resizeMode="cover"
              source={{uri: image}}
              style={styles.big_image}>
              <LinearGradient
                // dark more the bottom area (0.6) to well show the name of item
                colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.6)']}
                style={[styles.w100, styles.h100]}
              />
            </ImageBackground>
          </View>
          <View mt="l" px="ms" width={'20%'} alignSelf="flex-start">
            <Pressable
              bg="blue"
              p="ms"
              borderRadius={20}
              justifyContent="center"
              alignItems="center"
              onPress={goBack}>
              <Text fontSize={13}>Back</Text>
            </Pressable>
            <Text textAlign="center" style={styles.rotated_text}>
              {item?.name}
            </Text>
          </View>
        </View>

        <View my="l" justifyContent="center" alignItems="center">
          <View
            px="l"
            flexDirection="row"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center">
            {item
              ? Object.keys(item)
                  // exclude 'n/a' values as well
                  .filter(k => k !== 'id' && item[k] !== 'n/a')
                  .map((key: keyof UnionType) => {
                    return (
                      <View
                        p="m"
                        mr="s"
                        mb="s"
                        borderWidth={1}
                        bg="transparent_dark"
                        borderColor="secondary"
                        borderRadius={12}
                        borderBottomEndRadius={24}>
                        <Text fontSize={13} fontWeight="300">
                          {splitWord(key)}
                        </Text>
                        <Text fontSize={16} fontWeight="500">
                          {capitalize(item[key] as string)}
                        </Text>
                      </View>
                    );
                  })
              : null}

            <View mt="l">
              <Text fontSize={16} fontWeight="500" color="black" mb="xs">
                Description:{' '}
              </Text>
              <Text fontSize={14} fontWeight="300" color="black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ut lectus massa. Aliquam ut mi eget tellus aliquam viverra quis
                a augue.
              </Text>
            </View>
          </View>
        </View>
      </Container>
    </ScrollView>
  );
};
