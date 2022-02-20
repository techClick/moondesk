import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor, textColor } from 'views/App/styles';

export const Container = styled.div`
  flex-grow: 1;
  margin-top: 23px;
  border-bottom: 1px solid ${Color(panelBorderColor).lighten(0.19).toString()};
  height: 86px;
  display: flex;
`;

export const GrossPartCont = styled.div`
  width: calc(100% - 130px);
  max-width: calc(100% - 130px);
  height: 100%;
  text-align: right;
`;

export const GrossPartCont1 = styled.div`
  width: max-content;
  max-width: 100%;
  padding-left: 30px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  height: 100%;
  display: inline-block;
`;

export const GrossPart = styled.div`
  width: 100%;
  height: calc(50% - 2px);
  border-bottom: 2px solid ${textColor};
  border-radius: 1px;
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
  margin-right: 50px;
  font-size: 24px;
  font-weight: 500;
  padding: 0;
  margin-top: -3px;
  max-width: 100%;
`;

export const GrossAmt = styled.div`
  display: inline-flex;
  height: 46px;
  overflow: hidden;
  overflow-x: auto;
  max-width: 250px;
  }
`;
