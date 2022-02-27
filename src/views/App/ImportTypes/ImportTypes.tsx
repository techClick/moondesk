import React from 'react';
import { getCurrentTab } from 'views/App/utils/utils';
import * as S from './ImportTypes.styled';
import { importOptions } from './utils/utils';

const ImportTypes = function ImportTypes() {
  return (
    <S.Container>
      <S.WhiteCard>
        <S.Header1>
          {`IMPORT NEW ${getCurrentTab().toUpperCase()} SHEET`}
        </S.Header1>
        <S.Line />
        <S.Header>
          Select import method
        </S.Header>
        <S.IconCont>
          {
            importOptions.map((option) => (
              <S.IconCont2 to={option.path}>
                <S.IconContMain>
                  <S.IconDiv color={option.color}>
                    {option.icon}
                  </S.IconDiv>
                </S.IconContMain>
                <S.IconDesc>{option.uploadType}</S.IconDesc>
              </S.IconCont2>
            ))
          }
        </S.IconCont>
      </S.WhiteCard>
    </S.Container>
  );
};

export default ImportTypes;
