import React from 'react';
import { bigRes } from 'views/styles';
import MediaQuery from 'react-responsive';
import * as S from './SideBar.styled';
import Tabs from './components/Tabs';

const SideBar = function SideBar() {
  // background: #1c3f5f;
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
