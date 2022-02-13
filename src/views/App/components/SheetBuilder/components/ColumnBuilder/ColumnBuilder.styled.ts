import Color from 'color';
import styled from 'styled-components';
import { textColor } from '../../../../styles';

export const Cont = styled.div`
  padding-left: 20px;
  display: flex;
  width: 100%;
`;
export const Container = styled.div`
  width: calc(100% / 3);
  color: lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  margin-top: 15px;
`;

export const ColumnBuild = styled.div`
  width: 80%;
  border-radius: 2px;
  border-left: 2px solid ${Color(textColor).lighten(0.6).toString()};
  padding-left: 14px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
`;

export const ColumnName = styled.div`
  display: flex;
  color: ${textColor};
  padding-bottom: 3px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  font-size: 15px;
  font-weight: 500;
  width: 100%;
`;

export const InputDiv = styled.div`
  display: flex;
  width: 100%;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
`;
