import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill1 } from '@fortawesome/free-regular-svg-icons';
import { getCurrentTab } from 'views/App/utils/utils';
import { faTriangleExclamation, faCoins } from '@fortawesome/free-solid-svg-icons';
import * as S from './NoData.styled';

const pagesNoData: any = {
  income: {
    icon: <FontAwesomeIcon icon={faMoneyBill1} size="6x" />,
    label: 'No income data',
  },
  resources: {
    icon: <FontAwesomeIcon icon={faCoins} size="6x" />,
    label: 'No resource data',
  },
};

const NoData = function NoData() {
  const thisTab = getCurrentTab();

  return (
    <S.Container>
      <S.Icon isResources={thisTab === 'resources'}>
        {pagesNoData[thisTab].icon}
        <S.ALertIcon isResources={thisTab === 'resources'}>
          <FontAwesomeIcon icon={faTriangleExclamation} size="2x" />
        </S.ALertIcon>
      </S.Icon>
      <S.NoDataInfo isResources={thisTab === 'resources'}>
        {pagesNoData[thisTab].label}
      </S.NoDataInfo>
    </S.Container>
  );
};

export default NoData;
