import Color from 'color';
import styled from 'styled-components';
import { topBarColor } from 'views/App/styles';

export const Container = styled.div`
  margin: auto;
  margin-top: 20px;
  width: max-content;
`;

export const Input = styled.input`
  display: none;
`;

export const Button = styled.div`
  color: ${topBarColor};
  border: 1px ${topBarColor} solid;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  padding: 12px 20px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  width: max-content;
  height: max-content;
  cursor: pointer;
  &:hover {
    background: ${Color(topBarColor).lighten(0.55).toString()};
    color: ${Color(topBarColor).darken(0.35).toString()};
  }
`;
