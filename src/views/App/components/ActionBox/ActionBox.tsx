import React from 'react';
import { getCurrentTab } from 'views/App/utils/utils';
import * as S from './ActionBox.styled';
import { MainLinkButton } from '../../styles';
import { pagesAction } from './utils/utils';

const ActionBox = function ActionBox() {
  const thisTab = getCurrentTab();

  return (
    <S.FlexCont>
      <S.Icon isResources={thisTab === 'resources'}>
        {pagesAction[thisTab].icon}
      </S.Icon>
      <S.Action isResources={thisTab === 'resources'}>
        <MainLinkButton to={`/app/${thisTab}/importtypes`}>
          {pagesAction[thisTab].buttonText}
        </MainLinkButton>
      </S.Action>
    </S.FlexCont>
  );
};

export default ActionBox;
