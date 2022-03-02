import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import * as S from './DateInfo.styled';
import { closeDateInfo } from './utils/utils';

const DateInfo = function DateInfo({ closeInfo }:{closeInfo: Function}) {
  return (
    <S.Container>
      <S.LeftSide>
        <S.IconContainer>
          <FontAwesomeIcon icon={faCircleInfo} />
        </S.IconContainer>
      </S.LeftSide>
      <S.RightSide>
        Use timestamp if the data in your document is dated. Otherwise
        leave it empty.
        <S.MoreInfo>
          Using timestamp enables you upload data for a range of dates
          at once.
        </S.MoreInfo>
        <S.CloseCont>
          <S.Close onClick={() => closeDateInfo(closeInfo)}>
            Got it
          </S.Close>
        </S.CloseCont>
      </S.RightSide>
    </S.Container>
  );
};

export default DateInfo;
