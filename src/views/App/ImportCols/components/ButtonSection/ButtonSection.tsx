import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/hooks';
import { InputError, Sheets, ShowPopup } from 'types/types';
import {
  selectShowSheetBuilder, setNewSheet, setShowPopup, setShowSheetBuilder,
} from 'views/App/ImportCols/redux';
import { getCurrentTab, getImportType } from 'views/App/utils/utils';
import { setInputError } from '../../redux';
import * as S from './ButtonSection.styled';
import { uploadStart } from './utils/utils';
import { getDataFromCSV, importType } from './utils/DataUtils';

const ButtonSection = function ButtonSection() {
  const showSheetBuilder = useAppSelector(selectShowSheetBuilder);
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
            (sheets: Sheets) => {
              dispatch(setNewSheet(sheets));
              dispatch(setShowSheetBuilder({ ...showSheetBuilder, [getCurrentTab()]: true }));
            },
            (showPopup: ShowPopup) => dispatch(setShowPopup(showPopup)),
          );
          e.target.value = '';
        }}
      />
      <S.Button onClick={() => uploadStart(
        (inputError: InputError) => dispatch(setInputError(inputError)),
      )}
      >
        {`Upload ${importType[getImportType()]}`}
      </S.Button>
    </S.Container>
  );
};

export default ButtonSection;
