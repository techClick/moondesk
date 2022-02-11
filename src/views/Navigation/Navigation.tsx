import React from 'react';
import * as S from './Navigation.styled';

const NavPanel = function NavPanel({ children }:{ children: any}) {
  return (
    <>
      {
        window.location.toString().includes('/app') ? (
          <S.Container>
            {children}
            <button type="button" onClick={() => { window.location.href = '/app/2'; }}>GO</button>
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

export default NavPanel;
