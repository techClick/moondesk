import Color from 'color';
import styled from 'styled-components';

export const topBarColor = '#1685ec';
export const topBarHeight = '30px';
export const panelBorderColor = '#c9c9c9';
export const containerPadding = '20px';
export const textColor = Color(panelBorderColor).darken(0.45).toString();

export const MainButton = styled.div`
  color: ${topBarColor};
  background: ${Color(topBarColor).lighten(0.87).toString()};
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  width: max-content;
  height: max-content;
  cursor: pointer;
  &:hover {
    background: ${Color(topBarColor).lighten(0.55).toString()};
    color: ${Color(topBarColor).darken(0.35).toString()};
  }
`;

export const Button = styled.div`
  color: ${topBarColor};
  border: 1px ${topBarColor} solid;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  padding: 8px 15px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  width: max-content;
  height: max-content;
  cursor: pointer;
  &:hover {
    background: ${Color(topBarColor).lighten(0.55).toString()};
    color: ${Color(topBarColor).darken(0.35).toString()};
  }
`;
