import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../redux/hooks';
import { selectShowSheetBuilder, setShowSheetBuilder } from '../../redux';
import { Button } from '../../styles';
import * as S from './SheetBuilder.styled';
import TopPart from './components/TopPart/TopPart';

const SheetBuilder = function SheetBuilder({ page }:{ page: string}) {
  const dispatch = useDispatch();
  const showSheetBuilder = useAppSelector(selectShowSheetBuilder);

  const exitShowSheetBuilder: typeof showSheetBuilder = {
    income: showSheetBuilder.income,
    resources: showSheetBuilder.resources,
  };
  exitShowSheetBuilder[page] = null;

  return (
    <S.Container>
      <S.ButtonDiv>
        <Button onClick={() => dispatch(setShowSheetBuilder(exitShowSheetBuilder))}>
          Back to income data
        </Button>
      </S.ButtonDiv>
      <S.BuilderDiv>
        <S.WhiteCard>
          <TopPart page={page} />
        </S.WhiteCard>
      </S.BuilderDiv>
    </S.Container>
  );
};

export default SheetBuilder;
