import React from 'react';
import { FormattedNumber } from 'react-intl';
import { useAppSelector } from 'redux/hooks';
import { DataSheet } from 'types/types';
import { selectNewSheet, selectSelectedSheet } from 'views/App/ImportCols/redux';
import { MainButton } from 'views/App/styles';
import { getCurrentTab, getStorageItem } from 'views/App/utils/utils';
import * as S from './GrossPart.styled';

const GrossPart = function GrossPart() {
  const currency = getStorageItem('currency') || '$';
  const selectedSheet: number = useAppSelector(selectSelectedSheet)?.[getCurrentTab()] || 0;
  const allNewSheets: DataSheet[] = useAppSelector(selectNewSheet)[getCurrentTab()]
    || [{ date: new Date(), data: [] }];
  const newSheet: DataSheet = allNewSheets[selectedSheet];
  let grossAmount = 0;
  for (const entry of newSheet.data) {
    grossAmount += entry.amount || 0;
  }

  return (
    <S.Container>
      <S.GrossPartCont>
        <S.GrossPartCont1>
          <S.GrossPart>
            &nbsp;
            <S.AbsolutePart>
              {`${allNewSheets.length > 1 ? 'ALL ' : ''}GROSS`}
            </S.AbsolutePart>
          </S.GrossPart>
          <S.GrossAmtPart>
            <S.GrossAmt>
              {`${currency} `}
              <FormattedNumber value={grossAmount} />
            </S.GrossAmt>
          </S.GrossAmtPart>
        </S.GrossPartCont1>
      </S.GrossPartCont>
      <S.MainButtonDiv>
        <MainButton>
          Save Sheet
        </MainButton>
      </S.MainButtonDiv>
    </S.Container>
  );
};

export default GrossPart;
