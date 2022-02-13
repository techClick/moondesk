import styled, { keyframes } from 'styled-components';
import { containerPadding } from '../../styles';

const breatheAnimation = keyframes`
 0% { opacity: 0 }
 100% { opacity: 1 }`;

export const Container = styled.div<any>`
  width: 100%;
  height: 100%;
  padding: ${containerPadding};
  position: relative;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const WhiteCard = styled.div`
  background-color: white;
  padding-bottom: 40px;
  border-radius: 8px;
  width: 800px;
  max-height: 100%;
  border: 1px solid #c9c9c9;
  text-align: center;
  position: relative;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  animation-name: ${breatheAnimation};
  animation-duration: 0.45s;
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
