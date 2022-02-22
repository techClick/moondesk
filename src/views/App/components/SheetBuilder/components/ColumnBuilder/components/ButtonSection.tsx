import React from 'react';
import { useDispatch } from 'react-redux';
import { DataSheet, SheetBuilderInput } from 'types/types';
import { Button } from 'views/App/styles';
import { setNewIncomeSheet } from '../../../redux';
import * as S from './ButtonSection.styled';
import { getDataFromCSV, uploadCSV, useDirectly } from './utils/utils';

const ButtonSection = function ButtonSection(
  { input, setError } : { input: SheetBuilderInput, setError: Function },
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
