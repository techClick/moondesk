import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { Background } from 'views/styles';
import * as S from './SheetBuilder.styled';
import TopPart from './components/TopPart/TopPart';
import BottomPart from './components/BottomPart/BottomPart';
import { selectNewIncomeSheet, selectShowPopup } from './redux';
import { getCurrentTab } from '../utils/utils';

const SheetBuilder = function SheetBuilder() {
  const newIncomeSheet = useAppSelector(selectNewIncomeSheet);
  const showPopup = useAppSelector(selectShowPopup);

  return (
    <S.Container>
      {showPopup[getCurrentTab()]
        && (
          <>
            <Background>
            </Background>
            {showPopup[getCurrentTab()]}
          </>
        )}
      <S.BuilderDiv>
        <S.contentDiv>
          <S.WhiteCard hasTable={newIncomeSheet.data.length > 0}>
            <TopPart />
            { newIncomeSheet.data.length > 0 && <BottomPart /> }
          </S.WhiteCard>
        </S.contentDiv>
      </S.BuilderDiv>
    </S.Container>
  );
};

export default SheetBuilder;
