import styled from 'styled-components';
import { textColor } from '../../../styles';

const containerHeight = '150px';
export const Container = styled.div`
  height: ${containerHeight};
  display: flex;
  flex-direction: column;
`;

export const WCBottomPart = styled.div`
  height: ${containerHeight};
`;

export const TopInfo = styled.div`
  padding: 10px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  background: lightblue;
`;

export const InfoBottom = styled.div`
  flex: 1;
  background: lightgreen;
  display: flex;
`;

export const TILeftPart = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${textColor};
  float: left;
`;

export const TIRightPart = styled.div`
  float: right;
`;

export const IBLeftPart = styled.div`
  width: 60%;
  background: grey;
  display: flex;
`;

export const section = styled.div`
  width: calc(100% / 3);
  color: lightgrey;
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
