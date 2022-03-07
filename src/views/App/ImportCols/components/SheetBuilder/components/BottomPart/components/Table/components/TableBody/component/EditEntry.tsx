import React, { useState } from 'react';
import { getStorageItem } from 'views/App/utils/utils';
import { getRowEntryId } from 'views/App/utils/GlobalUtils';
import { getFieldName } from 'views/App/ImportCols/components/ColumnBuilder/utils/utils';
import { RowBuilderInput, InputError } from 'types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretDown } from '@fortawesome/free-regular-svg-icons';
import { MainButton } from 'views/App/styles';
import * as S from './EditEntry.styled';
import { saveEdit } from './utils';

const EditEntry = function EditEntry() {
  const [input, setInput] = useState<RowBuilderInput>({});
  const [inputError, setInputError] = useState<InputError>({});

  return (
    <S.ContainerMain>
      <S.FieldCont>
        {
          ['Group', 'Source', 'Amount'].map((fileHeader, i) => (
            <S.Container key={`columnbuilder${i}`}>
              <S.Section>
                <S.SectionName>
                  {getFieldName(fileHeader)}
                  {!['Group', 'Timestamp'].includes(fileHeader) && <> *</>}
                  { fileHeader !== 'Amount' && (
                    <S.Fill
                      onClick={() => {
                        const thisInput: any = fileHeader.toLowerCase();
                        setInputError({ ...inputError, [thisInput]: false });
                        setInput({ ...input, [thisInput]: getFieldName(fileHeader).toLowerCase() });
                      }}
                    >
                      <FontAwesomeIcon icon={faSquareCaretDown} size="2x" />
                    </S.Fill>
                  )}
                </S.SectionName>
                <S.InputDiv isError={inputError[fileHeader.toLowerCase()]}>
                  <S.Input
                    isError={inputError[fileHeader.toLowerCase()]}
                    value={input[fileHeader.toLowerCase()]}
                    onChange={(e: any) => {
                      const thisInput: any = fileHeader.toLowerCase();
                      setInputError({ ...inputError, [thisInput]: false });
                      setInput({ ...input, [thisInput]: e.target.value });
                    }}
                  />
                  { inputError[fileHeader.toLowerCase()]
                    && <S.Required>{inputError[fileHeader.toLowerCase()]}</S.Required>}
                </S.InputDiv>
              </S.Section>
            </S.Container>
          ))
        }
      </S.FieldCont>
      <S.MainButtonDiv>
        <MainButton onClick={() => saveEdit(input, setInputError)}>
          Save
        </MainButton>
      </S.MainButtonDiv>
    </S.ContainerMain>
  );
};

export default EditEntry;
