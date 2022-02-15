import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor, textColor } from 'views/App/styles';

export const Container = styled.div<any>`
  width: 100%;
  text-align: left;
  position: relative;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  padding: 0 15px;
  margin-top: -5px;
`;

export const Header = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 40px;
  color: ${Color(textColor).lighten(0.5).toString()};
`;

export const UploadCont = styled.div`
  display: flex;
  width: max-content;
  position: relative;
`;

export const Label = styled.div`
  width: 190px;
  overflow: hidden;
  padding: 1px 0;
  cursor: pointer;
`;

export const Input = styled.input`
`;

export const BackButtonDiv = styled.div`
  position: absolute;
  right: 20px;
  bottom: 0;
`;

export const Button = styled.div`
  border: 1px ${textColor} solid;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  padding: 8px 20px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 12px;
  width: max-content;
  height: max-content;
  margin-left: 13px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: ${Color(panelBorderColor).lighten(0.1).toString()};
    color: ${Color(textColor).darken(0.2).toString()};
  }
`;

export const UploadButtonDiv = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translateX(105%);
`;
