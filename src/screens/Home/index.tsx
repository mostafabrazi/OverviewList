import React from 'react';
import {Text, useTheme, View} from 'ui';
import {usePagination} from './hooks/usePagination';
import {CustomAnimatedScrollView} from 'components';

export const Home = () => {
  const {spacing, colors} = useTheme();
  const {data: items, isLoading} = usePagination();

  return (
    <CustomAnimatedScrollView>
      <View p="m">
        <Text>{isLoading ? 'is loading...' : null}</Text>
        <Text>testing</Text>
      </View>
    </CustomAnimatedScrollView>
  );
};
