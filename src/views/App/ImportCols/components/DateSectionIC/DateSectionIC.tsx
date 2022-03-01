import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { getCurrentTab, getDateFormat1, getImportType, getStorageItem } from 'views/App/utils/utils';
import * as S from './DateSectionIC.styled';
import { saveUseRange } from './utils/utils';

const DateSection = function DateSection() {
  const projectId: string = getStorageItem('projectId');
  const useRangeStore: string | null = getStorageItem(
    `${projectId}_useRange_${getCurrentTab()}_${getImportType()}`,
  );
  const [useRange, setUseRange] = useState<boolean>(Boolean(useRangeStore));
  const todaysDate = getDateFormat1();

  return (
    <S.Container>
      <S.DateCont1 isRange={useRange}>
        <S.IconCont1>
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
          {todaysDate}
          <br />
          <S.Today>Today</S.Today>
        </S.DateContainer>
        <S.IconCont1>
          <S.IconContainer>
            <FontAwesomeIcon icon={faAngleRight} size="2x" />
          </S.IconContainer>
        </S.IconCont1>
        {
          useRange && (
          <>
            <S.Padding />
            <S.IconCont1>
              <S.IconContainer>
                <FontAwesomeIcon icon={faAngleLeft} size="2x" />
              </S.IconContainer>
            </S.IconCont1>
            <S.DateContainer>
              <S.FromContainer>To</S.FromContainer>
              <S.CalendarCont>
                <FontAwesomeIcon icon={faCalendarDays} size="2x" />
              </S.CalendarCont>
              <S.Today></S.Today>
            </S.DateContainer>
            <S.IconCont1>
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
          onClick={() => saveUseRange(useRange, setUseRange)}
        />
        Use a range of dates.
      </S.UseRange>
    </S.Container>
  );
};

export default DateSection;
