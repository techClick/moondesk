import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { DataSheet } from 'types/types';
import { getStorageItem } from 'views/App/utils/utils';

type ShowPage = {
  [key: string]: boolean
  income: boolean,
  resources: boolean,
}

type ShowPopup = {
  [key: string]: any
  income: Function | null,
  resources: Function | null,
}

export interface AppState {
  showUploadPage: ShowPage,
  showPopup: ShowPopup,
  newIncomeSheet: DataSheet,
}

const initialState: AppState = {
  showUploadPage: { income: false, resources: false },
  showPopup: { income: null, resources: null },
  newIncomeSheet: JSON.parse(getStorageItem('new_income') || '[]'),
};

export const counterSlice = createSlice({
  name: 'sheetBuilder',
  initialState,
  reducers: {
    setShowUploadPage: (state, action: PayloadAction<ShowPage>) => {
      state.showUploadPage = action.payload;
    },
    setShowPopup: (state, action: PayloadAction<ShowPopup>) => {
      state.showPopup = action.payload;
    },
    setNewIncomeSheet: (state, action: PayloadAction<DataSheet>) => {
      state.newIncomeSheet = action.payload;
    },
  },
});

export const { setShowUploadPage, setShowPopup, setNewIncomeSheet } = counterSlice.actions;

export const selectShowUploadPage = (state: RootState) => state.sheetBuilder.showUploadPage;
export const selectShowPopup = (state: RootState) => state.sheetBuilder.showPopup;
export const selectNewIncomeSheet = (state: RootState) => state.sheetBuilder.newIncomeSheet;

export default counterSlice.reducer;
