import React from 'react';
import { FormattedNumber } from 'react-intl';
import { useAppSelector } from 'redux/hooks';
import { DataSheet } from 'types/types';
import { selectNewIncomeSheet } from 'views/App/components/SheetBuilder/redux';
import { MainButton } from 'views/App/styles';
import { getStorageItem } from 'views/App/utils/utils';
import * as S from './GrossPart.styled';

const GrossPart = function GrossPart() {
  const newIncomeSheet: DataSheet = useAppSelector(selectNewIncomeSheet);
  let grossAmount = 0;
  for (const entry of newIncomeSheet.data) {
    grossAmount += entry.amount || 0;
  }
  const currency = getStorageItem('currency') || '$';

  return (
    <S.Container>
      <S.GrossPartCont>
        <S.GrossPartCont1>
          <S.GrossPart>
            &nbsp;
            <S.AbsolutePart>
              GROSS
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
