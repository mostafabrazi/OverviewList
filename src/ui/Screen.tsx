import React from 'react';
import {View} from './View';

type Props = {
  children: React.ReactNode;
};

export const Screen = ({children}: Props) => (
  <View
    flex={1}
    justifyContent="center"
    flexDirection="column"
    paddingHorizontal="m"
    bg="background">
    {children}
  </View>
);
