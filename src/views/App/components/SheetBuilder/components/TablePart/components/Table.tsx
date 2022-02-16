import React, { useState } from 'react';
import { getStorageItem } from 'views/App/utils/utils';
import * as S from './Table.styled';

const Table = function Table() {
  const [newIncomeSheet, setNewIncomeSheet] = useState<any>(JSON.parse(getStorageItem('new_income') || '[]'));

  return (
    <S.TableDiv>
      <S.Table data-testid="forecastsTable">
        <thead>
          <tr>
            <S.TH isIndex>#</S.TH>
            <S.TH>GROUP</S.TH>
            <S.TH>SOURCE</S.TH>
            <S.TH>AMOUNT</S.TH>
          </tr>
        </thead>
        <tbody>
          { newIncomeSheet.map((entry: any, index: number) => (
            <S.TR>
              <S.TD isIndex>
                {index + 1}
              </S.TD>
              <S.TD>
                {entry.group}
              </S.TD>
              <S.TD>
                {entry.source}
              </S.TD>
              <S.TD>
                {entry.amount}
              </S.TD>
            </S.TR>
          ))}
        </tbody>
      </S.Table>
    </S.TableDiv>
  );
};

export default Table;
