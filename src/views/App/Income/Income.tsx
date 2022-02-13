import React from 'react';
import * as S from './Income.styled';
import { useAppSelector } from '../../../redux/hooks';
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
            <NoData page="income" />
          </>
        ) : (
          <SheetBuilder page="income" />
        )
      }
    </S.Container>
  );
};

export default Income;
