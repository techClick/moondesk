import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor } from 'views/App/styles';

export const Container = styled.div`
  background: white;
  width: 90%;
  max-width: 400px;
  padding: 20px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  position: absolute;
  z-index: 5;
  margin: auto;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 35%);
  border-radius: 4px;
`;

export const Header = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const Info = styled.div`
  font-size: 14px;
  color: ${Color(panelBorderColor).darken(0.3).toString()};
  margin-bottom: 4px;
`;

export const LabelCont = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const Label = styled.div`
  padding: 2.5px 5px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 500;
  background: ${Color(panelBorderColor).lighten(0.15).toString()};
  width: max-content;
`;

export const Extra = styled.div`
  display: inline;
  margin-left: 5px;
`;

export const Info2 = styled.div`
  font-size: 14px;
  // margin: auto;
  width: max-content;
  // color: ${Color(panelBorderColor).darken(0.3).toString()};
  margin-top: 40px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const Button = styled.div`
  position: absolute;
  right: 0;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  padding: 8px 20px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 12px;
  width: max-content;
  height: max-content;
  // margin-left: 5px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: ${Color(panelBorderColor).lighten(0.2).toString()};
  }
`;
