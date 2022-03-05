import React from 'react';
import { useDispatch } from 'react-redux';
import {
  selectNewSheet, selectSelectedSheet, setSelectedSheet, setShowPopup,
} from 'views/App/ImportCols/redux';
import Calendar from 'react-calendar';
import { toast } from 'react-toastify';
import 'views/App/react-calendar.css';
import { DataSheet } from 'types/types';
import { useAppSelector } from 'redux/hooks';
import { getCurrentTab, getIsSameDay } from 'views/App/utils/utils';
import * as S from './CalendarParts.styled';

const CalendarParts = function CalendarParts() {
  const dispatch = useDispatch();
  const selectedSheet: number = useAppSelector(selectSelectedSheet)[getCurrentTab()] || 0;
  const allNewSheets: DataSheet[] = useAppSelector(selectNewSheet)[getCurrentTab()]
    || [{ date: new Date(), data: [] }];
  const newSheet: DataSheet = allNewSheets[selectedSheet];

  const getSelectedIndex = (date: Date): number => {
    return allNewSheets.indexOf(allNewSheets.find((sheet) => (
      getIsSameDay(new Date(sheet.date), new Date(date))
    )) || { date: new Date(), data: [] });
  };

  return (
    <S.CalendarPicker>
      <Calendar
        value={new Date(newSheet.date)}
        maxDate={new Date(allNewSheets[0].date)}
        minDate={new Date(allNewSheets[allNewSheets.length - 1].date)}
        onChange={(value: Date) => {
          const selectedIndex = getSelectedIndex(value);
          if (selectedIndex > -1) {
            dispatch(setSelectedSheet(selectedIndex));
            dispatch(setShowPopup(false));
          } else {
            toast(
              `No pending ${getCurrentTab()} sheet was found on the selected date.`,
              { type: 'warning' },
            );
          }
        }}
      />
    </S.CalendarPicker>
  );
};

export default CalendarParts;
