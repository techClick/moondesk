import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { ShowSheetBuilder, InputError, Sheets, ShowPopup, SelectedSheet, PopupElement } from 'types/types';
import { getImportTypeId, getNewSheetId } from '../utils/GlobalUtils';
import { getCurrentTab, getImportType, getStorageItem, setStorageItem } from '../utils/utils';

export interface AppState {
  inputError: InputError,
  newSheet: Sheets,
  showSheetBuilder: ShowSheetBuilder,
  showPopup: ShowPopup,
  selectedSheet: SelectedSheet,
}

const initialState: AppState = {
  inputError: { source: false, amount: false },
  newSheet: JSON.parse(getStorageItem(getNewSheetId())
    || JSON.stringify([{ date: new Date(), data: [] }])),
  showSheetBuilder: {
    income: JSON.parse(getStorageItem(getNewSheetId()) || '{}').income?.length > 0,
    resources: JSON.parse(getStorageItem(getNewSheetId()) || '{}').resources?.length > 0,
  },
  showPopup: {},
  selectedSheet: { income: 0, resources: 0 },
};

export const counterSlice = createSlice({
  name: 'importCols',
  initialState,
  reducers: {
    setInputError: (state, action: PayloadAction<InputError>) => {
      state.inputError = action.payload;
    },
    setNewSheet: (state, action: PayloadAction<Sheets>) => {
      state.newSheet = action.payload;
    },
    setShowSheetBuilder: (state, action: PayloadAction<boolean>) => {
      setStorageItem(getImportTypeId(), getImportType());
      state.showSheetBuilder = { ...state.showSheetBuilder, [getCurrentTab()]: action.payload };
    },
    setShowPopup: (state, action: PayloadAction<PopupElement | false>) => {
      state.showPopup = { ...state.showPopup, [getCurrentTab()]: action.payload };
    },
    setSelectedSheet: (state, action: PayloadAction<number>) => {
      state.selectedSheet = { ...state.selectedSheet, [getCurrentTab()]: action.payload };
    },
  },
});

export const {
  setInputError, setNewSheet, setShowSheetBuilder, setShowPopup, setSelectedSheet,
} = counterSlice.actions;

export const selectInputError = (state: RootState) => state.importCols.inputError;
export const selectNewSheet = (state: RootState) => state.importCols.newSheet;
export const selectShowSheetBuilder = (state: RootState) => state.importCols.showSheetBuilder;
export const selectShowPopup = (state: RootState) => state.importCols.showPopup;
export const selectSelectedSheet = (state: RootState) => state.importCols.selectedSheet;

export default counterSlice.reducer;
