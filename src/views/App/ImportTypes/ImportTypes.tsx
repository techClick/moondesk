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
            importOptions.map((option, index) => (
              <S.IconCont2 to={option.path} key={`importoptions${index}`}>
                <S.IconContMain>
                  <S.IconDiv color={option.color} biggerX={index < 2}>
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
