import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { getRowEntryId, getUseRangeId } from 'views/App/utils/GlobalUtils';
import {
  getDateFormat1, getDateIsFar, getIsSameDay, getIsToday, getStorageItem,
} from 'views/App/utils/utils';
import * as S from './DateSectionIC.styled';
import { moveDay, saveUseRange } from './utils/utils';

const DateSection = function DateSection() {
  const useRangeStore: string | null = getStorageItem(getUseRangeId());
  const [useRange, setUseRange] = useState<boolean>(Boolean(useRangeStore));
  const [sheetDateDate1, setSheetDateDate1] = useState<Date>(JSON.parse(
    getStorageItem(getRowEntryId()) || JSON.stringify({ sheetDate1: new Date() }),
  ).sheetDate1 || new Date());
  const [sheetDateDate2, setSheetDateDate2] = useState<Date>(JSON.parse(
    getStorageItem(getRowEntryId()) || JSON.stringify({ sheetDate2: new Date() }),
  ).sheetDate2 || new Date());
  const sheetDate1 = getDateFormat1(sheetDateDate1);
  const sheetDate2 = getDateFormat1(sheetDateDate2);

  return (
    <S.Container>
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
          <S.CalendarCont>
            <FontAwesomeIcon icon={faCalendarDays} size="2x" />
          </S.CalendarCont>
          {sheetDate1}
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
              <S.CalendarCont>
                <FontAwesomeIcon icon={faCalendarDays} size="2x" />
              </S.CalendarCont>
              {sheetDate2}
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
