import React from 'react';
import * as S from './TopPart.styled';

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
          {
            ['Group', 'Name', 'amount'].map((fileHeader) => (
              <S.section>

              </S.section>
            ))
          }
        </S.IBLeftPart>
      </S.InfoBottom>
      <S.Line />
    </S.Container>
  );
};

export default TopPart;
