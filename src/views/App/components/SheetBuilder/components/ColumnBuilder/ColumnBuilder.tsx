import React, { useState } from 'react';
import { getStorageItem } from 'views/App/utils/utils';
import { SheetBuilderInput } from 'types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretDown } from '@fortawesome/free-regular-svg-icons';
import * as S from './ColumnBuilder.styled';
import ButtonSection from './components/ButtonSection';
import { saveColumnEntry } from './utils/utils';

const ColumnBuilder = function ColumnBuilder() {
  const [input, setInput] = useState<SheetBuilderInput>(
    JSON.parse(getStorageItem('columnEntry_income') || JSON.stringify({ source: '', amount: '' })),
  );
  const [error, setError] = useState<any>({ source: false, amount: false });

  return (
    <>
      {
        ['Group', 'Source', 'Amount'].map((fileHeader) => (
          <S.Container>
            <S.ColumnBuild>
              <S.ColumnName>
                {fileHeader}
                {fileHeader !== 'Group' && <> *</>}
                <S.FillColumn
                  onClick={() => {
                    const thisInput: any = fileHeader.toLowerCase();
                    saveColumnEntry(thisInput, thisInput);
                    setError({ ...error, [thisInput]: false });
                    setInput({ ...input, [thisInput]: thisInput });
                  }}
                >
                  <FontAwesomeIcon icon={faSquareCaretDown} size="2x" />
                </S.FillColumn>
              </S.ColumnName>
              <S.InputDiv isError={error[fileHeader.toLowerCase()]}>
                <S.Input
                  isError={error[fileHeader.toLowerCase()]}
                  value={input[fileHeader.toLowerCase()]}
                  onChange={(e: any) => {
                    const thisInput: any = fileHeader.toLowerCase();
                    saveColumnEntry(thisInput, e.target.value);
                    setError({ ...error, [thisInput]: false });
                    setInput({ ...input, [thisInput]: e.target.value });
                  }}
                />
                { error[fileHeader.toLowerCase()]
                  && <S.Required>{error[fileHeader.toLowerCase()]}</S.Required>}
              </S.InputDiv>
            </S.ColumnBuild>
          </S.Container>
        ))
      }
      <ButtonSection input={input} setError={setError} />
    </>
  );
};

export default ColumnBuilder;
