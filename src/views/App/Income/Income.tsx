import React from 'react';
import * as S from './Income.styled';
import TopSection from './components/TopSection';
import NoData from '../components/NoData/NoData';

const Income = function Income() {
  return (
    <S.Container>
      <TopSection />
      <S.HRLine />
      <NoData />
    </S.Container>
  );
};

export default Income;
