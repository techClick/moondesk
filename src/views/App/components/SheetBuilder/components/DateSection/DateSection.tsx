import React, { useState } from 'react';
import { getTodaysDate } from 'views/App/utils/utils';
import * as S from './DateSection.styled';

const DateSection = function DateSection() {
  const [selectedDate, setSelectedDate] = useState<string>(getTodaysDate());

  return (
    <S.Container>
      <S.DatePart>{selectedDate}</S.DatePart>
      <S.MainButton>
        Set date
      </S.MainButton>
      {
        selectedDate === getTodaysDate() && (
          <>
            <S.BackDated>back dated</S.BackDated>
            <S.Button>
              Use today
            </S.Button>
          </>
        )
      }
    </S.Container>
  );
};

export default DateSection;
