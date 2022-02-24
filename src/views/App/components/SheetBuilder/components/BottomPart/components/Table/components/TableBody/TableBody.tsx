import React from 'react';
import { DataSheet } from 'types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FormattedNumber } from 'react-intl';
import * as S from './TableBody.styled';
import NoGroup from '../NoGroup/NoGroup';

const TableBody = function TableBody({ newSheet }:{ newSheet: DataSheet}) {
  const containsGroup = Boolean(newSheet.find((entry) => entry.group));

  return (
    <tbody>
      { newSheet.map((entry: any, index: number) => (
        <S.TR>
          <S.TD isIndex>{index + 1}</S.TD>
          { containsGroup
            && <S.TD>{entry.group || <NoGroup />}</S.TD>}
          <S.TD>{entry.source}</S.TD>
          <S.TD>
            <FormattedNumber value={entry.amount} />
          </S.TD>
          <S.IconsDiv>
            <S.EditIcon><FontAwesomeIcon icon={faPenToSquare} /></S.EditIcon>
            <S.TrashIcon><FontAwesomeIcon icon={faTrash} /></S.TrashIcon>
          </S.IconsDiv>
        </S.TR>
      ))}
    </tbody>
  );
};

export default TableBody;
