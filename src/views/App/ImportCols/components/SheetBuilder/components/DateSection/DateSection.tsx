import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import { DataSheet } from 'types/types';
import { selectNewSheet, selectSelectedSheet, setShowPopup } from 'views/App/ImportCols/redux';
import { getCurrentTab, getTodaysDate } from 'views/App/utils/utils';
import * as S from './DateSection.styled';
import { moveDay } from './utils/utils';
import CalendarParts from './components/CalendarParts';

const DateSection = function DateSection() {
  const dispatch = useDispatch();
  const selectedSheet: number = useAppSelector(selectSelectedSheet)[getCurrentTab()] || 0;
  const allSheets: DataSheet[] = useAppSelector(selectNewSheet)[getCurrentTab()]
    || [{ date: new Date(), data: [] }];
  const newSheet: DataSheet = allSheets[selectedSheet];
  const selectedDate: Date = newSheet.date;

  return (
    <S.Container>
      <S.IconCont1
        onClick={() => {
          if (selectedSheet !== allSheets.length - 1) dispatch(moveDay(selectedSheet, 1));
        }}
        disabled={selectedSheet === allSheets.length - 1}
      >
        <S.IconContainer>
          <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        </S.IconContainer>
      </S.IconCont1>
      <S.DatePart>{getTodaysDate(selectedDate)}</S.DatePart>
      <S.IconCont1
        onClick={() => {
          if (selectedSheet !== 0) dispatch(moveDay(selectedSheet, -1));
        }}
        disabled={selectedSheet === 0}
      >
        <S.IconContainer>
          <FontAwesomeIcon icon={faAngleRight} size="2x" />
        </S.IconContainer>
      </S.IconCont1>
      <S.CalendarCont
        onClick={() => dispatch(setShowPopup({
          component: <CalendarParts />,
          exitOnClick: true,
        }))}
      >
        <S.CalendarCont1>
          <FontAwesomeIcon icon={faCalendarDays} size="2x" />
        </S.CalendarCont1>
      </S.CalendarCont>
    </S.Container>
  );
};

export default DateSection;
