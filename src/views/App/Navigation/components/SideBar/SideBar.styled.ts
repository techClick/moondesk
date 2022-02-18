import styled from 'styled-components';
import { sideBarColor } from 'views/App/styles';

export const Container = styled.div<any>`
  background: ${sideBarColor};
  width: max-content;
  height: 100%;
  padding: 12px 10px;
  position: ${(props) => { return props.isMobile ? 'absolute' : 'relative'; }};
  left: 0;
  top: 0;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  transform: translateX(${(props) => props.isMobile && '-100%'});
  z-index: 2;
`;
