import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor, textColor, topBarColor } from 'views/App/styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

export const DatePart = styled.div`
  font-size: 15px;
`;

export const MainButton = styled.div`
  background: ${Color(panelBorderColor).lighten(0.15).toString()};
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  padding: 3px 7px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 12px;
  width: max-content;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    background: ${Color(panelBorderColor).darken(0.15).toString()};
    color: ${Color(textColor).darken(0.35).toString()};
  }
`;

export const BackDated = styled.div`
  font-size: 11px;
  color: ${Color(textColor).lighten(0.2).toString()};
  margin-left: 10px;
  padding: 2px 0;
  border-bottom: 1px solid ${textColor};
`;

export const Button = styled.div`
  // color: ${topBarColor};
  border: 1px ${textColor} solid;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 12px;
  width: max-content;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    background: ${Color(panelBorderColor).lighten(0.1).toString()};
    color: ${Color(textColor).darken(0.2).toString()};
  }
`;
