import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { InputError, Sheets } from 'types/types';
import { getNewSheetId } from '../utils/GlobalUtils';
import { getStorageItem } from '../utils/utils';

export interface AppState {
  inputError: InputError,
  newSheet: Sheets,
}

const initialState: AppState = {
  inputError: { source: false, amount: false },
  newSheet: JSON.parse(getStorageItem(getNewSheetId()) || '{}'),
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
  },
});

export const { setInputError, setNewSheet } = counterSlice.actions;

export const selectInputError = (state: RootState) => state.importCols.inputError;
export const selectNewSheet = (state: RootState) => state.importCols.newSheet;

export default counterSlice.reducer;
