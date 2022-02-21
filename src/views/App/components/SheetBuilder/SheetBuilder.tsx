import React from 'react';
import { useAppSelector } from 'redux/hooks';
import * as S from './SheetBuilder.styled';
import TopPart from './components/TopPart/TopPart';
import BottomPart from './components/BottomPart/BottomPart';
import { selectNewIncomeSheet } from './redux';

const SheetBuilder = function SheetBuilder() {
  const newIncomeSheet = useAppSelector(selectNewIncomeSheet);

  return (
    <S.Container>
      <S.BuilderDiv>
        <S.contentDiv>
          <S.WhiteCard hasTable={newIncomeSheet.length > 0}>
            <TopPart />
            { newIncomeSheet.length > 0 && <BottomPart /> }
          </S.WhiteCard>
        </S.contentDiv>
      </S.BuilderDiv>
    </S.Container>
  );
};

export default SheetBuilder;
