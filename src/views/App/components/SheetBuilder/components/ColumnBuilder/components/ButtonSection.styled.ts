import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor, textColor } from 'views/App/styles';

export const ButtonDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 375px;
`;

export const RelativeDiv = styled.div`
  width: 100%;
  display: flex;
  height: 36px;
`;

export const MainButtonDiv = styled.div`
  margin-left: 50px;
`;

export const Button = styled.div`
  border: 1px ${textColor} solid;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  padding: 8px 20px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 12px;
  width: max-content;
  height: max-content;
  margin-left: 13px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: ${Color(panelBorderColor).lighten(0.1).toString()};
    color: ${Color(textColor).darken(0.2).toString()};
  }
`;
