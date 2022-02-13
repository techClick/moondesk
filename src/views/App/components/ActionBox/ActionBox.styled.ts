import styled from 'styled-components';
import Color from 'color';
import { panelBorderColor } from '../../styles';

export const FlexCont = styled.div<any>`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div<any>`
  padding-left: ${(props) => { return props.isResources ? '5px' : '10px'; }};
  color: ${Color(panelBorderColor).darken(0.075).toString()};
  height: 100%;
  transform: scale(${(props) => { return props.isResources ? '0.8' : '1'; }});
`;

export const Action = styled.div<any>`
  display: flex;
  padding-left: ${(props) => { return props.isResources ? '0' : '5px'; }};
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
`;
