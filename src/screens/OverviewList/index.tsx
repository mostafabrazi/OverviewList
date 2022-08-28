import React from 'react';
import {Header} from './Header';
import {Container} from './Container';
import {List} from './List';
import {Filter} from './Filter';

export const OverviewList = () => {
  return (
    <Container>
      <Header />
      <Filter />
      <List />
    </Container>
  );
};
