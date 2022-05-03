import React from 'react';
import * as S from './Resources.styled';
import TopSection from './TopSection/TopSection';
import NoData from '../components/NoData/NoData';

const Resources = function Resources() {
  return (
    <S.Container>
      <TopSection />
      <S.HRLine />
      <NoData />
    </S.Container>
  );
};

export default Resources;
