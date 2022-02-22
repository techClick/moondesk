import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { DataSheet } from 'types/types';
import { getStorageItem } from 'views/App/utils/utils';

type ShowUploadPage = {
  [key: string]: boolean | null
  income: boolean | null,
  resources: boolean | null,
}

export interface AppState {
  showUploadPage: ShowUploadPage,
  newIncomeSheet: DataSheet,
}

const initialState: AppState = {
  showUploadPage: { income: null, resources: null },
  newIncomeSheet: JSON.parse(getStorageItem('new_income') || '[]'),
};

export const counterSlice = createSlice({
  name: 'sheetBuilder',
  initialState,
  reducers: {
    setShowUploadPage: (state, action: PayloadAction<ShowUploadPage>) => {
      state.showUploadPage = action.payload;
    },
    setNewIncomeSheet: (state, action: PayloadAction<DataSheet>) => {
      state.newIncomeSheet = action.payload;
    },
  },
});

export const { setShowUploadPage, setNewIncomeSheet } = counterSlice.actions;

export const selectShowUploadPage = (state: RootState) => state.sheetBuilder.showUploadPage;
export const selectNewIncomeSheet = (state: RootState) => state.sheetBuilder.newIncomeSheet;

export default counterSlice.reducer;
