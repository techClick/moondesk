import React from 'react';
import { useAppSelector } from 'redux/hooks';
import MediaQuery from 'react-responsive';
import { selectNewSheet, selectSelectedSheet } from 'views/App/ImportCols/redux';
import { DataSheet } from 'types/types';
import { getCurrentTab } from 'views/App/utils/utils';
import { sheetViewerRes } from 'views/App/styles';
import * as S from './SheetBuilder.styled';
import TopPart from './components/TopPart/TopPart';
import BottomPart from './components/BottomPart/BottomPart';
import SheetViewer from './components/SheetViewer/SheetViewer';

const SheetBuilder = function SheetBuilder() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet)?.[getCurrentTab()] || 0;
  const allNewSheets: DataSheet[] = useAppSelector(selectNewSheet)[getCurrentTab()]
    || [{ date: new Date(), data: [] }];
  const newSheet: DataSheet = allNewSheets[selectedSheet];

  return (
    <S.Container>
      <S.ScrollDiv>
        <S.FlexDiv>
          <MediaQuery minWidth={sheetViewerRes + 0.0001}>
            {' '}{/* {allNewSheets.length > 1 && <SheetViewer />} */}
          </MediaQuery>
          <S.WhiteCard hasTable={newSheet.data.length > 0}>
            <TopPart />
            { newSheet.data.length > 0 && <BottomPart /> }
          </S.WhiteCard>
        </S.FlexDiv>
      </S.ScrollDiv>
    </S.Container>
  );
};

export default SheetBuilder;
