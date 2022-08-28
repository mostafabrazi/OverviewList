import React, {useCallback} from 'react';
import {animateHeader} from 'core';
import {useItemsStore} from 'core/useItemsStore';
import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {extractor} from 'utils';
import {Item} from './Item';
import {View} from 'ui';
import {Empty, Loading} from 'components';

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

  if (loading) {
    return <Loading />;
  }

  if (!items || (items && items.length === 0)) {
    return <Empty />;
  }

  return (
    <View flex={1}>
      <FlatList
        data={items}
        numColumns={2}
        bounces={false}
        renderItem={({item, index}) => <Item item={item} index={index} />}
        onScroll={onScroll}
        extraData={extractor}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
