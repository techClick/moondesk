import React from 'react';
import { setShowSheetBuilder } from 'views/App/redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWallet, faFileWaveform, faDatabase, faChartLine, faGear,
} from '@fortawesome/free-solid-svg-icons';

export const tabOptions = [
  {
    label: 'Analytics',
    route: '/app/analytics',
    path: 'analytics',
    icon: <FontAwesomeIcon icon={faChartLine} />,
  },
  {
    label: 'Income',
    route: '/app/income',
    path: 'income',
    icon: <FontAwesomeIcon icon={faWallet} />,
  },
  {
    label: 'Resources',
    route: '/app/resources',
    path: 'resources',
    icon: <FontAwesomeIcon icon={faDatabase} />,
  },
  {
    label: 'Reports',
    route: '/app/reports',
    path: 'reports',
    icon: <FontAwesomeIcon icon={faFileWaveform} />,
  },
  {
    label: 'Settings',
    route: '/app/settings',
    path: 'settings',
    icon: <FontAwesomeIcon icon={faGear} />,
  },
];

export const getInitialIndex = function getInitialIndex() {
  const initialTab = tabOptions.find((tab) => (
    window.location.href.includes(tab.label.toLowerCase())
  ));
  if (initialTab) return tabOptions.indexOf(initialTab);
  return 0;
};

export const tabPressAction = function tabPressAction(dispatch: Function) {
  const exitSheetBuilder = { income: false, resources: false };
  dispatch(setShowSheetBuilder(exitSheetBuilder));
};
