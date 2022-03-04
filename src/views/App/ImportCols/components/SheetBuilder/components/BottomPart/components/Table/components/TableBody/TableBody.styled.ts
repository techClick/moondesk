import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor, textColor } from 'views/App/styles';

const tableBorderColor = Color(panelBorderColor).lighten(0.1).toString();
export const TR = styled.tr<any>`
  border-top: .75px solid ${tableBorderColor};
  position: relative;
`;

export const TD = styled.td<any>`
  color: #525252;
  padding: 11px 
    ${(props) => { return props.isIndex ? '6px' : '13px'; }} 
    11px ${(props) => { return props.isIndex ? '27px' : '10px'; }};
  font-size: 14.5px;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; 
  max-width: 292px;
  &:hover {
    text-overflow: clip;
    white-space: normal;
    word-break: break-all;
  }
`;

export const IconsDiv = styled.td<any>`
  position: absolute;
  right: 0;
  bottom: 50%;
  transform: translateY(50%);
  display: flex;
  color: ${Color(panelBorderColor).darken(0.2).toString()};
  align-items: center;
`;

export const TrashIcon = styled.td<any>`
  border-radius: 4px;
  transform: scale(0.9);
  padding: 2px 5px;
  margin-right: 1px;
  margin-top: -2px;
  height: max-content;
  cursor: pointer;
  &:hover {
    background: ${Color('red').lighten(0.9).toString()};
    color: ${Color('red').lighten(0.5).toString()};
  }
`;

export const EditIcon = styled.td<any>`
  border-radius: 4px;
  transform: scale(0.9);
  padding: 2px 5px;
  margin-top: -2px;
  margin-right: 5px;
  height: max-content;
  cursor: pointer;
  &:hover {
    background: ${Color(panelBorderColor).lighten(0.1).toString()};
    color: ${textColor};
  }
`;

export const MenuIcon = styled.td<any>`
  border-radius: 4px;
  transform: scale(0.65, 0.7);
  padding: 6px 11px;
  margin-right: 3px;
  cursor: pointer;
  color: ${Color(panelBorderColor).darken(0.13).toString()};
  &:hover {
    background: ${Color(panelBorderColor).lighten(0.1).toString()};
    color: ${textColor};
  }
`;
