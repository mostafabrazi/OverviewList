import {useItems} from 'api';
import React from 'react';
import {Text, View} from 'ui';

export const Home = () => {
  const {isLoading, data: items} = useItems();
  return (
    <View flex={1} bg="red">
      <Text>{isLoading ? 'loading ... ' : null}</Text>
      <Text>{JSON.stringify(items)}</Text>
    </View>
  );
};
