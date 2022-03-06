import Color from 'color';
import styled from 'styled-components';
import { textColor, topBarColor } from 'views/App/styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

export const DatePart = styled.div<any>`
  font-size: 20px;
  width: 175px;
  padding-left: ${(props) => props.range && '5px'};
  font-weight: 500;
  color: ${Color(textColor).lighten(0.4).toString()};
`;

export const IconCont1 = styled.div<any>`
  display: flex;
  height: 30px;
  width: max-content;
  text-align: right;
  color: ${Color(textColor).lighten(0.3).toString()};
  border-radius: 2px;
  opacity: ${(props) => props.disabled && 0.2};
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  cursor: ${(props) => !props.disabled && 'pointer'};
  &:hover {
    color: ${(props) => !props.disabled && topBarColor};
    outline: ${(props) => !props.disabled
      && `1px solid ${Color(topBarColor).lighten(0.1).toString()}`};  
  }
`;

export const IconContainer = styled.div<any>`
  transform: scale(0.65);
  display: flex;
  justify-content: center;
  // padding: 0px 6px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
`;

export const CalendarCont = styled.div<any>`
  color: ${Color(textColor).lighten(0.3).toString()};
  margin-left: 2px;
  cursor: pointer;
  &:hover {
    color: ${topBarColor};
  }
  margin-top: -2.3px;
`;

export const CalendarCont1 = styled.div<any>`
  transform: scale(0.6);
`;
