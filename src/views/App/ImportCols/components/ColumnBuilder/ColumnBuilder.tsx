import React, { useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import { useDispatch } from 'react-redux';
import { getStorageItem } from 'views/App/utils/utils';
import { getRowEntryId } from 'views/App/utils/GlobalUtils';
import { RowBuilderInput, InputErrorCB } from 'types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretDown } from '@fortawesome/free-regular-svg-icons';
import * as S from './ColumnBuilder.styled';
import { getFieldName, saveRowEntry } from './utils/utils';
import { selectInputError, setInputError } from '../../redux';

const ColumnBuilder = function ColumnBuilder() {
  const [input, setInput] = useState<RowBuilderInput>(
    JSON.parse(getStorageItem(getRowEntryId()) || JSON.stringify({ source: '', amount: '' })),
  );
  const inputError: InputErrorCB = useAppSelector(selectInputError);
  const dispatch = useDispatch();

  return (
    <S.ContainerMain>
      {
        ['Group', 'Source', 'Amount', 'Timestamp'].map((fileHeader) => (
          <S.Container>
            <S.ColumnBuild>
              <S.ColumnName>
                {getFieldName(fileHeader)}
                {!['Group', 'Timestamp'].includes(fileHeader) && <> *</>}
                <S.FillColumn
                  onClick={() => {
                    const thisInput: any = fileHeader.toLowerCase();
                    saveRowEntry(thisInput, thisInput);
                    dispatch(setInputError({ ...inputError, [thisInput]: null }));
                    setInput({ ...input, [thisInput]: getFieldName(fileHeader).toLowerCase() });
                  }}
                >
                  <FontAwesomeIcon icon={faSquareCaretDown} size="2x" />
                </S.FillColumn>
              </S.ColumnName>
              <S.InputDiv isError={inputError[fileHeader.toLowerCase()]}>
                <S.Input
                  isError={inputError[fileHeader.toLowerCase()]}
                  value={input[fileHeader.toLowerCase()]}
                  onChange={(e: any) => {
                    const thisInput: any = fileHeader.toLowerCase();
                    saveRowEntry(thisInput, e.target.value);
                    dispatch(setInputError({ ...inputError, [thisInput]: null }));
                    setInput({ ...input, [thisInput]: e.target.value });
                  }}
                />
                { inputError[fileHeader.toLowerCase()]
                  && <S.Required>{inputError[fileHeader.toLowerCase()]}</S.Required>}
              </S.InputDiv>
            </S.ColumnBuild>
          </S.Container>
        ))
      }
    </S.ContainerMain>
  );
};

export default ColumnBuilder;
