import React from 'react';
import { FormattedNumber } from 'react-intl';
import { useAppSelector } from 'redux/hooks';
import { selectNewIncomeSheet } from 'views/App/components/SheetBuilder/redux';
import { getStorageItem } from 'views/App/utils/utils';
import * as S from './Table.styled';

const Table = function Table() {
  const currency = getStorageItem('currency') || '$';
  const newIncomeSheet = useAppSelector(selectNewIncomeSheet);
  // const newIncomeSheet: any = [newIncomeSheet1[0]];

  return (
    <S.Container innerWidth={window.innerWidth} innerHeight={window.innerHeight}>
      <S.TableDiv>
        <S.Table>
          <thead>
            <tr>
              <S.TH isIndex>#</S.TH>
              <S.TH>GROUP</S.TH>
              <S.TH>SOURCE</S.TH>
              <S.TH>
                AMOUNT
                (
                <small>
                  {currency}
                </small>
                )
              </S.TH>
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
                  <FormattedNumber value={entry.amount} />
                </S.TD>
              </S.TR>
            ))}
          </tbody>
        </S.Table>
      </S.TableDiv>
    </S.Container>
  );
};

export default Table;
