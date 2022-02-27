import React, { useState } from 'react';
import { ShowPopup } from 'types/types';
import { Background } from 'views/styles';
import { getCurrentTab } from 'views/App/utils/utils';
import ColumnBuilder from './components/ColumnBuilder/ColumnBuilder';
import ButtonSection from './components/ButtonSection/ButtonSection';
import * as S from './ImportCols.styled';
import DateSection from './components/DateSectionIC/DateSectionIC';

const ImportCols = function ImportCols() {
  const [showPopup, setShowPopup] = useState<ShowPopup>({ income: null, resources: null });
  const thisTab = getCurrentTab();

  return (
    <>
      {showPopup[thisTab]
        && (
          <>
            <Background />
            {showPopup[thisTab]}
          </>
        )}
      <S.Container>
        <S.WhiteCard>
          <S.Header>Enter corresponding columns</S.Header>
          <S.Line />
          <ColumnBuilder />
          <S.Line2 />
          <S.Header2>{`Set ${thisTab} sheet date(s)`}</S.Header2>
          <S.Line3 />
          <DateSection />
          <ButtonSection setShowPopup={setShowPopup} />
        </S.WhiteCard>
      </S.Container>
    </>
  );
};

export default ImportCols;
