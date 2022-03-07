import React, { useEffect, useState } from 'react';
import { Background } from 'views/styles';
import { useAppSelector } from 'redux/hooks';
import { getCurrentTab, getStorageItem } from 'views/App/utils/utils';
import { useDispatch } from 'react-redux';
import { PopupElement } from 'types/types';
import ColumnBuilder from './components/ColumnBuilder/ColumnBuilder';
import ButtonSection from './components/ButtonSection/ButtonSection';
import * as S from './ImportCols.styled';
import DateSection from './components/DateSectionIC/DateSectionIC';
import TopInfo from './components/TopInfo/TopInfo';
import DateInfo from './components/DateInfo/DateInfo';
import SheetBuilder from './components/SheetBuilder/SheetBuilder';
import { selectShowPopup, selectShowSheetBuilder, setShowPopup } from './redux';

const ImportCols = function ImportCols() {
  const showPopup = useAppSelector(selectShowPopup);
  const showSheetBuilder = useAppSelector(selectShowSheetBuilder);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const [showTopInfo, setShowTopInfo] = useState<string>(getStorageItem('shownTopInfo') || 'show');
  const [showDateInfo, setShowDateInfo] = useState<string>(getStorageItem('shownDateInfo') || 'show');
  const thisTab = getCurrentTab();
  const dispatch = useDispatch();

  useEffect(() => {
    setInitialLoad(false);
    dispatch(setShowPopup(false));
  }, []);

  return (
    <>
      {showPopup[thisTab] && !initialLoad
        && (
          <>
            <Background onClick={() => (
              (showPopup[thisTab] as PopupElement).exitOnBgClick && dispatch(setShowPopup(false))
            )}
            />
            {(showPopup[thisTab] as PopupElement).component}
          </>
        )}
      { showSheetBuilder[thisTab] ? (
        <SheetBuilder />
      ) : (
        <S.Container>
          <S.WhiteCard id="importColsWhiteCard">
            <S.Header>Enter corresponding columns</S.Header>
            <S.Padding />
            {showTopInfo === 'show' && <TopInfo closeInfo={() => setShowTopInfo('shown')} />}
            <S.Line />
            <ColumnBuilder />
            {showDateInfo === 'show' && <DateInfo closeInfo={() => setShowDateInfo('shown')} />}
            <S.Header2>{`Set ${thisTab} sheet date(s)`}</S.Header2>
            <DateSection />
            <ButtonSection />
          </S.WhiteCard>
        </S.Container>
      )}
    </>
  );
};

export default ImportCols;
