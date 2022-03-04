import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import { InputError, DataSheet, ShowPopup } from 'types/types';
import { selectNewSheet, setNewSheet } from 'views/App/ImportCols/redux';
import { getCurrentTab, getImportType } from 'views/App/utils/utils';
import { setInputError } from '../../redux';
import * as S from './ButtonSection.styled';
import { getDataFromCSV, importType, uploadCSV } from './utils/utils';

const ButtonSection = function ButtonSection(
  { setShowPopup }
  :
  { setShowPopup: Function },
) {
  const newSheet = useAppSelector(selectNewSheet);
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
            (sheet: DataSheet[]) => (
              dispatch(setNewSheet({ ...newSheet, [getCurrentTab()]: sheet }))),
            (showPopup: ShowPopup) => dispatch(setShowPopup(showPopup)),
          );
          e.target.value = '';
        }}
      />
      <S.Button onClick={() => uploadCSV(
        (inputError: InputError) => dispatch(setInputError(inputError)),
      )}
      >
        {`Upload ${importType[getImportType()]}`}
      </S.Button>
    </S.Container>
  );
};

export default ButtonSection;
