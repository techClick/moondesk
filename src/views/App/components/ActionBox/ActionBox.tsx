import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheckDollar, faDatabase } from '@fortawesome/free-solid-svg-icons';
import * as S from './ActionBox.styled';

const pagesAction: any = {
  income: {
    icon: <FontAwesomeIcon icon={faMoneyCheckDollar} size="3x" />,
    button: 'New income data',
  },
  resources: {
    icon: <FontAwesomeIcon icon={faDatabase} size="3x" />,
    button: 'New resource data',
  },
};

const ActionBox = function ActionBox({ page }:{ page: string }) {
  return (
    <S.FlexCont>
      <S.Icon isResources={page === 'resources'}>
        {pagesAction[page].icon}
      </S.Icon>
      <S.Action isResources={page === 'resources'}>
        <S.Button>
          {pagesAction[page].button}
        </S.Button>
      </S.Action>
    </S.FlexCont>
  );
};

export default ActionBox;
