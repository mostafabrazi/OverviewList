import React from 'react';
import {Text, View} from 'ui';

export const Empty = () => {
  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <Text fontSize={18} fontWeight="700">
        No data found!
      </Text>
    </View>
  );
};
