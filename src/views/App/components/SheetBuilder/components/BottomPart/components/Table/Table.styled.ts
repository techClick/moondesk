import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor } from 'views/App/styles';

export const TableDiv = styled.div<any>`
  text-align: left;
  margin-left: -1px;
  width: 100%;
`;

const tableBorderColor = Color(panelBorderColor).lighten(0.1).toString();
const getScreenCalc = function getBigScreenCalc(): string {
  return window.innerWidth > 600 ? '150px' : '0px';
};
export const Table = styled.table`
  min-width: calc(320px + ${() => getScreenCalc()});
  border-right: 1px solid ${tableBorderColor};
  border-collapse: collapse;
  text-align: left;
  color: #3b3b3b;
  tr:nth-of-type(1){
    border-top: 0;
  }
`;

export const TH = styled.th<any>`
  border-bottom: .75px solid ${tableBorderColor};
  border-left: .75px solid ${Color(panelBorderColor).lighten(0.2).toString()};
  padding: 10px 
    ${(props) => { return props.isIndex ? '6px' : '13px'; }} 
    10px ${(props) => { return props.isIndex ? '27px' : '13px'; }};
  color: #525252;
`;

export const TR = styled.tr<any>`
  border-top: .75px solid ${tableBorderColor};
`;

export const TD = styled.td<any>`
  color: #525252;
  padding: 10px 
    ${(props) => { return props.isIndex ? '6px' : '13px'; }} 
    10px ${(props) => { return props.isIndex ? '27px' : '10px'; }};
  font-size: 13.5px;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; 
  max-width: 292px;
  &:hover {
    text-overflow: clip;
    white-space: normal;
    word-break: break-all;
  }
`;
