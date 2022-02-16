import Color from 'color';
import styled from 'styled-components';
import { bigRes } from 'views/styles';
import { panelBorderColor } from '../../styles';

export const Container = styled.div<any>`
  width: 100%;
  flex: 1;
  padding-top: 120px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-right: 20px;
  @media(max-width: ${`${bigRes}px`}) {
    padding-right: 0;
  }
`;

export const Icon = styled.div<any>`
  color: ${Color(panelBorderColor).lighten(0.08).toString()};
  display: block;
  position: relative;
  transform: scale(${(props) => { return props.isResources ? '0.825' : '1'; }});
`;

export const ALertIcon = styled.div<any>`
  position: absolute;
  bottom: ${(props) => { return props.isResources ? '1px' : '12px'; }};
  right: ${(props) => { return props.isResources ? '-7px' : '3px'; }};
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(${(props) => { return props.isResources ? '0.8' : '0.7'; }});
  color: ${Color(panelBorderColor).darken(0.12).toString()};
`;

export const NoDataInfo = styled.div<any>`
  font-size: 16px;
  font-weight: 600;
  margin-top: ${(props) => { return props.isResources ? '-10px' : '-13px'; }};
  color: ${Color(panelBorderColor).darken(0.12).toString()}
`;
