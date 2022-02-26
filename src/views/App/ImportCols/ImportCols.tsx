import React, { useState } from 'react';
import { ShowPopup } from 'types/types';
import { Background } from 'views/styles';
import { getCurrentTab } from '../components/utils/utils';
import ColumnBuilder from './components/ColumnBuilder/ColumnBuilder';
import ButtonSection from './components/ButtonSection/ButtonSection';
import * as S from './ImportCols.styled';

const ImportCols = function ImportCols() {
  const [showPopup, setShowPopup] = useState<ShowPopup>({ income: null, resources: null });
  const thisTab = getCurrentTab();
  // let thisTab2: string[] | string = [...thisTab];
  // thisTab2[0] = thisTab2[0].toUpperCase();
  // thisTab2 = thisTab2.join('');

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
          <S.Header2>{`Enter new ${thisTab} sheet date(s)`}</S.Header2>
          <S.Line2 />
          <S.DateCont>
            <S.FromContainer>
              giyvsgi
            </S.FromContainer>
            <S.ToContainer>
              giyvsgi
            </S.ToContainer>
          </S.DateCont>
          <ButtonSection setShowPopup={setShowPopup} />
        </S.WhiteCard>
      </S.Container>
    </>
  );
};

export default ImportCols;
