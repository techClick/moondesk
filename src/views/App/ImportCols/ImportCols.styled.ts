import Color from 'color';
import styled from 'styled-components';
import { minRes } from 'views/styles';
import { containerPadding, panelBorderColor, textColor } from '../styles';

export const Container = styled.div<any>`
  padding: ${containerPadding} 0;
  height: 100%;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  @media(max-width: ${`${minRes}px`}) {
    padding: 10px 0;
  }
`;

export const WhiteCard = styled.div<any>`
  padding-bottom: 30px; //23.5px;
  border-radius: 4px;
  padding-top: 25px;
  background: white;
  width: calc(100% - 20px);
  max-width: 500px;
  height: max-content;
  max-height: 100%;
  position: relative;
  margin: auto;
  overflow-y: auto;
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
  background-color: ${Color(panelBorderColor).lighten(0.2).toString()};
  top: 63px;
  left: 0;
`;

export const Padding = styled.div<any>`
  margin-top: 43px;
`;

export const Header2 = styled.div`
  width: 100%;
  text-align: left;
  font-size: 18px;
  font-weight: 500;
  color: ${Color(textColor).lighten(0.2).toString()};
  padding: 26px 0;
  padding-left: 40px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  margin-top: 33px;
  border-top: 1px solid ${Color(panelBorderColor).lighten(0.2).toString()};
  border-bottom: 1px solid ${Color(panelBorderColor).lighten(0.2).toString()};
`;
