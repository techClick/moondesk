import styled from 'styled-components';
import { panelBorderColor, textColor } from 'views/App/styles';

const containerHeight = '165.4px';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopInfo = styled.div`
  padding-top: 19px;
  padding-left: 25px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
`;

export const InfoBottom = styled.div`
  width: 100%;
  display: flex;
  padding-left: 12px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  position: relative;
`;

export const TILeftPart = styled.div`
  float: left;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const TIRightPart = styled.div`
  float: right;
`;

export const TILPTopPart = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${textColor};
`;

export const Line = styled.hr`
  height: 1px;
  width: 100%;
  position:absolute;
  border:0;
  background-color: ${panelBorderColor};
  top: ${containerHeight};
  left:0;
`;
