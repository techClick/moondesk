import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { useDispatch } from 'react-redux';
import { Button, MainButton } from 'views/App/styles';
import { getCurrentTab } from 'views/App/components/utils/utils';
import { selectShowUploadPage, setShowUploadPage } from 'views/App/components/SheetBuilder/redux';
import * as S from './ButtonSection.styled';
import { getError } from './utils/utils';

const ButtonSection = function ButtonSection(
  { input, setError } : { input: any, setError: Function },
) {
  const showUploadPage = useAppSelector(selectShowUploadPage);
  const dispatch = useDispatch();
  const thisTab = getCurrentTab();

  const uploadCSV = function uploadCSV() {
    const errorTmp = getError(input);
    setError(errorTmp);
    if (!errorTmp.amount && !errorTmp.source) {
      dispatch(setShowUploadPage({ ...showUploadPage, [thisTab]: true }));
    }
  };

  const useDirectly = function useDirectly() {
    const errorTmp = getError(input);
    if (isNaN(Number(input.amount))) errorTmp.amount = 'Numbers only';
    if (input.amount.includes('-') || input.amount.includes('+')) errorTmp.amount = 'Don\'t use operators';
    if (input.amount.includes('e')) errorTmp.amount = 'Numbers only';
    setError(errorTmp);
    if (!errorTmp.amount && !errorTmp.source) {
      // proceed
    }
  };

  return (
    <S.ButtonDiv>
      <S.RelativeDiv>
        <Button onClick={() => uploadCSV()}>
          Upload CSV
        </Button>
        <S.Button onClick={() => useDirectly()}>
          Use directly
        </S.Button>
        <S.MainButtonDiv>
          <MainButton>
            Save
          </MainButton>
        </S.MainButtonDiv>
      </S.RelativeDiv>
    </S.ButtonDiv>
  );
};

export default ButtonSection;
