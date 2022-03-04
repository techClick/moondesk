import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectNewSheet } from 'views/App/ImportCols/redux';
import { DataSheet } from 'types/types';
import { getCurrentTab, getIsSameDay, getStorageItem } from 'views/App/utils/utils';
import { getNewSheetDate } from 'views/App/ImportCols/components/SheetBuilder/utils/utils';
import * as S from './Table.styled';
import TableBody from './components/TableBody/TableBody';

const Table = function Table() {
  const currency = getStorageItem('currency') || '$';
  const newSheetDate = getNewSheetDate(
    useAppSelector(selectNewSheet)?.[getCurrentTab()] || [{ date: new Date(), data: [] }],
  );
  const newSheet: DataSheet = useAppSelector(selectNewSheet)?.[getCurrentTab()]?.find(
    (dataSheet) => getIsSameDay(dataSheet.date, new Date(newSheetDate)),
  ) || { date: new Date(), data: [] };
  const containsGroup = Boolean(newSheet.data.find((entry) => entry.group));

  return (
    <S.Container innerWidth={window.innerWidth} innerHeight={window.innerHeight}>
      <S.TableDiv>
        <S.Table>
          <thead>
            <tr>
              <S.TH isIndex>#</S.TH>
              { containsGroup && <S.TH>GROUP</S.TH>}
              <S.TH>SOURCE</S.TH>
              <S.TH>
                AMOUNT(
                <small>{currency}</small>
                )
              </S.TH>
            </tr>
          </thead>
          <TableBody />
        </S.Table>
      </S.TableDiv>
    </S.Container>
  );
};

export default Table;
