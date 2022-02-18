import styled from 'styled-components';
import { panelBorderColor } from 'views/App/styles';

export const Container = styled.div`
  flex-grow: 1;
  margin-top: 23px;
  border-bottom: 1px solid ${panelBorderColor};
  display: flex;
`;

export const GrossPartCont = styled.div`
  width: calc(100% - 100px);
  height: 100%;
  text-align: right;
`;

export const GrossPartCont1 = styled.div`
  width: max-content;
  max-width: 100%;
  padding-left: 30px;
  height: 100%;
  display: inline-block;
`;

export const GrossPart = styled.div`
  width: 100%;
  height: calc(50% - 2px);
  border-bottom: 2px solid ${panelBorderColor};
  position: relative;
`;

export const AbsolutePart = styled.div`
  position: absolute;
  bottom: 2px;
  width: 100%;
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
  margin-top: -4px;
  max-width: 100%;
`;

export const GrossAmt = styled.div`
  display: inline-flex;
  max-height: 50%;
  overflow: auto;
`;
