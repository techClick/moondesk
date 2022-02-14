import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretDown } from '@fortawesome/free-regular-svg-icons';
import * as S from './ColumnBuilder.styled';
import ButtonSection from './components/ButtonSection';

const ColumnBuilder = function ColumnBuilder() {
  const [input, setInput] = useState<any>({ Group: '', Source: '', Amount: '' });
  const [error, setError] = useState<any>({ Source: false, Amount: false });

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
                    let thisInput: any = [...fileHeader];
                    thisInput[0] = thisInput[0].toLowerCase();
                    thisInput = thisInput.join('');
                    setError({ ...error, [fileHeader]: false });
                    setInput({ ...input, [fileHeader]: thisInput });
                  }}
                >
                  <FontAwesomeIcon icon={faSquareCaretDown} size="2x" />
                </S.FillColumn>
              </S.ColumnName>
              <S.InputDiv isError={error[fileHeader]}>
                <S.Input
                  isError={error[fileHeader]}
                  value={input[fileHeader]}
                  onChange={(e: any) => {
                    setError({ ...error, [fileHeader]: false });
                    setInput({ ...input, [fileHeader]: e.target.value });
                  }}
                />
                { error[fileHeader] && <S.Required>Required</S.Required>}
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
