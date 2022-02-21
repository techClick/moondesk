import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectNewIncomeSheet } from 'views/App/components/SheetBuilder/redux';
import * as S from './Table.styled';

const Table = function Table() {
  const newIncomeSheet = useAppSelector(selectNewIncomeSheet);
  // const newIncomeSheet: any = [newIncomeSheet1[0]];

  return (
    <S.TableDiv>
      <S.Table>
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
