import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill1 } from '@fortawesome/free-regular-svg-icons';
import { faTriangleExclamation, faCoins } from '@fortawesome/free-solid-svg-icons';
import * as S from './NoData.styled';

const pagesNoData: any = {
  income: {
    icon: <FontAwesomeIcon icon={faMoneyBill1} size="7x" />,
    label: 'No income data',
  },
  resources: {
    icon: <FontAwesomeIcon icon={faCoins} size="7x" />,
    label: 'No resource data',
  },
};

const NoData = function NoData({ page }:{ page: string }) {
  return (
    <S.Container>
      <S.Icon isResources={page === 'resources'}>
        {pagesNoData[page].icon}
        <S.ALertIcon isResources={page === 'resources'}>
          <FontAwesomeIcon icon={faTriangleExclamation} size="2x" />
        </S.ALertIcon>
      </S.Icon>
      <S.NoDataInfo isResources={page === 'resources'}>
        {pagesNoData[page].label}
      </S.NoDataInfo>
    </S.Container>
  );
};

export default NoData;
