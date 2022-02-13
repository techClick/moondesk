import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWallet, faFileWaveform, faDatabase, faChartLine,
} from '@fortawesome/free-solid-svg-icons';

export const tabOptions = [
  {
    label: 'Analytics',
    route: '/app/analytics',
    icon: <FontAwesomeIcon icon={faChartLine} />,
  },
  {
    label: 'Income',
    route: '/app/income',
    icon: <FontAwesomeIcon icon={faWallet} />,
  },
  {
    label: 'Resources',
    route: '/app/resources',
    icon: <FontAwesomeIcon icon={faDatabase} />,
  },
  {
    label: 'Reports',
    route: '/app/reports',
    icon: <FontAwesomeIcon icon={faFileWaveform} />,
  },
];
