import Color from 'color';
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

export const ButtonDiv = styled.div`
  margin-bottom: ${containerPadding};
`;

export const BuilderDiv = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const contentDiv = styled.div`
  height: max-content;
  max-height: 100%;
  overflow: auto;
`;

export const WhiteCard = styled.div`
  padding-bottom: 40px; //23.5px;
  border-radius: 4px;
  width: 70%;
  background: white;
  min-width: 830px;
  height: max-content;
  max-height: 100%;
  text-align: center;
  position: relative;
  animation-name: ${breatheAnimation};
  animation-duration: 0.1s;
  animation-iteration-count: 1;
  overflow: hidden;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border: 1px solid ${Color('white').darken(0.09).toString()};
`;

export const Line = styled.div`
  height: 2px;
  width: 100%;
  background: white;
  position:absolute;
  border-top: 1px solid ${panelBorderColor};
  bottom: -2px;;
  left:0;
  z-index: 3;
`;

export const BuilderDiv2 = styled.div`
  overflow: auto;
  width: 100%;
  flex: 1;
`;

export const WhiteCard2 = styled.div`
  padding: ${containerPadding};
  border-radius: 2px;
  width: 555px;
  height: max-content;
  max-height: 100%;
  border: 1px solid ${panelBorderColor};
  text-align: center;
  position: relative;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
`;
