import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor, tableBorderColor } from 'views/App/styles';

export const Container = styled.div`
  // margin-top: 23px;
  border-top: 1px solid ${Color(tableBorderColor).lighten(0).toString()};
  border-bottom: 1px solid ${Color(tableBorderColor).lighten(0).toString()};
  height: 76px;
  display: flex;
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

export const MainButtonDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: 130px;
  border-left: 1px solid ${Color(panelBorderColor).lighten(0.2).toString()};
`;
