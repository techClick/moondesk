import React from 'react';
import MediaQuery from 'react-responsive';
import * as S from './Navigation.styled';
import TopBar from './TopBar/TopBar';
import SideBar from './SideBar/SideBar';
import { moveSideBar } from './utils/utils';
import { bigRes } from '../../styles';

const Navigation = function Navigation({ children }:{ children: any}) {
  return (
    <>
      {
        window.location.toString().includes('/app') ? (
          <S.Container>
            <MediaQuery maxWidth={bigRes + 0.0001}>
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
            {children}
          </>
        )
      }
    </>
  );
};

export default Navigation;
