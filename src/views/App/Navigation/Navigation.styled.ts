import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const BottomPanel = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const BottomRightPanel = styled.div`
  overflow: auto;
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
`;
