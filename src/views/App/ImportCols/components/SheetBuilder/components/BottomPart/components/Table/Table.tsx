import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectNewSheet, selectSelectedSheet } from 'views/App/ImportCols/redux';
import { DataSheet } from 'types/types';
import { getCurrentTab } from 'views/App/utils/utils';
import * as S from './Table.styled';
import TableBody from './components/TableBody/TableBody';

const Table = function Table() {
  const selectedSheet: number = useAppSelector(selectSelectedSheet)?.[getCurrentTab()] || 0;
  const newSheet: DataSheet = useAppSelector(selectNewSheet)?.[getCurrentTab()]?.[selectedSheet]
   || { date: new Date(), data: [] };
  const containsGroup = Boolean(newSheet.data.find((entry) => entry.group));

  return (
    <S.Container innerWidth={window.innerWidth} innerHeight={window.innerHeight} id="tableCont">
      <S.TableDiv>
        <S.Table>
          <thead>
            <tr>
              <S.TH isIndex>#</S.TH>
              { containsGroup && <S.TH>GROUP</S.TH>}
              <S.TH>ITEM</S.TH>
              <S.TH>
                VALUE
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
