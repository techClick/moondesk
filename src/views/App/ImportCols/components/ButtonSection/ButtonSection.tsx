import React from 'react';
import { useDispatch } from 'react-redux';
import { InputError } from 'types/types';
import { getImportType } from 'views/App/utils/utils';
import { setInputError } from '../../redux';
import * as S from './ButtonSection.styled';
import { uploadStart } from './utils/utils';
import { getDataFromCSV, importType } from './utils/DataUtils';

const ButtonSection = function ButtonSection() {
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.Input
        size={600}
        type="file"
        id="uploadSheet"
        onChange={(e) => {
          dispatch(getDataFromCSV(e.target.files));
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
