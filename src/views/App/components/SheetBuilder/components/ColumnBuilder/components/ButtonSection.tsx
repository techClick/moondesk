import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { useDispatch } from 'react-redux';
import { Button, MainButton } from 'views/App/styles';
import { getCurrentTab } from 'views/App/components/utils/utils';
import { selectShowUploadPage, setShowUploadPage } from '../../../redux';
import * as S from './ButtonSection.styled';

const ButtonSection = function ButtonSection(
  { input, setError }
  :
  { input: any, setError: Function },
) {
  const showUploadPage = useAppSelector(selectShowUploadPage);
  const dispatch = useDispatch();
  const thisTab = getCurrentTab();

  const uploadCSV = function uploadCSV() {
    const errorTmp: any = { Source: false, Amount: false };
    if (!input.Amount) {
      errorTmp.Amount = true;
    }
    if (!input.Source) {
      errorTmp.Source = true;
    }
    setError(errorTmp);
    if (!errorTmp.Amount && !errorTmp.Source) {
      dispatch(setShowUploadPage({ ...showUploadPage, [thisTab]: true }));
    }
  };

  return (
    <S.ButtonDiv>
      <input disabled type="file" id="fileToUpload" className="form-control" />
      <S.RelativeDiv>
        <Button onClick={() => uploadCSV()}>
          Upload CSV
        </Button>
        <S.Button>
          Fill manually
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
