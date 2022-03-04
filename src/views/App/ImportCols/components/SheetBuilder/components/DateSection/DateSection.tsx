import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectNewSheet } from 'views/App/ImportCols/redux';
import { getCurrentTab, getIsSameDay, getTodaysDate } from 'views/App/utils/utils';
import { getNewSheetDate } from '../../utils/utils';
import * as S from './DateSection.styled';

const DateSection = function DateSection() {
  const newSheetDate = getNewSheetDate(
    useAppSelector(selectNewSheet)?.[getCurrentTab()] || [{ date: new Date(), data: [] }],
  );
  const selectedDate: Date = useAppSelector(selectNewSheet)?.[getCurrentTab()]?.find(
    (dataSheet) => getIsSameDay(dataSheet.date, new Date(newSheetDate)),
  )?.date || new Date();

  return (
    <S.Container>
      <S.DatePart>{getTodaysDate(selectedDate)}</S.DatePart>
    </S.Container>
  );
};

export default DateSection;
