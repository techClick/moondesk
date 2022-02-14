import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import { selectShowSheetBuilder, setShowSheetBuilder } from '../../redux';
import { selectShowUploadPage } from './redux';
import { Button } from '../../styles';
import * as S from './SheetBuilder.styled';
import TopPart from './components/TopPart/TopPart';
import { getExitSheetBuilder } from './utils/utils';
import TablePart from './components/TablePart/TablePart';
import { getCurrentTab } from '../utils/utils';

const SheetBuilder = function SheetBuilder() {
  const dispatch = useDispatch();
  const showSheetBuilder = useAppSelector(selectShowSheetBuilder);
  const showUploadPage = useAppSelector(selectShowUploadPage);
  const thisTab = getCurrentTab();

  return (
    <S.Container>
      <S.ButtonDiv>
        <Button onClick={() => dispatch(
          setShowSheetBuilder(getExitSheetBuilder(showSheetBuilder)),
        )}
        >
          {`Back to ${thisTab} data`}
        </Button>
      </S.ButtonDiv>
      { showUploadPage[thisTab] ? (
        <S.BuilderDiv>
          <S.WhiteCard2 />
        </S.BuilderDiv>
      ) : (
        <S.BuilderDiv2>
          <S.WhiteCard>
            <TopPart />
            <TablePart />
          </S.WhiteCard>
        </S.BuilderDiv2>
      )}
    </S.Container>
  );
};

export default SheetBuilder;
