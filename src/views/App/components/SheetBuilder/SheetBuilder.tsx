import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import { selectShowSheetBuilder, setShowSheetBuilder } from '../../redux';
import { setShowUploadPage } from './redux';
import { Button } from '../../styles';
import * as S from './SheetBuilder.styled';
import TopPart from './components/TopPart/TopPart';
import { getExitSheetBuilder } from './utils/utils';
import TablePart from './components/TablePart/TablePart';
import { getCurrentTab } from '../utils/utils';

const SheetBuilder = function SheetBuilder() {
  const dispatch = useDispatch();
  const showSheetBuilder = useAppSelector(selectShowSheetBuilder);
  const thisTab = getCurrentTab();

  return (
    <S.Container>
      <S.ButtonDiv>
        <Button onClick={() => {
          dispatch(setShowSheetBuilder(getExitSheetBuilder(showSheetBuilder)));
          const exitShowUploadPage = { income: false, resources: false };
          dispatch(setShowUploadPage(exitShowUploadPage));
        }}
        >
          {`Back to ${thisTab} data`}
        </Button>
      </S.ButtonDiv>
      <S.BuilderDiv>
        <S.WhiteCard>
          <TopPart />
          <TablePart />
        </S.WhiteCard>
      </S.BuilderDiv>
    </S.Container>
  );
};

export default SheetBuilder;
