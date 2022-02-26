import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { InputErrorCB } from 'types/types';

export interface AppState {
  inputError: InputErrorCB,
}

const initialState: AppState = {
  inputError: { source: false, amount: false },
};

export const counterSlice = createSlice({
  name: 'importCols',
  initialState,
  reducers: {
    setInputError: (state, action: PayloadAction<InputErrorCB>) => {
      state.inputError = action.payload;
    },
  },
});

export const { setInputError } = counterSlice.actions;

export const selectInputError = (state: RootState) => state.importCols.inputError;

export default counterSlice.reducer;
