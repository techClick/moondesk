import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import * as S from './ActionBox.styled';
import { selectShowSheetBuilder, setShowSheetBuilder } from '../../redux';
import { MainButton } from '../../styles';
import { pagesAction } from './utils/utils';

const ActionBox = function ActionBox({ page }:{ page: string }) {
  const dispatch = useDispatch();
  const showSheetBuilder = useAppSelector(selectShowSheetBuilder);

  return (
    <S.FlexCont>
      <S.Icon isResources={page === 'resources'}>
        {pagesAction[page].icon}
      </S.Icon>
      <S.Action isResources={page === 'resources'}>
        <MainButton onClick={() => dispatch(setShowSheetBuilder({
          income: true,
          resources: showSheetBuilder.resources,
        }))}
        >
          {pagesAction[page].buttonText}
        </MainButton>
      </S.Action>
    </S.FlexCont>
  );
};

export default ActionBox;
