import Color from 'color';
import styled from 'styled-components';
import { topBarColor } from 'views/App/styles';

export const Tab = styled.div<any>`
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
  cursor: pointer;
  &:hover {
    background: ${Color('#1c3f5f').lighten(0.25).toString()};
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
`;

export const Label = styled.div<any>`
  font-weight: 400;
  font-size: 15px;
  margin-left: 7px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
`;
