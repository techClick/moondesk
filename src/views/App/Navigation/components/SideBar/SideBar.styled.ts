import styled from 'styled-components';

export const Container = styled.div<any>`
  background: #1c3f5f;
  width: 148px;
  height: 100%;
  padding: 12px;
  position: ${(props) => { return props.isMobile ? 'absolute' : 'relative'; }};
  left: 0;
  top: 0;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  transform: translateX(${(props) => props.isMobile && '-100%'});
  z-index: 2;
`;
