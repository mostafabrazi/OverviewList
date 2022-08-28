import React from 'react';
import {Pressable, Search, useTheme} from 'ui';
import {toggleSearch} from 'core';

export const SearchFloatingButton = () => {
  const {colors, spacing} = useTheme();

  return (
    <Pressable
      bg="grey3"
      width={60}
      height={60}
      bottom={spacing.l}
      right={spacing.m}
      borderRadius={120}
      position="absolute"
      justifyContent="center"
      alignItems="center"
      onPress={toggleSearch}>
      <Search color={colors.primary} width={24} height={24} />
    </Pressable>
  );
};
