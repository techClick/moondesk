import React from 'react';
import * as S from './ActionBox.styled';

const ActionBox = function ActionBox() {
  return (
    <S.ActionCont>
      <S.FlexCont>
        <S.Action>
          <S.Info>
            Generate income data.
          </S.Info>
          <S.Button>
            New income data
          </S.Button>
        </S.Action>
      </S.FlexCont>
    </S.ActionCont>
  );
};

export default ActionBox;
