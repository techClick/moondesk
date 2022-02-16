import React from 'react';
import { useAppSelector } from 'redux/hooks';
import * as S from './Income.styled';
import { selectShowSheetBuilder } from '../redux';
import TopSection from './components/TopSection';
import NoData from '../components/NoData/NoData';
import SheetBuilder from '../components/SheetBuilder/SheetBuilder';

const Income = function Income() {
  const showSheetBuilder = useAppSelector(selectShowSheetBuilder);

  return (
    <S.Container>
      {
        (!showSheetBuilder.income) ? (
          <>
            <TopSection />
            <S.HRLine />
            <NoData />
          </>
        ) : (
          <SheetBuilder />
        )
      }
    </S.Container>
  );
};

export default Income;
