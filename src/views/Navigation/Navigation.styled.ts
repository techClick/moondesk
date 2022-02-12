import styled from 'styled-components';
import { topBarHeight } from '../styles';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const BottomPanel = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - ${topBarHeight});
`;

export const BottomRightPanel = styled.div`
  overflow: auto;
  width: 100%;
  background: lightgreen;
`;
