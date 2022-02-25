import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataSheet } from 'types/types';
import { RootState } from '../../redux/store';
import { getStorageItem } from './utils/utils';

type ShowSheetBuilder = {
  [key: string]: boolean | null
  income: boolean | null,
  resources: boolean | null,
}
export interface AppState {
  showSheetBuilder: ShowSheetBuilder,
  newIncomeSheet: DataSheet,
}

const initialState: AppState = {
  showSheetBuilder: { income: null, resources: null },
  newIncomeSheet: JSON.parse(getStorageItem('new_income') || '[]'),
};

export const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setShowSheetBuilder: (state, action: PayloadAction<ShowSheetBuilder>) => {
      state.showSheetBuilder = action.payload;
    },
    setNewIncomeSheet: (state, action: PayloadAction<DataSheet>) => {
      state.newIncomeSheet = action.payload;
    },
  },
});

export const { setShowSheetBuilder, setNewIncomeSheet } = counterSlice.actions;

export const selectShowSheetBuilder = (state: RootState) => state.app.showSheetBuilder;
export const selectNewIncomeSheet = (state: RootState) => state.app.newIncomeSheet;

export default counterSlice.reducer;
