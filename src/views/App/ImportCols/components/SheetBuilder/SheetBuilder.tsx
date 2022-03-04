import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectNewSheet } from 'views/App/ImportCols/redux';
import { Background } from 'views/styles';
import { DataSheet } from 'types/types';
import { getCurrentTab, getIsSameDay } from 'views/App/utils/utils';
import * as S from './SheetBuilder.styled';
import TopPart from './components/TopPart/TopPart';
import BottomPart from './components/BottomPart/BottomPart';
import { selectShowPopup } from './redux';
import { getNewSheetDate } from './utils/utils';

const SheetBuilder = function SheetBuilder() {
  const newSheetDate = getNewSheetDate(
    useAppSelector(selectNewSheet)?.[getCurrentTab()] || [{ date: new Date(), data: [] }],
  );
  const newSheet: DataSheet = useAppSelector(selectNewSheet)?.[getCurrentTab()]?.find(
    (dataSheet) => getIsSameDay(dataSheet.date, new Date(newSheetDate)),
  ) || { date: new Date(), data: [] };
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
