import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { getRowEntryId, getUseRangeId } from 'views/App/utils/GlobalUtils';
import {
  getDateIsFar, getDateLimit, getIsSameDay, getIsToday, getStorageItem,
} from 'views/App/utils/utils';
import Calendar from 'react-calendar';
import * as S from './DateSectionIC.styled';
import { getSheetDate, moveDay, saveSheet, saveUseRange } from './utils/utils';
import './react-calendar.css';

const DateSection = function DateSection() {
  const useRangeStore: string | null = getStorageItem(getUseRangeId());
  const [useRange, setUseRange] = useState<boolean>(Boolean(useRangeStore));
  const [sheetDateDate1, setSheetDateDate1] = useState<Date>(JSON.parse(
    getStorageItem(getRowEntryId()) || JSON.stringify({ sheetDate1: new Date() }),
  ).sheetDate1 || new Date());
  const [sheetDateDate2, setSheetDateDate2] = useState<Date>(JSON.parse(
    getStorageItem(getRowEntryId()) || JSON.stringify({ sheetDate2: new Date() }),
  ).sheetDate2 || new Date());
  const [showDate, setShowDate] = useState<string>('');

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
    <S.Container>
      {
        showDate && (
          <>
            <S.Background onClick={() => setShowDate('')} />
            <S.CalendarPicker>
              <Calendar
                value={dates[showDate]}
                maxDate={new Date()}
                minDate={minDates[showDate]}
                onChange={(value: Date) => {
                  if (value > new Date(sheetDateDate2)) dateFuncs.sheetDate2(value);
                  dateFuncs[showDate](value);
                  saveSheet(value, showDate);
                  setShowDate('');
                }}
              />
            </S.CalendarPicker>
          </>
        )
      }
      <S.DateCont1 isRange={useRange}>
        <S.IconCont1
          onClick={() => {
            if (!getDateIsFar(sheetDateDate1)) {
              moveDay(sheetDateDate1, -1, setSheetDateDate1, 'sheetDate1');
            }
          }}
          disabled={getDateIsFar(sheetDateDate1)}
        >
          <S.IconContainer>
            <FontAwesomeIcon icon={faAngleLeft} size="2x" />
          </S.IconContainer>
        </S.IconCont1>
        <S.DateContainer>
          { useRange ? <S.FromContainer>From</S.FromContainer>
            : <S.FromContainer>Date</S.FromContainer>}
          <S.CalendarCont onClick={() => setShowDate('sheetDate1')}>
            <FontAwesomeIcon icon={faCalendarDays} size="2x" />
          </S.CalendarCont>
          {getSheetDate(sheetDateDate1)}
          <br />
          { getIsToday(sheetDateDate1) && <S.Today>Today</S.Today>}
        </S.DateContainer>
        <S.IconCont1
          onClick={() => {
            if (!getIsToday(sheetDateDate1)) {
              if (getIsSameDay(sheetDateDate1, sheetDateDate2)) {
                moveDay(sheetDateDate2, 1, setSheetDateDate2, 'sheetDate2');
              }
              moveDay(sheetDateDate1, 1, setSheetDateDate1, 'sheetDate1');
            }
          }}
          disabled={getIsToday(sheetDateDate1)}
          position={2}
        >
          <S.IconContainer>
            <FontAwesomeIcon icon={faAngleRight} size="2x" />
          </S.IconContainer>
        </S.IconCont1>
        {
          useRange && (
          <>
            <S.Padding />
            <S.IconCont1
              onClick={() => {
                if (!getIsSameDay(sheetDateDate1, sheetDateDate2)) {
                  moveDay(sheetDateDate2, -1, setSheetDateDate2, 'sheetDate2');
                }
              }}
              disabled={getIsSameDay(sheetDateDate1, sheetDateDate2)}
            >
              <S.IconContainer>
                <FontAwesomeIcon icon={faAngleLeft} size="2x" />
              </S.IconContainer>
            </S.IconCont1>
            <S.DateContainer>
              <S.FromContainer>To</S.FromContainer>
              <S.CalendarCont onClick={() => setShowDate('sheetDate2')}>
                <FontAwesomeIcon icon={faCalendarDays} size="2x" />
              </S.CalendarCont>
              {getSheetDate(sheetDateDate2)}
              <br />
              { getIsToday(sheetDateDate2) && <S.Today>Today</S.Today>}
            </S.DateContainer>
            <S.IconCont1
              onClick={() => {
                if (!getIsToday(sheetDateDate2)) moveDay(sheetDateDate2, 1, setSheetDateDate2, 'sheetDate2');
              }}
              disabled={getIsToday(sheetDateDate2)}
              position={2}
            >
              <S.IconContainer>
                <FontAwesomeIcon icon={faAngleRight} size="2x" />
              </S.IconContainer>
            </S.IconCont1>
          </>
          )
        }
      </S.DateCont1>
      <S.UseRange>
        <S.Input
          type="checkbox"
          checked={useRange}
          onChange={() => saveUseRange(useRange, setUseRange)}
        />
        Use a range of dates.
      </S.UseRange>
    </S.Container>
  );
};

export default DateSection;
