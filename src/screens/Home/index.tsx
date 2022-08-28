import React, {useCallback, useState} from 'react';
import {View} from 'ui';
import {Item} from './Item';
import {Header} from './Header';
import {Empty} from 'components/Empty';
import {Loading} from 'components/Loading';
import {usePagination} from './hooks/usePagination';
import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

export const Home = () => {
  const [animateHeader, setAnimateHeader] = useState(false);
  const {data: items, isLoading} = usePagination();

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const scrolling = event.nativeEvent.contentOffset.y;
      setAnimateHeader(scrolling > 0);
    },
    [],
  );

  if (isLoading) {
    return <Loading />;
  }

  if (!items || (items && items.length === 0)) {
    return <Empty />;
  }

  return (
    <View flex={1} bg="primary">
      <Header animate={animateHeader} />
      <FlatList
        numColumns={2}
        bounces={false}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}
        data={items}
        extraData={extractor}
        renderItem={Item}
      />
    </View>
  );
};

const extractor = (item: {id: string | number}) => item.id.toString();
