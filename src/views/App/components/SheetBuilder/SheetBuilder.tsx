import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectNewIncomeSheet } from 'views/App/redux';
import { Background } from 'views/styles';
import { getCurrentTab } from 'views/App/utils/utils';
import * as S from './SheetBuilder.styled';
import TopPart from './components/TopPart/TopPart';
import BottomPart from './components/BottomPart/BottomPart';
import { selectShowPopup } from './redux';

const SheetBuilder = function SheetBuilder() {
  const newIncomeSheet = useAppSelector(selectNewIncomeSheet);
  const showPopup = useAppSelector(selectShowPopup);

  return (
    <S.Container>
      {showPopup[getCurrentTab()]
        && (
          <>
            <Background />
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
