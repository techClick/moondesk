import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { getCurrentTab } from 'views/App/components/utils/utils';
import { selectShowUploadPage } from '../../redux';
import * as S from './TopPart.styled';
import ColumnBuilder from '../ColumnBuilder/ColumnBuilder';
import DateSection from '../DateSection/DateSection';
import FileUploader from '../FileUploader/FileUploader';

const TopPart = function TopPart() {
  const thisTab = getCurrentTab();
  const showUploadPage = useAppSelector(selectShowUploadPage);

  return (
    <S.Container>
      <S.TopInfo>
        <S.TILeftPart>
          <S.TILPTopPart>
            New
            {` ${thisTab} `}
            sheet
          </S.TILPTopPart>
          <DateSection />
        </S.TILeftPart>
        <S.TIRightPart />
      </S.TopInfo>
      <S.InfoBottom>
        { showUploadPage[thisTab]
          ? <FileUploader />
          : <ColumnBuilder /> }
      </S.InfoBottom>
      {/* <S.Line /> */}
    </S.Container>
  );
};

export default TopPart;
