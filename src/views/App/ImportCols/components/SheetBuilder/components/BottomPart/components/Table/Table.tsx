import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectNewSheet, selectSelectedSheet } from 'views/App/ImportCols/redux';
import { DataSheet } from 'types/types';
import { getCurrentTab, getStorageItem } from 'views/App/utils/utils';
import * as S from './Table.styled';
import TableBody from './components/TableBody/TableBody';

const Table = function Table() {
  const currency = getStorageItem('currency') || '$';
  const selectedSheet: number = useAppSelector(selectSelectedSheet)?.[getCurrentTab()] || 0;
  const newSheet: DataSheet = useAppSelector(selectNewSheet)?.[getCurrentTab()]?.[selectedSheet]
   || { date: new Date(), data: [] };
  const containsGroup = Boolean(newSheet.data.find((entry) => entry.group));

  // export const panelBorderColor = '#dadada';
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
