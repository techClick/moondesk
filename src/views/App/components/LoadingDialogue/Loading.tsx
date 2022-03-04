import React from 'react';
import * as S from './Loading.styled';

const LoadingDialogue = function LoadingDialogue({ text }:{ text: string }) {
  return (
    <S.Container>{text}</S.Container>
  );
};

export default LoadingDialogue;
