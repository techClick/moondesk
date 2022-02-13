import React from 'react';
import MediaQuery from 'react-responsive';
import * as S from './SideBar.styled';
import Tabs from './components/Tabs';
import { bigRes } from '../../../../styles';

const SideBar = function SideBar() {
  return (
    <>
      <MediaQuery minWidth={bigRes + 0.0001}>
        <S.Container isMobile={false} id="sideBar">
          <Tabs />
        </S.Container>
      </MediaQuery>
      <MediaQuery maxWidth={bigRes}>
        <S.Container isMobile id="sideBar">
          <Tabs />
        </S.Container>
      </MediaQuery>
    </>
  );
};

export default SideBar;
