import styled from 'styled-components';
import { textColor } from '../../../../styles';

const containerHeight = '167px';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopInfo = styled.div`
  padding: 10px 0;
  padding-left: 20px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
`;

export const InfoBottom = styled.div`
  width: 100%;
  display: flex;
  padding-left: 5px;
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
  background-color: #c9c9c9;
  top: ${containerHeight};
  left:0;
`;
