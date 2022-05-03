import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor } from 'views/App/styles';

export const Container = styled.div`
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  margin: auto;
  border-radius: 1px;
  // border: 1.5px solid ${Color(panelBorderColor).lighten(0.15).toString()};
  border-bottom: 2px solid ${Color(panelBorderColor).darken(0.05).toString()};
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: max-content;
  font-size: 10px;
  font-weight: 700;
  padding-bottom: 4px;
  color: ${Color(panelBorderColor).darken(0.07).toString()};
  // background: ${Color(panelBorderColor).lighten(0.24).toString()};
`;
