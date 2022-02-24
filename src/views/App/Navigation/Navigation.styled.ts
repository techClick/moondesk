import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor, textColor } from '../styles';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${textColor};
`;

export const BottomPanel = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
  position: relative;
  overflow: hidden;
`;

export const BottomRightPanel = styled.div`
  position: relative;
  flex: 1;
  z-index: 1;
  background: ${Color(panelBorderColor).lighten(0.18).toString()};
  overflow: hidden;
`;
