import React, {useCallback} from 'react';
import {Loading} from 'components/Loading';
import {animateHeader} from 'core';
import {useItemsStore} from 'core/useItemsStore';
import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {extractor} from 'utils';
import {Item} from './Item';
import {View} from 'ui';

export const List = () => {
  // loading while apply a filter since we are calling api
  const loading = useItemsStore(state => state.loading);
  const items = useItemsStore(state => state.items);
  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const scrolling = event.nativeEvent.contentOffset.y;
      animateHeader(scrolling > 0);
    },
    [],
  );

  if (loading || !items || (items && items.length === 0)) {
    return <Loading />;
  }

  return (
    <View flex={1}>
      <FlatList
        data={items}
        numColumns={2}
        bounces={false}
        renderItem={Item}
        onScroll={onScroll}
        extraData={extractor}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
