import Color from 'color';
import styled from 'styled-components';
import { textColor, topBarColor } from 'views/App/styles';
import { minRes } from 'views/styles';

export const Container = styled.div`
  width: 84%;
  height: max-content;
  background: white;
  margin-left: 40px;
  margin-bottom: 25px;
  margin-top: 35px;
  padding: 22px;
  padding-top: 24px;
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
  box-shadow: 0px 0px 2px 0.55px ${Color('white').darken(0.14).toString()};
  font-size: 15px;
  color: ${Color(textColor).lighten(0.15).toString()};
  display: flex;
  border-radius: 4px;
  @media(max-width: ${`${minRes}px`}) {
    width: 77%;
  }
`;

export const LeftSide = styled.div`
  width: 30px;
`;

export const RightSide = styled.div`
  width: calc(100% - 30px);
  height: max-content;
`;

export const IconContainer = styled.div`
  color: #d4a650;
`;

export const MoreInfo = styled.div`
  font-size: 13px;
  margin-top: 12px;
`;

export const CloseCont = styled.div`
  height: 25px;
  margin-top: 12px;
  width: 100%;
  position: relative;
`;

export const Close = styled.div`
  color: ${topBarColor};
  position: absolute;
  right: 0;
  bottom; 0;
  padding: 5px 20px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: ${Color(topBarColor).darken(0.2).toString()};
    background: ${Color(topBarColor).lighten(0.7).toString()};
  }
`;
