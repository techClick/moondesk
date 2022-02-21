import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor, topBarHeight } from 'views/App/styles';
import { bigRes } from 'views/styles';

export const Container = styled.div`
  display: flex;
`;

const getTableHeight = function getTableHeight() {
  const topBarHeightInt = Number(topBarHeight.replace('px', ''));
  const tableHeightInt = (window.innerHeight - 300)
    - (window.innerWidth < (bigRes + 0.0001) ? (topBarHeightInt + 10) : 0);
  const tableHeight = `${tableHeightInt}px`;
  // console.log('tableHeight', window.innerWidth, tableHeight);
  return tableHeight;
};

export const TableDiv = styled.div`
  width: max-content;
  max-width: 100%;
  display: flex;
  max-height: ${() => getTableHeight()};
  overflow: auto;
  margin-top: 23px;
  padding: 0 0px;
  position: relative;
  z-index: 2;
  border-bottom: 1px solid ${Color(panelBorderColor).lighten(0.1).toString()};
`;

const tableBorderColor = Color(panelBorderColor).lighten(0.1).toString();
const getScreenCalc = function getBigScreenCalc(): string {
  const bool = window.innerWidth > 700;
  const tenary = window.innerWidth - 700 > 400 ? 400 : window.innerWidth - 700;
  // console.log(window.innerWidth, `${bool ? tenary : 0}px`);
  return `${bool ? tenary : 0}px`;
};
export const Table = styled.table`
  max-width: 100%;
  min-width: calc(320px + ${() => getScreenCalc()});
  border-right: 1px solid ${tableBorderColor};
  border-bottom: 1px solid ${tableBorderColor};
  border-collapse: collapse;
  text-align: left;
  color: #3b3b3b;
  margin: auto;
  tr:nth-of-type(1){
    border-top: 0;
  }
`;

export const TH = styled.th<any>`
  border-top: 15px solid ${tableBorderColor};
  border-bottom: 15px solid ${tableBorderColor};
  border-left: .75px solid ${tableBorderColor};
  padding: 10px 13px;
  color: #525252;
`;

export const TR = styled.tr<any>`
  border-top: .75px solid #f2f2f2;
`;

export const TD = styled.td<any>`
  color: #525252;
  border-left: .75px solid ${tableBorderColor};
  padding: 13px 10px 13px 10px;  
  font-size:13.5px;
  position:relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; 
  max-width: 50px;
  &:hover {
    text-overflow: clip;
    white-space: normal;
    word-break: break-all;
  }
`;

export const Line = styled.hr`
  height: 1px;
  width: 100%;
  position:absolute;
  border: 0;
  background-color: ${panelBorderColor};
  top: 165.4px;
  left: 0;
`;
