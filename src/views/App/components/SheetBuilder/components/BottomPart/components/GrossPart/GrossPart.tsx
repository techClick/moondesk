import React from 'react';
import { MainButton } from 'views/App/styles';
import * as S from './GrossPart.styled';

const GrossPart = function GrossPart() {
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
              $5000000
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
