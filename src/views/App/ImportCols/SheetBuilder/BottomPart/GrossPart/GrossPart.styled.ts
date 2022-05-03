import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor, tableBorderColor } from 'views/App/styles';

export const Container = styled.div<any>`
  border-top: 1px solid ${Color(tableBorderColor).lighten(0).toString()};
  border-bottom: 1px solid ${Color(tableBorderColor).lighten(0).toString()};
  border-bottom: ${(props) => props.isNoGross && 'none'};
  height: max-content;
`;

export const TotalContainer = styled.div`
  border-bottom: 1px solid ${Color(tableBorderColor).lighten(0).toString()};
  height: 40px;
  width: 100%;
`;

export const TotalCont1 = styled.div`
  width: 46.5%;
  float: right;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
  border-left: 1px solid ${Color(tableBorderColor).lighten(0).toString()};
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  position: relative;
`;

export const TotalLabelCont = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 6px;
  transform: translateX(-100%);
  font-size: 12px;
  font-weight: 700;
  color: ${Color(panelBorderColor).darken(0.15).toString()};
`;

export const TotalCont2 = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: -3px;
`;

export const FlexContainer = styled.div<any>`
  display: flex;
  height: ${(props) => { return props.isNoGross ? 'max-content' : '76px'; }};
`;

export const GrossPartCont = styled.div`
  height: 100%;
  text-align: right;
`;

export const GrossPartCont1 = styled.div`
  width: max-content;
  max-width: 100%;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  height: 100%;
  max-height: 100%;
  display: inline-block;
`;

export const GrossPart = styled.div`
  width: 100%;
  height: calc(50% - 2px);
  padding-left: 30px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border-bottom: 1px solid ${tableBorderColor};
  position: relative;
`;

export const AbsolutePart = styled.div`
  position: absolute;
  bottom: 2px;
  width: 100%;
  color: ${Color(panelBorderColor).darken(0.15).toString()};
  text-align: left;
  font-size: 13px;
  font-weight: 700;
`;

export const GrossAmtPart = styled.div`
  text-align: left;
  margin-right: 30px;
  font-size: 20px;
  font-weight: 500;
  padding: 0;
  margin-top: 0px;
  max-width: 100%;
`;

export const GrossAmt = styled.div`
  display: inline-flex;
  height: 48px;
  white-space: nowrap;
  padding-left: 30px;
  overflow: hidden;
  overflow-x: auto;
  max-width: 720px;
  }
`;

export const MainButtonDiv = styled.div<any>`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: 140px;
  border-left: 1px solid ${Color(panelBorderColor).lighten(0.2).toString()};
  margin-top: ${(props) => props.isNoGross && '16px'};
`;
