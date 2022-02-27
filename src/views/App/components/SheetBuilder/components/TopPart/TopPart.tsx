import React from 'react';
import { getCurrentTab } from 'views/App/utils/utils';
import * as S from './TopPart.styled';
import DateSection from '../DateSection/DateSection';

const TopPart = function TopPart() {
  const thisTab = getCurrentTab();

  return (
    <S.Container>
      <S.TopInfo>
        <S.TILeftPart>
          <S.TILPTopPart>
            New
            {` ${thisTab} `}
            sheet
          </S.TILPTopPart>
          <DateSection />
        </S.TILeftPart>
        <S.TIRightPart />
      </S.TopInfo>
      <S.InfoBottom />
    </S.Container>
  );
};

export default TopPart;
