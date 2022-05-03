import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor, textColor, topBarColor } from 'views/App/styles';

export const Container = styled.div`
`;

export const Background = styled.div`
  background: black;
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const DateCont1 = styled.div<any>`
  display: flex;
  width: 100%;
  height: max-content;
  margin-top: 48px;
  padding: 0px 40px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  align-items: center;
`;

export const Padding = styled.div`
  margin-right: 5px;
`;

export const IconCont1 = styled.div<any>`
  display: flex;
  height: 44px;
  width: max-content;
  text-align: right;
  border: 1px solid ${Color(panelBorderColor).lighten(0.1).toString()};
  border-left: ${(props) => props.position === 2 && 'none'};
  border-right: ${(props) => props.position !== 2 && 'none'};
  color: ${Color(textColor).lighten(0.3).toString()};
  border-radius: 2px;
  opacity: ${(props) => props.disabled && 0.2};
  cursor: ${(props) => !props.disabled && 'pointer'};
  &:hover {
    color: ${(props) => !props.disabled && topBarColor};
    border-color: ${(props) => !props.disabled && topBarColor};  
  }
`;

export const IconContainer = styled.div<any>`
  transform: scale(0.65);
  display: flex;
  justify-content: center;
  padding: 0px 6px;
  padding-top: 5px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
`;

export const DateContainer = styled.div<any>`
  width: calc(35%);
  padding-bottom: 3px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  height: 46px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border: 1px solid ${Color(panelBorderColor).lighten(0.1).toString()};
  border-radius: 2px;
`;

export const Today = styled.div<any>`
  font-size: 11px;
  font-weight: 700;
  margin-top: -4px;
  color: ${Color(textColor).lighten(0.5).toString()};
`;

export const FromContainer = styled.div<any>`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(calc(-100% - 4px));
  font-size: 16px;
  font-weight: 500;
  color: ${Color(textColor).lighten(0.5).toString()};
`;

export const CalendarCont = styled.div<any>`
  position: absolute;
  top: 0;
  right: -7px;
  transform: scale(0.65) translateY(calc(-140% - 5px));
  color: ${Color(textColor).lighten(0.7).toString()};
  cursor: pointer;
  &:hover {
    color: ${topBarColor};
  }
`;

export const CalendarPicker = styled.div<any>`
  height: max-content;
  width: 300px;
  position: fixed;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  z-index: 2;
`;

export const UseRange = styled.div`
  margin-top: 15px;
  margin-left: 35px;
  font-size: 15px;
  font-weight: 500;
  color: ${Color(textColor).lighten(0.5).toString()};
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  height: 20px;
  width: 20px;
  cursor: pointer;
  margin-right: 8px;
  background: ${textColor};
  color: ${textColor};
  box-sizing: border-box;
`;
