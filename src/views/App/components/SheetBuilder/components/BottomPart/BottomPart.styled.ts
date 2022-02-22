import styled from 'styled-components';
import { panelBorderColor } from 'views/App/styles';

export const Container = styled.div`
  display: flex;
`;

export const Line = styled.hr`
  height: 1px;
  width: 100%;
  position:absolute;
  border: 0;
  background-color: ${panelBorderColor};
  top: 165.4px;
  left: 0;
`;
