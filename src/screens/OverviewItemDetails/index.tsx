import React from 'react';
import {Text} from 'ui';
import {Container} from 'components';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from 'navigation/types';

export const OverviewItemDetails = () => {
  // get id passed via navigation
  const {
    params: {id},
  } = useRoute<RouteProp<RootStackParamList, 'OverviewItemDetails'>>();

  return (
    <Container>
      <Text>OverviewItemDetails {id}</Text>
    </Container>
  );
};
