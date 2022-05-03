import React from 'react';
import * as S from './TopSection.styled';
import ActionBox from '../../components/ActionBox/ActionBox';

const TopSection = function TopSection() {
  return (
    <S.Container id="topSection">
      <S.DialogueCont>
        <ActionBox />
      </S.DialogueCont>
    </S.Container>
  );
};

export default TopSection;
