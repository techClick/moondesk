import React, { useState } from 'react';
import { getStorageItem } from 'views/App/utils/utils';
import { getCurrentTab } from 'views/App/utils/utils';
import { useAppSelector } from 'redux/hooks';
import { useDispatch } from 'react-redux';
import { ColumnBuilderInput, InputErrorCB } from 'types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretDown } from '@fortawesome/free-regular-svg-icons';
import * as S from './ColumnBuilder.styled';
import { saveColumnEntry } from './utils/utils';
import { selectInputError, setInputError } from '../../redux';

const ColumnBuilder = function ColumnBuilder() {
  const [input, setInput] = useState<ColumnBuilderInput>(
    JSON.parse(getStorageItem(`columnEntry_${getCurrentTab()}`) || JSON.stringify({ source: '', amount: '' })),
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
                {fileHeader}
                {!['Group', 'Timestamp'].includes(fileHeader) && <> *</>}
                <S.FillColumn
                  onClick={() => {
                    const thisInput: any = fileHeader.toLowerCase();
                    saveColumnEntry(thisInput, thisInput);
                    dispatch(setInputError({ ...inputError, [thisInput]: null }));
                    setInput({ ...input, [thisInput]: thisInput });
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
                    saveColumnEntry(thisInput, e.target.value);
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