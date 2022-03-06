import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCsv, faPenClip, faServer } from '@fortawesome/free-solid-svg-icons';
import { faFileExcel } from '@fortawesome/free-regular-svg-icons';
import { textColor } from 'views/App/styles';
import { getCurrentTab } from 'views/App/utils/utils';

type Options = {
  [key: string]: string | Function | ReactElement;
  uploadType: string,
  icon: ReactElement;
  color: string,
  path: Function,
}

export const importOptions: Array<Options> = [
  {
    uploadType: 'CSV',
    icon: <FontAwesomeIcon icon={faFileCsv} size="3x" />,
    color: '#1ba13d',
    path: () => `/app/${getCurrentTab()}/importcols/csv`,
  },
  {
    uploadType: 'Excel',
    icon: <FontAwesomeIcon icon={faFileExcel} size="3x" />,
    color: '#1ba13d',
    path: () => `/app/${getCurrentTab()}/importcols/excel`,
  },
  {
    uploadType: 'Database',
    icon: <FontAwesomeIcon icon={faServer} size="3x" />,
    color: '#6488ec',
    path: () => `/app/${getCurrentTab()}/importdb`,
  },
  {
    uploadType: 'Manual',
    icon: <FontAwesomeIcon icon={faPenClip} size="3x" />,
    color: textColor,
    path: () => `/app/${getCurrentTab()}/importhand`,
  },
];
