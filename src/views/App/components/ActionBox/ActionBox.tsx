import React from 'react';
import * as S from './ActionBox.styled';
import { MainLinkButton } from '../../styles';
import { pagesAction } from './utils/utils';

const ActionBox = function ActionBox({ page }:{ page: string }) {
  return (
    <S.FlexCont>
      <S.Icon isResources={page === 'resources'}>
        {pagesAction[page].icon}
      </S.Icon>
      <S.Action isResources={page === 'resources'}>
        <MainLinkButton to="/app/income/importtypes">
          {pagesAction[page].buttonText}
        </MainLinkButton>
      </S.Action>
    </S.FlexCont>
  );
};

export default ActionBox;
