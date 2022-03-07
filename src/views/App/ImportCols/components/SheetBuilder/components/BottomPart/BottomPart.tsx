import React from 'react';
import MediaQuery from 'react-responsive';
import { bigRes, minRes } from 'views/styles';
import { sheetViewerRes } from 'views/App/styles';
import * as S from './BottomPart.styled';
import Table from './components/Table/Table';
import GrossPart from './components/GrossPart/GrossPart';

const BottomPart = function BottomPart() {
  return (
    <>
      <S.Container>
        <MediaQuery minWidth={bigRes + 0.0001}>
          <Table />
        </MediaQuery>
        <MediaQuery maxWidth={bigRes} minWidth={minRes + 0.0001}>
          <Table />
        </MediaQuery>
        <MediaQuery maxWidth={minRes}>
          <Table />
        </MediaQuery>
      </S.Container>
      <MediaQuery minWidth={sheetViewerRes + 0.0001}>
        <GrossPart />
      </MediaQuery>
      <MediaQuery maxWidth={sheetViewerRes}>
        <GrossPart />
      </MediaQuery>
    </>
  );
};

export default BottomPart;
