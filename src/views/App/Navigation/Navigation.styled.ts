import styled from 'styled-components';
import { textColor } from '../styles';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  color: ${textColor}
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
