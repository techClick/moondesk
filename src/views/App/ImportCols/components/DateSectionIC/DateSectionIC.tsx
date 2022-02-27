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
      <S.UseRange>
        <S.Input type="checkbox" checked={useRange} onClick={() => saveUseRange(setUseRange)} />
        Use a range of dates.
      </S.UseRange>
      <S.DateCont1>
        <S.IconContainer>
          <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        </S.IconContainer>
        <S.DateContainer>
          {todaysDate}
          <br />
          <S.Today>Today</S.Today>
        </S.DateContainer>
        <S.IconContainer>
          <FontAwesomeIcon icon={faAngleRight} size="2x" />
        </S.IconContainer>
        {
          useRange && (
          <>
            <S.Padding />
            <S.IconContainer>
              <FontAwesomeIcon icon={faAngleLeft} size="2x" />
            </S.IconContainer>
            <S.DateContainer>
              <S.Today></S.Today>
            </S.DateContainer>
            <S.IconContainer>
              <FontAwesomeIcon icon={faAngleRight} size="2x" />
            </S.IconContainer>
          </>
          )
        }
      </S.DateCont1>
    </S.Container>
  );
};

export default DateSection;
