import React from 'react';
import * as S from './ColumnBuilder.styled';

const ColumnBuilder = function ColumnBuilder() {
  return (
    <S.Cont>
      {
        ['Group', 'Source *', 'Amount *'].map((fileHeader) => (
          <S.Container>
            <S.ColumnBuild>
              <S.ColumnName>
                {fileHeader}
              </S.ColumnName>
              <S.InputDiv>
                <S.Input />
              </S.InputDiv>
            </S.ColumnBuild>
          </S.Container>
        ))
      }
    </S.Cont>
  );
};

export default ColumnBuilder;
