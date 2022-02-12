import React from 'react';
import * as S from './Navigation.styled';
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';
import Header from './components/Header/Header';

const Navigation = function Navigation({ children }:{ children: any}) {
  return (
    <>
      {
        window.location.toString().includes('/app') ? (
          <S.Container>
            <TopBar />
            <S.BottomPanel>
              <SideBar />
              <S.BottomRightPanel>
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
