import React from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentTab } from 'views/App/components/utils/utils';
import { MainButton } from 'views/App/styles';
import { setShowUploadPage } from '../../redux';
import * as S from './FileUploader.styled';

const FileUploader = function FileUploader() {
  const dispatch = useDispatch();

  const exitFromUploadPage = function exitFromUploadPage() {
    const exitUploadPage = { income: false, resources: false };
    dispatch(setShowUploadPage(exitUploadPage));
  };

  return (
    <S.Container>
      <S.Header>
        {`Uploading ${getCurrentTab()} file`}
      </S.Header>
      <S.UploadCont>
        <S.Label>
          <S.Input size={600} type="file" id="uploadSheet" />
        </S.Label>
        <S.UploadButtonDiv>
          <MainButton>
            Upload
          </MainButton>
        </S.UploadButtonDiv>
      </S.UploadCont>
      <S.BackButtonDiv>
        <S.Button onClick={() => exitFromUploadPage()}>
          Back
        </S.Button>
      </S.BackButtonDiv>
    </S.Container>
  );
};

export default FileUploader;
