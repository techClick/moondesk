import React from 'react';
import MediaQuery from 'react-responsive';
import { bigRes, minRes } from 'views/styles';
import * as S from './TablePart.styled';
import Table from './components/Table';

const TablePart = function TablePart() {
  return (
    <>
      <MediaQuery minWidth={bigRes + 0.0001}>
        <S.Container>
          <Table />
        </S.Container>
      </MediaQuery>
      <MediaQuery maxWidth={bigRes} minWidth={minRes + 0.0001}>
        <S.Container>
          <Table />
        </S.Container>
      </MediaQuery>
      <MediaQuery maxWidth={minRes}>
        <S.Container>
          <Table />
        </S.Container>
      </MediaQuery>
    </>
  );
};

export default TablePart;
