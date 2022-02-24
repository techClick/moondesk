import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectNewIncomeSheet } from 'views/App/components/SheetBuilder/redux';
import { getStorageItem } from 'views/App/utils/utils';
import * as S from './Table.styled';
import TableBody from './components/TableBody/TableBody';

const Table = function Table() {
  const currency = getStorageItem('currency') || '$';
  const newSheet = useAppSelector(selectNewIncomeSheet);
  // const newIncomeSheet: any = [newIncomeSheet1[0]];
  const containsGroup = Boolean(newSheet.find((entry) => entry.group));

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
          <TableBody newSheet={newSheet} />
        </S.Table>
      </S.TableDiv>
    </S.Container>
  );
};

export default Table;
