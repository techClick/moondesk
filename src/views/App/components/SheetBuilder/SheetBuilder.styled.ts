import styled, { keyframes } from 'styled-components';
import { containerPadding, panelBorderColor } from '../../styles';

const breatheAnimation = keyframes`
 0% { opacity: 0 }
 100% { opacity: 1 }`;

export const Container = styled.div<any>`
  width: 100%;
  height: 100%;
  padding: ${containerPadding};
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const WhiteCard = styled.div`
  padding-bottom: 20px; // should be changed for table
  border-radius: 2px;
  width: 755px;
  height: max-content;
  max-height: 100%;
  border: 1px solid ${panelBorderColor};
  text-align: center;
  position: relative;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  animation-name: ${breatheAnimation};
  animation-duration: 0.225s;
  animation-iteration-count: 1;
`;

export const ButtonDiv = styled.div`
  margin-bottom: ${containerPadding};
`;

export const BuilderDiv = styled.div`
  overflow: auto;
  width: 100%;
  flex: 1;
`;

export const BuilderDiv2 = styled.div`
  overflow: auto;
  width: 100%;
  flex: 1;
`;

export const WhiteCard2 = styled.div`
  padding: ${containerPadding};
  border-radius: 2px;
  width: 755px;
  height: max-content;
  max-height: 100%;
  border: 1px solid ${panelBorderColor};
  text-align: center;
  position: relative;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
`;
