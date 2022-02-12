import React from 'react';
import MediaQuery from 'react-responsive';
import * as S from './Navigation.styled';
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';
import Header from './components/Header/Header';
import { moveSideBar } from './components/utils/utils';
import { bigRes } from '../styles';

const Navigation = function Navigation({ children }:{ children: any}) {
  return (
    <>
      {
        window.location.toString().includes('/app') ? (
          <S.Container>
            <MediaQuery maxWidth={bigRes}>
              <TopBar />
            </MediaQuery>
            <S.BottomPanel>
              <SideBar />
              <S.BottomRightPanel
                onClick={() => window.innerHeight <= bigRes && moveSideBar(true)}
              >
                {children}
              </S.BottomRightPanel>
            </S.BottomPanel>
          </S.Container>
        ) : (
          <>
            <Header />
            {children}
          </>
        )
      }
    </>
  );
};

export default Navigation;
