import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor, tableBorderColor, textColor, topBarHeight } from 'views/App/styles';
import { bigRes } from 'views/styles';

const getTableHeight = function getTableHeight() {
  const topBarHeightInt = Number(topBarHeight.replace('px', ''));
  const tableHeightInt = (window.innerHeight - 385)
    - (window.innerWidth < (bigRes + 0.0001) ? (topBarHeightInt + 10) : 0);
  const tableHeight = `${tableHeightInt}px`;
  return tableHeight;
};

export const Container = styled.div<any>`
  // width: max-content;
  width: 101%;
  display: flex;
  max-height: ${() => getTableHeight()};
  overflow: auto;
  margin-top: 23px;
  padding: 0 0px;
  position: relative;
  z-index: 2;
`;

export const TableDiv = styled.div<any>`
  text-align: left;
  margin-left: -1px;
  width: 102%;
`;

const getScreenCalc = function getBigScreenCalc(): string {
  return window.innerWidth > 600 ? '150px' : '0px';
};
export const Table = styled.table`
  // min-width: calc(320px + ${() => getScreenCalc()});
  min-width: 100%;
  width: max-content;
  border-top: 1px solid ${tableBorderColor};
  // border-right: 1px solid ${tableBorderColor};
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
  padding: 12px 
    ${(props) => { return props.isIndex ? '6px' : '13px'; }} 
    12px ${(props) => { return props.isIndex ? '27px' : '13px'; }};
  color: ${textColor};
  font-size: 15px;
`;

export const TR = styled.tr<any>`
  border-top: .75px solid ${tableBorderColor};
  position: relative;
`;
