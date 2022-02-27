import Color from 'color';
import styled from 'styled-components';
import { textColor } from 'views/App/styles';

export const Container = styled.div`
  // background: lightgreen;
`;

export const UseRange = styled.div`
  margin-top: 50px;
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
`;

export const DateCont1 = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  margin-top: 20px;
  padding: 0px 40px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  position: relative;
  align-items: center;
  // background: lightgreen;
`;

export const Padding = styled.div`
  margin-right: 20px;
`;

export const IconContainer = styled.div<any>`
  width: 25px;
  transform: scale(0.7);
  display: flex;
  justify-content: center;
  opacity: ${(props) => props.isNoRange && 0.2};
`;

export const DateContainer = styled.div<any>`
  width: calc(40% - 20px);
  padding: 7px 0;
  padding-top: 3px;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 38px;
  background: ${(props) => {
    return !props.isNoRange ? Color('white').darken(0.025).toString()
      : Color('white').darken(0.15).toString();
  }};
  opacity: ${(props) => props.isNoRange && 0.2};
`;

export const Today = styled.div<any>`
  font-size: 12px;
  margin-top: -3px;
  color: ${Color(textColor).lighten(0.2).toString()};
`;
