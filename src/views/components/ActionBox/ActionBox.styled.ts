import styled from 'styled-components';
import Color from 'color';
import { panelBorderColor, topBarColor } from '../../styles';

export const ActionCont = styled.div<any>`
  border-radius: 8px;
  border: 1px solid ${panelBorderColor};
`;

export const FlexCont = styled.div<any>`
  display: flex;
  align-items: center;
`;

export const Action = styled.div<any>`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  text-align: center;
`;

export const Info = styled.div<any>`
  font-size: 13px;
  color: grey; 
  padding-bottom: 15px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  max-width: 160px;
`;

export const Button = styled.div<any>`
  color: ${topBarColor};
  background: ${Color(topBarColor).lighten(0.87).toString()};
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: ${Color(topBarColor).lighten(0.55).toString()};
    color: ${Color(topBarColor).darken(0.35).toString()};
  }
`;
