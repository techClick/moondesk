import React from 'react';
import { getDateLimit } from 'views/App/utils/utils';
import Calendar from 'react-calendar';
import * as S from './CalendarParts.styled';
import { saveSheet } from '../utils/utils';
import './react-calendar.css';

const CalendarParts = function CalendarParts(
  {
    sheetDateDate1, sheetDateDate2, showDate, setSheetDateDate1, setSheetDateDate2,
  }
  :
  {
    sheetDateDate1: Date, sheetDateDate2: Date, showDate: string,
    setSheetDateDate1: Function, setSheetDateDate2: Function,
  },
) {
  const minDates: any = {
    sheetDate1: new Date(getDateLimit()),
    sheetDate2: new Date(sheetDateDate1),
  };
  const dates: any = {
    sheetDate1: new Date(sheetDateDate1),
    sheetDate2: new Date(sheetDateDate2),
  };
  const dateFuncs: any = {
    sheetDate1: setSheetDateDate1,
    sheetDate2: setSheetDateDate2,
  };
  return (
    <S.CalendarPicker>
      <Calendar
        value={dates[showDate]}
        maxDate={new Date()}
        minDate={minDates[showDate]}
        onChange={(value: Date) => {
          if (showDate === 'sheetDate1' && value > new Date(sheetDateDate2)) {
            dateFuncs.sheetDate2(value);
          }
          dateFuncs[showDate](value);
          saveSheet(value, showDate);
        }}
      />
    </S.CalendarPicker>
  );
};

export default CalendarParts;
