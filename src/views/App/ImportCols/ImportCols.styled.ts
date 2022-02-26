import Color from 'color';
import styled from 'styled-components';
import { minRes } from 'views/styles';
import { containerPadding, panelBorderColor, textColor } from '../styles';

export const Container = styled.div<any>`
  margin-top: ${containerPadding};
  @media(max-width: ${`${minRes}px`}) {
    margin-top: 10px;
  }
`;

export const WhiteCard = styled.div<any>`
  padding-bottom: ${(props) => { return props.hasTable ? '40px' : '30px'; }}; //23.5px;
  border-radius: 4px;
  padding-top: 25px;
  background: white;
  width: max-content;
  width: calc(100% - 20px);
  max-width: 500px;
  height: max-content;
  position: relative;
  margin: auto;
  overflow: hidden;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border: 1px solid ${Color('white').darken(0.09).toString()};
`;

export const Header = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${Color(textColor).lighten(0.2).toString()};
  padding-left: 40px;
  width: max-content;
`;

export const Line = styled.hr`
  height: 1px;
  width: 100%;
  position:absolute;
  border: 0;
  background-color: ${Color(panelBorderColor).lighten(0.17).toString()};
  top: 63px;
  left: 0;
`;

export const Header2 = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${Color(textColor).lighten(0.2).toString()};
  padding-left: 40px;
  margin-top: 30px;
  width: max-content;
`;

export const Line2 = styled.hr`
  height: 1px;
  width: 100%;
  position:absolute;
  border: 0;
  background-color: ${Color(panelBorderColor).lighten(0.17).toString()};
  top: 440px;
  left: 0;
`;

export const DateCont = styled.div`
  background: lightgreen;
  width: 100%;
  height: 80px;
  margin-top: 60px;
  padding: 0px 40px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
`;

export const FromContainer = styled.div`
  background: lightblue;
  float: left;
  width: 80px;
  height: 100%;
`;

export const ToContainer = styled.div`
  background: lightblue;
  float: right;
  width: 80px;
  height: 100%;
`;
