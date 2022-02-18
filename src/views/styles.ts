import styled from 'styled-components';

export const bigRes = 899.9999;
export const minRes = 599.9999;

export const RelativeContainer = styled.div<any>`
  height: 100%;
  position: relative;
  width: 100%;
  display: ${(props) => props.flex && 'flex'};
  align-items: ${(props) => props.flex && 'center'};
`;
