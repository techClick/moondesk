import styled, { keyframes } from 'styled-components';

const breatheAnimation = keyframes`
 0% { opacity: 0 }
 100% { opacity: 1 }`;

export const Container = styled.div<any>`
  width: 100%;
  height: 80%;
  padding: 0 20px 20px 20px;
  position: relative;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
`;

export const WhiteCard = styled.div`
  background-color: white;
  padding: 0px;
  padding-bottom: 70px;
  border-radius: 8px;
  margin-top: 40px;
  margin-bottom: 0px;
  width: 800px;
  height: 100%;
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

export const Line = styled.hr`
  height: 1px;
  width: 100%;
  position:absolute;
  border:0;
  background-color: #c9c9c9;
  top: 66px;
  left:0;
`;
