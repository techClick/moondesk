import Color from 'color';
import styled from 'styled-components';
import { containerPadding, textColor, topBarColor } from '../styles';

export const Container = styled.div`
  padding: ${containerPadding};
`;

export const WhiteCard = styled.div`
  padding: 11px 19.75px;
  border-radius: 4px;
  width: max-content;
  max-width: 70%;
  background: white;
  height: max-content;
  max-height: 100%;
  text-align: center;
  position: relative;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border: 1px solid ${Color('white').darken(0.1).toString()};
`;

export const WhiteCard2 = styled.div`
  padding: 0px 20px; // 18px 20px;
  padding-top: 10px;
  border-radius: 4px;
  width: max-content;
  background: white;
  height: 1px;
  overflow: hidden;
  text-align: center;
  position: relative;
  border: 1px solid ${Color('white').darken(0.1).toString()};
  transition: all 0.05s ease-out;
`;

export const FlexCont = styled.div`
  display: flex;
  align-items: center;
`;

export const ChangeCurrency = styled.div`
  font-weight: 700;
  font-size: 15px;
  color: ${Color(textColor).darken(0.1).toString()};
  width: max-content;
`;

export const Icon = styled.div`
  padding-top: 2px;
  padding-left: 0;
  width: 20px;
  height: 20px;
  margin-left: 18px;
  color: ${Color(textColor).darken(0.1).toString()};
  text-align: right;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: ${topBarColor};
  }
`;

export const NewCurrency = styled.div`
  padding: 0;
  font-weight: 500;
  font-size: 13px;
  color: ${Color(textColor).lighten(0.3).toString()};
  width: max-content;
  margin-bottom: 25px; 
`;

export const Input = styled.input<any>`
  width: 80px;
  padding: 4px 0;
  padding-left: 5px;
  border-radius: 2px;
  border-color: ${(props) => props.isError && 'red'};
  outline: ${(props) => props.isError && 'none'};
  &:focus {
    border-color: black;
  }
`;

export const ButtonDiv = styled.div`
  margin-left: 15px;
`;

export const Button = styled.div`
  color: ${topBarColor};
  border: 1px ${topBarColor} solid;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  padding: 3px 10px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  width: max-content;
  height: max-content;
  cursor: pointer;
  &:hover {
    background: ${Color(topBarColor).lighten(0.55).toString()};
    color: ${Color(topBarColor).darken(0.35).toString()};
  }
`;

export const Required = styled.div`
  font-size: 12px;
  color: red;
  width: max-content;
`;
