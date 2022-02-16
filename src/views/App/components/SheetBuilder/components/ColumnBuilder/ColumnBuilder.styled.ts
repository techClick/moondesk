import Color from 'color';
import styled from 'styled-components';
import { textColor, topBarColor } from 'views/App/styles';

export const Container = styled.div`
  width: 120px;
  color: lightgrey;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

export const ColumnBuild = styled.div`
  width: 98%;
  border-radius: 2px;
  padding-left: 14px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

export const ColumnName = styled.div`
  width: 100%;
  color: ${textColor};
  padding-bottom: 3px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  text-align: left;
  position: relative;
`;

export const FillColumn = styled.div`
  position: absolute;
  color: ${Color(textColor).lighten(0.1).toString()};
  right: -6.5px;
  top: -3px;
  width: 30px;
  height: 100%;
  text-align: right;
  transform: scale(0.6);
  cursor: pointer;
  &:hover {
    color: ${topBarColor};
  }
`;

export const InputDiv = styled.div<any>`
  display: flex;
  width: 100%;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  padding-left: 5px;
  border-left: 2px solid ${(props) => {
    return !props.isError ? Color(textColor).lighten(0.6).toString() : 'red';
  }};
  position: relative;
`;

export const Input = styled.input<any>`
  width: 100%;
  height: 27px;
  padding-left: 5px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border: ${(props) => props.isError && '1px solid red'};
`;

export const Required = styled.div`
  display: flex;
  font-size: 10px;
  height: 14px;
  position: absolute;
  bottom: -13px;
  left: -2px;
  color: red;
`;
