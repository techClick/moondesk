import React, { useEffect } from 'react';
import { FormattedNumber } from 'react-intl';
import { useAppSelector } from 'redux/hooks';
import { DataSheet } from 'types/types';
import { selectNewSheet, selectSelectedSheet } from 'views/App/ImportCols/redux';
import { MainButton, sheetViewerRes } from 'views/App/styles';
import { getCurrentTab, getStorageItem } from 'views/App/utils/utils';
import * as S from './GrossPart.styled';
import { adjustTotalContWidth } from './utils';

const GrossPart = function GrossPart() {
  const currency = getStorageItem('currency') || '$';
  const selectedSheet: number = useAppSelector(selectSelectedSheet)?.[getCurrentTab()] || 0;
  const allNewSheets: DataSheet[] = useAppSelector(selectNewSheet)[getCurrentTab()]
    || [{ date: new Date(), data: [] }];
  const newSheet: DataSheet = allNewSheets[selectedSheet];
  let grossAmount = 0;
  for (let i = 0; i < allNewSheets.length; i += 1) {
    for (const entry of allNewSheets[i].data) {
      grossAmount += entry.amount || 0;
    }
  }
  let totalAmount = 0;
  for (const entry of newSheet.data) {
    totalAmount += entry.amount || 0;
  }

  useEffect(() => {
    adjustTotalContWidth();
  }, [newSheet]);

  return (
    <S.Container isNoGross={allNewSheets.length > 1 && window.innerWidth >= sheetViewerRes}>
      { allNewSheets.length > 1 && (
        <S.TotalContainer>
          <S.TotalCont1 id="totalCont">
            <S.TotalLabelCont>TOTAL</S.TotalLabelCont>
            <S.TotalCont2>
              {`${currency}`}
              <FormattedNumber value={totalAmount} />
            </S.TotalCont2>
          </S.TotalCont1>
        </S.TotalContainer>
      )}
      <S.FlexContainer isNoGross={allNewSheets.length > 1 && window.innerWidth >= sheetViewerRes}>
        { (allNewSheets.length === 1 || window.innerWidth < sheetViewerRes) && (
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
                  {`${currency}`}
                  <FormattedNumber value={grossAmount} />
                </S.GrossAmt>
              </S.GrossAmtPart>
            </S.GrossPartCont1>
          </S.GrossPartCont>
        )}
        <S.MainButtonDiv isNoGross={allNewSheets.length > 1 && window.innerWidth >= sheetViewerRes}>
          <MainButton>
            Save sheet
            { allNewSheets.length > 1 && 's'}
          </MainButton>
        </S.MainButtonDiv>
      </S.FlexContainer>
    </S.Container>
  );
};

export default GrossPart;
