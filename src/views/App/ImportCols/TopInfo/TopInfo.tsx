import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import * as S from './TopInfo.styled';
import { closeTopInfo } from './utils/utils';

const TopInfo = function TopInfo({ closeInfo }:{closeInfo: Function}) {
  return (
    <S.Container>
      <S.LeftSide>
        <S.IconContainer>
          <FontAwesomeIcon icon={faCircleInfo} />
        </S.IconContainer>
      </S.LeftSide>
      <S.RightSide>
        Group, item and value
        are fields used by moondesk
        to create tables and analytic reports of your data.
        <S.MoreInfo>
          The rows you provide for these fields must correspond with
          their different functions.
        </S.MoreInfo>
        <S.CloseCont>
          <S.Close onClick={() => closeTopInfo(closeInfo)}>
            Got it
          </S.Close>
        </S.CloseCont>
      </S.RightSide>
    </S.Container>
  );
};

export default TopInfo;
