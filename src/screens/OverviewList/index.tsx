import React from 'react';
import {List} from './List';
import {Filter, Header, Search, SearchFloatingButton} from './components';
import {Container} from 'components';

export const OverviewList = () => {
  return (
    <Container>
      <Header />
      <Filter />
      <Search />
      <List />
      <SearchFloatingButton />
    </Container>
  );
};
