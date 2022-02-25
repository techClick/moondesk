import React from 'react';
import { useDispatch } from 'react-redux';
import { DataSheet, SheetBuilderInput, ShowPopup } from 'types/types';
import { setNewIncomeSheet } from 'views/App/redux';
import { Button } from 'views/App/styles';
import * as S from './ButtonSection.styled';
import { getDataFromCSV, uploadCSV, useDirectly } from './utils/utils';

const ButtonSection = function ButtonSection(
  { input, setError, setShowPopup }
  :
  { input: SheetBuilderInput, setError: Function, setShowPopup: Function },
) {
  const dispatch = useDispatch();

  return (
    <S.ButtonDiv>
      <S.RelativeDiv>
        <S.Input
          size={600}
          type="file"
          id="uploadSheet"
          onChange={(e) => {
            getDataFromCSV(
              e.target.files,
              (sheet: DataSheet) => dispatch(setNewIncomeSheet(sheet)),
              (showPopup: ShowPopup) => dispatch(setShowPopup(showPopup)),
            );
            e.target.value = '';
          }}
        />
        <Button onClick={() => uploadCSV(input, setError)}>
          Upload CSV
        </Button>
        <S.Button onClick={() => useDirectly(input, setError)}>
          Use directly
        </S.Button>
      </S.RelativeDiv>
    </S.ButtonDiv>
  );
};

export default ButtonSection;
