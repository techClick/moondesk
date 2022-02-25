import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactElement } from 'react';
import { RootState } from 'redux/store';
import { DataSheet } from 'types/types';
import { getStorageItem } from 'views/App/utils/utils';

export type ShowPopup = {
  [key: string]: ReactElement | null
  income: ReactElement | null,
  resources: ReactElement | null,
}

export interface AppState {
  showPopup: ShowPopup,
  newIncomeSheet: DataSheet,
}

const initialState: AppState = {
  showPopup: { income: null, resources: null },
  newIncomeSheet: JSON.parse(getStorageItem('new_income') || '[]'),
};

export const counterSlice = createSlice({
  name: 'sheetBuilder',
  initialState,
  reducers: {
    setShowPopup: (state, action: PayloadAction<ShowPopup>) => {
      state.showPopup = action.payload;
    },
    setNewIncomeSheet: (state, action: PayloadAction<DataSheet>) => {
      state.newIncomeSheet = action.payload;
    },
  },
});

export const { setShowPopup, setNewIncomeSheet } = counterSlice.actions;

export const selectShowPopup = (state: RootState) => state.sheetBuilder.showPopup;
export const selectNewIncomeSheet = (state: RootState) => state.sheetBuilder.newIncomeSheet;

export default counterSlice.reducer;
