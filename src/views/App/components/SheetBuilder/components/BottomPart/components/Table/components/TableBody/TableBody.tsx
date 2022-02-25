import React, { useState } from 'react';
import { DataSheet, SheetEntry } from 'types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FormattedNumber } from 'react-intl';
import * as S from './TableBody.styled';
import NoGroup from '../NoGroup/NoGroup';
import { checkForMenuOut } from './utils/utils';

const TableBody = function TableBody({ newSheet }:{ newSheet: DataSheet}) {
  const containsGroup = Boolean(newSheet.data.find((entry) => entry.group));
  const [showMenu, setShowMenu] = useState<Array<boolean>>(newSheet.data.map(() => false));

  const showThisMenu = function showThisMenu(index: number) {
    const newShowMenu = newSheet.data.map(() => false);
    newShowMenu[index] = !showMenu[index];
    setShowMenu(newShowMenu);
  };

  return (
    <tbody>
      { newSheet.data.map((entry: SheetEntry, index: number) => (
        <S.TR>
          <S.TD isIndex>{index + 1}</S.TD>
          { containsGroup
            && <S.TD>{entry.group || <NoGroup />}</S.TD>}
          <S.TD>{entry.source}</S.TD>
          <S.TD>
            <FormattedNumber value={entry.amount} />
          </S.TD>
          <S.IconsDiv>
            { showMenu[index] && (
              <>
                <S.EditIcon><FontAwesomeIcon icon={faPenToSquare} /></S.EditIcon>
                <S.TrashIcon><FontAwesomeIcon icon={faTrash} /></S.TrashIcon>
              </>
            )}
            <S.MenuIcon onClick={() => showThisMenu(index)}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </S.MenuIcon>
          </S.IconsDiv>
        </S.TR>
      ))}
    </tbody>
  );
};

export default TableBody;
