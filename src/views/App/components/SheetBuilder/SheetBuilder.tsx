import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import { selectShowSheetBuilder, setShowSheetBuilder } from '../../redux';
import { Button } from '../../styles';
import * as S from './SheetBuilder.styled';
import TopPart from './components/TopPart/TopPart';
import { getExitSheetBuilder } from './utils/utils';

const SheetBuilder = function SheetBuilder({ page }:{ page: string}) {
  const dispatch = useDispatch();
  const showSheetBuilder = useAppSelector(selectShowSheetBuilder);

  return (
    <S.Container>
      <S.ButtonDiv>
        <Button onClick={() => dispatch(
          setShowSheetBuilder(getExitSheetBuilder(showSheetBuilder, page)),
        )}
        >
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
