import React, { useState } from 'react';
import { DataSheet, SheetEntry } from 'types/types';
import { useAppSelector } from 'redux/hooks';
import { getCurrentTab, getStorageItem } from 'views/App/utils/utils';
import { selectNewSheet, selectSelectedSheet, setShowPopup } from 'views/App/ImportCols/redux';
import { useDispatch } from 'react-redux';
import { getProject } from 'views/App/utils/GlobalUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FormattedNumber } from 'react-intl';
import * as S from './TableBody.styled';
import NoGroup from '../NoGroup/NoGroup';
import EditEntry from './component/EditEntry';

const TableBody = function TableBody() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet)?.[getCurrentTab()] || 0;
  const newSheet: DataSheet = useAppSelector(selectNewSheet)?.[getCurrentTab()]?.[selectedSheet]
   || { date: new Date(), data: [] };
  const [showMenu, setShowMenu] = useState<Array<boolean>>(newSheet.data.map(() => false));
  const containsGroup = Boolean(newSheet.data.find((entry) => entry.group));
  const currency = getStorageItem(`${getProject()}_currency`) || '$';
  const dispatch = useDispatch();

  const showThisMenu = function showThisMenu(index: number) {
    const newShowMenu = newSheet.data.map(() => false);
    newShowMenu[index] = !showMenu[index];
    setShowMenu(newShowMenu);
  };

  return (
    <tbody>
      { newSheet.data.map((entry: SheetEntry, index: number) => (
        <S.TR key={`Tablebody${index}`}>
          <S.TD isIndex>{index + 1}</S.TD>
          { containsGroup
            && <S.TD>{entry.group || <NoGroup />}</S.TD>}
          <S.TD>{entry.source}</S.TD>
          <S.TD isAmount isHovered={showMenu[index]} id="amountTd">
            {currency}
            <FormattedNumber value={entry.amount} />
            <S.IconsDiv>
              { showMenu[index] && (
                <>
                  <S.EditIcon onClick={() => dispatch(setShowPopup({
                    component: <EditEntry />,
                    exitOnBgClick: true,
                  }))}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </S.EditIcon>
                  <S.TrashIcon><FontAwesomeIcon icon={faTrash} /></S.TrashIcon>
                </>
              )}
              <S.MenuIcon onClick={() => showThisMenu(index)}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </S.MenuIcon>
            </S.IconsDiv>
          </S.TD>
        </S.TR>
      ))}
    </tbody>
  );
};

export default TableBody;
