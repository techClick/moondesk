import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectNewSheet, selectSelectedSheet } from 'views/App/ImportCols/redux';
import { DataSheet } from 'types/types';
import { getCurrentTab } from 'views/App/utils/utils';
import * as S from './SheetBuilder.styled';
import TopPart from './components/TopPart/TopPart';
import BottomPart from './components/BottomPart/BottomPart';

const SheetBuilder = function SheetBuilder() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet)?.[getCurrentTab()] || 0;
  const newSheet: DataSheet = useAppSelector(selectNewSheet)?.[getCurrentTab()]?.[selectedSheet]
   || { date: new Date(), data: [] };

  return (
    <S.Container>
      <S.BuilderDiv>
        <S.contentDiv>
          <S.WhiteCard hasTable={newSheet.data.length > 0}>
            <TopPart />
            { newSheet.data.length > 0 && <BottomPart /> }
          </S.WhiteCard>
        </S.contentDiv>
      </S.BuilderDiv>
    </S.Container>
  );
};

export default SheetBuilder;
