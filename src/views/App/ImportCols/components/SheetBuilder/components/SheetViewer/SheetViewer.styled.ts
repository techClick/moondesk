import Color from 'color';
import styled from 'styled-components';

export const WhiteCard = styled.div<any>`
  padding-bottom: ${(props) => { return props.hasTable ? '40px' : '30px'; }}; //23.5px;
  border-radius: 4px;
  background: white;
  width: 300px;
  height: max-content;
  max-height: 500px;
  margin-right: 5px;
  text-align: center;
  overflow: hidden;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  border: 1px solid ${Color('white').darken(0.09).toString()};
  padding: 20px 0;
`;
