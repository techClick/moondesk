import React from 'react';
import { bigRes, RelativeContainer } from 'views/styles';
import MediaQuery from 'react-responsive';
import * as S from './SideBar.styled';
import Tabs from './components/Tabs';

const SideBar = function SideBar() {
  return (
    <>
      <MediaQuery minWidth={bigRes + 0.0001}>
        <S.Container isMobile={false} id="sideBar">
          <RelativeContainer><Tabs /></RelativeContainer>
        </S.Container>
      </MediaQuery>
      <MediaQuery maxWidth={bigRes}>
        <S.Container isMobile id="sideBar">
          <RelativeContainer><Tabs /></RelativeContainer>
        </S.Container>
      </MediaQuery>
    </>
  );
};

export default SideBar;
