import Color from 'color';
import styled from 'styled-components';
import { panelBorderColor, textColor } from 'views/App/styles';

const tableBorderColor = Color(panelBorderColor).lighten(0.1).toString();
export const TR = styled.tr<any>`
  border-top: .75px solid ${Color(tableBorderColor).lighten(0.055).toString()};
  position: relative;
`;

export const TD = styled.td<any>`
  color: #525252;
  padding: 11px 
    ${(props) => {
    const tenary1 = props.isAmount ? '33px' : '13px';
    return props.isIndex ? '10px' : tenary1;
  }} 
    11px ${(props) => { return props.isIndex ? '27px' : '10px'; }};
  font-size: 14.5px;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 132px;
  &:hover {
    text-overflow: clip;
    white-space: normal;
    word-break: break-all;
  }
`;

export const IconsDiv = styled.div<any>`
  position: absolute;
  right: 0;
  bottom: 50%;
  transform: translateY(50%);
  display: flex;
  color: ${Color(panelBorderColor).darken(0.2).toString()};
  align-items: center;
  background: white;
  padding-left: 8px;
  height: 100%;
`;

export const TrashIcon = styled.div<any>`
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

export const EditIcon = styled.div<any>`
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

export const MenuIcon = styled.div<any>`
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
