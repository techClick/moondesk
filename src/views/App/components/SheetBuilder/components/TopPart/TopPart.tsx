import React from 'react';
import * as S from './TopPart.styled';
import ColumnBuilder from '../ColumnBuilder/ColumnBuilder';

const TopPart = function TopPart({ page }:{ page: string}) {
  return (
    <S.Container>
      <S.TopInfo>
        <S.TILeftPart>
          New
          {' '}
          {page}
          {' '}
          sheet
        </S.TILeftPart>
        <S.TIRightPart>

        </S.TIRightPart>
      </S.TopInfo>
      <S.InfoBottom>
        <S.IBLeftPart>
          <ColumnBuilder />
        </S.IBLeftPart>
      </S.InfoBottom>
      <S.Line />
    </S.Container>
  );
};

export default TopPart;
