import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor } from '../styles';

export const Container = styled.div<any>`
  width: 100%;
  height: 100%;
`;

export const HRLine = styled.div<any>`
  margin-top: 2px;
  height: 1px;
  width: 100%;
  border:0;
  background: ${Color(panelBorderColor).lighten(0.12).toString()};
`;
