import Color from 'color';
import styled from 'styled-components';
import { sideBarColor, textColor, topBarColor } from 'views/App/styles';

export const BottomTab = styled.div<any>`
  width: max-content;
  min-width: 100%;
  padding: 10px 8px;
  display: flex;
  align-items: center;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  color: ${(props) => { return props.isSelected ? topBarColor : 'white'; }};
  border-radius: 3px;
  margin-bottom: 1px;
  position: absolute;
  bottom: 0px;
  left: 0;
  cursor: pointer;
  &:hover {
    background: ${Color(sideBarColor).lighten(0.25).toString()};
  }
`;

export const Icon = styled.div<any>`
  width: 23px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  margin-right: ${(props) => props.morePadding && '7px'};
`;

export const Label = styled.div<any>`
  font-weight: 400;
  font-size: 15px;
  margin-left: 7px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
`;

export const Description = styled.div`
  padding: 5px 10px;
  padding-top: 3px;
  font-size: 12px;
  font-weight: 500;
  background: white;
  position: absolute;
  right: 0;
  bottom: 50%;
  transform: translate(calc(100% + 30px), 50%);
  color: ${textColor};
  border-radius: 3px;
  opacity: 0;
  border: 1px solid ${Color('white').darken(0.1).toString()}};
  transition: all 0.1s ease-in;
`;
