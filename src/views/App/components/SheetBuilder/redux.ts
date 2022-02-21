import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { getStorageItem } from 'views/App/utils/utils';

type ShowUploadPage = {
  [key: string]: boolean | null
  income: boolean | null,
  resources: boolean | null,
}

type NewIncomeSheet = Array<{
  [key: string]: any
  group?: string | null,
  source: string,
  amount: number,
}>
export interface AppState {
  showUploadPage: ShowUploadPage,
  newIncomeSheet: NewIncomeSheet,
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
    setNewIncomeSheet: (state, action: PayloadAction<ShowUploadPage>) => {
      state.showUploadPage = action.payload;
    },
  },
});

export const { setShowUploadPage, setNewIncomeSheet } = counterSlice.actions;

export const selectShowUploadPage = (state: RootState) => state.sheetBuilder.showUploadPage;
export const selectNewIncomeSheet = (state: RootState) => state.sheetBuilder.newIncomeSheet;

export default counterSlice.reducer;
