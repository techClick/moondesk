import React from 'react';
import { getCurrentTab } from 'views/App/components/utils/utils';
import * as S from './TopPart.styled';
import ColumnBuilder from '../ColumnBuilder/ColumnBuilder';
import DateSection from '../DateSection/DateSection';

const TopPart = function TopPart() {
  const thisPage = getCurrentTab();

  return (
    <S.Container>
      <S.TopInfo>
        <S.TILeftPart>
          <S.TILPTopPart>
            New
            {` ${thisPage} `}
            sheet
          </S.TILPTopPart>
          <DateSection />
        </S.TILeftPart>
        <S.TIRightPart />
      </S.TopInfo>
      <S.InfoBottom>
        <ColumnBuilder />
      </S.InfoBottom>
      {/* <S.Line /> */}
    </S.Container>
  );
};

export default TopPart;
