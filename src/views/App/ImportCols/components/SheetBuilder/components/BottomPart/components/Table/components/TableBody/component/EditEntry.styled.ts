import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor, textColor, topBarColor } from 'views/App/styles';

export const ContainerMain = styled.div`
  width: calc(100% - 20px);
  max-width: 240px;
  height: max-content;
  background: white;
  position: fixed;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
  z-index: 4;
  border-radius: 4px;
`;

export const FieldCont = styled.div`
  margin-top: 29px;
`;

export const Container = styled.div`
  width: 87.2%;
  min-width: 200px;
  color: lightgrey;
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`;

export const Section = styled.div`
  width: 98%;
  border-radius: 2px;
  padding-left: 33px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

export const SectionName = styled.div`
  width: 100%;
  color: ${textColor};
  padding-bottom: 3px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  text-align: left;
  position: relative;
`;

export const Fill = styled.div`
  position: absolute;
  color: ${Color(textColor).lighten(0.1).toString()};
  right: -6.5px;
  top: -3px;
  width: 30px;
  height: 100%;
  text-align: right;
  transform: scale(0.6);
  cursor: pointer;
  &:hover {
    color: ${topBarColor};
  }
`;

export const InputDiv = styled.div<any>`
  display: flex;
  width: 100%;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  //padding-left: 5px;
  border-left: ${(props) => props.isError && '1px solid red'};
  position: relative;
`;

export const Input = styled.input<any>`
  width: 100%;
  height: 32px;
  border-radius: 2px;
  padding-left: 5px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border: 1px solid ${Color(panelBorderColor).darken(0.05).toString()};
  border: ${(props) => props.isError && '1px solid red'};
`;

export const Required = styled.div`
  display: flex;
  font-size: 11px;
  height: 14px;
  position: absolute;
  bottom: -13px;
  left: -2px;
  color: red;
  width: 150%;
`;

export const MainButtonDiv = styled.div<any>`
  height: 100%;
  display: flex;
  justify-content: center;
  width: 140px;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 30px;
`;
