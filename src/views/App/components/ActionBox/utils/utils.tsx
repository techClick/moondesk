import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheckDollar, faDatabase } from '@fortawesome/free-solid-svg-icons';

type Action = {
  icon: any,
  buttonText: string,
}

type PagesAction = {
  [key: string]: Action,
  income: Action,
  resources: Action,
}

export const pagesAction: PagesAction = {
  income: {
    icon: <FontAwesomeIcon icon={faMoneyCheckDollar} size="3x" />,
    buttonText: 'New income data',
  },
  resources: {
    icon: <FontAwesomeIcon icon={faDatabase} size="3x" />,
    buttonText: 'New resource data',
  },
};
