import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCsv, faPenClip, faServer } from '@fortawesome/free-solid-svg-icons';
import { faFileExcel } from '@fortawesome/free-regular-svg-icons';
import { textColor } from 'views/App/styles';

type Options = {
  [key: string]: string | ReactElement;
  uploadType: string,
  icon: ReactElement;
  color: string,
}

export const importOptions: Array<Options> = [
  {
    uploadType: 'CSV',
    icon: <FontAwesomeIcon icon={faFileCsv} size="3x" />,
    color: '#1ba13d',
  },
  {
    uploadType: 'Excel',
    icon: <FontAwesomeIcon icon={faFileExcel} size="3x" />,
    color: '#1ba13d',
  },
  {
    uploadType: 'Database',
    icon: <FontAwesomeIcon icon={faServer} size="3x" />,
    color: '#6488ec',
  },
  {
    uploadType: 'Manual',
    icon: <FontAwesomeIcon icon={faPenClip} size="3x" />,
    color: textColor,
  },
];
