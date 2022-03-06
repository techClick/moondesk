import Color from 'color';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { containerPadding, panelBorderColor, textColor } from '../styles';

const breatheAnimation = keyframes`
 0% { opacity: 0 }
 100% { opacity: 1 }`;

export const Container = styled.div`
  padding-top: ${containerPadding};
`;

export const WhiteCard = styled.div<any>`
  border-radius: 4px;
  background: white;
  width: max-content;
  width: 90%;
  max-width: 500px;
  height: 236px;
  position: relative;
  margin: auto;
  text-align: center;
  animation-name: ${breatheAnimation};
  animation-duration: 0.1s;
  animation-iteration-count: 1;
  animation: all 0.05 ease-in;
  padding-bottom: 20px;
  border: 1px solid ${Color('white').darken(0.09).toString()};
`;

export const Header1 = styled.div<any>`
  font-weight: 700;
  font-size: 19px;
  margin: 20px auto;
  color: ${Color(textColor).lighten(0.2).toString()};
`;

export const Header = styled.div<any>`
  font-weight: 500;
  font-size: 14px;
  margin: auto;
  margin-top: 60px;
  margin-left: -310px;
  color: ${Color(textColor).lighten(0.7).toString()};
`;

export const IconCont = styled.div<any>`
  width: 100%;
  height: 100px;
  padding: 0 10px;
  margin-top: 7px;
  display: flex;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
`;

export const IconCont2 = styled<any>(Link)`
  background: ${Color(panelBorderColor).lighten(0.17).toString()};
  border-radius: 4px;
  padding-bottom: 5px;
  width: calc(25% - 19px);
  height: 100%;
  margin-left: 15px;
  text-align: center;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  text-decoration: none;
  color: ${textColor};
  cursor: pointer;
  &:hover {
    background: ${Color(panelBorderColor).lighten(0).toString()};
  }
`;

export const IconContMain = styled.div<any>`
  width: 80%;
  height: 70%;
  margin: auto;
  position: relative;
`;

export const IconDiv = styled.div<any>`
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%) scaleX(${(props) => { return props.biggerX ? 1.125 : 1; }});
  color: ${(props) => props.color && props.color};
`;

export const IconDesc = styled.div<any>`
  margin: auto;
  margin-top: 4px;
  font-size: 14px;
  font-weight: 700;
`;

export const Line = styled.hr`
  height: 1px;
  width: 100%;
  position:absolute;
  border: 0;
  background-color: ${Color(panelBorderColor).lighten(0.17).toString()};
  top: 60.4px;
  left: 0;
`;
