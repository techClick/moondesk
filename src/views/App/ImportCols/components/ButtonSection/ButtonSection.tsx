import React from 'react';
import { useDispatch } from 'react-redux';
import { DataSheet, InputErrorCB, ShowPopup } from 'types/types';
import { setNewIncomeSheet } from 'views/App/redux';
import { Button } from 'views/App/styles';
import { setInputError } from '../../redux';
import * as S from './ButtonSection.styled';
import { getDataFromCSV, uploadCSV } from './utils/utils';

const ButtonSection = function ButtonSection(
  { setShowPopup }
  :
  { setShowPopup: Function },
) {
  const dispatch = useDispatch();

  return (
    <S.Container>
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
      <Button onClick={() => uploadCSV(
        (inputError: InputErrorCB) => dispatch(setInputError(inputError)),
      )}
      >
        Upload CSV
      </Button>
    </S.Container>
  );
};

export default ButtonSection;